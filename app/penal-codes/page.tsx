'use client'

import { useState } from 'react'
import { Search, Copy, Check, AlertTriangle, DollarSign, Clock, Car, Scale, Eye, EyeOff, ChevronDown, ChevronUp, BookOpen, Gavel } from 'lucide-react'
import { penalCodes } from '../../data/penalCodes'

export default function PenalCodesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState<string>('All')
  const [showImpoundOnly, setShowImpoundOnly] = useState(false)
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})

  // Initialize all sections as expanded
  useState(() => {
    const initialExpanded: Record<string, boolean> = {}
    penalCodes.forEach(section => {
      initialExpanded[section.title] = true
    })
    setExpandedSections(initialExpanded)
  })

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Citation': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'Misdemeanor': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'Felony': return 'bg-red-500/20 text-red-400 border-red-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Citation': return AlertTriangle
      case 'Misdemeanor': return Scale
      case 'Felony': return Gavel
      default: return AlertTriangle
    }
  }

  const getSectionColor = (index: number) => {
    const colors = [
      'from-blue-500/20 to-blue-600/20',
      'from-green-500/20 to-green-600/20',
      'from-purple-500/20 to-purple-600/20',
      'from-orange-500/20 to-orange-600/20',
      'from-pink-500/20 to-pink-600/20',
      'from-cyan-500/20 to-cyan-600/20',
      'from-indigo-500/20 to-indigo-600/20',
      'from-teal-500/20 to-teal-600/20'
    ]
    return colors[index % colors.length]
  }

  const getSectionBorderColor = (index: number) => {
    const colors = [
      'border-blue-500/30',
      'border-green-500/30',
      'border-purple-500/30',
      'border-orange-500/30',
      'border-pink-500/30',
      'border-cyan-500/30',
      'border-indigo-500/30',
      'border-teal-500/30'
    ]
    return colors[index % colors.length]
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

  const toggleSection = (sectionName: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }))
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
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#ccfd7f]/20 to-[#ccfd7f]/10 rounded-2xl mb-6 border border-[#ccfd7f]/30">
            <Scale className="w-10 h-10 text-[#ccfd7f]" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            Penal Codes
        </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ccfd7f] to-[#b8e85c] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Comprehensive database of Greenville Roleplay Operations penal codes and violations
              </p>
            </div>

        {/* Search and Filter Controls */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Search Input */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search codes or descriptions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ccfd7f]/50 focus:border-[#ccfd7f]/50 text-sm"
                />
              </div>
            </div>

            {/* Type Filter */}
            <div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#ccfd7f]/50 focus:border-[#ccfd7f]/50 text-sm"
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
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl border transition-all duration-300 text-sm font-medium ${
                  showImpoundOnly 
                    ? 'bg-[#ccfd7f]/20 border-[#ccfd7f]/50 text-[#ccfd7f]' 
                    : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
                }`}
              >
                {showImpoundOnly ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                <span>Impound Only</span>
              </button>
            </div>
          </div>

          {/* Results Counter */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-gray-400 text-sm">
              Showing {filteredCodes.length} of {penalCodes.flatMap(s => s.codes).length} codes
            </p>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-[#ccfd7f] hover:text-[#b8e85c] text-sm font-medium transition-colors px-4 py-2 rounded-lg hover:bg-[#ccfd7f]/10"
              >
                Clear Search
              </button>
            )}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30 text-center hover:scale-105 transition-transform">
            <Scale className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-white mb-2">{penalCodes.length}</h3>
            <p className="text-gray-300 text-sm font-medium">Sections</p>
          </div>
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30 text-center hover:scale-105 transition-transform">
            <AlertTriangle className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-white mb-2">{penalCodes.flatMap(s => s.codes).length}</h3>
            <p className="text-gray-300 text-sm font-medium">Total Codes</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/30 text-center hover:scale-105 transition-transform">
            <Car className="w-8 h-8 text-orange-400 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-white mb-2">{penalCodes.flatMap(s => s.codes).filter(c => c.impoundment === 'Y').length}</h3>
            <p className="text-gray-300 text-sm font-medium">Impoundable</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 text-center hover:scale-105 transition-transform">
            <DollarSign className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-white mb-2">$50-$10K</h3>
            <p className="text-gray-300 text-sm font-medium">Fine Range</p>
          </div>
        </div>

        {/* Organized Sections */}
        <div className="space-y-8">
          {penalCodes.map((section, sectionIndex) => {
            const sectionCodes = section.codes.filter(code => {
              const matchesSearch = code.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                   code.meaning.toLowerCase().includes(searchTerm.toLowerCase())
              const matchesType = selectedType === 'All' || code.type === selectedType
              const matchesImpound = !showImpoundOnly || code.impoundment === 'Y'
              return matchesSearch && matchesType && matchesImpound
            })

            if (sectionCodes.length === 0) return null

            const isExpanded = expandedSections[section.title] ?? true
            const sectionColor = getSectionColor(sectionIndex)
            const borderColor = getSectionBorderColor(sectionIndex)

            return (
              <div key={sectionIndex} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(section.title)}
                  className={`w-full p-6 bg-gradient-to-r ${sectionColor} border-b ${borderColor} hover:bg-opacity-80 transition-all duration-300`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                        <p className="text-gray-300 text-sm">{sectionCodes.length} codes</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-lg">
                        {sectionCodes.length}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-6 h-6 text-white" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-white" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Section Content */}
                {isExpanded && (
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {sectionCodes.map((code, codeIndex) => {
                        const TypeIcon = getTypeIcon(code.type)
                        
                        return (
                          <div
                            key={codeIndex}
                            className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:border-[#ccfd7f]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#ccfd7f]/20 hover:scale-105"
                          >
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#ccfd7f]/20">
                                  <TypeIcon className="w-5 h-5 text-[#ccfd7f]" />
                                </div>
                                <div>
                                  <h3 className="text-lg font-bold text-white">
                        {code.code}
                                  </h3>
                                  <p className="text-sm text-gray-400">{code.type}</p>
                                </div>
                              </div>
                        <button
                                onClick={() => copyToClipboard(code.code)}
                                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                        >
                          {copiedCode === code.code ? (
                                  <Check className="w-4 h-4 text-[#ccfd7f]" />
                          ) : (
                                  <Copy className="w-4 h-4 text-gray-400" />
                          )}
                        </button>
                            </div>
                            <div className="mb-4">
                              <h4 className="text-lg font-semibold mb-2 text-white">
                                {code.meaning}
                              </h4>
                            </div>
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-400">Fine:</span>
                                <div className="flex items-center space-x-1.5">
                                  <DollarSign className="w-4 h-4 text-green-400" />
                                  <span className="text-white font-medium">{code.fine}</span>
                                </div>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-400">Impound:</span>
                                {code.impoundment === 'Y' ? (
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-400 border border-red-500/30">
                                    Yes
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-500/20 text-gray-400 border border-gray-500/30">
                                    No
                                  </span>
                                )}
                              </div>
                              <div className="pt-2">
                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(code.type)}`}>
                                  {code.type}
                                </span>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
        
        {/* No Results */}
        {filteredCodes.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">No codes found</h3>
            <p className="text-gray-400 text-lg mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedType('All')
                setShowImpoundOnly(false)
              }}
              className="px-6 py-3 bg-[#ccfd7f]/20 text-[#ccfd7f] rounded-xl hover:bg-[#ccfd7f]/30 transition-colors font-medium"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Quick Copy Section */}
        <div className="mt-12 bg-gradient-to-r from-[#ccfd7f]/10 to-[#b8e85c]/10 backdrop-blur-sm rounded-2xl p-8 border border-[#ccfd7f]/30">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <div className="w-3 h-3 rounded-full bg-[#ccfd7f] mr-3 shadow-lg"></div>
            Quick Copy Common Codes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'GV § 346.57(5)',
              'GV § 346.63(1)', 
              'GV § 346.10',
              'GV § 346.15(1)',
              'GV § 346.20(1)',
              'GV § 346.25(1)',
              'GV § 346.30(1)',
              'GV § 346.35(1)'
            ].map((code, index) => (
              <button
                key={index}
                onClick={() => copyToClipboard(code)}
                className="p-4 bg-white/10 hover:bg-white/20 rounded-xl border border-white/20 hover:border-[#ccfd7f]/50 transition-all duration-300 text-left group"
              >
                <div className="flex items-center justify-between">
                  <code className="text-[#ccfd7f] font-mono text-sm">{code}</code>
                  {copiedCode === code ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-400 group-hover:text-[#ccfd7f] transition-colors" />
                  )}
          </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
