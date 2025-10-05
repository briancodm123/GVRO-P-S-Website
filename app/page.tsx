import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Enhanced Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        {/* Hero background */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            <div 
              className="w-full h-full opacity-20 bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://cdn.discordapp.com/banners/1396553162394960042/7ee6d2d4262ea7dd597e59ede4414e29.webp?size=1024")'
              }}
            />
          </div>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 drop-shadow-2xl tracking-tight">
            Welcome to Greenville Roleplay Operation
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl md:text-3xl mb-12 text-blue-200/90 leading-relaxed">
            Department Hub - Coordinating Public Services, Departments, and Community
          </p>
          <a
            href="https://discord.gg/Xgw7JDQ2HY"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-12 py-4 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-red-500/25 text-lg"
          >
            Join Our Server
          </a>
        </div>
      </section>

      {/* Enhanced Quick Links Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Quick Access</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-blue-200/80 text-lg mt-6 max-w-2xl mx-auto">
            Navigate to our key sections and resources
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-white/20 group">
            <div className="p-4 bg-blue-500/20 rounded-xl w-fit mb-6 group-hover:bg-blue-500/30 transition-colors duration-200">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Departments</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Explore all departments, their divisions, and chains of command.
            </p>
            <Link 
              href="/departments" 
              className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center group-hover:underline"
            >
              View Departments →
            </Link>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-white/20 group">
            <div className="p-4 bg-green-500/20 rounded-xl w-fit mb-6 group-hover:bg-green-500/30 transition-colors duration-200">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Applications</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Apply to join a department and contribute to Public Services operations.
            </p>
            <Link 
              href="/applications" 
              className="text-green-600 hover:text-green-700 font-semibold inline-flex items-center group-hover:underline"
            >
              Apply Now →
            </Link>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-white/20 group">
            <div className="p-4 bg-red-500/20 rounded-xl w-fit mb-6 group-hover:bg-red-500/30 transition-colors duration-200">
              <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">State Legislation Penal Codes</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Stay informed about our Law Enforcement Penal Codes & Fines.
            </p>
            <Link 
              href="/penal-codes" 
              className="text-red-600 hover:text-red-700 font-semibold inline-flex items-center group-hover:underline"
            >
              View Penal Codes →
            </Link>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-white/20 group">
            <div className="p-4 bg-purple-500/20 rounded-xl w-fit mb-6 group-hover:bg-purple-500/30 transition-colors duration-200">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Public Services Handbook</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Access the official handbook for all Public Services regulations and policies.
            </p>
            <Link 
              href="/handbook" 
              className="text-purple-600 hover:text-purple-700 font-semibold inline-flex items-center group-hover:underline"
            >
              View Handbook →
            </Link>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-white/20 group">
            <div className="p-4 bg-orange-500/20 rounded-xl w-fit mb-6 group-hover:bg-orange-500/30 transition-colors duration-200">
              <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Staff Directory</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Meet our dedicated staff members and department leadership.
            </p>
            <Link 
              href="/staff" 
              className="text-orange-600 hover:text-orange-700 font-semibold inline-flex items-center group-hover:underline"
            >
              View Staff →
            </Link>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-white/20 group">
            <div className="p-4 bg-teal-500/20 rounded-xl w-fit mb-6 group-hover:bg-teal-500/30 transition-colors duration-200">
              <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Get in touch with our team for questions, support, or feedback.
            </p>
            <Link 
              href="/contact" 
              className="text-teal-600 hover:text-teal-700 font-semibold inline-flex items-center group-hover:underline"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
