import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        {/* Hero background */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-black dark:via-gray-900 dark:to-gray-800">
            <div 
              className="w-full h-full opacity-30 bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://cdn.discordapp.com/banners/1396553162394960042/7ee6d2d4262ea7dd597e59ede4414e29.webp?size=1024")'
              }}
            />
          </div>
          <div className="absolute inset-0 bg-black/70 dark:bg-black/80"></div>
        </div>

        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Welcome to Greenville Roleplay Operation | Department Hub
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-gray-300 dark:text-gray-200">
            Coordinating Public Services, Departments, and Community
          </p>
          <a
            href="https://discord.gg/Xgw7JDQ2HY"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gvro-red hover:bg-gvro-red-dark text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-colors duration-200"
          >
            Join Our Server
          </a>
        </div>
      </section>

      {/* Quick Links / Highlights */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gvro-red dark:text-gvro-red mb-2">Departments</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Explore all departments, their divisions, and chains of command.
            </p>
            <Link 
              href="/departments" 
              className="text-gvro-red hover:text-gvro-red-dark dark:hover:text-red-400 hover:underline font-medium inline-flex items-center"
            >
              View Departments →
            </Link>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gvro-red dark:text-gvro-red mb-2">Applications</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Apply to join a department and contribute to Public Services operations.
            </p>
            <Link 
              href="/applications" 
              className="text-gvro-red hover:text-gvro-red-dark dark:hover:text-red-400 hover:underline font-medium inline-flex items-center"
            >
              Apply Now →
            </Link>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gvro-red dark:text-gvro-red mb-2">State Legislation Penal Codes</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Stay informed about our Law Enforcement Penal Codes & Fines.
            </p>
            <Link 
              href="/penal-codes" 
              className="text-gvro-red hover:text-gvro-red-dark dark:hover:text-red-400 hover:underline font-medium inline-flex items-center"
            >
              View Penal Codes →
            </Link>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gvro-red dark:text-gvro-red mb-2">Public Services Handbook</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Access the official handbook for all Public Services regulations and policies.
            </p>
            <Link 
              href="/handbook" 
              className="text-gvro-red hover:text-gvro-red-dark dark:hover:text-red-400 hover:underline font-medium inline-flex items-center"
            >
              View Handbook →
            </Link>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gvro-red dark:text-gvro-red mb-2">Staff Directory</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Meet our dedicated staff members and department leadership.
            </p>
            <Link 
              href="/staff" 
              className="text-gvro-red hover:text-gvro-red-dark dark:hover:text-red-400 hover:underline font-medium inline-flex items-center"
            >
              View Staff →
            </Link>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gvro-red dark:text-gvro-red mb-2">Contact Us</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Get in touch with our team for questions, support, or feedback.
            </p>
            <Link 
              href="/contact" 
              className="text-gvro-red hover:text-gvro-red-dark dark:hover:text-red-400 hover:underline font-medium inline-flex items-center"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
