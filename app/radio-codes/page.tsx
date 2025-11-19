'use client'

import { useState } from 'react'
import { Radio, Copy, Check, AlertTriangle, Shield, Phone, Search, Filter, Zap, BookOpen, ChevronDown, ChevronUp } from 'lucide-react'

export default function RadioCodesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState<string>('All')
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'Response Codes': true,
    '10-Codes': true,
    'Signals': true,
    'NATO Phonetic': true
  })

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
    { code: 'Signal 2', meaning: 'Intoxicated Person', category: 'Criminal', description: 'Person under influence', banned: true },
    { code: 'Signal 3', meaning: 'Hit and Run accident', category: 'Criminal', description: 'Vehicle fled accident scene' },
    { code: 'Signal 4', meaning: 'Auto Accident', category: 'Emergency', description: 'Motor vehicle accident' },
    { code: 'Signal 5', meaning: 'Murder / Homicide', category: 'Emergency', description: 'Homicide reported' },
    { code: 'Signal 6', meaning: 'Burglary', category: 'Criminal', description: 'Breaking and entering' },
    { code: 'Signal 7', meaning: 'Armed Robbery', category: 'Emergency', description: 'Robbery with weapon' },
    { code: 'Signal 8', meaning: 'Domestic Disturbance', category: 'Emergency', description: 'Domestic violence or dispute' },
    { code: 'Signal 9', meaning: 'Stolen Vehicle', category: 'Criminal', description: 'Vehicle theft reported' },
    { code: 'Signal 10', meaning: 'Fight In Progress', category: 'Emergency', description: 'Physical altercation occurring' },
    { code: 'Signal 11', meaning: 'Running Radar', category: 'Emergency', description: 'Radar is running' },
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
    { code: 'Code 4', meaning: 'No Further Action', category: 'Status', description: 'No additional response needed' },
    { code: 'Code 5', meaning: 'Felony Stop', category: 'Tactical', description: 'Felony/High-Risk Stop' },
    { code: 'Code 6', meaning: 'Out of Service', category: 'Status', description: 'Unit not available' },
    { code: 'Code 7', meaning: 'Meal Break', category: 'Status', description: 'Officer on break' },
    { code: 'Code 8', meaning: 'In Service', category: 'Status', description: 'Unit available for calls' }
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

  const toggleSection = (sectionName: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }))
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Code': return Shield
      case '10-Code': return Radio
      case 'Signal': return Zap
      case 'Phonetic': return Phone
      default: return Radio
    }
  }

  const typeOptions = ['All', 'Code', '10-Code', 'Signal', 'Phonetic']

  // Organize all codes into sections
  const radioSections = [
    {
      title: 'Response Codes',
      icon: Shield,
      color: 'from-blue-500/20 to-blue-600/20',
      borderColor: 'border-blue-500/30',
      codes: codes.map(code => ({ ...code, type: 'Code', section: 'Response Codes' }))
    },
    {
      title: '10-Codes',
      icon: Radio,
      color: 'from-green-500/20 to-green-600/20',
      borderColor: 'border-green-500/30',
      codes: tenCodes.map(code => ({ ...code, type: '10-Code', section: '10-Codes' }))
    },
    {
      title: 'Signals',
      icon: Zap,
      color: 'from-purple-500/20 to-purple-600/20',
      borderColor: 'border-purple-500/30',
      codes: signals.map(signal => ({ ...signal, type: 'Signal', section: 'Signals' }))
    },
    {
      title: 'NATO Phonetic',
      icon: Phone,
      color: 'from-teal-500/20 to-teal-600/20',
      borderColor: 'border-teal-500/30',
      codes: phoneticAlphabet.map(letter => ({ 
        code: letter.letter, 
        meaning: letter.phonetic, 
        category: 'Phonetic', 
        description: `NATO phonetic alphabet for letter ${letter.letter}`,
        type: 'Phonetic',
        section: 'NATO Phonetic'
      }))
    }
  ]

  const filteredCodes = radioSections.flatMap(section => 
    section.codes.filter(code => {
      const matchesSearch = code.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           code.meaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           code.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesType = selectedType === 'All' || code.type === selectedType
      return matchesSearch && matchesType
    })
  )

  return (
    <div className="min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#ccfd7f]/20 to-[#ccfd7f]/10 rounded-2xl mb-6 border border-[#ccfd7f]/30">
            <Radio className="w-10 h-10 text-[#ccfd7f]" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            Radio Codes
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ccfd7f] to-[#b8e85c] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Comprehensive reference for all radio codes, signals, and 10-codes used by GVRO Public Affairs
          </p>
        </div>

        {/* Banned Roleplays Notice */}
        <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/50 rounded-2xl p-8 mb-10 backdrop-blur-sm">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Banned Roleplays</h3>
          </div>
          <p className="text-gray-300 leading-relaxed mb-6 text-lg">
            The following codes are banned from roleplay scenarios and should not be used:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30 hover:bg-red-500/15 transition-colors">
              <h4 className="font-bold text-red-400 mb-2 text-lg">10-55 - Intoxicated Driver</h4>
              <p className="text-gray-300 text-sm">This code is prohibited in roleplay scenarios</p>
            </div>
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30 hover:bg-red-500/15 transition-colors">
              <h4 className="font-bold text-red-400 mb-2 text-lg">10-64 - Sexual Assault</h4>
              <p className="text-gray-300 text-sm">This code is prohibited in roleplay scenarios</p>
            </div>
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30 hover:bg-red-500/15 transition-colors">
              <h4 className="font-bold text-red-400 mb-2 text-lg">Signal 2 - Intoxicated Person</h4>
              <p className="text-gray-300 text-sm">This signal is prohibited in roleplay scenarios</p>
            </div>
          </div>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search Input */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search codes, signals, or descriptions..."
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
          </div>

          {/* Results Counter */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-gray-400 text-sm">
              Showing {filteredCodes.length} of {radioSections.flatMap(s => s.codes).length} codes
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
            <Shield className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-white mb-2">{radioSections.length}</h3>
            <p className="text-gray-300 text-sm font-medium">Sections</p>
          </div>
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30 text-center hover:scale-105 transition-transform">
            <Radio className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-white mb-2">{radioSections.flatMap(s => s.codes).length}</h3>
            <p className="text-gray-300 text-sm font-medium">Total Codes</p>
          </div>
          <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-6 border border-red-500/30 text-center hover:scale-105 transition-transform">
            <AlertTriangle className="w-8 h-8 text-red-400 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-red-400 mb-2">3</h3>
            <p className="text-gray-300 text-sm font-medium">Banned</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 text-center hover:scale-105 transition-transform">
            <BookOpen className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-white mb-2">4</h3>
            <p className="text-gray-300 text-sm font-medium">Categories</p>
          </div>
        </div>

        {/* Organized Sections */}
        <div className="space-y-8">
          {radioSections.map((section, sectionIndex) => {
            const sectionCodes = section.codes.filter(code => {
              const matchesSearch = code.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                   code.meaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                   code.description.toLowerCase().includes(searchTerm.toLowerCase())
              const matchesType = selectedType === 'All' || code.type === selectedType
              return matchesSearch && matchesType
            })

            if (sectionCodes.length === 0) return null

            const isExpanded = expandedSections[section.title]
            const IconComponent = section.icon

            return (
              <div key={sectionIndex} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(section.title)}
                  className={`w-full p-6 bg-gradient-to-r ${section.color} border-b ${section.borderColor} hover:bg-opacity-80 transition-all duration-300`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
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
                        const isBanned = (code as any).banned
                        
                        return (
                          <div
                            key={codeIndex}
                            className={`bg-white/10 backdrop-blur-sm rounded-xl p-5 border transition-all duration-300 hover:shadow-xl ${
                              isBanned 
                                ? 'border-red-500/50 hover:border-red-400/70 hover:shadow-red-500/20' 
                                : 'border-white/20 hover:border-[#ccfd7f]/50 hover:shadow-[#ccfd7f]/20'
                            } hover:scale-105`}
                          >
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center space-x-3">
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                  isBanned ? 'bg-red-500/20' : 'bg-[#ccfd7f]/20'
                                }`}>
                                  <TypeIcon className={`w-5 h-5 ${isBanned ? 'text-red-400' : 'text-[#ccfd7f]'}`} />
                                </div>
                                <div>
                                  <h3 className={`text-lg font-bold ${isBanned ? 'text-red-400' : 'text-white'}`}>
                                    {code.code}
                                  </h3>
                                  <p className="text-sm text-gray-400">{code.type}</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
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
                                {isBanned && (
                                  <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded-lg border border-red-500/30">
                                    BANNED
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="mb-4">
                              <h4 className={`text-lg font-semibold mb-2 ${isBanned ? 'text-red-300' : 'text-white'}`}>
                                {code.meaning}
                              </h4>
                              <p className={`text-sm leading-relaxed ${isBanned ? 'text-red-200' : 'text-gray-300'}`}>
                                {code.description}
                              </p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(code.category)}`}>
                              {code.category}
                            </span>
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
              }}
              className="px-6 py-3 bg-[#ccfd7f]/20 text-[#ccfd7f] rounded-xl hover:bg-[#ccfd7f]/30 transition-colors font-medium"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}