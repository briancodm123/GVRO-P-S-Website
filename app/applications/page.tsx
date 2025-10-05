import { ExternalLink } from 'lucide-react'

interface ApplicationCardProps {
  title: string
  description?: string
  applyUrl: string
}

const ApplicationCard = ({ title, description, applyUrl }: ApplicationCardProps) => {
  const getDepartmentColor = (title: string) => {
    switch (title) {
      case "Fox Valley Metro Police Department":
        return "#1e90ff"
      case "Outagamie County Sheriff's Office":
        return "#836d5a"
      case "Greenville Fire & Rescue":
        return "#ff0000"
      case "Wisconsin State Patrol":
        return "#18223c"
      case "Wisconsin Department of Transportation":
        return "#ffff00" // Yellow for WisDOT
      default:
        return "rgba(255,255,255,0.95)"
    }
  }

  const backgroundColor = getDepartmentColor(title)
  const isColored = backgroundColor !== "rgba(255,255,255,0.95)"
  const isWisDOT = title === "Wisconsin Department of Transportation"

  return (
    <div 
      className="backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-white/20 flex justify-between items-center"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="flex-1">
        <h3 
          className="text-2xl font-bold mb-3"
          style={{ 
            color: isWisDOT ? "#1f2937" : (isColored ? "white" : "#1f2937")
          }}
        >
          {title}
        </h3>
        {description && (
          <p 
            className="text-base leading-relaxed"
            style={{ 
              color: isWisDOT ? "#374151" : (isColored ? "rgba(255,255,255,0.9)" : "#4b5563")
            }}
          >
            {description}
          </p>
        )}
      </div>
      <a 
        href={applyUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`font-bold px-8 py-4 rounded-xl transition-all duration-200 flex items-center gap-3 ml-6 shadow-lg hover:shadow-xl hover:scale-105 backdrop-blur-sm border ${
          isWisDOT 
            ? "bg-gray-800 hover:bg-gray-900 text-white border-gray-700" 
            : "bg-white/20 hover:bg-white/30 text-white border-white/30"
        }`}
      >
        Apply Now
        <ExternalLink size={20} />
      </a>
    </div>
  )
}

export default function ApplicationsPage() {
  const applications: ApplicationCardProps[] = [
    {
      title: "Wisconsin State Patrol",
      description: "Join the premier state law enforcement agency. Handle highway patrol, traffic enforcement, and specialized operations.",
      applyUrl: "https://forms.gle/3sG5gkXGxjW6vaVp8"
    },
    {
      title: "Greenville Fire & Rescue",
      description: "Serve your community through firefighting, emergency medical services, and rescue operations.",
      applyUrl: "https://forms.gle/VyeyiAuNTcCDFvCK8"
    },
    {
      title: "Outagamie County Sheriff's Office",
      description: "Provide county-wide law enforcement services, jail operations, and community support.",
      applyUrl: "https://forms.gle/iYXo51u1fVPSsRds6"
    },
    {
      title: "Wisconsin Department of Transportation",
      description: "Maintain state infrastructure, manage transportation systems, and ensure road safety.",
      applyUrl: "https://forms.gle/MgjsgdN1qpRZsmJQ7"
    },
    {
      title: "Fox Valley Metro Police Department",
      description: "Serve the Fox Valley community with local law enforcement, patrol services, and public safety.",
      applyUrl: "https://forms.gle/ywBbyUSSohjPWZkZ7"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
            Department Applications
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-blue-200/80 text-lg mt-8 max-w-3xl mx-auto leading-relaxed">
            Join one of our professional departments and contribute to public service excellence
          </p>
        </div>

        <div className="space-y-8">
          {applications.map((app, index) => (
            <ApplicationCard key={index} {...app} />
          ))}
        </div>

        {/* Enhanced Notice */}
        <div className="mt-20 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="flex items-start">
            <div className="p-3 bg-yellow-500/20 rounded-xl mr-4 flex-shrink-0">
              <svg className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Important Notice</h3>
              <p className="text-blue-200/90 text-lg leading-relaxed">
                <strong>Please allow up to 72 hours for your application to be reviewed.</strong> 
                <br />
                If it has not been reviewed, please create an assistance ticket in the Public Safety Discord Server.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Requirements Section */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Application Requirements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                General Requirements
              </h3>
              <ul className="space-y-3 text-blue-200/90">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Must be 13+ years old</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Discord account required</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Microphone for voice communication</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Commitment to professional conduct</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Ability to follow chain of command</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                Application Process
              </h3>
              <ul className="space-y-3 text-blue-200/90">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Complete online application form</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Wait for review (up to 72 hours)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Attend interview if selected</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Complete training program</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Begin probationary period</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
