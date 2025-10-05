import { Shield, Users, Headphones, Calendar, UserCheck, AlertTriangle, Settings, Clipboard, Gavel, Cog, UserPlus, MessageCircle, Heart } from 'lucide-react'

interface StaffRoleProps {
  title: string
  description: string
  duties: string[]
  icon: React.ReactNode
  level: 'executive' | 'management' | 'coordinator' | 'department'
}

const StaffRole = ({ title, description, duties, icon, level }: StaffRoleProps) => {
  const levelColors = {
    executive: 'border-red-500 bg-gradient-to-br from-red-50 to-red-100',
    management: 'border-orange-500 bg-gradient-to-br from-orange-50 to-orange-100',
    coordinator: 'border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100',
    department: 'border-green-500 bg-gradient-to-br from-green-50 to-green-100'
  }

  const iconColors = {
    executive: 'text-red-600',
    management: 'text-orange-600',
    coordinator: 'text-blue-600',
    department: 'text-green-600'
  }

  return (
    <div className={`bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-l-4 ${levelColors[level]} border border-gray-200/50`}>
      <div className="flex items-center mb-4">
        <div className={`mr-4 p-3 rounded-xl bg-white/80 shadow-md ${iconColors[level]}`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900">
          {title}
        </h3>
      </div>
      
      <p className="text-gray-600 mb-6 text-base leading-relaxed">
        {description}
      </p>
      
      <div className="border-t border-gray-200 pt-6">
        <h4 className="font-bold text-gray-800 mb-4 flex items-center">
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
          Key Responsibilities
        </h4>
        <ul className="space-y-3">
          {duties.map((duty, index) => (
            <li key={index} className="text-gray-600 text-sm flex items-start group">
              <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-blue-500 transition-colors duration-200"></div>
              <span className="leading-relaxed">{duty}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function StaffPage() {
  const staffRoles: StaffRoleProps[] = [
    // Executive Roles
    {
      title: "Public Services Overseer",
      description: "Oversees server systems, backend decisions, and administrative infrastructure. Contact only in critical circumstances.",
      duties: [
        "Maintain backend systems, integrations, and core infrastructure.",
        "Implement server-wide changes approved by leadership.",
        "Handle escalations outside Public Services scope.",
        "Remain informed but not directly involved in moderation."
      ],
      icon: <Gavel size={24} />,
      level: 'executive'
    },
    {
      title: "Ass. Public Services Overseer",
      description: "Assistant role supporting public services operations and oversight.",
      duties: [
        "Coordinate staff assignments, shifts, and patrols.",
        "Track activity, attendance, and performance.",
        "Collaborate with Relations Overseer for disciplinary concerns.",
        "Create processes and checklists for operations.",
        "Report gaps or trends to leadership."
      ],
      icon: <Cog size={24} />,
      level: 'executive'
    },
    {
      title: "Assist. Public Services Overseer",
      description: "Assistant role supporting public services oversight and coordination.",
      duties: [
        "Monitor member satisfaction and concerns.",
        "Coordinate feedback forms, Q&As, and outreach polls.",
        "Organize community-facing initiatives.",
        "Ensure staff remain approachable and professional.",
        "Collaborate with Events Coordinator for public events."
      ],
      icon: <Headphones size={24} />,
      level: 'executive'
    },

    // Lead Management
    {
      title: "Relations Overseer",
      description: "Oversees staff relations, recruitment, and administrative functions.",
      duties: [
        "Investigate complaints against staff or management.",
        "Oversee disciplinary actions and resolutions.",
        "Track infractions and documentation.",
        "Serve as neutral party in disputes.",
        "Maintain professional standards across staff."
      ],
      icon: <Clipboard size={24} />,
      level: 'executive'
    },
    {
      title: "Community Overseer",
      description: "Oversees community relations, outreach, and engagement activities.",
      duties: [
        "Develop and maintain positive community relationships.",
        "Coordinate community outreach programs and initiatives.",
        "Handle community feedback, concerns, and suggestions.",
        "Organize community meetings and public forums.",
        "Report on community sentiment and engagement metrics."
      ],
      icon: <Heart size={24} />,
      level: 'executive'
    },
    {
      title: "Events Overseer",
      description: "Oversees planning, coordination, and execution of community events.",
      duties: [
        "Plan and coordinate community events and activities.",
        "Manage event logistics, resources, and staff assignments.",
        "Ensure events align with organizational goals and values.",
        "Coordinate with departments for event support and security.",
        "Evaluate event success and gather feedback for improvements."
      ],
      icon: <Calendar size={24} />,
      level: 'executive'
    },
    {
      title: "Lead Management",
      description: "Senior leadership role overseeing multiple departments and operations.",
      duties: [
        "Lead and coordinate multiple departments and their activities.",
        "Make strategic decisions affecting overall operations.",
        "Handle complex inter-departmental issues and conflicts.",
        "Report directly to executive management on operations.",
        "Develop and implement organizational policies and procedures."
      ],
      icon: <Users size={24} />,
      level: 'executive'
    },
    {
      title: "Assist. Lead Management",
      description: "Assistant leadership role supporting lead management functions.",
      duties: [
        "Support lead management in daily operations and decision-making.",
        "Assist with staff coordination and department oversight.",
        "Handle routine management tasks and staff inquiries.",
        "Prepare reports and documentation for lead management review.",
        "Mentor junior staff and department coordinators."
      ],
      icon: <Users size={24} />,
      level: 'executive'
    },

    // Management Roles
    {
      title: "Public Services Manager",
      description: "Supervises daily staff functions, reports, and operational consistency.",
      duties: [
        "Act as on-duty leadership during operations.",
        "Monitor staff behavior and resolve minor conflicts.",
        "Handle shift reports, complaints, and escalations.",
        "Relay feedback between staff and Tier 2 management.",
        "Mentor and guide Trainee Public Services Managers into full staff roles."
      ],
      icon: <Shield size={24} />,
      level: 'management'
    },
    {
      title: "Senior Public Service Manager",
      description: "Senior management role with advanced responsibilities and leadership duties.",
      duties: [
        "Provide advanced leadership and mentorship to junior managers.",
        "Handle complex operational decisions and policy implementation.",
        "Oversee multiple departments and coordinate cross-functional activities.",
        "Serve as escalation point for critical issues and conflicts.",
        "Develop and implement strategic initiatives for department improvement."
      ],
      icon: <Shield size={24} />,
      level: 'management'
    },
    {
      title: "Junior Public Services Management",
      description: "Assists full managers with shift supervision, tickets, and staff duties.",
      duties: [
        "Cover for unavailable managers or help co-lead operations.",
        "Manage basic infractions and staff queries.",
        "Shadow HR/Operations tasks when permitted.",
        "Gain experience toward full promotion to manager.",
        "Complete assigned reports, check-ins, or duties."
      ],
      icon: <Shield size={24} />,
      level: 'management'
    },
    {
      title: "Trainee Public Services Manager",
      description: "Trial staff evaluated for performance, reliability, and leadership potential.",
      duties: [
        "Complete assigned patrols, reports, and moderation duties.",
        "Undergo review and mentorship by managers and senior management.",
        "Demonstrate consistency, maturity, and initiative.",
        "Ask questions and learn procedures, policies, and expectations.",
        "May be removed or promoted based on performance and attitude."
      ],
      icon: <UserCheck size={24} />,
      level: 'management'
    },

    // Coordinators
    {
      title: "Law Enforcement Coordinator",
      description: "Senior staff member overseeing all law enforcement departments.",
      duties: [
        "Oversee all three law enforcement departments and ensure policies are followed.",
        "Supervise command staff and address performance issues.",
        "Approve and manage training for consistency.",
        "Review incidents and handle complaints.",
        "Coordinate joint operations with other departments.",
        "Track rosters, patrols, and activity logs."
      ],
      icon: <Settings size={24} />,
      level: 'coordinator'
    },
    {
      title: "Fire Department Coordinator",
      description: "Leads and manages the Fire & Rescue department.",
      duties: [
        "Lead Fire & Rescue operations and maintain safety standards.",
        "Approve and oversee fire, rescue, and medical training.",
        "Direct major incident responses.",
        "Manage staffing, rosters, and equipment assignments.",
        "Enforce policies and SOPs.",
        "Work with LEO and WisDOT during joint responses."
      ],
      icon: <AlertTriangle size={24} />,
      level: 'coordinator'
    },
    {
      title: "WisDOT Coordinator",
      description: "Oversees Wisconsin Department of Transportation operations.",
      duties: [
        "Manage traffic control, road work, and highway safety operations.",
        "Oversee WisDOT units during incidents and closures.",
        "Coordinate with LEO and Fire for safe scene management.",
        "Approve participation in events and projects.",
        "Ensure training in traffic control and safety.",
        "Maintain WisDOT vehicles, signs, and equipment."
      ],
      icon: <Settings size={24} />,
      level: 'coordinator'
    },

    // Department Roles
    {
      title: "Department Directors",
      description: "Highest-ranking officials in each department; responsible for leadership and strategic planning.",
      duties: [
        "Oversee department operations and personnel.",
        "Approve or deny department-related requests.",
        "Coordinate with server leadership.",
        "Maintain standards and direction for the department."
      ],
      icon: <Users size={24} />,
      level: 'department'
    },
    {
      title: "Assistant Department Directors",
      description: "Second-in-command, assist the Director, handle daily issues.",
      duties: [
        "Assist with oversight of department activities.",
        "Handle escalated complaints or issues.",
        "Coordinate with Supervisors and Staff.",
        "Help with planning training, meetings, or assignments."
      ],
      icon: <Users size={24} />,
      level: 'department'
    },
    {
      title: "Department Administration",
      description: "Trusted senior members managing rosters, documentation, and workflows.",
      duties: [
        "Maintain rosters and internal documentation.",
        "Help onboard new staff.",
        "Organize department events or tasks.",
        "Assist with evaluations, reports, or scheduling."
      ],
      icon: <Clipboard size={24} />,
      level: 'department'
    },
    {
      title: "Department Staff",
      description: "Core members performing operational duties and supporting department tasks.",
      duties: [
        "Perform day-to-day operational duties.",
        "Submit patrols or activity logs.",
        "Maintain professionalism and follow chain of command.",
        "Follow procedure when reporting issues or concerns."
      ],
      icon: <UserCheck size={24} />,
      level: 'department'
    },
    {
      title: "Department Supervisors",
      description: "Entry-level leadership overseeing small groups and enforcing standards.",
      duties: [
        "Supervise lower-ranked staff and address basic issues.",
        "Provide guidance and training.",
        "Monitor performance and report concerns.",
        "Help enforce standards and protocols during operations."
      ],
      icon: <Shield size={24} />,
      level: 'department'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
            Public Services Staff
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-blue-200/80 text-lg mt-8 max-w-3xl mx-auto leading-relaxed">
            Meet our dedicated leadership team committed to excellence in public service and community safety
          </p>
        </div>

        {/* Enhanced Legend */}
        <div className="mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Staff Hierarchy</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center gap-3 p-4 bg-red-500/20 rounded-xl border border-red-400/30">
                <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg"></div>
                <span className="text-white font-semibold">Executive Level</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-orange-500/20 rounded-xl border border-orange-400/30">
                <div className="w-4 h-4 bg-orange-500 rounded-full shadow-lg"></div>
                <span className="text-white font-semibold">Management Level</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-blue-500/20 rounded-xl border border-blue-400/30">
                <div className="w-4 h-4 bg-blue-500 rounded-full shadow-lg"></div>
                <span className="text-white font-semibold">Coordinators</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-green-500/20 rounded-xl border border-green-400/30">
                <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg"></div>
                <span className="text-white font-semibold">Department Roles</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffRoles.map((role, index) => (
            <StaffRole key={index} {...role} />
          ))}
        </div>

        {/* Enhanced Contact Information */}
        <div className="mt-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Chain of Command
            </h2>
            <div className="text-center">
              <p className="text-blue-200/90 text-lg mb-6 leading-relaxed">
                Please follow the proper chain of command when reporting issues or seeking assistance.
              </p>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <p className="text-blue-200/80 text-base">
                  For urgent matters, contact your immediate supervisor first. Only escalate to higher levels when necessary.
                </p>
              </div>
              <div className="mt-6 flex justify-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
