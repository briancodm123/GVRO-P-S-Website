import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '../components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GVRO Department Hub',
  description: 'Greenville Roleplay Operations Public Services Hub',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen text-white transition-colors bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <Navigation />
          <main className="pt-20">
            {children}
          </main>
          <footer className="bg-white/10 backdrop-blur-sm text-white text-center p-8 mt-auto border-t border-white/20">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                {/* Quick Links */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
                  <div className="space-y-2">
                    <a href="/departments" className="block text-gray-300 hover:text-[#ccfd7f] transition-colors">Departments</a>
                    <a href="/applications" className="block text-gray-300 hover:text-[#ccfd7f] transition-colors">Applications</a>
                    <a href="/penal-codes" className="block text-gray-300 hover:text-[#ccfd7f] transition-colors">Penal Codes</a>
                    <a href="/staff" className="block text-gray-300 hover:text-[#ccfd7f] transition-colors">Staff Directory</a>
                  </div>
                </div>
                
                {/* Contact Info */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
                  <div className="space-y-2">
                    <p className="text-gray-300">Discord Server</p>
                    <p className="text-gray-300">Greenville, Wisconsin</p>
                    <p className="text-gray-300">24/7 Support Available</p>
                  </div>
                </div>
                
                {/* About */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-4">About GVRO</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Greenville Roleplay Operations Public Services Hub - 
                    Your gateway to professional roleplay and community service.
                  </p>
                </div>
              </div>
              
              <div className="border-t border-white/20 pt-6">
                <p className="text-gray-400 text-sm">
                  &copy; 2025 Greenville Roleplay Operations | All Rights Reserved
                </p>
                <p className="text-xs mt-2 text-gray-500">
                  Made with ❤️ by <a href="https://mxtor.net" target="_blank" rel="noopener noreferrer" className="hover:text-[#ccfd7f] transition-colors underline">Kyle</a>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}