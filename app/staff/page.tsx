'use client'

import { useState } from 'react'
import { Wrench, Settings, Headphones, FileText, Heart, Calendar, Shield, AlertTriangle, Car, Users, UserCheck, Cog } from 'lucide-react'

export default function StaffPage() {
  const [selectedLevel, setSelectedLevel] = useState<string>('All')

  const staffRoles = [
    {
      level: 'Executive Level',
      levelColor: 'bg-red-500/20 text-red-400 border-red-500/30',
      roles: [
        {
          title: 'Public Affairs Overseer',
          description: 'Oversees server systems, backend decisions, and administrative infrastructure. Contact only in critical circumstances.',
          icon: Wrench,
          responsibilities: [
            'Maintain backend systems, integrations, and core infrastructure.',
            'Implement server-wide changes approved by leadership.',
            'Handle escalations outside Public Affairs scope.',
            'Remain informed but not directly involved in moderation.'
          ]
        },
        {
          title: 'Ass. Public Affairs Overseer',
          description: 'Assistant role supporting public services operations and oversight.',
          icon: Settings,
          responsibilities: [
            'Coordinate staff assignments, shifts, and patrols.',
            'Track activity, attendance, and performance.',
            'Collaborate with Relations Overseer for disciplinary concerns.',
            'Create processes and checklists for operations.',
            'Report gaps or trends to leadership.'
          ]
        },
        {
          title: 'Assist. Public Affairs Overseer',
          description: 'Assistant role supporting public services oversight and coordination.',
          icon: Headphones,
          responsibilities: [
            'Monitor member satisfaction and concerns.',
            'Coordinate feedback forms, Q&As, and outreach polls.',
            'Organize community-facing initiatives.',
            'Ensure staff remain approachable and professional.',
            'Collaborate with Events Coordinator for public events.'
          ]
        }
      ]
    },
    {
      level: 'High Command',
      levelColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      roles: [
        {
          title: 'Relations Overseer',
          description: 'Oversees staff relations, recruitment, and administrative functions.',
          icon: FileText,
          responsibilities: [
            'Investigate complaints against staff or management.',
            'Oversee disciplinary actions and resolutions.',
            'Track infractions and documentation.',
            'Serve as neutral party in disputes.',
            'Maintain professional standards across staff.'
          ]
        },
        {
          title: 'Community Overseer',
          description: 'Oversees community relations, outreach, and engagement activities.',
          icon: Heart,
          responsibilities: [
            'Develop and maintain positive community relationships.',
            'Coordinate community outreach programs and initiatives.',
            'Handle community feedback, concerns, and suggestions.',
            'Organize community meetings and public forums.',
            'Foster positive community engagement.'
          ]
        },
        {
          title: 'Events Overseer',
          description: 'Oversees planning, coordination, and execution of community events.',
          icon: Calendar,
          responsibilities: [
            'Plan and coordinate community events and activities.',
            'Manage event logistics, resources, and staff assignments.',
            'Ensure events align with organizational goals and values.',
            'Coordinate with departments for event support.',
            'Evaluate event success and gather feedback.'
          ]
        },
        {
          title: 'Lead Management',
          description: 'Senior leadership role overseeing multiple departments and operations.',
          icon: Users,
          responsibilities: [
            'Lead and coordinate multiple departments and their activities.',
            'Make strategic decisions affecting overall operations.',
            'Handle complex inter-departmental issues and conflicts.',
            'Report directly to executive management on operations.',
            'Develop and implement organizational policies and procedures.'
          ]
        },
        {
          title: 'Assist. Lead Management',
          description: 'Assistant leadership role supporting lead management functions.',
          icon: Users,
          responsibilities: [
            'Support lead management in daily operations and decision-making.',
            'Assist with staff coordination and department oversight.',
            'Handle routine management tasks and staff inquiries.',
            'Prepare reports and documentation for lead management review.',
            'Mentor junior staff and department coordinators.'
          ]
        }
      ]
    },
    {
      level: 'Management Level',
      levelColor: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      roles: [
        {
          title: 'Senior Public Service Manager',
          description: 'Senior management role with advanced responsibilities and leadership duties.',
          icon: Shield,
          responsibilities: [
            'Provide advanced leadership and mentorship to junior managers.',
            'Handle complex operational decisions and policy implementation.',
            'Oversee multiple departments and coordinate cross-functional activities.',
            'Serve as escalation point for critical issues and conflicts.',
            'Develop and implement strategic initiatives for department improvement.'
          ]
        },
        {
          title: 'Public Affairs Manager',
          description: 'Supervises daily staff functions, reports, and operational consistency.',
          icon: Shield,
          responsibilities: [
            'Act as on-duty leadership during operations.',
            'Monitor staff behavior and resolve minor conflicts.',
            'Handle shift reports, complaints, and escalations.',
            'Relay feedback between staff and Tier 2 management.',
            'Mentor and guide Trainee Public Affairs Managers into full staff roles.'
          ]
        },
        {
          title: 'Junior Public Affairs Management',
          description: 'Assists full managers with shift supervision, tickets, and staff duties.',
          icon: Shield,
          responsibilities: [
            'Cover for unavailable managers or help co-lead operations.',
            'Manage basic infractions and staff queries.',
            'Shadow HR/Operations tasks when permitted.',
            'Gain experience toward full promotion to manager.',
            'Complete assigned reports, check-ins, or duties.'
          ]
        },
        {
          title: 'Trainee Public Affairs Manager',
          description: 'Trial staff evaluated for performance, reliability, and leadership potential.',
          icon: Users,
          responsibilities: [
            'Complete assigned patrols, reports, and moderation duties.',
            'Undergo review and mentorship by managers and senior management.',
            'Demonstrate consistency, maturity, and initiative.',
            'Ask questions and learn procedures, policies, and expectations.',
            'May be removed or promoted based on performance and attitude.'
          ]
        }
      ]
    },
    {
      level: 'Coordinators',
      levelColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      roles: [
        {
          title: 'Law Enforcement Coordinator',
          description: 'Senior staff member overseeing all law enforcement departments.',
          icon: Shield,
          responsibilities: [
            'Oversee all law enforcement departments and operations.',
            'Supervise command staff and ensure proper procedures.',
            'Manage training programs and certification requirements.',
            'Review incidents and ensure proper documentation.',
            'Coordinate joint operations between departments.',
            'Track rosters, patrols, and activity levels.'
          ]
        },
        {
          title: 'Fire Department Coordinator',
          description: 'Leads and manages the Fire & Rescue department.',
          icon: AlertTriangle,
          responsibilities: [
            'Lead Fire & Rescue operations and emergency responses.',
            'Approve training programs and certification requirements.',
            'Direct incident responses and resource allocation.',
            'Manage staffing levels and shift assignments.',
            'Enforce department policies and procedures.',
            'Coordinate with LEO/WisDOT during emergency responses.'
          ]
        },
        {
          title: 'WisDOT Coordinator',
          description: 'Oversees Wisconsin Department of Transportation operations.',
          icon: Car,
          responsibilities: [
            'Manage traffic control and highway operations.',
            'Oversee WisDOT units and specialized equipment.',
            'Coordinate with LEO/Fire during traffic incidents.',
            'Approve participation in specialized operations.',
            'Ensure proper training and certification.',
            'Maintain WisDOT equipment and vehicles.'
          ]
        }
      ]
    },
    {
      level: 'Department Staff',
      levelColor: 'bg-green-500/20 text-green-400 border-green-500/30',
      roles: [
        {
          title: 'Department Directors',
          description: 'Highest-ranking officials in each department; responsible for leadership and strategic planning.',
          icon: Users,
          responsibilities: [
            'Oversee department operations and personnel management.',
            'Approve major requests and policy changes.',
            'Coordinate with server leadership on strategic initiatives.',
            'Maintain department standards and professional conduct.',
            'Handle escalated issues and disciplinary matters.'
          ]
        },
        {
          title: 'Assistant Department Directors',
          description: 'Second-in-command, assist the Director, handle daily issues.',
          icon: Users,
          responsibilities: [
            'Assist Director with oversight and management duties.',
            'Handle escalated issues and staff concerns.',
            'Coordinate with supervisors and department staff.',
            'Help with planning and implementation of initiatives.',
            'Act as Director when unavailable.'
          ]
        },
        {
          title: 'Department Administration',
          description: 'Trusted senior members managing rosters, documentation, and workflows.',
          icon: FileText,
          responsibilities: [
            'Maintain rosters, documentation, and department records.',
            'Onboard new staff and conduct orientation.',
            'Organize department events and training sessions.',
            'Assist with evaluations and performance reports.',
            'Manage department workflows and procedures.'
          ]
        },
        {
          title: 'Department Supervisors',
          description: 'Entry-level leadership overseeing small groups and enforcing standards.',
          icon: Shield,
          responsibilities: [
            'Supervise lower-ranked staff and address basic issues.',
            'Provide guidance and training to department members.',
            'Monitor performance and report concerns to leadership.',
            'Help enforce standards and protocols during operations.',
            'Assist with shift coordination and assignments.'
          ]
        },
        {
          title: 'Department Staff',
          description: 'Core members performing operational duties and supporting department tasks.',
          icon: UserCheck,
          responsibilities: [
            'Perform day-to-day operational duties and tasks.',
            'Submit patrols or activity logs as required.',
            'Maintain professionalism and follow chain of command.',
            'Follow procedure when reporting issues or concerns.',
            'Support department initiatives and community engagement.'
          ]
        }
      ]
    }
  ]

  const levelOptions = ['All', 'Executive Level', 'High Command', 'Management Level', 'Coordinators', 'Department Staff']

  const filteredRoles = selectedLevel === 'All' 
    ? staffRoles 
    : staffRoles.filter(level => level.level === selectedLevel)

  return (
    <div className="min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-5 tracking-tight">
            Staff Hierarchy
          </h1>
          <div className="w-20 h-1 bg-[#ccfd7f] mx-auto rounded-full"></div>
          <p className="text-gray-300 text-base mt-6 max-w-2xl mx-auto leading-relaxed">
            Comprehensive overview of our organizational structure and staff responsibilities
          </p>
        </div>

        {/* Level Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {levelOptions.map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 text-sm font-medium ${
                selectedLevel === level
                  ? 'bg-[#ccfd7f]/20 border-[#ccfd7f]/50 text-[#ccfd7f]'
                  : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
              }`}
            >
              <div className={`w-2 h-2 rounded-full ${
                level === 'Executive Level' ? 'bg-red-400' :
                level === 'High Command' ? 'bg-blue-400' :
                level === 'Management Level' ? 'bg-orange-400' :
                level === 'Coordinators' ? 'bg-blue-400' :
                level === 'Department Staff' ? 'bg-green-400' :
                'bg-gray-400'
              }`}></div>
              <span>{level}</span>
            </button>
          ))}
          </div>

        {/* Staff Roles */}
        <div className="space-y-8">
          {filteredRoles.map((level, levelIndex) => (
            <div key={levelIndex} className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-2">{level.level}</h2>
                <div className="w-16 h-0.5 bg-[#ccfd7f] mx-auto rounded-full"></div>
          </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {level.roles.map((role, roleIndex) => (
                  <div 
                    key={roleIndex}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-[#ccfd7f]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#ccfd7f]/10"
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg bg-[#ccfd7f]/20 flex-shrink-0">
                        <role.icon className="w-6 h-6 text-[#ccfd7f]" />
          </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2">{role.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{role.description}</p>
          </div>
        </div>

                    <div className="mt-4">
                      <h4 className="text-sm font-bold text-white mb-3 flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ccfd7f] mr-2"></div>
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {role.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="flex items-start space-x-2">
                            <div className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm leading-relaxed">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Chain of Command Notice */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Chain of Command</h3>
          <p className="text-gray-300 text-center text-lg mb-6">
              Please follow the proper chain of command when reporting issues or seeking assistance.
            </p>
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <p className="text-gray-300 text-center">
              For urgent matters, contact your immediate supervisor first. Only escalate to higher levels when necessary.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}