'use client'

import { Clock, Mail, ArrowLeft, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl w-fit mx-auto mb-8 border border-white/20">
            <Mail className="w-16 h-16 text-white mx-auto" />
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-blue-200/80 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
            Get in touch with our team for questions, support, or feedback
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20 text-center">
          <div className="p-6 bg-yellow-500/20 rounded-xl w-fit mx-auto mb-8">
            <Clock className="w-12 h-12 text-yellow-400" />
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-6">Coming Soon</h2>
          <p className="text-blue-200/90 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
            We're currently developing a comprehensive contact system to better serve our community. 
            This will include direct messaging, support tickets, and streamlined communication channels 
            for all your needs.
          </p>
          
          <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">What to Expect</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span className="text-blue-200/90">Direct messaging system</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span className="text-blue-200/90">Support ticket management</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span className="text-blue-200/90">Faster response times</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span className="text-blue-200/90">Priority support channels</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Current Contact Methods</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <MessageCircle className="w-5 h-5 text-blue-400" />
                <span className="text-blue-200/90">Discord Server: Primary communication</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-blue-200/90">Email: gvropublicsafetyservices@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-white/20 hover:border-white/30 flex items-center justify-center gap-3"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <a
              href="https://discord.gg/Xgw7JDQ2HY"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Join Discord for Support
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-blue-200/60 text-sm">
            For immediate assistance, please join our Discord server
          </p>
        </div>
      </div>
    </div>
  )
}
