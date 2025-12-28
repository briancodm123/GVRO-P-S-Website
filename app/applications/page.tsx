'use client'

import { Shield, Building2, Zap, Car, FileText, CheckCircle, Clock, ArrowRight } from 'lucide-react'

export default function ApplicationsPage() {

  const getDepartmentColor = (title: string) => {
    switch (title) {
      case 'Fox Valley Metro Police Department': return '#1e90ff'
      case 'Outagamie County Sheriff\'s Office': return '#836d5a'
      case 'Greenville Fire & Rescue': return '#ff0000'
      case 'Wisconsin State Patrol': return '#18223c'
      case 'Wisconsin Department of Transportation': return '#ffff00'
      default: return '#6b7280'
    }
  }

  const applications = [
    {
      title: "Fox Valley Metro Police Department",
      description: "Join our dedicated team of law enforcement professionals serving the Fox Valley community with integrity, professionalism, and commitment to public safety.",
      icon: Shield,
      color: "#1e90ff",
      departmentType: "Law Enforcement",
      serviceArea: "Fox Valley Metropolitan Area",
      requirements: [
        "Must be 18+ years old",
        "Clean criminal record with no felony convictions",
        "Valid driver's license with good driving record",
        "High school diploma or equivalent (college preferred)",
        "Physical fitness requirements and medical examination",
        "Background check clearance and psychological evaluation",
        "Ability to work rotating shifts including nights and weekends",
        "Strong communication and interpersonal skills"
      ],
      trainingProgram: "16-week police academy followed by 12-week field training program"
    },
    {
      title: "Outagamie County Sheriff's Office",
      description: "Serve your community as a deputy sheriff with specialized training in corrections, court security, rural patrol, and emergency response services.",
      icon: Building2,
      color: "#836d5a",
      departmentType: "County Law Enforcement",
      serviceArea: "Outagamie County",
      requirements: [
        "Must be 21+ years old",
        "Clean criminal record with no misdemeanor or felony convictions",
        "Valid driver's license with excellent driving record",
        "Associate degree preferred (criminal justice or related field)",
        "Physical fitness requirements and medical examination",
        "Psychological evaluation and polygraph examination",
        "Ability to work in corrections, patrol, or specialized units",
        "Strong problem-solving and decision-making skills"
      ],
      trainingProgram: "12-week sheriff's academy with specialized training modules"
    },
    {
      title: "Greenville Fire & Rescue",
      description: "Be a hero in your community as a firefighter/EMT responding to emergencies, saving lives, and protecting property through fire suppression and medical response.",
      icon: Zap,
      color: "#ff0000",
      departmentType: "Fire & Emergency Medical Services",
      serviceArea: "Greenville Municipality",
      requirements: [
        "Must be 18+ years old",
        "Clean criminal record with no felony convictions",
        "Valid driver's license with good driving record",
        "EMT certification preferred (will provide training)",
        "Physical fitness requirements and medical examination",
        "Ability to work 24-hour shifts and respond to emergencies",
        "Strong teamwork and communication skills",
        "Commitment to public safety and community service"
      ],
      trainingProgram: "16-week fire academy with EMT certification training"
    },
    {
      title: "Wisconsin State Patrol",
      description: "Enforce traffic laws and ensure highway safety as a state trooper on Wisconsin's roadways, interstates, and rural areas with specialized training and equipment.",
      icon: Car,
      color: "#18223c",
      departmentType: "State Law Enforcement",
      serviceArea: "State of Wisconsin",
      requirements: [
        "Must be 21+ years old",
        "Clean criminal record with no convictions",
        "Valid driver's license with excellent driving record",
        "Bachelor's degree preferred (criminal justice or related field)",
        "Physical fitness requirements and medical examination",
        "Psychological evaluation and polygraph examination",
        "Ability to work rotating shifts and travel statewide",
        "Strong analytical and problem-solving abilities"
      ],
      trainingProgram: "20-week trooper academy with specialized highway enforcement training"
    },
    {
      title: "Wisconsin Department of Transportation",
      description: "Maintain and improve Wisconsin's transportation infrastructure as part of our operations team, ensuring safe and efficient roadways for all citizens.",
      icon: Building2,
      color: "#ffff00",
      departmentType: "Transportation Infrastructure",
      serviceArea: "State of Wisconsin",
      requirements: [
       ""
      ],
      trainingProgram: "8-week orientation and technical training program"
    }
  ]


  return (
    <div className="min-h-screen text-white py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
            Department Applications
          </h1>
          <div className="w-24 h-1 bg-[#ffa94d] mx-auto rounded-full"></div>
          <p className="text-gray-300 text-lg mt-8 max-w-3xl mx-auto leading-relaxed">
            Join our team of dedicated public servants and make a difference in your community. 
            Explore exciting career opportunities across our various departments and find your path to public service excellence.
          </p>
        </div>

        {/* Application Cards */}
        <div className="space-y-8">
          {applications.map((app, index) => {
            const IconComponent = app.icon
            const deptColor = getDepartmentColor(app.title)
            const isWisDOT = app.title === 'Wisconsin Department of Transportation'
            
            return (
              <div 
                key={index}
                className="rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl  bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <div className="p-8">
                  <div className="flex items-center space-x-6 mb-8">
                    <div 
                      className="w-18 h-18 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 "
                      style={{ backgroundColor: `${deptColor}20` }}
                    >
                      <IconComponent 
                        className="w-10 h-10" 
                        style={{ color: deptColor }} 
                      />
            </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-white mb-3">
                        {app.title}
                      </h2>
                      <p className="text-gray-300 text-lg leading-relaxed mb-4">
                        {app.description}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <div 
                          className="inline-flex items-center px-3 py-1 rounded-lg text-sm font-semibold"
                          style={{
                            backgroundColor: `${deptColor}20`,
                            color: deptColor
                          }}
                        >
                          {app.departmentType}
                        </div>
                        <div className="inline-flex items-center px-3 py-1 rounded-lg text-sm font-semibold bg-white/10 text-gray-300">
                          {app.serviceArea}
                        </div>
            </div>
          </div>
        </div>

                  {/* Apply Button */}
                  <div className="text-center">
                    <button 
                      className={`px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300  hover:shadow-lg flex items-center mx-auto space-x-3 ${
                        isWisDOT 
                          ? 'bg-slate-800 hover:bg-slate-700 text-white shadow-slate-800/25' 
                          : 'bg-[#ffa94d] hover:bg-[#e6943d] text-slate-900 shadow-[#ffa94d]/25'
                      }`}
                      onClick={() => {
                        // Open Discord server or application form
                        window.open('https://discord.gg/GVRPR', '_blank')
                      }}
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
            </div>

        {/* Application Process Overview */}
        <div className="mt-24">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <div className="w-4 h-4 rounded-full bg-[#ffa94d] mr-6 shadow-lg"></div>
              General Application Process
            </h3>
            <div className="space-y-6 text-gray-300">
              <p className="flex items-start space-x-4 text-lg">
                <FileText className="w-6 h-6 text-[#ffa94d] mt-1 flex-shrink-0" />
                <span>Submit your application through our Discord server or contact the department directly for application materials.</span>
              </p>
              <p className="flex items-start space-x-4 text-lg">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span>Applications are reviewed within 48-72 hours of submission by department leadership.</span>
              </p>
              <p className="flex items-start space-x-4 text-lg">
                <Clock className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                <span>If your application has not been reviewed within 72 hours, please create an assistance ticket in the Public Safety Discord Server.</span>
              </p>
              <p className="flex items-start space-x-4 text-lg">
                <Clock className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <span>Successful applicants will be contacted for interviews and testing within 1-2 weeks of application submission.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
