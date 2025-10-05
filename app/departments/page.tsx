'use client'

import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

interface DepartmentProps {
  title: string
  description: string
  division?: string
  isOpen?: boolean
  ranks: { name: string; isCommand: boolean }[]
}

export default function DepartmentsPage() {
  const [departments, setDepartments] = useState<DepartmentProps[]>([
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
  ])

  const toggleDepartment = (index: number) => {
    setDepartments(prevDepartments => 
      prevDepartments.map((dept, i) => 
        i === index ? { ...dept, isOpen: !dept.isOpen } : dept
      )
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
            Departments Overview
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-blue-200/80 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
            Explore the organizational structure and chain of command for each department
          </p>
        </div>
        
        <div className="space-y-8">
          {departments.map((dept, index) => (
            <div 
              key={index} 
              className="rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
              style={{
                backgroundColor: dept.title === "Fox Valley Metro Police Department" ? "#1e90ff" :
                                dept.title === "Outagamie County Sheriff's Office" ? "#836d5a" :
                                dept.title === "Greenville Fire & Rescue" ? "#ff0000" :
                                dept.title === "Wisconsin State Patrol" ? "#18223c" : "rgba(255,255,255,0.95)"
              }}
            >
              <div 
                className="p-8 cursor-pointer group"
                onClick={() => toggleDepartment(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h2 
                      className="text-3xl font-bold mb-4 transition-colors duration-200"
                      style={{
                        color: dept.title === "Fox Valley Metro Police Department" ? "white" :
                               dept.title === "Outagamie County Sheriff's Office" ? "white" :
                               dept.title === "Greenville Fire & Rescue" ? "white" :
                               dept.title === "Wisconsin State Patrol" ? "white" : "#1f2937"
                      }}
                    >
                      {dept.title}
                    </h2>
                    <p 
                      className="mb-4 text-lg leading-relaxed"
                      style={{
                        color: dept.title === "Fox Valley Metro Police Department" ? "rgba(255,255,255,0.9)" :
                               dept.title === "Outagamie County Sheriff's Office" ? "rgba(255,255,255,0.9)" :
                               dept.title === "Greenville Fire & Rescue" ? "rgba(255,255,255,0.9)" :
                               dept.title === "Wisconsin State Patrol" ? "rgba(255,255,255,0.9)" : "#4b5563"
                      }}
                    >
                      {dept.description}
                    </p>
                    {dept.division && (
                      <div 
                        className="rounded-lg p-4 border-l-4"
                        style={{
                          backgroundColor: dept.title === "Fox Valley Metro Police Department" ? "rgba(255,255,255,0.2)" :
                                          dept.title === "Outagamie County Sheriff's Office" ? "rgba(255,255,255,0.2)" :
                                          dept.title === "Greenville Fire & Rescue" ? "rgba(255,255,255,0.2)" :
                                          dept.title === "Wisconsin State Patrol" ? "rgba(255,255,255,0.2)" : "#f9fafb",
                          borderLeftColor: dept.title === "Fox Valley Metro Police Department" ? "white" :
                                         dept.title === "Outagamie County Sheriff's Office" ? "white" :
                                         dept.title === "Greenville Fire & Rescue" ? "white" :
                                         dept.title === "Wisconsin State Patrol" ? "white" : "#3b82f6"
                        }}
                      >
                        <p 
                          className="text-sm font-semibold mb-1"
                          style={{
                            color: dept.title === "Fox Valley Metro Police Department" ? "white" :
                                   dept.title === "Outagamie County Sheriff's Office" ? "white" :
                                   dept.title === "Greenville Fire & Rescue" ? "white" :
                                   dept.title === "Wisconsin State Patrol" ? "white" : "#374151"
                          }}
                        >
                          Specialized Division
                        </p>
                        <p 
                          style={{
                            color: dept.title === "Fox Valley Metro Police Department" ? "rgba(255,255,255,0.9)" :
                                   dept.title === "Outagamie County Sheriff's Office" ? "rgba(255,255,255,0.9)" :
                                   dept.title === "Greenville Fire & Rescue" ? "rgba(255,255,255,0.9)" :
                                   dept.title === "Wisconsin State Patrol" ? "rgba(255,255,255,0.9)" : "#4b5563"
                          }}
                        >
                          {dept.division}
                        </p>
                      </div>
                    )}
                  </div>
                  <div 
                    className="ml-8 transition-all duration-200 transform group-hover:scale-110"
                    style={{
                      color: dept.title === "Fox Valley Metro Police Department" ? "rgba(255,255,255,0.8)" :
                             dept.title === "Outagamie County Sheriff's Office" ? "rgba(255,255,255,0.8)" :
                             dept.title === "Greenville Fire & Rescue" ? "rgba(255,255,255,0.8)" :
                             dept.title === "Wisconsin State Patrol" ? "rgba(255,255,255,0.8)" : "#9ca3af"
                    }}
                  >
                    {dept.isOpen ? <ChevronDown size={28} /> : <ChevronRight size={28} />}
                  </div>
                </div>
              </div>
              
              {dept.isOpen && (
                <div 
                  className="px-8 pb-8 border-t border-gray-200 transition-all duration-500 ease-in-out"
                  style={{
                    backgroundColor: dept.title === "Fox Valley Metro Police Department" ? "#1e90ff" :
                                    dept.title === "Outagamie County Sheriff's Office" ? "#836d5a" :
                                    dept.title === "Greenville Fire & Rescue" ? "#ff0000" :
                                    dept.title === "Wisconsin State Patrol" ? "#18223c" : "white"
                  }}
                >
                  <div className="pt-6">
                    <h3 
                      className="font-bold text-xl mb-6 flex items-center"
                      style={{
                        color: dept.title === "Fox Valley Metro Police Department" ? "white" :
                               dept.title === "Outagamie County Sheriff's Office" ? "white" :
                               dept.title === "Greenville Fire & Rescue" ? "white" :
                               dept.title === "Wisconsin State Patrol" ? "white" : "#374151"
                      }}
                    >
                      <div className="w-2 h-2 rounded-full bg-white/80 mr-3"></div>
                      Chain of Command
                    </h3>
                    <div className="grid gap-3">
                      {dept.ranks.map((rank, rankIndex) => (
                        <div 
                          key={rankIndex}
                          className={`pl-6 py-3 rounded-lg transition-all duration-200 hover:scale-[1.02] ${
                            rank.isCommand ? 'bg-white/20 shadow-md' : 'bg-white/10'
                          }`}
                          style={{
                            color: dept.title === "Fox Valley Metro Police Department" ? (rank.isCommand ? "white" : "rgba(255,255,255,0.9)") :
                                   dept.title === "Outagamie County Sheriff's Office" ? (rank.isCommand ? "white" : "rgba(255,255,255,0.9)") :
                                   dept.title === "Greenville Fire & Rescue" ? (rank.isCommand ? "white" : "rgba(255,255,255,0.9)") :
                                   dept.title === "Wisconsin State Patrol" ? (rank.isCommand ? "white" : "rgba(255,255,255,0.9)") : 
                                   (rank.isCommand ? "#dc2626" : "#374151")
                          }}
                        >
                          <div className="flex items-center">
                            <div 
                              className="w-3 h-3 rounded-full mr-4 flex-shrink-0"
                              style={{
                                backgroundColor: dept.title === "Fox Valley Metro Police Department" ? (rank.isCommand ? "white" : "rgba(255,255,255,0.7)") :
                                               dept.title === "Outagamie County Sheriff's Office" ? (rank.isCommand ? "white" : "rgba(255,255,255,0.7)") :
                                               dept.title === "Greenville Fire & Rescue" ? (rank.isCommand ? "white" : "rgba(255,255,255,0.7)") :
                                               dept.title === "Wisconsin State Patrol" ? (rank.isCommand ? "white" : "rgba(255,255,255,0.7)") : 
                                               (rank.isCommand ? "#dc2626" : "#d1d5db")
                              }}
                            ></div>
                            <span className={`font-medium ${rank.isCommand ? 'text-lg' : 'text-base'}`}>
                              {rank.name}
                            </span>
                            {rank.isCommand && (
                              <span className="ml-3 px-2 py-1 bg-white/20 rounded-full text-xs font-semibold uppercase tracking-wide">
                                Command
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <p className="text-blue-200/90 text-lg font-medium">
              Click on any department to view their complete chain of command structure
            </p>
            <div className="mt-4 flex justify-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
