import { Shield, Users, Headphones, Calendar, UserCheck, AlertTriangle, Settings, Clipboard, Gavel, Cog } from 'lucide-react'

interface StaffRoleProps {
  title: string
  description: string
  duties: string[]
  icon: React.ReactNode
  level: 'executive' | 'management' | 'coordinator' | 'department'
}

const StaffRole = ({ title, description, duties, icon, level }: StaffRoleProps) => {
  const levelColors = {
    executive: 'border-red-500 bg-red-50 dark:bg-red-900/20',
    management: 'border-orange-500 bg-orange-50 dark:bg-orange-900/20',
    coordinator: 'border-blue-500 bg-blue-50 dark:bg-blue-900/20',
    department: 'border-green-500 bg-green-50 dark:bg-green-900/20'
  }

  const iconColors = {
    executive: 'text-red-600 dark:text-red-400',
    management: 'text-orange-600 dark:text-orange-400',
    coordinator: 'text-blue-600 dark:text-blue-400',
    department: 'text-green-600 dark:text-green-400'
  }

  return (
    <div className={`bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border-l-4 ${levelColors[level]} border border-gray-200 dark:border-gray-700`}>
      <div className="flex items-center mb-3">
        <div className={`mr-3 ${iconColors[level]}`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gvro-red dark:text-red-400">
          {title}
        </h3>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {description}
      </p>
      
      <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
        <h4 className="font-semibold text-gvro-red dark:text-red-400 mb-2">Duties:</h4>
        <ul className="space-y-1">
          {duties.map((duty, index) => (
            <li key={index} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
              <span className="text-gvro-red dark:text-red-400 mr-2 mt-1">•</span>
              <span>{duty}</span>
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
      title: "Server Handler",
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
      title: "Operations Manager",
      description: "Oversees internal workflow of Public Services, scheduling, and staff performance.",
      duties: [
        "Coordinate staff assignments, shifts, and patrols.",
        "Track activity, attendance, and performance.",
        "Collaborate with HR for disciplinary concerns.",
        "Create processes and checklists for operations.",
        "Report gaps or trends to leadership."
      ],
      icon: <Cog size={24} />,
      level: 'executive'
    },
    {
      title: "Outreach Manager",
      description: "Manages community engagement, server morale, and public outreach.",
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
    {
      title: "Human Resources Manager",
      description: "Handles staff concerns, misconduct reports, and ensures compliance.",
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

    // Management Roles
    {
      title: "Public Services Management",
      description: "Supervises daily staff functions, reports, and operational consistency.",
      duties: [
        "Act as on-duty leadership during operations.",
        "Monitor staff behavior and resolve minor conflicts.",
        "Handle shift reports, complaints, and escalations.",
        "Relay feedback between staff and Tier 2 management.",
        "Mentor and guide Trial PSMs into full staff roles."
      ],
      icon: <Shield size={24} />,
      level: 'management'
    },
    {
      title: "Assistant Public Services Management",
      description: "Assists full PSMs with shift supervision, tickets, and staff duties.",
      duties: [
        "Cover for unavailable PSMs or help co-lead operations.",
        "Manage basic infractions and staff queries.",
        "Shadow HR/Operations tasks when permitted.",
        "Gain experience toward full promotion to PSM.",
        "Complete assigned reports, check-ins, or duties."
      ],
      icon: <Shield size={24} />,
      level: 'management'
    },
    {
      title: "Trial Public Services Management",
      description: "Trial staff evaluated for performance, reliability, and leadership potential.",
      duties: [
        "Complete assigned patrols, reports, and moderation duties.",
        "Undergo review and mentorship by PSMs and management.",
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Public Services Staff
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Meet our dedicated leadership team committed to excellence in public service
          </p>
        </div>

        {/* Legend */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-red-700 dark:text-red-300 font-medium">Executive Level</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-orange-700 dark:text-orange-300 font-medium">Management Level</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-blue-700 dark:text-blue-300 font-medium">Coordinators</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-green-700 dark:text-green-300 font-medium">Department Roles</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffRoles.map((role, index) => (
            <StaffRole key={index} {...role} />
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Chain of Command
          </h2>
          <div className="text-center text-gray-600 dark:text-gray-300">
            <p className="mb-4">
              Please follow the proper chain of command when reporting issues or seeking assistance.
            </p>
            <p className="text-sm">
              For urgent matters, contact your immediate supervisor first. Only escalate to higher levels when necessary.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
