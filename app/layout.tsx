import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GVRO Department Hub',
  description: 'Greenville Roleplay Operations Public Services Hub',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
            <Navigation />
            <main className="pt-20">
              {children}
            </main>
            <footer className="bg-gvro-red dark:bg-gvro-red-dark text-white text-center p-4 mt-auto">
              <p>&copy; 2025 Department Hub | All Rights Reserved</p>
              <p className="text-xs mt-2 opacity-70">
                Made by <a href="https://mxtor.net" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity underline">Kyle</a>
              </p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
