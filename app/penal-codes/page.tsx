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
    <div className="min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-5 tracking-tight">
            Penal Codes
        </h1>
          <div className="w-20 h-1 bg-[#ccfd7f] mx-auto rounded-full"></div>
          <p className="text-gray-300 text-base mt-6 max-w-2xl mx-auto leading-relaxed">
            Comprehensive database of Greenville Roleplay Operations penal codes and violations
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search Input */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search codes or descriptions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ccfd7f]/50 focus:border-[#ccfd7f]/50 text-sm"
                />
              </div>
            </div>

            {/* Type Filter */}
            <div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#ccfd7f]/50 focus:border-[#ccfd7f]/50 text-sm"
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
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl border transition-all duration-300 text-sm ${
                  showImpoundOnly 
                    ? 'bg-[#ccfd7f]/20 border-[#ccfd7f]/50 text-[#ccfd7f]' 
                    : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
                }`}
              >
                {showImpoundOnly ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                <span className="font-medium">Impound Only</span>
              </button>
            </div>
          </div>

          {/* Results Counter */}
          <div className="mt-5 flex items-center justify-between">
            <p className="text-gray-400 text-sm">
              Showing {filteredCodes.length} of {penalCodes.flatMap(s => s.codes).length} codes
            </p>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-[#ccfd7f] hover:text-[#b8e85c] text-sm font-medium transition-colors"
              >
                Clear Search
              </button>
            )}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
            <Scale className="w-6 h-6 text-[#ccfd7f] mx-auto mb-2" />
            <h3 className="text-xl font-bold text-white mb-1">{penalCodes.length}</h3>
            <p className="text-gray-300 text-xs">Sections</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
            <AlertTriangle className="w-6 h-6 text-[#ccfd7f] mx-auto mb-2" />
            <h3 className="text-xl font-bold text-white mb-1">{penalCodes.flatMap(s => s.codes).length}</h3>
            <p className="text-gray-300 text-xs">Total Codes</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
            <Car className="w-6 h-6 text-[#ccfd7f] mx-auto mb-2" />
            <h3 className="text-xl font-bold text-white mb-1">{penalCodes.flatMap(s => s.codes).filter(c => c.impoundment === 'Y').length}</h3>
            <p className="text-gray-300 text-xs">Impoundable</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
            <DollarSign className="w-6 h-6 text-[#ccfd7f] mx-auto mb-2" />
            <h3 className="text-xl font-bold text-white mb-1">$50-$10K</h3>
            <p className="text-gray-300 text-xs">Fine Range</p>
          </div>
        </div>

        {/* Codes Table */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-5 py-4 text-left text-sm font-semibold text-white">Code</th>
                  <th className="px-5 py-4 text-left text-sm font-semibold text-white">Description</th>
                  <th className="px-5 py-4 text-center text-sm font-semibold text-white">Type</th>
                  <th className="px-5 py-4 text-center text-sm font-semibold text-white">Fine</th>
                  <th className="px-5 py-4 text-center text-sm font-semibold text-white">Impound</th>
                  <th className="px-5 py-4 text-center text-sm font-semibold text-white">Section</th>
                  <th className="px-5 py-4 text-center text-sm font-semibold text-white">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCodes.length > 0 ? (
                  filteredCodes.map((code, index) => (
                    <tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="px-5 py-4">
                        <code className="text-[#ccfd7f] font-mono text-sm bg-white/10 px-3 py-1.5 rounded-lg">
                          {code.code}
                        </code>
                      </td>
                      <td className="px-5 py-4 text-gray-300 text-sm max-w-md">
                        {code.meaning}
                      </td>
                      <td className="px-5 py-4 text-center">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(code.type)}`}>
                          {code.type}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-center text-gray-300 text-sm">
                        <div className="flex items-center justify-center space-x-1.5">
                          <DollarSign className="w-4 h-4 text-green-400" />
                          <span>{code.fine}</span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-center">
                        {code.impoundment === 'Y' ? (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-400 border border-red-500/30">
                            Yes
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-500/20 text-gray-400 border border-gray-500/30">
                            No
                          </span>
                        )}
                      </td>
                      <td className="px-5 py-4 text-center text-gray-400 text-xs">
                        {code.section}
                      </td>
                      <td className="px-5 py-4 text-center">
                        <button
                          onClick={() => copyToClipboard(code.code)}
                          className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                            copiedCode === code.code
                              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                              : 'bg-white/10 text-gray-300 border border-white/20 hover:bg-white/20'
                          }`}
                        >
                          <Copy className="w-3.5 h-3.5" />
                          <span>{copiedCode === code.code ? 'Copied!' : 'Copy'}</span>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="px-5 py-12 text-center text-gray-400">
                      <div className="flex flex-col items-center space-y-3">
                        <Search className="w-12 h-12 text-gray-500" />
                        <p className="text-lg font-medium">No codes found</p>
                        <p className="text-sm">Try adjusting your search terms or filters</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Quick Copy Section */}
        <div className="mt-10 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h3 className="text-lg font-bold text-white mb-5 flex items-center">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ccfd7f] mr-3 shadow-lg"></div>
            Quick Copy Common Codes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              'GV § 346.57(5)',
              'GV § 346.63(1)', 
              'GV § 346.10',
              'GV § 343.05'
            ].map((code, index) => (
              <button
                key={index}
                onClick={() => copyToClipboard(code)}
                className="flex items-center justify-center space-x-2 px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-all duration-300"
              >
                <Copy className="w-4 h-4" />
                <span>{code}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}