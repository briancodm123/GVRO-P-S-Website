'use client'

import Link from 'next/link'
import { Home, ArrowLeft, Search, AlertTriangle } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen text-white py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        {/* 404 Error Display */}
        <div className="mb-12">
          <div className="relative">
            <h1 className="text-8xl md:text-9xl font-bold text-white mb-6 tracking-tight opacity-20">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <AlertTriangle className="w-16 h-16 text-[#ffa94d] animate-pulse" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Page Not Found
          </h2>
          <div className="w-20 h-1 bg-[#ffa94d] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link
            href="/"
            className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-[#ffa94d]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#ffa94d]/25"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ffa94d] rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                <Home className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Go Home</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Return to the main page
              </p>
            </div>
          </Link>

          <Link
            href="/departments"
            className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-[#ffa94d]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#ffa94d]/25"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ffa94d] rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                <Search className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Browse Departments</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Explore our departments
              </p>
            </div>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-[#ffa94d]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#ffa94d]/25"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ffa94d] rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                <ArrowLeft className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Go Back</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Return to previous page
              </p>
            </div>
          </button>
        </div>

        {/* Popular Links */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-[#ffa94d] mr-3 shadow-lg"></div>
            Popular Pages
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/applications"
              className="flex items-center justify-center px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-all duration-300"
            >
              Applications
            </Link>
            <Link
              href="/handbook"
              className="flex items-center justify-center px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-all duration-300"
            >
              Handbook
            </Link>
            <Link
              href="/staff"
              className="flex items-center justify-center px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-all duration-300"
            >
              Staff Directory
            </Link>
            <Link
              href="/departments"
              className="flex items-center justify-center px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-all duration-300"
            >
              Departments
            </Link>
          </div>
        </div>

        {/* Help Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Still can't find what you're looking for? Try browsing our departments or staff directory.
          </p>
        </div>
      </div>
    </div>
  )
}
