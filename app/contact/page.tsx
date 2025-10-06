'use client'

import { Mail, MessageCircle, Clock, Users, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen text-white py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-[#ccfd7f] mx-auto rounded-full"></div>
          <p className="text-gray-300 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
            Get in touch with our team and join our community
          </p>
        </div>

        {/* Coming Soon Notice */}
        <div className="mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20 text-center">
            <div className="w-24 h-24 bg-[#ccfd7f] rounded-full flex items-center justify-center mx-auto mb-8">
              <Clock className="w-12 h-12 text-slate-900" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Coming Soon</h2>
            <p className="text-gray-300 text-xl leading-relaxed max-w-2xl mx-auto">
              We're working on an advanced contact system that will make it easier than ever to reach our team and get the support you need.
            </p>
          </div>
        </div>

        {/* Current Contact Methods */}
        <div className="mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <div className="w-4 h-4 rounded-full bg-[#ccfd7f] mr-6 shadow-lg"></div>
              Current Contact Methods
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center space-x-6 p-8 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-[#ccfd7f] rounded-2xl flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-slate-900" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-2xl">Discord Server</h3>
                  <p className="text-gray-300 text-lg">Join our community Discord for real-time support</p>
                  <a 
                    href="https://discord.gg/Xgw7JDQ2HY" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#ccfd7f] font-medium hover:underline text-lg"
                  >
                    Join Discord →
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-6 p-8 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-[#ccfd7f] rounded-2xl flex items-center justify-center">
                  <Mail className="w-8 h-8 text-slate-900" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-2xl">Email Support</h3>
                  <p className="text-gray-300 text-lg">Send us an email for detailed inquiries</p>
                  <a 
                    href="mailto:support@gvro.com" 
                    className="text-[#ccfd7f] font-medium hover:underline text-lg"
                  >
                    support@gvro.com →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Features */}
        <div className="mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <div className="w-4 h-4 rounded-full bg-[#ccfd7f] mr-6 shadow-lg"></div>
              Upcoming Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white/5 rounded-2xl">
                <div className="w-20 h-20 bg-[#ccfd7f] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-10 h-10 text-slate-900" />
                </div>
                <h3 className="text-white font-semibold text-xl mb-3">Live Chat Support</h3>
                <p className="text-gray-300 text-lg">Real-time chat with our support team</p>
              </div>

              <div className="text-center p-8 bg-white/5 rounded-2xl">
                <div className="w-20 h-20 bg-[#ccfd7f] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-slate-900" />
                </div>
                <h3 className="text-white font-semibold text-xl mb-3">Staff Directory</h3>
                <p className="text-gray-300 text-lg">Direct contact with department leaders</p>
              </div>

              <div className="text-center p-8 bg-white/5 rounded-2xl">
                <div className="w-20 h-20 bg-[#ccfd7f] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-10 h-10 text-slate-900" />
                </div>
                <h3 className="text-white font-semibold text-xl mb-3">Location Services</h3>
                <p className="text-gray-300 text-lg">Find our facilities and meeting locations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <div className="w-4 h-4 rounded-full bg-[#ccfd7f] mr-6 shadow-lg"></div>
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a 
                href="/applications"
                className="block p-8 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 text-center"
              >
                <h3 className="text-white font-semibold text-2xl mb-3">Apply for a Position</h3>
                <p className="text-gray-300 text-lg">Join our team and start your career in public service</p>
              </a>

              <a 
                href="/staff"
                className="block p-8 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 text-center"
              >
                <h3 className="text-white font-semibold text-2xl mb-3">Meet Our Staff</h3>
                <p className="text-gray-300 text-lg">Learn about our leadership team and department structure</p>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Notice */}
        <div className="mt-24">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Need Immediate Help?</h3>
            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
              For urgent matters or emergency situations, please contact us through Discord or email immediately. 
              We're here to help and will respond as quickly as possible.
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://discord.gg/Xgw7JDQ2HY" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#ccfd7f] text-slate-900 rounded-2xl hover:bg-[#b8e85c] transition-colors duration-300 font-semibold text-lg"
              >
                Join Discord
              </a>
              <a 
                href="mailto:support@gvro.com"
                className="px-8 py-4 bg-white/10 text-white rounded-2xl hover:bg-white/20 transition-colors duration-300 font-semibold text-lg border border-white/20"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}