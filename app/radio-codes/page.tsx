'use client'

import { useState } from 'react'
import { Radio, Search, Copy, Check, AlertTriangle, Shield, Car, Users, Phone, Clock, MapPin, Zap } from 'lucide-react'

export default function RadioCodesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const tenCodes = [
    { code: '10-0', meaning: 'Use Caution', category: 'General', description: 'Exercise caution in current situation' },
    { code: '10-1', meaning: 'Unable to Copy', category: 'Communication', description: 'Unable to receive or understand transmission' },
    { code: '10-2', meaning: 'Signal Good', category: 'Communication', description: 'Signal strength is good' },
    { code: '10-3', meaning: 'Stop Transmitting', category: 'Communication', description: 'Stop transmitting immediately' },
    { code: '10-4', meaning: 'Acknowledged', category: 'Communication', description: 'Message received and understood' },
    { code: '10-5', meaning: 'Relay', category: 'Communication', description: 'Relay message to another unit' },
    { code: '10-6', meaning: 'Busy', category: 'Status', description: 'Unit is busy, stand by' },
    { code: '10-7', meaning: 'Out of Service', category: 'Status', description: 'Unit is out of service' },
    { code: '10-8', meaning: 'In Service', category: 'Status', description: 'Unit is in service and available' },
    { code: '10-9', meaning: 'Repeat', category: 'Communication', description: 'Repeat last transmission' },
    { code: '10-10', meaning: 'Fight in Progress', category: 'Emergency', description: 'Physical altercation occurring' },
    { code: '10-11', meaning: 'Dog Case', category: 'General', description: 'Animal-related incident' },
    { code: '10-12', meaning: 'Stand By', category: 'Status', description: 'Stand by for further instructions' },
    { code: '10-13', meaning: 'Weather/Road Report', category: 'Information', description: 'Request weather or road conditions' },
    { code: '10-14', meaning: 'Prowler Report', category: 'Criminal', description: 'Suspicious person on property' },
    { code: '10-15', meaning: 'Civil Disturbance', category: 'Emergency', description: 'Large group causing disturbance' },
    { code: '10-16', meaning: 'Domestic Problem', category: 'Emergency', description: 'Domestic violence or dispute' },
    { code: '10-17', meaning: 'Meet Complainant', category: 'General', description: 'Meet with person filing complaint' },
    { code: '10-18', meaning: 'Quickly', category: 'Priority', description: 'Respond with urgency' },
    { code: '10-19', meaning: 'Return to Station', category: 'Status', description: 'Return to headquarters' },
    { code: '10-20', meaning: 'Location', category: 'Information', description: 'What is your location?' },
    { code: '10-21', meaning: 'Call by Phone', category: 'Communication', description: 'Contact by telephone' },
    { code: '10-22', meaning: 'Disregard', category: 'Communication', description: 'Cancel previous message' },
    { code: '10-23', meaning: 'Arrived at Scene', category: 'Status', description: 'Unit has arrived at location' },
    { code: '10-24', meaning: 'Assignment Complete', category: 'Status', description: 'Task has been completed' },
    { code: '10-25', meaning: 'Report to Meet', category: 'General', description: 'Report to meet with someone' },
    { code: '10-26', meaning: 'Detaining Subject', category: 'Criminal', description: 'Subject is being detained' },
    { code: '10-27', meaning: 'Drivers License Info', category: 'Information', description: 'Request driver license information' },
    { code: '10-28', meaning: 'Vehicle Registration', category: 'Information', description: 'Request vehicle registration info' },
    { code: '10-29', meaning: 'Check for Wanted', category: 'Criminal', description: 'Check if subject is wanted' },
    { code: '10-30', meaning: 'Unnecessary Use of Radio', category: 'Violation', description: 'Improper radio usage' },
    { code: '10-31', meaning: 'Crime in Progress', category: 'Criminal', description: 'Criminal activity occurring now' },
    { code: '10-32', meaning: 'Person with Gun', category: 'Emergency', description: 'Subject armed with firearm' },
    { code: '10-33', meaning: 'Emergency Traffic Only', category: 'Emergency', description: 'All units clear radio for emergency' },
    { code: '10-34', meaning: 'Riot', category: 'Emergency', description: 'Large-scale civil disturbance' },
    { code: '10-35', meaning: 'Major Crime Alert', category: 'Criminal', description: 'Serious criminal activity reported' },
    { code: '10-36', meaning: 'Correct Time', category: 'Information', description: 'What is the correct time?' },
    { code: '10-37', meaning: 'Suspicious Vehicle', category: 'Criminal', description: 'Vehicle behaving suspiciously' },
    { code: '10-38', meaning: 'Stopping Suspicious Vehicle', category: 'Criminal', description: 'Stopping vehicle for investigation' },
    { code: '10-39', meaning: 'Urgent', category: 'Priority', description: 'Urgent response required' },
    { code: '10-40', meaning: 'Silent Run', category: 'Tactical', description: 'No lights or sirens' },
    { code: '10-41', meaning: 'Beginning Tour of Duty', category: 'Status', description: 'Starting shift' },
    { code: '10-42', meaning: 'Ending Tour of Duty', category: 'Status', description: 'Ending shift' },
    { code: '10-43', meaning: 'Information', category: 'General', description: 'Request information' },
    { code: '10-44', meaning: 'Permission to Leave', category: 'Status', description: 'Request permission to leave area' },
    { code: '10-45', meaning: 'Animal Carcass', category: 'General', description: 'Dead animal on roadway' },
    { code: '10-46', meaning: 'Assist Motorist', category: 'Service', description: 'Help stranded motorist' },
    { code: '10-47', meaning: 'Emergency Road Repair', category: 'Service', description: 'Road needs immediate repair' },
    { code: '10-48', meaning: 'Traffic Standard Repair', category: 'Service', description: 'Traffic signal needs repair' },
    { code: '10-49', meaning: 'Traffic Light Out', category: 'Service', description: 'Traffic signal not working' },
    { code: '10-50', meaning: 'Accident', category: 'Emergency', description: 'Traffic accident' },
    { code: '10-51', meaning: 'Wrecker Needed', category: 'Service', description: 'Tow truck required' },
    { code: '10-52', meaning: 'Ambulance Needed', category: 'Emergency', description: 'Medical assistance required' },
    { code: '10-53', meaning: 'Road Blocked', category: 'Emergency', description: 'Roadway is blocked', banned: true },
    { code: '10-54', meaning: 'Livestock on Highway', category: 'General', description: 'Animals on roadway' },
    { code: '10-55', meaning: 'Suspicious Person', category: 'Criminal', description: 'Person acting suspiciously', banned: true },
    { code: '10-56', meaning: 'Intoxicated Driver', category: 'Criminal', description: 'Driver under influence' },
    { code: '10-57', meaning: 'Hit and Run', category: 'Criminal', description: 'Vehicle fled accident scene' },
    { code: '10-58', meaning: 'Direct Traffic', category: 'Service', description: 'Direct traffic flow' },
    { code: '10-59', meaning: 'Escort', category: 'Service', description: 'Provide escort service' },
    { code: '10-60', meaning: 'Squad in Vicinity', category: 'Status', description: 'Other unit nearby' },
    { code: '10-61', meaning: 'Personnel in Area', category: 'Status', description: 'Officers in the area' },
    { code: '10-62', meaning: 'Reply to Message', category: 'Communication', description: 'Respond to previous message' },
    { code: '10-63', meaning: 'Prepare to Copy', category: 'Communication', description: 'Ready to receive message' },
    { code: '10-64', meaning: 'Message for Local Delivery', category: 'Communication', description: 'Message for local area only' },
    { code: '10-65', meaning: 'Net Message Assignment', category: 'Communication', description: 'Message for network' },
    { code: '10-66', meaning: 'Message Cancelled', category: 'Communication', description: 'Cancel previous message' },
    { code: '10-67', meaning: 'Clear for Next Message', category: 'Communication', description: 'Ready for next transmission' },
    { code: '10-68', meaning: 'Dispatch Message', category: 'Communication', description: 'Message from dispatch' },
    { code: '10-69', meaning: 'Message Received', category: 'Communication', description: 'Message acknowledged' },
    { code: '10-70', meaning: 'Fire', category: 'Emergency', description: 'Fire reported' },
    { code: '10-71', meaning: 'Advise Nature of Fire', category: 'Emergency', description: 'What type of fire?' },
    { code: '10-72', meaning: 'Report Progress on Fire', category: 'Emergency', description: 'Update on fire situation' },
    { code: '10-73', meaning: 'Smoke Report', category: 'Emergency', description: 'Smoke visible' },
    { code: '10-74', meaning: 'Negative', category: 'Communication', description: 'No or negative response' },
    { code: '10-75', meaning: 'In Contact With', category: 'Status', description: 'Currently in contact with subject' },
    { code: '10-76', meaning: 'En Route', category: 'Status', description: 'On the way to location' },
    { code: '10-77', meaning: 'ETA', category: 'Information', description: 'Estimated time of arrival' },
    { code: '10-78', meaning: 'Need Assistance', category: 'Emergency', description: 'Request backup or help' },
    { code: '10-79', meaning: 'Notify Coroner', category: 'Emergency', description: 'Death reported' },
    { code: '10-80', meaning: 'Chase in Progress', category: 'Criminal', description: 'Vehicle pursuit active' },
    { code: '10-81', meaning: 'Breathalyzer', category: 'Criminal', description: 'Request breath test' },
    { code: '10-82', meaning: 'Reserve Room', category: 'General', description: 'Reserve hotel room' },
    { code: '10-83', meaning: 'Work School Crossing', category: 'Service', description: 'Traffic control at school' },
    { code: '10-84', meaning: 'If Meeting Advise ETA', category: 'Communication', description: 'Provide arrival time if meeting' },
    { code: '10-85', meaning: 'Delayed Due to', category: 'Status', description: 'Delayed for specified reason' },
    { code: '10-86', meaning: 'Officer on Duty', category: 'Status', description: 'Officer is on duty' },
    { code: '10-87', meaning: 'Pick Up', category: 'General', description: 'Pick up item or person' },
    { code: '10-88', meaning: 'Present Telephone Number', category: 'Communication', description: 'Provide phone number' },
    { code: '10-89', meaning: 'Bomb Threat', category: 'Emergency', description: 'Bomb threat reported' },
    { code: '10-90', meaning: 'Bank Alarm', category: 'Emergency', description: 'Bank alarm activated' },
    { code: '10-91', meaning: 'Pick Up Prisoner', category: 'Criminal', description: 'Transport prisoner' },
    { code: '10-92', meaning: 'Improperly Parked Vehicle', category: 'Traffic', description: 'Vehicle parked illegally' },
    { code: '10-93', meaning: 'Blockade', category: 'Tactical', description: 'Establish roadblock' },
    { code: '10-94', meaning: 'Drag Racing', category: 'Criminal', description: 'Illegal street racing' },
    { code: '10-95', meaning: 'Prisoner in Custody', category: 'Criminal', description: 'Subject arrested' },
    { code: '10-96', meaning: 'Mental Subject', category: 'Emergency', description: 'Person with mental health issues' },
    { code: '10-97', meaning: 'Check Point', category: 'Tactical', description: 'Establish checkpoint' },
    { code: '10-98', meaning: 'Prison Break', category: 'Emergency', description: 'Escape from custody' },
    { code: '10-99', meaning: 'Wanted/Stolen', category: 'Criminal', description: 'Wanted person or stolen property' }
  ]

  const signals = [
    { code: 'Signal 1', meaning: 'Officer Down', category: 'Emergency', description: 'Officer injured or killed' },
    { code: 'Signal 2', meaning: 'Officer Needs Help', category: 'Emergency', description: 'Officer requires immediate assistance' },
    { code: 'Signal 3', meaning: 'Officer in Pursuit', category: 'Criminal', description: 'Officer engaged in vehicle chase' },
    { code: 'Signal 4', meaning: 'Officer at Station', category: 'Status', description: 'Officer at headquarters' },
    { code: 'Signal 5', meaning: 'Officer on Patrol', category: 'Status', description: 'Officer conducting patrol' },
    { code: 'Signal 6', meaning: 'Officer Out of Service', category: 'Status', description: 'Officer not available' },
    { code: 'Signal 7', meaning: 'Officer in Service', category: 'Status', description: 'Officer available for calls' },
    { code: 'Signal 8', meaning: 'Officer on Break', category: 'Status', description: 'Officer on meal break' },
    { code: 'Signal 9', meaning: 'Officer at Scene', category: 'Status', description: 'Officer arrived at incident' },
    { code: 'Signal 10', meaning: 'Officer En Route', category: 'Status', description: 'Officer responding to call' }
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

  const allCodes = [
    ...tenCodes.map(code => ({ ...code, type: '10-Code' })),
    ...signals.map(signal => ({ ...signal, type: 'Signal' })),
    ...codes.map(code => ({ ...code, type: 'Code' }))
  ]

  const categories = ['All', 'General', 'Communication', 'Status', 'Emergency', 'Criminal', 'Priority', 'Information', 'Service', 'Tactical', 'Violation', 'Traffic']

  const filteredCodes = allCodes.filter(item => {
    const matchesSearch = item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.meaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case '10-Code': return Radio
      case 'Signal': return Zap
      case 'Code': return Shield
      default: return Radio
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

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search codes, meanings, or descriptions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ccfd7f]/50 focus:border-[#ccfd7f]/50"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg border transition-all duration-300 text-sm font-medium ${
                  selectedCategory === category
                    ? 'bg-[#ccfd7f]/20 border-[#ccfd7f]/50 text-[#ccfd7f]'
                    : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
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
              <h4 className="font-bold text-red-400 mb-2">10-53 - Road Blocked</h4>
              <p className="text-gray-300 text-sm">This code is prohibited in roleplay scenarios</p>
            </div>
            <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/30">
              <h4 className="font-bold text-red-400 mb-2">10-55 - Suspicious Person</h4>
              <p className="text-gray-300 text-sm">This code is prohibited in roleplay scenarios</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
            <Radio className="w-6 h-6 text-[#ccfd7f] mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-white mb-1">{tenCodes.length}</h3>
            <p className="text-gray-300 text-sm">10-Codes</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
            <Zap className="w-6 h-6 text-[#ccfd7f] mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-white mb-1">{signals.length}</h3>
            <p className="text-gray-300 text-sm">Signals</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
            <Shield className="w-6 h-6 text-[#ccfd7f] mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-white mb-1">{codes.length}</h3>
            <p className="text-gray-300 text-sm">Codes</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
            <AlertTriangle className="w-6 h-6 text-red-400 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-red-400 mb-1">2</h3>
            <p className="text-gray-300 text-sm">Banned</p>
          </div>
        </div>

        {/* Codes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCodes.map((item, index) => {
            const IconComponent = getTypeIcon(item.type)
            const isBanned = item.banned
            return (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:shadow-xl ${
                  isBanned 
                    ? 'border-red-500/50 bg-red-500/5' 
                    : 'border-white/20 hover:border-[#ccfd7f]/50 hover:shadow-[#ccfd7f]/10'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      isBanned ? 'bg-red-500/20' : 'bg-[#ccfd7f]/20'
                    }`}>
                      <IconComponent className={`w-5 h-5 ${isBanned ? 'text-red-400' : 'text-[#ccfd7f]'}`} />
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${isBanned ? 'text-red-400' : 'text-white'}`}>
                        {item.code}
                      </h3>
                      <p className="text-sm text-gray-400">{item.type}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(item.code)}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    {copiedCode === item.code ? (
                      <Check className="w-4 h-4 text-[#ccfd7f]" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>

                <div className="mb-4">
                  <h4 className={`text-lg font-semibold mb-2 ${isBanned ? 'text-red-300' : 'text-white'}`}>
                    {item.meaning}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                    {item.category}
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
