'use client'

import { useState } from 'react'
import { ChevronDown, ChevronRight, Shield, Users, Car, Zap, Building2 } from 'lucide-react'

export default function DepartmentsPage() {
  const [departments, setDepartments] = useState([
    {
      title: "Wisconsin State Patrol",
      description: "Statewide law enforcement, highway patrol, and specialized divisions.",
      division: "High Speed Unit",
      divisionDescription: "Specializes in high-speed pursuit and traffic enforcement.",
      isOpen: false,
      color: "#18223c",
      icon: Car,
      ranks: [
        { name: "Superintendent", isCommand: true },
        { name: "Deputy Superintendent", isCommand: true },
        { name: "Major", isCommand: true },
        { name: "Captain", isCommand: false },
        { name: "Lieutenant", isCommand: false },
        { name: "Sergeant", isCommand: false },
        { name: "Senior Trooper", isCommand: false },
        { name: "Trooper", isCommand: false },
        { name: "Probationary Trooper", isCommand: false }
      ]
    },
    {
      title: "Outagamie County Sheriff's Office",
      description: "County law enforcement, jail management, and support to local municipalities.",
      division: "High Speed Unit (HSU)",
      divisionDescription: "Handles high-speed pursuits, traffic enforcement, and specialized patrols.",
      isOpen: false,
      color: "#836d5a",
      icon: Building2,
      ranks: [
        { name: "Sheriff", isCommand: true },
        { name: "Undersheriff", isCommand: true },
        { name: "Captain", isCommand: true },
        { name: "Lieutenant", isCommand: false },
        { name: "Sergeant", isCommand: false },
        { name: "Deputy Sheriff", isCommand: false },
        { name: "Senior Deputy", isCommand: false },
        { name: "Deputy", isCommand: false },
        { name: "Probationary Deputy", isCommand: false }
      ]
    },
    {
      title: "Fox Valley Metro Police Department",
      description: "Responsible for local law enforcement, patrols, and community safety in the Fox Valley area.",
      division: "Specialized Division",
      divisionDescription: "This department is a division of Wisconsin State Patrol & Outagamie County Sheriff's Office.",
      isOpen: false,
      color: "#1e90ff",
      icon: Shield,
      ranks: [
        { name: "Chief of Police", isCommand: true },
        { name: "Deputy Chief", isCommand: true },
        { name: "Captain", isCommand: true },
        { name: "Lieutenant", isCommand: false },
        { name: "Sergeant", isCommand: false },
        { name: "Corporal", isCommand: false },
        { name: "Senior Officer", isCommand: false },
        { name: "Officer", isCommand: false },
        { name: "Probationary Officer", isCommand: false }
      ]
    },
    {
      title: "Greenville Fire & Rescue",
      description: "Firefighting, emergency medical response, and rescue operations within Greenville.",
      division: "GvEMS",
      divisionDescription: "Greenville Emergency Medical Services — Provides advanced life support and medical response services.",
      isOpen: false,
      color: "#ff0000",
      icon: Zap,
      ranks: [
        { name: "Fire Chief", isCommand: true },
        { name: "Deputy Chief", isCommand: true },
        { name: "Battalion Chief", isCommand: true },
        { name: "Captain", isCommand: false },
        { name: "Lieutenant", isCommand: false },
        { name: "Engineer", isCommand: false },
        { name: "Firefighter/Paramedic", isCommand: false },
        { name: "Firefighter/EMT", isCommand: false },
        { name: "Probationary Firefighter", isCommand: false }
      ]
    },
    {
      title: "Wisconsin Department of Transportation",
      description: "Traffic control, road maintenance, highway safety, and transportation infrastructure management.",
      isOpen: false,
      color: "#ffff00",
      icon: Building2,
      ranks: [
        { name: "Operations Director", isCommand: true },
        { name: "Assist. Operations Director", isCommand: true },
        { name: "Secretary", isCommand: false },
        { name: "Assistant Secretary", isCommand: false },
        { name: "Operation Lead", isCommand: false },
        { name: "Technician Lead", isCommand: false },
        { name: "Operations Manager", isCommand: false },
        { name: "As. Operations Manager", isCommand: false },
        { name: "Operation Supervisor", isCommand: false },
        { name: "Senior Operator", isCommand: false },
        { name: "Operator", isCommand: false },
        { name: "Junior Operator", isCommand: false },
        { name: "Trainee Operator", isCommand: false }
      ]
    }
  ])

  const toggleDepartment = (index: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('Toggling department:', index)
    setDepartments(prevDepartments =>
      prevDepartments.map((dept, i) =>
        i === index ? { ...dept, isOpen: !dept.isOpen } : dept
      )
    )
  }

  return (
    <div className="min-h-screen text-white py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Departments Overview
          </h1>
          <div className="w-24 h-1 bg-[#ccfd7f] mx-auto rounded-full"></div>
          <p className="text-gray-300 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
            Explore the organizational structure and chain of command for each department
          </p>
        </div>
        
        <div className="space-y-8">
          {departments.map((dept, index) => {
            const IconComponent = dept.icon
            return (
              <div 
                key={index} 
                className="rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl  bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <div 
                  className="p-8 cursor-pointer group hover:bg-white/5 transition-all duration-300"
                  onClick={(e) => toggleDepartment(index, e)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div 
                        className="w-18 h-18 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 "
                        style={{ backgroundColor: `${dept.color}20` }}
                      >
                        <IconComponent className="w-10 h-10" style={{ color: dept.color }} />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold text-white mb-3 group-hover:text-[#ccfd7f] transition-colors duration-300">
                          {dept.title}
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-4">
                          {dept.description}
                        </p>
                        {dept.division && (
                          <div className="space-y-2">
                            <div 
                              className="inline-flex items-center px-4 py-2 rounded-xl border"
                              style={{
                                backgroundColor: `${dept.color}20`,
                                borderColor: `${dept.color}40`
                              }}
                            >
                              <span 
                                className="text-sm font-semibold"
                                style={{ color: dept.color }}
                              >
                                {dept.division}
                              </span>
                            </div>
                            {dept.divisionDescription && (
                              <p className="text-gray-400 text-sm">
                                {dept.divisionDescription}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    <div 
                      className={`ml-8 transition-all duration-300 transform  ${dept.isOpen ? 'rotate-180' : ''}`}
                      style={{ color: dept.color }}
                    >
                      <ChevronDown size={32} />
                    </div>
                  </div>
                </div>

                {dept.isOpen && (
                  <div className="px-8 pb-8 border-t border-white/20 transition-all duration-500 ease-in-out bg-white/5 animate-in slide-in-from-top-2">
                    <div className="pt-6">
                      <h3 className="font-bold text-2xl mb-8 flex items-center text-white">
                        <div className="w-3 h-3 rounded-full bg-[#ccfd7f] mr-4 shadow-lg animate-pulse"></div>
                        Chain of Command
                        <div className="ml-4 h-px bg-[#ccfd7f]/60 flex-1"></div>
                      </h3>
                      <div className="space-y-4">
                        {dept.ranks.map((rank, rankIndex) => (
                          <div
                            key={rankIndex}
                            className={`group relative overflow-hidden rounded-xl transition-all duration-300  hover:shadow-lg ${
                              rank.isCommand
                                ? 'bg-white/10 shadow-lg border border-white/20 backdrop-blur-sm'
                                : 'bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm'
                            }`}
                          >
                            <div className="relative px-6 py-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <div className="relative">
                                    <div
                                      className={`w-4 h-4 rounded-full mr-5 flex-shrink-0 shadow-md ${
                                        rank.isCommand ? 'ring-2 ring-[#ccfd7f]/50' : ''
                                      }`}
                                      style={{
                                        backgroundColor: rank.isCommand ? "#ccfd7f" : "rgba(255,255,255,0.8)"
                                      }}
                                    ></div>
                                    {rank.isCommand && (
                                      <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full shadow-sm bg-[#ccfd7f]"></div>
                                    )}
                                  </div>

                                  <div className="flex flex-col">
                                    <span className={`font-semibold text-white ${rank.isCommand ? 'text-xl' : 'text-lg'} tracking-wide`}>
                                      {rank.name}
                                    </span>
                                    {rank.isCommand && (
                                      <span className="text-sm text-gray-300 mt-1">
                                        Leadership Position
                                      </span>
                                    )}
                                  </div>
                                </div>

                                {rank.isCommand && (
                                  <div className="flex items-center">
                                    <span className="px-3 py-1.5 bg-[#ccfd7f]/20 rounded-full text-xs font-bold uppercase tracking-wider shadow-md backdrop-blur-sm text-[#ccfd7f]">
                                      Leadership
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Instructions */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg">
            Click on any department to view their complete chain of command structure
          </p>
        </div>
      </div>
    </div>
  )
}