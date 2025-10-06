'use client'

import { useState } from 'react'
import { Search, Copy, Filter, AlertTriangle, DollarSign, Clock, Car, Scale, Eye, EyeOff } from 'lucide-react'
import { penalCodes } from '../../data/penalCodes'

export default function PenalCodesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState<string>('All')
  const [showImpoundOnly, setShowImpoundOnly] = useState(false)
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Citation': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'Misdemeanor': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'Felony': return 'bg-red-500/20 text-red-400 border-red-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const copyToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(code)
      setTimeout(() => setCopiedCode(null), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const filteredCodes = penalCodes.flatMap(section => 
    section.codes.filter(code => {
      const matchesSearch = code.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           code.meaning.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesType = selectedType === 'All' || code.type === selectedType
      const matchesImpound = !showImpoundOnly || code.impoundment === 'Y'
      return matchesSearch && matchesType && matchesImpound
    }).map(code => ({ ...code, section: section.title }))
  )

  const typeOptions = ['All', 'Citation', 'Misdemeanor', 'Felony']

  return (
    <div className="min-h-screen text-white py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
            Penal Codes
          </h1>
          <div className="w-24 h-1 bg-[#ccfd7f] mx-auto rounded-full"></div>
          <p className="text-gray-300 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
            Comprehensive database of Greenville Roleplay Operations penal codes and violations
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Search Input */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search codes or descriptions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ccfd7f]/50 focus:border-[#ccfd7f]/50 text-lg"
                />
              </div>
            </div>

            {/* Type Filter */}
            <div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-[#ccfd7f]/50 focus:border-[#ccfd7f]/50 text-lg"
              >
                {typeOptions.map(type => (
                  <option key={type} value={type} className="bg-slate-800 text-white">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Impound Filter */}
            <div className="flex items-center">
              <button
                onClick={() => setShowImpoundOnly(!showImpoundOnly)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-2xl border transition-all duration-300 text-lg ${
                  showImpoundOnly 
                    ? 'bg-[#ccfd7f]/20 border-[#ccfd7f]/50 text-[#ccfd7f]' 
                    : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
                }`}
              >
                {showImpoundOnly ? <Eye className="w-6 h-6" /> : <EyeOff className="w-6 h-6" />}
                <span className="font-medium">Impound Only</span>
              </button>
            </div>
          </div>

          {/* Results Counter */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-gray-400 text-lg">
              Showing {filteredCodes.length} of {penalCodes.flatMap(s => s.codes).length} codes
            </p>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-[#ccfd7f] hover:text-[#b8e85c] text-lg font-medium transition-colors"
              >
                Clear Search
              </button>
            )}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <Scale className="w-8 h-8 text-[#ccfd7f] mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white mb-1">{penalCodes.length}</h3>
            <p className="text-gray-300 text-sm">Sections</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <AlertTriangle className="w-8 h-8 text-[#ccfd7f] mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white mb-1">{penalCodes.flatMap(s => s.codes).length}</h3>
            <p className="text-gray-300 text-sm">Total Codes</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <Car className="w-8 h-8 text-[#ccfd7f] mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white mb-1">{penalCodes.flatMap(s => s.codes).filter(c => c.impoundment === 'Y').length}</h3>
            <p className="text-gray-300 text-sm">Impoundable</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <DollarSign className="w-8 h-8 text-[#ccfd7f] mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white mb-1">$50-$10K</h3>
            <p className="text-gray-300 text-sm">Fine Range</p>
          </div>
        </div>

        {/* Codes Table */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-8 py-6 text-left text-lg font-semibold text-white">Code</th>
                  <th className="px-8 py-6 text-left text-lg font-semibold text-white">Description</th>
                  <th className="px-8 py-6 text-center text-lg font-semibold text-white">Type</th>
                  <th className="px-8 py-6 text-center text-lg font-semibold text-white">Fine</th>
                  <th className="px-8 py-6 text-center text-lg font-semibold text-white">Impound</th>
                  <th className="px-8 py-6 text-center text-lg font-semibold text-white">Section</th>
                  <th className="px-8 py-6 text-center text-lg font-semibold text-white">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCodes.length > 0 ? (
                  filteredCodes.map((code, index) => (
                    <tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="px-8 py-6">
                        <code className="text-[#ccfd7f] font-mono text-lg bg-white/10 px-4 py-2 rounded-lg">
                          {code.code}
                        </code>
                      </td>
                      <td className="px-8 py-6 text-gray-300 text-lg max-w-md">
                        {code.meaning}
                      </td>
                      <td className="px-8 py-6 text-center">
                        <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border ${getTypeColor(code.type)}`}>
                          {code.type}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-center text-gray-300 text-lg">
                        <div className="flex items-center justify-center space-x-2">
                          <DollarSign className="w-5 h-5 text-green-400" />
                          <span>{code.fine}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-center">
                        {code.impoundment === 'Y' ? (
                          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-red-500/20 text-red-400 border border-red-500/30">
                            Yes
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-500/20 text-gray-400 border border-gray-500/30">
                            No
                          </span>
                        )}
                      </td>
                      <td className="px-8 py-6 text-center text-gray-400 text-sm">
                        {code.section}
                      </td>
                      <td className="px-8 py-6 text-center">
                        <button
                          onClick={() => copyToClipboard(code.code)}
                          className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                            copiedCode === code.code
                              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                              : 'bg-white/10 text-gray-300 border border-white/20 hover:bg-white/20'
                          }`}
                        >
                          <Copy className="w-4 h-4" />
                          <span>{copiedCode === code.code ? 'Copied!' : 'Copy'}</span>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="px-8 py-16 text-center text-gray-400">
                      <div className="flex flex-col items-center space-y-4">
                        <Search className="w-16 h-16 text-gray-500" />
                        <p className="text-2xl font-medium">No codes found</p>
                        <p className="text-lg">Try adjusting your search terms or filters</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Copy Section */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <div className="w-4 h-4 rounded-full bg-[#ccfd7f] mr-4 shadow-lg"></div>
            Quick Copy Common Codes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'GV § 346.57(5)',
              'GV § 346.63(1)', 
              'GV § 346.10',
              'GV § 343.05'
            ].map((code, index) => (
              <button
                key={index}
                onClick={() => copyToClipboard(code)}
                className="flex items-center justify-center space-x-3 px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-lg font-medium text-gray-300 hover:text-white transition-all duration-300"
              >
                <Copy className="w-5 h-5" />
                <span>{code}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}