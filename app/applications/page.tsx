import { ExternalLink } from 'lucide-react'

interface ApplicationCardProps {
  title: string
  description?: string
  applyUrl: string
}

const ApplicationCard = ({ title, description, applyUrl }: ApplicationCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200 dark:border-gray-700 flex justify-between items-center">
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gvro-red dark:text-red-400 mb-2">{title}</h3>
        {description && (
          <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
        )}
      </div>
      <a 
        href={applyUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-gvro-red hover:bg-gvro-red-dark dark:bg-gvro-red dark:hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2 ml-4"
      >
        Apply
        <ExternalLink size={16} />
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Department Applications
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Join one of our professional departments and contribute to public service excellence
          </p>
        </div>

        <div className="space-y-6">
          {applications.map((app, index) => (
            <ApplicationCard key={index} {...app} />
          ))}
        </div>

        {/* Notice */}
        <div className="mt-12 p-6 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 dark:border-yellow-500 rounded-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-yellow-800 dark:text-yellow-200">
                <strong>Notice:</strong> Please allow up to 72 hours for your application to be reviewed. 
                If it has not been reviewed, please create an assistance ticket.
              </p>
            </div>
          </div>
        </div>

        {/* Requirements Section */}
        <div className="mt-12 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Application Requirements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gvro-red dark:text-red-400 mb-3">General Requirements</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Must be 13+ years old</li>
                <li>• Discord account required</li>
                <li>• Microphone for voice communication</li>
                <li>• Commitment to professional conduct</li>
                <li>• Ability to follow chain of command</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gvro-red dark:text-red-400 mb-3">Application Process</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Complete online application form</li>
                <li>• Wait for review (up to 72 hours)</li>
                <li>• Attend interview if selected</li>
                <li>• Complete training program</li>
                <li>• Begin probationary period</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
