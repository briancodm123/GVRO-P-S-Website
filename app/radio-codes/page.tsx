'use client'

import { useState } from 'react'
import { Radio, Copy, Check, AlertTriangle, Shield, Phone } from 'lucide-react'

export default function RadioCodesPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const tenCodes = [
    { code: '10-1', meaning: 'Frequency Change', category: 'Communication', description: 'Change radio frequency' },
    { code: '10-3', meaning: 'Stop Transmitting', category: 'Communication', description: 'Stop transmitting immediately' },
    { code: '10-4', meaning: 'Affirmative', category: 'Communication', description: 'Yes, understood, or OK' },
    { code: '10-5', meaning: 'Meal Break', category: 'Status', description: 'Officer on meal break' },
    { code: '10-6', meaning: 'Busy', category: 'Status', description: 'Unit is busy, stand by' },
    { code: '10-7', meaning: 'Out of Service', category: 'Status', description: 'Unit is out of service' },
    { code: '10-8', meaning: 'In Service', category: 'Status', description: 'Unit is in service and available' },
    { code: '10-9', meaning: 'Repeat', category: 'Communication', description: 'Repeat last transmission' },
    { code: '10-10', meaning: 'Scene ongoing', category: 'Status', description: 'Scene is still active' },
    { code: '10-11', meaning: 'Traffic Stop', category: 'Traffic', description: 'Conducting traffic stop' },
    { code: '10-12', meaning: 'Escort in Progress', category: 'Service', description: 'Providing escort service' },
    { code: '10-13', meaning: 'Disregard', category: 'Communication', description: 'Cancel previous message' },
    { code: '10-14', meaning: 'Welfare Check', category: 'Service', description: 'Check on person\'s welfare' },
    { code: '10-15', meaning: 'Meet at location', category: 'General', description: 'Meet at specified location' },
    { code: '10-16', meaning: 'Estimated Time of Arrival', category: 'Information', description: 'What is your ETA?' },
    { code: '10-17', meaning: 'Suspect Armed', category: 'Emergency', description: 'Subject is armed' },
    { code: '10-20', meaning: 'Location', category: 'Information', description: 'What is your location?' },
    { code: '10-22', meaning: 'Disregard', category: 'Communication', description: 'Cancel previous message' },
    { code: '10-23', meaning: 'Arrived on Scene', category: 'Status', description: 'Unit has arrived at location' },
    { code: '10-24', meaning: 'Not in Use', category: 'Status', description: 'Code not currently used' },
    { code: '10-25', meaning: 'Domestic Dispute', category: 'Emergency', description: 'Domestic violence or dispute' },
    { code: '10-26', meaning: 'Estimated Time of Arrival', category: 'Information', description: 'What is your ETA?' },
    { code: '10-27', meaning: 'Drivers License Check', category: 'Information', description: 'Request driver license information' },
    { code: '10-28', meaning: 'Vehicle License Plate', category: 'Information', description: 'Request vehicle registration info' },
    { code: '10-29', meaning: 'NCIC Warrant Check', category: 'Criminal', description: 'Check if subject is wanted' },
    { code: '10-30', meaning: 'Requesting Service (FD/EMS/DOT)', category: 'Service', description: 'Request fire, EMS, or DOT assistance' },
    { code: '10-31', meaning: 'Not Wanted, No Warrants', category: 'Criminal', description: 'Subject is clear' },
    { code: '10-32', meaning: 'Request Backup', category: 'Emergency', description: 'Need additional units' },
    { code: '10-41', meaning: 'Beginning Tour of Duty', category: 'Status', description: 'Starting shift' },
    { code: '10-42', meaning: 'Ending Tour of Duty', category: 'Status', description: 'Ending shift' },
    { code: '10-43', meaning: 'Status', category: 'Information', description: 'What is your status?' },
    { code: '10-49', meaning: 'Homicide', category: 'Emergency', description: 'Murder reported' },
    { code: '10-50', meaning: 'Motor Vehicle Accident', category: 'Emergency', description: 'Traffic accident' },
    { code: '10-51', meaning: 'Request DOT', category: 'Service', description: 'Request Department of Transportation' },
    { code: '10-52', meaning: 'Vehicle License Plate', category: 'Information', description: 'Request vehicle registration info' },
    { code: '10-53', meaning: 'Request FD', category: 'Service', description: 'Request Fire Department' },
    { code: '10-55', meaning: 'Intoxicated Driver', category: 'Criminal', description: 'Driver under influence', banned: true },
    { code: '10-56', meaning: 'Intoxicated Pedestrian', category: 'Criminal', description: 'Pedestrian under influence' },
    { code: '10-60', meaning: 'Assault by Animal', category: 'Emergency', description: 'Animal attack reported' },
    { code: '10-61', meaning: 'Vehicle Theft', category: 'Criminal', description: 'Stolen vehicle reported' },
    { code: '10-62', meaning: 'Kidnapping', category: 'Emergency', description: 'Abduction reported' },
    { code: '10-64', meaning: 'Sexual Assault', category: 'Emergency', description: 'Sexual assault reported', banned: true },
    { code: '10-65', meaning: 'Armed Robbery', category: 'Emergency', description: 'Robbery with weapon' },
    { code: '10-66', meaning: 'Reckless Driving', category: 'Traffic', description: 'Dangerous driving behavior' },
    { code: '10-67', meaning: 'Fire', category: 'Emergency', description: 'Fire reported' },
    { code: '10-68', meaning: 'Not in Use', category: 'Status', description: 'Code not currently used' },
    { code: '10-70', meaning: 'Foot Pursuit', category: 'Criminal', description: 'Chase on foot' },
    { code: '10-71', meaning: 'Supervisor needed', category: 'Emergency', description: 'Request supervisor' },
    { code: '10-73', meaning: 'Advise Status', category: 'Communication', description: 'Provide current status' },
    { code: '10-81', meaning: 'Active Supervisor', category: 'Status', description: 'Supervisor is active' },
    { code: '10-90', meaning: 'Bank alarm', category: 'Emergency', description: 'Bank alarm activated' },
    { code: '10-93', meaning: 'Warning', category: 'General', description: 'Issue warning' },
    { code: '10-97', meaning: 'En Route', category: 'Status', description: 'On the way to location' },
    { code: '10-99', meaning: 'Officer In Distress', category: 'Emergency', description: 'Officer needs immediate help' },
    { code: '11-99', meaning: 'Officer Down', category: 'Emergency', description: 'Officer injured or killed' },
    { code: '11-44', meaning: 'Person Deceased', category: 'Emergency', description: 'Death reported' }
  ]

  const signals = [
    { code: 'Signal 1', meaning: 'Officer need help', category: 'Emergency', description: 'Officer requires immediate assistance' },
    { code: 'Signal 2', meaning: 'Intoxicated Person', category: 'Criminal', description: 'Person under influence' },
    { code: 'Signal 3', meaning: 'Hit and Run accident', category: 'Criminal', description: 'Vehicle fled accident scene' },
    { code: 'Signal 4', meaning: 'Auto Accident', category: 'Emergency', description: 'Motor vehicle accident' },
    { code: 'Signal 5', meaning: 'Murder / Homicide', category: 'Emergency', description: 'Homicide reported' },
    { code: 'Signal 6', meaning: 'Burglary', category: 'Criminal', description: 'Breaking and entering' },
    { code: 'Signal 7', meaning: 'Armed Robbery', category: 'Emergency', description: 'Robbery with weapon' },
    { code: 'Signal 8', meaning: 'Domestic Disturbance', category: 'Emergency', description: 'Domestic violence or dispute' },
    { code: 'Signal 9', meaning: 'Stolen Vehicle', category: 'Criminal', description: 'Vehicle theft reported' },
    { code: 'Signal 10', meaning: 'Fight In Progress', category: 'Emergency', description: 'Physical altercation occurring' },
    { code: 'Signal 13', meaning: 'Suspicious Person / Vehicle (Specify)', category: 'Criminal', description: 'Suspicious activity reported' },
    { code: 'Signal 15', meaning: 'Narcotics Complaint', category: 'Criminal', description: 'Drug-related incident' },
    { code: 'Signal 20', meaning: 'Mentally Disturbed Person', category: 'Emergency', description: 'Person with mental health issues' },
    { code: 'Signal 25', meaning: 'Fire', category: 'Emergency', description: 'Fire reported' },
    { code: 'Signal 30', meaning: 'Shots Fired', category: 'Emergency', description: 'Gunshots reported' },
    { code: 'Signal 32', meaning: 'Person with a firearm', category: 'Emergency', description: 'Subject armed with firearm' },
    { code: 'Signal 100', meaning: 'Emergency Traffic', category: 'Emergency', description: 'Emergency traffic only - clear radio' }
  ]

  const codes = [
    { code: 'Code 1', meaning: 'Routine Response', category: 'Priority', description: 'No lights or sirens, normal response' },
    { code: 'Code 2', meaning: 'Urgent Response', category: 'Priority', description: 'Lights only, no sirens' },
    { code: 'Code 3', meaning: 'Emergency Response', category: 'Priority', description: 'Lights and sirens, maximum speed' },
    { code: 'Code 4', meaning: 'No Further Assistance', category: 'Status', description: 'Situation under control' },
    { code: 'Code 5', meaning: 'Stakeout', category: 'Tactical', description: 'Undercover surveillance' },
    { code: 'Code 6', meaning: 'Out of Service', category: 'Status', description: 'Unit not available' },
    { code: 'Code 7', meaning: 'Out of Service - Meal', category: 'Status', description: 'On meal break' },
    { code: 'Code 8', meaning: 'Out of Service - Fuel', category: 'Status', description: 'Getting fuel' },
    { code: 'Code 9', meaning: 'Set Up Roadblock', category: 'Tactical', description: 'Establish traffic checkpoint' },
    { code: 'Code 10', meaning: 'Fight in Progress', category: 'Emergency', description: 'Physical altercation' },
    { code: 'Code 11', meaning: 'Dog Case', category: 'General', description: 'Animal-related incident' },
    { code: 'Code 12', meaning: 'Stand By', category: 'Status', description: 'Wait for further instructions' },
    { code: 'Code 13', meaning: 'Weather/Road Report', category: 'Information', description: 'Request conditions' },
    { code: 'Code 14', meaning: 'Prowler Report', category: 'Criminal', description: 'Suspicious person' },
    { code: 'Code 15', meaning: 'Civil Disturbance', category: 'Emergency', description: 'Group disturbance' },
    { code: 'Code 16', meaning: 'Domestic Problem', category: 'Emergency', description: 'Domestic violence' },
    { code: 'Code 17', meaning: 'Meet Complainant', category: 'General', description: 'Meet with complainant' },
    { code: 'Code 18', meaning: 'Quickly', category: 'Priority', description: 'Respond urgently' },
    { code: 'Code 19', meaning: 'Return to Station', category: 'Status', description: 'Return to headquarters' },
    { code: 'Code 20', meaning: 'Location', category: 'Information', description: 'What is your location?' }
  ]

  const phoneticAlphabet = [
    { letter: 'A', phonetic: 'Alpha' },
    { letter: 'B', phonetic: 'Bravo' },
    { letter: 'C', phonetic: 'Charlie' },
    { letter: 'D', phonetic: 'Delta' },
    { letter: 'E', phonetic: 'Echo' },
    { letter: 'F', phonetic: 'Foxtrot' },
    { letter: 'G', phonetic: 'Golf' },
    { letter: 'H', phonetic: 'Hotel' },
    { letter: 'I', phonetic: 'India' },
    { letter: 'J', phonetic: 'Juliet' },
    { letter: 'K', phonetic: 'Kilo' },
    { letter: 'L', phonetic: 'Lima' },
    { letter: 'M', phonetic: 'Mike' },
    { letter: 'N', phonetic: 'November' },
    { letter: 'O', phonetic: 'Oscar' },
    { letter: 'P', phonetic: 'Papa' },
    { letter: 'Q', phonetic: 'Quebec' },
    { letter: 'R', phonetic: 'Romeo' },
    { letter: 'S', phonetic: 'Sierra' },
    { letter: 'T', phonetic: 'Tango' },
    { letter: 'U', phonetic: 'Uniform' },
    { letter: 'V', phonetic: 'Victor' },
    { letter: 'W', phonetic: 'Whisky' },
    { letter: 'X', phonetic: 'X-ray' },
    { letter: 'Y', phonetic: 'Yankee' },
    { letter: 'Z', phonetic: 'Zulu' }
  ]


  const copyToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(code)
      setTimeout(() => setCopiedCode(null), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Emergency': return 'bg-red-500/20 text-red-400 border-red-500/30'
      case 'Criminal': return 'bg-orange-500/20 text-orange-400 border-orange-500/30'
      case 'Priority': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'Communication': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'Status': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'General': return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
      case 'Information': return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
      case 'Service': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
      case 'Tactical': return 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30'
      case 'Violation': return 'bg-pink-500/20 text-pink-400 border-pink-500/30'
      case 'Traffic': return 'bg-amber-500/20 text-amber-400 border-amber-500/30'
      case 'Phonetic': return 'bg-teal-500/20 text-teal-400 border-teal-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  return (
    <div className="min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-5 tracking-tight">
            Radio Codes & Signals
          </h1>
          <div className="w-20 h-1 bg-[#ccfd7f] mx-auto rounded-full"></div>
          <p className="text-gray-300 text-base mt-6 max-w-2xl mx-auto leading-relaxed">
            Comprehensive reference for all radio codes, signals, and 10-codes used by GVRO Public Services
          </p>
        </div>


        {/* Banned Roleplays Notice */}
        <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-6 mb-8">
          <div className="flex items-center space-x-3 mb-3">
            <AlertTriangle className="w-6 h-6 text-red-400" />
            <h3 className="text-lg font-bold text-white">Banned Roleplays</h3>
          </div>
          <p className="text-gray-300 leading-relaxed mb-4">
            The following codes are banned from roleplay scenarios and should not be used:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/30">
              <h4 className="font-bold text-red-400 mb-2">10-55 - Intoxicated Driver</h4>
              <p className="text-gray-300 text-sm">This code is prohibited in roleplay scenarios</p>
            </div>
            <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/30">
              <h4 className="font-bold text-red-400 mb-2">10-64 - Sexual Assault</h4>
              <p className="text-gray-300 text-sm">This code is prohibited in roleplay scenarios</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
            <Shield className="w-6 h-6 text-[#ccfd7f] mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-white mb-1">{codes.length}</h3>
            <p className="text-gray-300 text-sm">Codes</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
            <Radio className="w-6 h-6 text-[#ccfd7f] mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-white mb-1">{tenCodes.length + signals.length}</h3>
            <p className="text-gray-300 text-sm">10-Codes & Signals</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
            <Phone className="w-6 h-6 text-[#ccfd7f] mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-white mb-1">{phoneticAlphabet.length}</h3>
            <p className="text-gray-300 text-sm">Phonetic</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
            <AlertTriangle className="w-6 h-6 text-red-400 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-red-400 mb-1">2</h3>
            <p className="text-gray-300 text-sm">Banned</p>
          </div>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Codes Column */}
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#ccfd7f] mr-2" />
                Codes
              </h2>
              <div className="w-16 h-0.5 bg-[#ccfd7f] mx-auto rounded-full"></div>
            </div>
            <div className="space-y-4">
              {codes.map((code, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-[#ccfd7f]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#ccfd7f]/10"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#ccfd7f]/20">
                        <Shield className="w-4 h-4 text-[#ccfd7f]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{code.code}</h3>
                        <p className="text-sm text-gray-400">Code</p>
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
                  <div className="mb-3">
                    <h4 className="text-lg font-semibold mb-1 text-white">{code.meaning}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{code.description}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(code.category)}`}>
                    {code.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 10-Codes & Signals Column */}
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center justify-center">
                <Radio className="w-6 h-6 text-[#ccfd7f] mr-2" />
                10-Codes & Signals
              </h2>
              <div className="w-16 h-0.5 bg-[#ccfd7f] mx-auto rounded-full"></div>
            </div>
            <div className="space-y-4">
              {/* 10-Codes */}
              {tenCodes.map((code, index) => {
                const isBanned = code.banned
                return (
                  <div
                    key={index}
                    className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 border transition-all duration-300 hover:shadow-xl ${
                      isBanned 
                        ? 'border-red-500/50 bg-red-500/5' 
                        : 'border-white/20 hover:border-[#ccfd7f]/50 hover:shadow-[#ccfd7f]/10'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          isBanned ? 'bg-red-500/20' : 'bg-[#ccfd7f]/20'
                        }`}>
                          <Radio className={`w-4 h-4 ${isBanned ? 'text-red-400' : 'text-[#ccfd7f]'}`} />
                        </div>
                        <div>
                          <h3 className={`text-lg font-bold ${isBanned ? 'text-red-400' : 'text-white'}`}>
                            {code.code}
                          </h3>
                          <p className="text-sm text-gray-400">10-Code</p>
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
                    <div className="mb-3">
                      <h4 className={`text-lg font-semibold mb-1 ${isBanned ? 'text-red-300' : 'text-white'}`}>
                        {code.meaning}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{code.description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(code.category)}`}>
                        {code.category}
                      </span>
                      {isBanned && (
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-400 border border-red-500/30">
                          BANNED
                        </span>
                      )}
                    </div>
                  </div>
                )
              })}
              
              {/* Signals */}
              {signals.map((signal, index) => (
                <div
                  key={`signal-${index}`}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-[#ccfd7f]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#ccfd7f]/10"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#ccfd7f]/20">
                        <Radio className="w-4 h-4 text-[#ccfd7f]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{signal.code}</h3>
                        <p className="text-sm text-gray-400">Signal</p>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(signal.code)}
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      {copiedCode === signal.code ? (
                        <Check className="w-4 h-4 text-[#ccfd7f]" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                  <div className="mb-3">
                    <h4 className="text-lg font-semibold mb-1 text-white">{signal.meaning}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{signal.description}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(signal.category)}`}>
                    {signal.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* NATO Phonetic Alphabet Column */}
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center justify-center">
                <Phone className="w-6 h-6 text-[#ccfd7f] mr-2" />
                NATO Phonetic
              </h2>
              <div className="w-16 h-0.5 bg-[#ccfd7f] mx-auto rounded-full"></div>
            </div>
            <div className="space-y-4">
              {phoneticAlphabet.map((letter, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-[#ccfd7f]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#ccfd7f]/10"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#ccfd7f]/20">
                        <Phone className="w-4 h-4 text-[#ccfd7f]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{letter.letter}</h3>
                        <p className="text-sm text-gray-400">Phonetic</p>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(letter.letter)}
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      {copiedCode === letter.letter ? (
                        <Check className="w-4 h-4 text-[#ccfd7f]" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                  <div className="mb-3">
                    <h4 className="text-lg font-semibold mb-1 text-white">{letter.phonetic}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      NATO phonetic alphabet for letter {letter.letter}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-teal-500/20 text-teal-400 border border-teal-500/30">
                    Phonetic
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Notice */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-6 h-6 text-[#ccfd7f]" />
            <h3 className="text-xl font-bold text-white">Important Notice</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            These radio codes are for official GVRO Public Services use only. Unauthorized use or misuse of these codes 
            may result in disciplinary action. Always follow proper radio etiquette and procedures when communicating.
          </p>
        </div>
      </div>
    </div>
  )
}
