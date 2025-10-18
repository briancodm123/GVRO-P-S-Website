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
          title: 'Executive Public Affairs Director',
          description: 'Oversees the entire Public Affairs Division and manages all departmental communication, coordination, and professional standards.',
          icon: Shield,
          responsibilities: [
            'Supervise all operations and personnel within the division.',
            'Approve public announcements, documents, and press-related material.',
            'Coordinate with Department Overseers and Division Leads.',
            'Handle high-level disputes, appeals, or sensitive reports.'
          ]
        },
        {
          title: 'Associate Executive Public Affairs Director',
          description: 'Acts as the second-in-command of the Public Affairs Division, managing operations, workflow efficiency, and direct oversight of the directorate team.',
          icon: Settings,
          responsibilities: [
            'Support the Executive Director in leadership and decision-making.',
            'Oversee large-scale reports, appeals, or community concerns.',
            'Supervise Director-level staff to ensure policy compliance.',
            'Fill in for the Executive Director during absence or delegation.'
          ]
        },
        {
          title: 'Assistant Executive Public Affairs Director',
          description: 'Provides executive-level support in administrative coordination, scheduling, and internal documentation.',
          icon: FileText,
          responsibilities: [
            'Manage division documentation and update information boards.',
            'Handle scheduling for meetings, reviews, or inter-department communications.',
            'Assist in training new Director-level personnel.',
            'Relay communication between executives and management staff.'
          ]
        }
      ]
    },
    {
      level: 'Director Level',
      levelColor: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      roles: [
        {
          title: 'Lead Public Affairs Director',
          description: 'Responsible for daily operations, ensuring the division maintains consistent performance, professionalism, and communication accuracy.',
          icon: Users,
          responsibilities: [
            'Oversee day-to-day management activities.',
            'Mentor Public Affairs Managers and Coordinators.',
            'Ensure reports, applications, and inquiries are handled promptly.',
            'Conduct periodic staff evaluations and quality checks.'
          ]
        },
        {
          title: 'Assistant Public Affairs Director',
          description: 'Assists the Lead Director with staff supervision, report management, and overall coordination of public operations.',
          icon: UserCheck,
          responsibilities: [
            'Support in managing daily affairs and division documentation.',
            'Monitor manager activity and workload distribution.',
            'Address internal questions or requests from staff members.',
            'Prepare operational summaries for executive review.'
          ]
        }
      ]
    },
    {
      level: 'High Command',
      levelColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      roles: [
        {
          title: 'Lead Affairs Management',
          description: 'Leads the internal affairs management branch, ensuring proper handling of staff coordination, report processing, and administrative support.',
          icon: Wrench,
          responsibilities: [
            'Manage workflow among Affairs Management staff.',
            'Oversee investigations or inter-department coordination.',
            'Ensure all reports and requests are properly documented.',
            'Train new management-level personnel in communication protocols.'
          ]
        },
        {
          title: 'Assistant Lead Affairs Management',
          description: 'Supports the Lead Affairs Management with workflow organization, case tracking, and administrative oversight.',
          icon: Headphones,
          responsibilities: [
            'Monitor activity levels and assign casework as needed.',
            'Track report progress and ensure completion deadlines are met.',
            'Handle lower-level inquiries or complaints.',
            'Maintain communication logs for management records.'
          ]
        }
      ]
    },
    {
      level: 'Management Level',
      levelColor: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      roles: [
        {
          title: 'Senior Public Affairs Manager',
          description: 'Supervises the Public Affairs Management team, ensuring professional communication between staff and the public.',
          icon: Shield,
          responsibilities: [
            'Oversee reports, applications, and inquiries submitted to the division.',
            'Provide guidance and mentorship to Junior and Trainee Managers.',
            'Conduct quality control on communication standards.',
            'Serve as a liaison between Managers and Directors.'
          ]
        },
        {
          title: 'Public Affairs Manager',
          description: 'Handles the primary functions of the Public Affairs Division, including report processing, public communication, and inquiry management.',
          icon: Shield,
          responsibilities: [
            'Review and process member reports or inquiries.',
            'Respond to applications or general questions.',
            'Coordinate communication between departments when necessary.',
            'Maintain detailed and organized case records.'
          ]
        },
        {
          title: 'Junior Public Affairs Manager',
          description: 'Assists higher-level managers with administrative and communication-based duties.',
          icon: Shield,
          responsibilities: [
            'Draft and organize reports or case files.',
            'Assist with responses to minor applications and public inquiries.',
            'Learn and uphold division standards for communication and response time.',
            'Support event coordination or public posting preparation.'
          ]
        },
        {
          title: 'Trainee Public Affairs Manager',
          description: 'Entry-level position in the Public Affairs Division designed for learning all departmental functions and standards.',
          icon: Users,
          responsibilities: [
            'Shadow Managers during report or inquiry handling.',
            'Learn documentation and internal communication systems.',
            'Attend required training and meetings.',
            'Assist with simple internal requests or ticket responses.'
          ]
        }
      ]
    },
    {
      level: 'Coordinators',
      levelColor: 'bg-green-500/20 text-green-400 border-green-500/30',
      roles: [
        {
          title: 'Staff & Relations Coordinator',
          description: 'Handles staff-facing communication, ensuring all staff inquiries, applications, and internal requests are properly managed.',
          icon: Heart,
          responsibilities: [
            'Process and track staff requests or role adjustments.',
            'Assist users with application or support guidance.',
            'Maintain professionalism in all internal communications.',
            'Forward unresolved matters to management for review.'
          ]
        },
        {
          title: 'Events & Media Coordinator',
          description: 'Focuses on organizing server events, department-wide announcements, and media content for community engagement.',
          icon: Calendar,
          responsibilities: [
            'Plan and schedule official community or department events.',
            'Create and post media-rich announcements.',
            'Coordinate with management for event approval and advertising.',
            'Archive event results or attendance records.'
          ]
        },
        {
          title: 'Public Relations Coordinator',
          description: 'Responsible for maintaining the hub\'s public image and handling all external communication or outreach-based projects.',
          icon: AlertTriangle,
          responsibilities: [
            'Represent the Department Hub in external communications.',
            'Monitor public feedback and relay concerns to management.',
            'Develop initiatives that promote transparency and engagement.',
            'Maintain consistency across all public-facing messages.'
          ]
        },
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
      levelColor: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
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

  const levelOptions = ['All', 'Executive Level', 'Director Level', 'High Command', 'Management Level', 'Coordinators', 'Department Staff']

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
                level === 'Director Level' ? 'bg-purple-400' :
                level === 'High Command' ? 'bg-blue-400' :
                level === 'Management Level' ? 'bg-orange-400' :
                level === 'Coordinators' ? 'bg-green-400' :
                level === 'Department Staff' ? 'bg-yellow-400' :
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
