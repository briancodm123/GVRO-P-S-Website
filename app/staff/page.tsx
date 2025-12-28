'use client'

import { useState } from 'react'
import { Wrench, Settings, Headphones, FileText, Heart, Calendar, Shield, AlertTriangle, Car, Users, UserCheck, Cog } from 'lucide-react'

export default function StaffPage() {
  const [selectedLevel, setSelectedLevel] = useState<string>('All')

  const staffRoles = [
    {
      level: 'Executive Tier',
      levelColor: 'bg-red-500/20 text-red-400 border-red-500/30',
      roles: [
        {
          title: 'Executive Chief of Public Affairs',
          description: 'The highest-ranking executive position, providing ultimate oversight and strategic direction for the entire Public Affairs Division.',
          icon: Shield,
          responsibilities: [
            'Provide ultimate oversight and strategic direction for the division.',
            'Make final decisions on major policies and initiatives.',
            'Represent the division at the highest organizational levels.',
            'Approve all major public communications and announcements.'
          ]
        },
        {
          title: 'Chief Public Affairs Director',
          description: 'Senior executive responsible for overall division management and coordination with other departments.',
          icon: Settings,
          responsibilities: [
            'Manage overall division operations and strategic planning.',
            'Coordinate with other department heads and leadership.',
            'Oversee all directorate and management staff.',
            'Handle high-level disputes and sensitive matters.'
          ]
        },
        {
          title: 'Deputy Chief Public Affairs Director',
          description: 'Second-in-command executive, supporting the Chief Director in all operational and strategic matters.',
          icon: Settings,
          responsibilities: [
            'Support the Chief Director in leadership and decision-making.',
            'Oversee large-scale projects and initiatives.',
            'Supervise directorate-level staff and ensure policy compliance.',
            'Act as Chief Director during absence or delegation.'
          ]
        },
        {
          title: 'Associate Chief Public Affairs Director',
          description: 'Executive-level position providing administrative and operational support to the executive team.',
          icon: FileText,
          responsibilities: [
            'Manage executive-level documentation and communications.',
            'Handle scheduling and coordination for executive meetings.',
            'Assist in training and development of directorate personnel.',
            'Relay communication between executives and directorate staff.'
          ]
        }
      ]
    },
    {
      level: 'Directorate',
      levelColor: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      roles: [
        {
          title: 'Lead Public Affairs Director',
          description: 'Primary director responsible for daily operations and ensuring consistent performance across the division.',
          icon: Users,
          responsibilities: [
            'Oversee day-to-day management activities and operations.',
            'Mentor and guide upper management staff.',
            'Ensure reports, applications, and inquiries are handled promptly.',
            'Conduct periodic staff evaluations and quality assessments.'
          ]
        },
        {
          title: 'Assistant Public Affairs Director',
          description: 'Supports the Lead Director with staff supervision, report management, and operational coordination.',
          icon: UserCheck,
          responsibilities: [
            'Support daily affairs management and division documentation.',
            'Monitor management activity and workload distribution.',
            'Address internal questions and requests from staff members.',
            'Prepare operational summaries for executive review.'
          ]
        }
      ]
    },
    {
      level: 'Upper Management Tier',
      levelColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      roles: [
        {
          title: 'Administrative Affairs Manager',
          description: 'Leads the administrative affairs branch, ensuring proper handling of staff coordination and administrative processes.',
          icon: Wrench,
          responsibilities: [
            'Manage workflow among administrative staff members.',
            'Oversee administrative processes and documentation.',
            'Ensure all administrative requests are properly handled.',
            'Train new management-level personnel in administrative protocols.'
          ]
        },
        {
          title: 'Assistant Administrative Affairs Manager',
          description: 'Supports the Administrative Affairs Manager with workflow organization and administrative oversight.',
          icon: Headphones,
          responsibilities: [
            'Monitor activity levels and assign administrative tasks as needed.',
            'Track administrative progress and ensure completion deadlines are met.',
            'Handle administrative inquiries and requests.',
            'Maintain administrative logs and records.'
          ]
        }
      ]
    },
    {
      level: 'Low Management Tier',
      levelColor: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      roles: [
        {
          title: 'Senior Public Affairs Administrator',
          description: 'Senior administrator supervising the Public Affairs Administration team, ensuring professional communication and service delivery.',
          icon: Shield,
          responsibilities: [
            'Oversee reports, applications, and inquiries submitted to the division.',
            'Provide guidance and mentorship to junior administrators.',
            'Conduct quality control on communication and service standards.',
            'Serve as a liaison between administrators and management.'
          ]
        },
        {
          title: 'Public Affairs Administrator',
          description: 'Handles the primary functions of the Public Affairs Division, including report processing and public communication.',
          icon: Shield,
          responsibilities: [
            'Review and process member reports or inquiries.',
            'Respond to applications and general questions.',
            'Coordinate communication between departments when necessary.',
            'Maintain detailed and organized case records.'
          ]
        },
        {
          title: 'Assistant Public Affairs Administrator',
          description: 'Assists higher-level administrators with administrative and communication-based duties.',
          icon: Shield,
          responsibilities: [
            'Draft and organize reports or case files.',
            'Assist with responses to minor applications and public inquiries.',
            'Learn and uphold division standards for communication and response time.',
            'Support event coordination or public posting preparation.'
          ]
        },
        {
          title: 'Junior Public Affairs Administrator',
          description: 'Entry-level administrator position learning all departmental functions and standards.',
          icon: Users,
          responsibilities: [
            'Shadow administrators during report or inquiry handling.',
            'Learn documentation and internal communication systems.',
            'Attend required training and meetings.',
            'Assist with simple internal requests or ticket responses.'
          ]
        },
        {
          title: 'Trainee Public Affairs Administrator',
          description: 'Trainee position designed for learning all departmental functions and standards under supervision.',
          icon: Users,
          responsibilities: [
            'Observe and learn from experienced administrators.',
            'Complete training modules and assessments.',
            'Attend all required training sessions and meetings.',
            'Assist with basic tasks under direct supervision.'
          ]
        }
      ]
    },
    {
      level: 'Specialized Coordination Tier',
      levelColor: 'bg-green-500/20 text-green-400 border-green-500/30',
      roles: [
        {
          title: 'Public Affairs Media Production Coordinator',
          description: 'Coordinates all media production activities, including content creation, editing, and distribution.',
          icon: Calendar,
          responsibilities: [
            'Coordinate media production projects and content creation.',
            'Manage media assets and production schedules.',
            'Ensure quality standards for all media content.',
            'Collaborate with other coordinators on media initiatives.'
          ]
        },
        {
          title: 'Internal Relations Coordinator',
          description: 'Handles internal staff-facing communication, ensuring all staff inquiries and internal requests are properly managed.',
          icon: Heart,
          responsibilities: [
            'Process and track staff requests or role adjustments.',
            'Assist staff with application or support guidance.',
            'Maintain professionalism in all internal communications.',
            'Forward unresolved matters to management for review.'
          ]
        },
        {
          title: 'Events & Communications Coordinator',
          description: 'Focuses on organizing server events, department-wide announcements, and communication initiatives.',
          icon: Calendar,
          responsibilities: [
            'Plan and schedule official community or department events.',
            'Create and post department-wide announcements.',
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
        }
      ]
    }
  ]

  const levelOptions = ['All', 'Executive Tier', 'Directorate', 'Upper Management Tier', 'Low Management Tier', 'Specialized Coordination Tier']

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
          <div className="w-20 h-1 bg-[#ffa94d] mx-auto rounded-full"></div>
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
                  ? 'bg-[#ffa94d]/20 border-[#ffa94d]/50 text-[#ffa94d]'
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
                <div className="w-16 h-0.5 bg-[#ffa94d] mx-auto rounded-full"></div>
          </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {level.roles.map((role, roleIndex) => (
                  <div 
                    key={roleIndex}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-[#ffa94d]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#ffa94d]/10"
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg bg-[#ffa94d]/20 flex-shrink-0">
                        <role.icon className="w-6 h-6 text-[#ffa94d]" />
          </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2">{role.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{role.description}</p>
          </div>
        </div>

                    <div className="mt-4">
                      <h4 className="text-sm font-bold text-white mb-3 flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ffa94d] mr-2"></div>
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
