import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Enhanced Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        {/* Hero background */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div 
              className="w-full h-full opacity-20 bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://cdn.discordapp.com/banners/1396553162394960042/7ee6d2d4262ea7dd597e59ede4414e29.webp?size=1024")'
              }}
            />
          </div>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-2xl tracking-tight">
            Welcome to Greenville Roleplay Operation
          </h1>
          <div className="w-24 h-1 bg-[#ccfd7f] mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Department Hub - Coordinating Public Services, Departments, and Community
          </p>
          <a
            href="https://discord.gg/Xgw7JDQ2HY"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ccfd7f] hover:bg-[#b8e85c] text-slate-900 font-bold px-10 py-4 rounded-xl shadow-2xl transition-all duration-300 text-base"
          >
            Join Our Server
          </a>
        </div>
      </section>

      {/* Enhanced Quick Links Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            Quick Access Portal
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Navigate to essential services and resources with our advanced interface
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Departments */}
          <Link
            href="/departments"
            className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-[#ccfd7f]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#ccfd7f]/25"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ccfd7f] rounded-xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300">
                <svg className="w-8 h-8 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Departments</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Explore our law enforcement and emergency response departments
              </p>
            </div>
          </Link>

          {/* Applications */}
          <Link
            href="/applications"
            className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-[#ccfd7f]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#ccfd7f]/25"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ccfd7f] rounded-xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300">
                <svg className="w-8 h-8 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Applications</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Join our team and start your career in public service
              </p>
            </div>
          </Link>

          {/* Penal Codes */}
          <Link
            href="/penal-codes"
            className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-[#ccfd7f]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#ccfd7f]/25"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ccfd7f] rounded-xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300">
                <svg className="w-8 h-8 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Penal Codes</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Comprehensive reference for law enforcement codes and penalties
              </p>
            </div>
          </Link>

          {/* Handbook */}
          <Link
            href="/handbook"
            className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-[#ccfd7f]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#ccfd7f]/25"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ccfd7f] rounded-xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300">
                <svg className="w-8 h-8 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Handbook</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Official guidelines and procedures for public services
              </p>
            </div>
          </Link>
        </div>

        {/* Additional Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
          <Link
            href="/staff"
            className="group bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:border-[#ccfd7f]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#ccfd7f]/25"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#ccfd7f] rounded-lg flex items-center justify-center mr-4 transition-transform duration-300">
                <svg className="w-6 h-6 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Staff Directory</h3>
                <p className="text-gray-300 text-sm">Meet our leadership team</p>
              </div>
            </div>
          </Link>

          <Link
            href="/contact"
            className="group bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:border-[#ccfd7f]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#ccfd7f]/25"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#ccfd7f] rounded-lg flex items-center justify-center mr-4 transition-transform duration-300">
                <svg className="w-6 h-6 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Contact Us</h3>
                <p className="text-gray-300 text-sm">Get in touch with our team</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}