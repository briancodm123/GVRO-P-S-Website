import Link from 'next/link'
import { CheckCircle, Home, Mail } from 'lucide-react'

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center py-8">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-12">
          <div className="flex justify-center mb-6">
            <CheckCircle className="text-green-500 dark:text-green-400" size={64} />
          </div>
          
          <h1 className="text-4xl font-bold mb-6 text-gvro-red dark:text-red-400">
            Thank You!
          </h1>
          
          <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
            Your message has been successfully sent to the Public Affairs staff. 
            We will get back to you as soon as possible.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <Mail className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                <span className="font-semibold text-blue-800 dark:text-blue-200">What happens next?</span>
              </div>
              <p className="text-blue-700 dark:text-blue-300 text-sm">
                Our team will review your message and respond within 24-48 hours. 
                For urgent matters, please join our Discord server for faster assistance.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-gvro-red hover:bg-gvro-red-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              <Home className="mr-2" size={18} />
              Return to Home
            </Link>
            
            <a
              href="https://discord.gg/Xgw7JDQ2HY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              <svg className="mr-2" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Join Discord
            </a>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Need immediate assistance? Contact us directly at{' '}
              <a 
                href="mailto:gvropublicsafetyservices@gmail.com"
                className="text-gvro-red dark:text-red-400 hover:underline"
              >
                gvropublicsafetyservices@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
