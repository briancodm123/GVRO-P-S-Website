'use client'

import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

interface DepartmentProps {
  title: string
  description: string
  division?: string
  ranks: { name: string; isCommand: boolean }[]
}

const Department = ({ title, description, division, ranks }: DepartmentProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg mb-4 border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div 
        className="p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">{description}</p>
            {division && (
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Division:</span> {division}
              </p>
            )}
          </div>
          <div className="ml-4 text-gray-400">
            {isOpen ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="px-6 pb-6 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Chain of Command:</h3>
          <ul className="space-y-1">
            {ranks.map((rank, index) => (
              <li 
                key={index}
                className={`ml-4 ${
                  rank.isCommand 
                    ? 'text-gvro-red dark:text-red-400 font-semibold' 
                    : 'text-gray-700 dark:text-gray-300'
                } hover:text-gvro-red-dark dark:hover:text-red-300 transition-colors cursor-default`}
              >
                • {rank.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default function DepartmentsPage() {
  const departments: DepartmentProps[] = [
    {
      title: "Wisconsin State Patrol",
      description: "Statewide law enforcement, highway patrol, and specialized divisions.",
      division: "High Speed Unit — Specializes in high-speed pursuit and traffic enforcement.",
      ranks: [
        { name: "State Superintendent", isCommand: true },
        { name: "Assistant Superintendent", isCommand: true },
        { name: "Deputy Superintendent", isCommand: true },
        { name: "Colonel", isCommand: false },
        { name: "Lieutenant Colonel", isCommand: false },
        { name: "Major", isCommand: false },
        { name: "Captain", isCommand: false },
        { name: "Lieutenant", isCommand: false },
        { name: "Sergeant", isCommand: false },
        { name: "Corporal", isCommand: false },
        { name: "Master Trooper", isCommand: false },
        { name: "Senior Trooper", isCommand: false },
        { name: "State Trooper", isCommand: false },
        { name: "Probationary Trooper", isCommand: false },
        { name: "Cadet", isCommand: false }
      ]
    },
    {
      title: "Outagamie County Sheriff's Office",
      description: "County law enforcement, jail management, and support to local municipalities.",
      division: "High Speed Unit (HSU) — Handles high-speed pursuits, traffic enforcement, and specialized patrols.",
      ranks: [
        { name: "Sheriff", isCommand: true },
        { name: "Undersheriff", isCommand: true },
        { name: "Assistant Sheriff", isCommand: true },
        { name: "Chief Deputy", isCommand: false },
        { name: "Captain", isCommand: false },
        { name: "Lieutenant", isCommand: false },
        { name: "Sergeant", isCommand: false },
        { name: "Corporal", isCommand: false },
        { name: "Senior Deputy", isCommand: false },
        { name: "Deputy First Class", isCommand: false },
        { name: "Deputy", isCommand: false },
        { name: "Probationary Deputy", isCommand: false },
        { name: "Recruit", isCommand: false }
      ]
    },
    {
      title: "Fox Valley Metro Police Department",
      description: "Responsible for local law enforcement, patrols, and community safety in the Fox Valley area.",
      division: "This department is a division of Wisconsin State Patrol & Outagamie County Sheriff's Office.",
      ranks: [
        { name: "Chief of Police", isCommand: true },
        { name: "Assistant Chief of Police", isCommand: true },
        { name: "Dept. Chief of Police", isCommand: true },
        { name: "Colonel", isCommand: false },
        { name: "Lieutenant Colonel", isCommand: false },
        { name: "Major", isCommand: false },
        { name: "Shift Commander", isCommand: false },
        { name: "Captain III", isCommand: false },
        { name: "Lieutenant III", isCommand: false },
        { name: "Sergeant Major", isCommand: false },
        { name: "Master Sergeant", isCommand: false },
        { name: "Captain I", isCommand: false },
        { name: "Lieutenant II", isCommand: false },
        { name: "Staff Sergeant", isCommand: false },
        { name: "Sergeant", isCommand: false },
        { name: "Corporal", isCommand: false },
        { name: "Lance Corporal", isCommand: false },
        { name: "Officer First Class", isCommand: false },
        { name: "Officer Second Class", isCommand: false },
        { name: "Officer in Training", isCommand: false }
      ]
    },
    {
      title: "Greenville Fire & Rescue",
      description: "Firefighting, emergency medical response, and rescue operations within Greenville.",
      ranks: [
        { name: "District Overseer", isCommand: true },
        { name: "Fire Chief", isCommand: true },
        { name: "Deputy Fire Chief", isCommand: true },
        { name: "Chief of EMS", isCommand: false },
        { name: "Assistant Fire Chief", isCommand: false },
        { name: "Battalion Chief", isCommand: false },
        { name: "District Chief", isCommand: false },
        { name: "Shift Commander", isCommand: false },
        { name: "Shift Supervisor", isCommand: false },
        { name: "Shift Advisor", isCommand: false },
        { name: "Captain", isCommand: false },
        { name: "Lieutenant", isCommand: false },
        { name: "Engineer", isCommand: false },
        { name: "Senior Firefighter/Paramedic", isCommand: false },
        { name: "Firefighter/Paramedic", isCommand: false },
        { name: "Firefighter/EMT", isCommand: false },
        { name: "Probationary Firefighter", isCommand: false },
        { name: "Recruit", isCommand: false }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Departments Overview
        </h1>
        
        <div className="space-y-6">
          {departments.map((dept, index) => (
            <Department key={index} {...dept} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Click on any department to view their complete chain of command structure.
          </p>
        </div>
      </div>
    </div>
  )
}
