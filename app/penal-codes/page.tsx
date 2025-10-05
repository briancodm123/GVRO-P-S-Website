'use client'

import React, { useState } from 'react'
import { Copy, Check, Search, X } from 'lucide-react'
import { penalCodes } from '@/data/penalCodes'

export default function PenalCodesPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Citation':
        return 'text-blue-600 bg-blue-50'
      case 'Misdemeanor':
        return 'text-orange-600 bg-orange-50'
      case 'Felony':
        return 'text-red-600 bg-red-50'
      default:
        return 'text-gray-600 bg-gray-50'
    }
  }

  const copyPenalCode = async (code: any) => {
    // Extract numeric value from fine (remove $ and any non-numeric characters except commas)
    const fineValue = code.fine.replace(/[$|]/g, '').split(' ')[0].replace(/,/g, '')
    const ticketCommand = `/ticket user: offenses: ${code.code} fine: ${fineValue}`
    
    try {
      await navigator.clipboard.writeText(ticketCommand)
      setCopiedCode(code.code)
      setTimeout(() => setCopiedCode(null), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  // Filter penal codes based on search term
  const filteredPenalCodes = penalCodes.map(section => ({
    ...section,
    codes: section.codes.filter(code => 
      code.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      code.meaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
      code.type.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.codes.length > 0)

  const clearSearch = () => {
    setSearchTerm('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
            Greenville, Wisconsin State Legislation Penal Codes
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-blue-200/80 text-lg mt-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive reference for all law enforcement penal codes, fines, and penalties
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="mb-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-white/60" />
            </div>
            <input
              type="text"
              placeholder="Search penal codes, violations, or types..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-12 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 backdrop-blur-sm"
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 pr-4 flex items-center hover:bg-white/10 rounded-r-xl transition-colors duration-200"
              >
                <X className="h-5 w-5 text-white/60 hover:text-white" />
              </button>
            )}
          </div>
          {searchTerm && (
            <div className="mt-3 text-sm text-blue-200/80">
              Found {filteredPenalCodes.reduce((total, section) => total + section.codes.length, 0)} results
            </div>
          )}
        </div>

        <div className="mb-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="flex items-center">
            <div className="p-3 bg-blue-500/20 rounded-xl mr-4">
              <Copy className="text-blue-400" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-white text-xl mb-2">Quick Copy Feature</h3>
              <p className="text-blue-200/90 text-base">
                Click the copy button next to any penal code to copy the ticket command: 
                <code className="bg-white/10 px-3 py-1 rounded-lg text-sm ml-2 font-mono text-blue-300">
                  /ticket user: offenses: [code] fine: [amount]
                </code>
              </p>
            </div>
          </div>
        </div>

        {filteredPenalCodes.length > 0 ? (
          <div className="bg-white/10 backdrop-blur-sm shadow-2xl rounded-2xl border border-white/20 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-red-600/90 to-red-700/90 text-white backdrop-blur-sm">
                    <th className="px-8 py-6 text-left text-sm font-bold uppercase tracking-wider">Penal Code</th>
                    <th className="px-8 py-6 text-left text-sm font-bold uppercase tracking-wider">Violation</th>
                    <th className="px-8 py-6 text-left text-sm font-bold uppercase tracking-wider">Type</th>
                    <th className="px-8 py-6 text-left text-sm font-bold uppercase tracking-wider">Fine</th>
                    <th className="px-8 py-6 text-left text-sm font-bold uppercase tracking-wider">Jail Time</th>
                    <th className="px-8 py-6 text-center text-sm font-bold uppercase tracking-wider">Impound</th>
                    <th className="px-8 py-6 text-center text-sm font-bold uppercase tracking-wider">Copy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {filteredPenalCodes.map((section, sectionIndex) => (
                    <React.Fragment key={sectionIndex}>
                      <tr className="bg-white/5 backdrop-blur-sm">
                        <td colSpan={7} className="px-8 py-6">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-red-500 rounded-full mr-4"></div>
                            <h3 className="font-bold text-white text-xl">{section.title}</h3>
                          </div>
                        </td>
                      </tr>
                      {section.codes.map((code, codeIndex) => (
                        <tr 
                          key={`${sectionIndex}-${codeIndex}`} 
                          className="hover:bg-white/10 transition-all duration-200 group backdrop-blur-sm"
                        >
                          <td className="px-8 py-6">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-white/60 rounded-full mr-3 group-hover:bg-blue-400 transition-colors duration-200"></div>
                              <span className="font-mono text-sm text-white font-semibold">{code.code}</span>
                            </div>
                          </td>
                          <td className="px-8 py-6">
                            <p className="text-sm leading-relaxed text-white/90">{code.meaning}</p>
                          </td>
                          <td className="px-8 py-6">
                            <span className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-bold backdrop-blur-sm ${
                              code.type === 'Citation' ? 'text-blue-300 bg-blue-500/20 border border-blue-400/30' :
                              code.type === 'Misdemeanor' ? 'text-orange-300 bg-orange-500/20 border border-orange-400/30' :
                              code.type === 'Felony' ? 'text-red-300 bg-red-500/20 border border-red-400/30' :
                              'text-gray-300 bg-gray-500/20 border border-gray-400/30'
                            }`}>
                              {code.type}
                            </span>
                          </td>
                          <td className="px-8 py-6">
                            <div className="flex items-center">
                              <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                              </svg>
                              <span className="text-sm font-semibold text-white">
                                {code.fine.includes('|') ? code.fine.split(' | ')[0] : code.fine}
                              </span>
                            </div>
                          </td>
                          <td className="px-8 py-6">
                            <div className="flex items-center">
                              <svg className="w-4 h-4 text-orange-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                              </svg>
                              <span className="text-sm font-semibold text-white">
                                {code.fine.includes('|') ? code.fine.split(' | ')[1] : '-'}
                              </span>
                            </div>
                          </td>
                          <td className="px-8 py-6 text-center">
                            <div className="flex justify-center">
                              <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold shadow-md backdrop-blur-sm ${
                                code.impoundment === 'Y' 
                                  ? 'bg-red-500/20 text-red-300 border-2 border-red-400/30' 
                                  : 'bg-green-500/20 text-green-300 border-2 border-green-400/30'
                              }`}>
                                {code.impoundment}
                              </span>
                            </div>
                          </td>
                          <td className="px-8 py-6 text-center">
                            <button
                              onClick={() => copyPenalCode(code)}
                              className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-200 group hover:scale-110 shadow-md hover:shadow-lg backdrop-blur-sm border border-white/20"
                              title={`Copy ticket command for ${code.code}`}
                            >
                              {copiedCode === code.code ? (
                                <Check size={20} className="text-green-400" />
                              ) : (
                                <Copy size={20} className="text-white/70 group-hover:text-white" />
                              )}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="bg-white/10 backdrop-blur-sm shadow-2xl rounded-2xl border border-white/20 p-12 text-center">
            <div className="p-4 bg-red-500/20 rounded-xl w-fit mx-auto mb-6">
              <Search className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">No Results Found</h3>
            <p className="text-blue-200/80 text-lg mb-6">
              No penal codes match your search for "<span className="text-white font-semibold">{searchTerm}</span>"
            </p>
            <button
              onClick={clearSearch}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 border border-white/20 hover:border-white/30"
            >
              Clear Search
            </button>
          </div>
        )}
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
              <h3 className="font-bold text-blue-600 text-lg">Citation</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">Minor violations typically resolved with fines</p>
          </div>
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 bg-orange-500 rounded-full mr-3"></div>
              <h3 className="font-bold text-orange-600 text-lg">Misdemeanor</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">Moderate offenses with fines and potential jail time</p>
          </div>
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
              <h3 className="font-bold text-red-600 text-lg">Felony</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">Serious crimes with significant penalties</p>
          </div>
        </div>
      </div>
    </div>
  )
}
