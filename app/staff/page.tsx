'use client'

import { useState } from 'react'
import { ChevronDown, ChevronRight, Crown, Shield, Users, UserPlus, MessageCircle, Star, Award, Target, Briefcase, Building2, ClipboardList, ArrowRight } from 'lucide-react'

export default function StaffPage() {
  const [expandedLevel, setExpandedLevel] = useState<string | null>(null)

  const staffRoles = [
    {
      level: "Executive Level",
      color: "bg-red-500",
      icon: Crown,
      description: "The highest level of organizational leadership, responsible for server-wide oversight and strategic decision-making.",
      roles: [
        { 
          title: "Public Services Overseer", 
          description: "Oversees server systems, backend decisions, and administrative infrastructure. Contacted only in critical circumstances."
        }
      ]
    },
    {
      level: "Management Level",
      color: "bg-orange-500",
      icon: Shield,
      description: "Senior management responsible for coordinating operations and supporting executive leadership.",
      roles: [
        { 
          title: "Ass. Public Services Overseer", 
          description: "Assistant role supporting public services operations and oversight."
        },
        { 
          title: "Assist. Public Services Overseer", 
          description: "Assistant role supporting public services oversight and coordination."
        },
        { 
          title: "Lead Management", 
          description: "A senior leadership role overseeing multiple departments and operations."
        },
        { 
          title: "Assist. Lead Management", 
          description: "An assistant leadership role supporting lead management functions."
        }
      ]
    },
    {
      level: "Overseers",
      color: "bg-blue-500",
      icon: Users,
      description: "Specialized overseers responsible for specific organizational functions and community relations.",
      roles: [
        { 
          title: "Relations Overseer", 
          description: "Oversees staff relations, recruitment, and administrative functions."
        },
        { 
          title: "Community Overseer", 
          description: "Oversees community relations, outreach, and engagement activities."
        },
        { 
          title: "Events Overseer", 
          description: "Oversees planning, coordination, and execution of community events."
        }
      ]
    },
    {
      level: "Coordinators",
      color: "bg-green-500",
      icon: ClipboardList,
      description: "Department coordinators responsible for overseeing specific departmental operations and policies.",
      roles: [
    {
      title: "Law Enforcement Coordinator",
          description: "Senior staff member overseeing all law enforcement departments."
    },
    {
      title: "Fire Department Coordinator",
          description: "Leads and manages the Fire & Rescue department."
    },
    {
      title: "WisDOT Coordinator",
          description: "Oversees Wisconsin Department of Transportation operations."
        }
      ]
    },
    {
      level: "Department Leadership",
      color: "bg-purple-500",
      icon: Building2,
      description: "Departmental leadership responsible for managing individual departments and their operations.",
      roles: [
    {
      title: "Department Directors",
          description: "Highest-ranking officials in each department; responsible for leadership and strategic planning."
    },
    {
      title: "Assistant Department Directors",
          description: "Second-in-command, assist the Director, handle daily issues."
    },
    {
      title: "Department Administration",
          description: "Trusted senior members managing rosters, documentation, and workflows."
        }
      ]
    },
    {
      level: "Department Staff",
      color: "bg-yellow-500",
      icon: Users,
      description: "Frontline departmental staff who perform operational duties and support department tasks.",
      roles: [
        { 
          title: "Department Supervisors", 
          description: "Entry-level leadership overseeing small groups and enforcing standards."
    },
    {
      title: "Department Staff",
          description: "Core members performing operational duties and supporting department tasks."
        },
        { 
          title: "Public Services Manager", 
          description: "Supervises daily staff functions, reports, and operational consistency."
        }
      ]
    }
  ]

  const toggleLevel = (level: string) => {
    setExpandedLevel(expandedLevel === level ? null : level)
  }

  return (
    <div className="min-h-screen text-white py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
            Staff Directory
          </h1>
          <div className="w-24 h-1 bg-[#ccfd7f] mx-auto rounded-full"></div>
          <p className="text-gray-300 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
            Meet our dedicated team of professionals who make Greenville Roleplay Operations possible.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <Users className="w-8 h-8 text-[#ccfd7f] mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white mb-1">6</h3>
            <p className="text-gray-300 text-sm">Staff Levels</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <Award className="w-8 h-8 text-[#ccfd7f] mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white mb-1">15</h3>
            <p className="text-gray-300 text-sm">Total Positions</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <Star className="w-8 h-8 text-[#ccfd7f] mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white mb-1">100%</h3>
            <p className="text-gray-300 text-sm">Training Provided</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <Briefcase className="w-8 h-8 text-[#ccfd7f] mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white mb-1">24/7</h3>
            <p className="text-gray-300 text-sm">Support Available</p>
          </div>
        </div>

        {/* Staff Levels */}
        <div className="space-y-8">
          {staffRoles.map((level, index) => {
            const IconComponent = level.icon
            return (
              <div 
                key={index}
                className="rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <div 
                  className="p-8 cursor-pointer group hover:bg-white/5 transition-all duration-300"
                  onClick={() => toggleLevel(level.level)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300  ${level.color}`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold text-white mb-3 group-hover:text-[#ccfd7f] transition-colors duration-300">
                          {level.level}
                        </h2>
                        <p className="text-gray-300 text-lg mb-2">
                          {level.roles.length} positions available
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {level.description}
                        </p>
                      </div>
                    </div>
                    <div className="ml-8 transition-all duration-300 transform  text-[#ccfd7f]">
                      {expandedLevel === level.level ? <ChevronDown size={32} /> : <ChevronRight size={32} />}
                    </div>
                  </div>
                </div>

                {expandedLevel === level.level && (
                  <div className="px-12 pb-12 border-t border-white/20 transition-all duration-500 ease-in-out bg-white/5">
                    <div className="pt-8">
                      <div className="space-y-8">
                        {level.roles.map((role, roleIndex) => (
                          <div
                            key={roleIndex}
                            className="bg-white/10 rounded-2xl p-8 border border-white/20"
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h3 className="text-2xl font-bold text-white mb-4">
                                  {role.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                  {role.description}
                                </p>
                              </div>
                              <div className="ml-6 flex-shrink-0">
                                <div className={`w-6 h-6 rounded-full ${level.color} shadow-lg`}></div>
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

        {/* Organizational Chart */}
        <div className="mt-24">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <div className="w-4 h-4 rounded-full bg-[#ccfd7f] mr-6 shadow-lg"></div>
              Organizational Hierarchy
            </h3>
            <div className="space-y-6">
              {/* Executive Level */}
              <div className="flex items-center justify-center">
                <div className="bg-red-500/20 border border-red-500/50 rounded-2xl p-6 text-center">
                  <Crown className="w-8 h-8 text-red-400 mx-auto mb-3" />
                  <h4 className="text-white font-semibold text-xl">Executive Level</h4>
                  <p className="text-gray-300 text-lg">Server-wide Leadership</p>
                </div>
              </div>
              
              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowRight className="w-8 h-8 text-[#ccfd7f] rotate-90" />
              </div>
              
              {/* Management Level */}
              <div className="flex items-center justify-center">
                <div className="bg-orange-500/20 border border-orange-500/50 rounded-2xl p-6 text-center">
                  <Shield className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                  <h4 className="text-white font-semibold text-xl">Management Level</h4>
                  <p className="text-gray-300 text-lg">Senior Management</p>
                </div>
              </div>
              
              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowRight className="w-8 h-8 text-[#ccfd7f] rotate-90" />
              </div>
              
              {/* Overseers */}
              <div className="flex items-center justify-center">
                <div className="bg-blue-500/20 border border-blue-500/50 rounded-2xl p-6 text-center">
                  <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h4 className="text-white font-semibold text-xl">Overseers</h4>
                  <p className="text-gray-300 text-lg">Specialized Functions</p>
                </div>
              </div>
              
              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowRight className="w-8 h-8 text-[#ccfd7f] rotate-90" />
              </div>
              
              {/* Coordinators */}
              <div className="flex items-center justify-center">
                <div className="bg-green-500/20 border border-green-500/50 rounded-2xl p-6 text-center">
                  <ClipboardList className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <h4 className="text-white font-semibold text-xl">Coordinators</h4>
                  <p className="text-gray-300 text-lg">Department Oversight</p>
                </div>
              </div>
              
              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowRight className="w-8 h-8 text-[#ccfd7f] rotate-90" />
              </div>
              
              {/* Department Leadership */}
              <div className="flex items-center justify-center">
                <div className="bg-purple-500/20 border border-purple-500/50 rounded-2xl p-6 text-center">
                  <Building2 className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <h4 className="text-white font-semibold text-xl">Department Leadership</h4>
                  <p className="text-gray-300 text-lg">Departmental Management</p>
                </div>
              </div>
              
              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowRight className="w-8 h-8 text-[#ccfd7f] rotate-90" />
              </div>
              
              {/* Department Staff */}
              <div className="flex items-center justify-center">
                <div className="bg-yellow-500/20 border border-yellow-500/50 rounded-2xl p-6 text-center">
                  <Users className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <h4 className="text-white font-semibold text-xl">Department Staff</h4>
                  <p className="text-gray-300 text-lg">Frontline Operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Development */}
        <div className="mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <div className="w-4 h-4 rounded-full bg-[#ccfd7f] mr-6 shadow-lg"></div>
              Career Development & Advancement
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center space-x-6 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-[#ccfd7f] rounded-2xl flex items-center justify-center">
                  <UserPlus className="w-8 h-8 text-slate-900" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-xl">Join Our Team</h4>
                  <p className="text-gray-300 text-lg">Apply for available departmental positions</p>
                </div>
              </div>
              <div className="flex items-center space-x-6 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-[#ccfd7f] rounded-2xl flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-slate-900" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-xl">Discord Support</h4>
                  <p className="text-gray-300 text-lg">Get help and connect with our community</p>
                </div>
              </div>
              <div className="flex items-center space-x-6 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-[#ccfd7f] rounded-2xl flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-slate-900" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-xl">Career Development</h4>
                  <p className="text-gray-300 text-lg">Explore training and advancement opportunities</p>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-white/5 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Star className="w-6 h-6 text-[#ccfd7f] mr-3" />
                Advancement Opportunities
              </h4>
              <p className="text-gray-300 leading-relaxed text-lg">
                GVRO is committed to professional development and career advancement within departmental structures. Staff members can progress through 
                levels based on performance, experience, and demonstrated leadership abilities. We provide comprehensive training programs, mentorship 
                opportunities, and clear advancement pathways to help our team members achieve their career goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}