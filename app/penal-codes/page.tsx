'use client'

import React, { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { penalCodes } from '@/data/penalCodes'

export default function PenalCodesPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Citation':
        return 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
      case 'Misdemeanor':
        return 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20'
      case 'Felony':
        return 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20'
      default:
        return 'text-gray-600 dark:text-gray-400'
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          Greenville, Wisconsin State Legislation Penal Codes
        </h1>
        
        <div className="mb-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <div className="flex items-center">
            <Copy className="text-blue-600 dark:text-blue-400 mr-3" size={20} />
            <div>
              <h3 className="font-semibold text-blue-800 dark:text-blue-200">Quick Copy Feature</h3>
              <p className="text-blue-700 dark:text-blue-300 text-sm">
                Click the copy button next to any penal code to copy the ticket command: 
                <code className="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded text-xs ml-1">
                  /ticket user: offenses: [code] fine: [amount]
                </code>
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto bg-white dark:bg-gray-900 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-left">
            <thead className="bg-gvro-red dark:bg-gvro-red-dark text-white sticky top-0">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">Penal Code</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Violation</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Type</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Fine</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Jail Time</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Impound</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Copy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 text-gray-900 dark:text-gray-100">
              {penalCodes.map((section, sectionIndex) => (
                <React.Fragment key={sectionIndex}>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <td colSpan={7} className="px-6 py-3 font-bold text-gvro-red dark:text-red-400 text-lg">
                      {section.title}
                    </td>
                  </tr>
                  {section.codes.map((code, codeIndex) => (
                    <tr key={`${sectionIndex}-${codeIndex}`} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 font-mono text-sm text-gray-700 dark:text-gray-300">
                        {code.code}
                      </td>
                      <td className="px-6 py-3 text-sm">
                        {code.meaning}
                      </td>
                      <td className="px-6 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(code.type)}`}>
                          {code.type}
                        </span>
                      </td>
                      <td className="px-6 py-3 text-sm font-medium">
                        {code.fine.includes('|') ? code.fine.split(' | ')[0] : code.fine}
                      </td>
                      <td className="px-6 py-3 text-sm font-medium">
                        {code.fine.includes('|') ? code.fine.split(' | ')[1] : '-'}
                      </td>
                      <td className="px-6 py-3 text-center">
                        <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                          code.impoundment === 'Y' 
                            ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400' 
                            : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                        }`}>
                          {code.impoundment}
                        </span>
                      </td>
                      <td className="px-6 py-3 text-center">
                        <button
                          onClick={() => copyPenalCode(code)}
                          className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 group"
                          title={`Copy ticket command for ${code.code}`}
                        >
                          {copiedCode === code.code ? (
                            <Check size={16} className="text-green-600 dark:text-green-400" />
                          ) : (
                            <Copy size={16} className="text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200" />
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
        
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Citation</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Minor violations typically resolved with fines</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">Misdemeanor</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Moderate offenses with fines and potential jail time</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2">Felony</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Serious crimes with significant penalties</p>
          </div>
        </div>
      </div>
    </div>
  )
}
