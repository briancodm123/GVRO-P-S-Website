'use client'

import { useState } from 'react'
import { ChevronDown, ChevronRight, Lock, BookOpen, FileText, AlertTriangle, Shield, Clock } from 'lucide-react'

interface HandbookSection {
  id: string
  title: string
  content: string[]
}

export default function HandbookPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const handbookSections: HandbookSection[] = [
    {
      id: "notice",
      title: "Notice",
      content: [
        "This handbook is the official property of Greenville Roleplay Operation (GVRO). It is intended solely for members of GVRO Public Affairs.",
        "Unauthorized distribution, reproduction, or use in other servers will result in an immediate and permanent blacklist from GVRO Public Affairs."
      ]
    },
    {
      id: "abbreviations",
      title: "Abbreviations",
      content: [
        "IC – In-Character (roleplay perspective)",
        "OOC – Out-of-Character",
        "FRP – Failure to Roleplay / Failing Roleplay Standards",
        "AO – Area of Operations",
        "BOLO – Be On the Lookout",
        "ETA – Estimated Time of Arrival",
        "MIA – Missing In Action",
        "K9 – Police Canine Unit",
        "SWAT – Special Weapons and Tactics",
        "CPR – Cardiopulmonary Resuscitation",
        "911 – Emergency Dispatch / Call for Assistance",
        "POV – Point of View (used in RP or reports)",
        "ID – Identification / ID Check",
        "CMD – Command / Commander",
        "HR – Human Resources / Department of Personnel",
        "AOI – Area of Interest",
        "VIP – Very Important Person / Roleplay VIPs",
        "NPC – Non-Player Character",
        "POI - Person of Interest",
        "AWOL - Absent without official leave but without intent to desert",
        "FTA (Traffic) – Failure to Acknowledge / Failure to Yield",
        "SOP – Standard Operating Procedure",
        "BOI – Bureau of Investigation",
        "CID – Criminal Investigations Division",
        "UOF – Use of Force",
        "LE – Law Enforcement",
        "GSR – Gunshot Residue",
        "NCIC – National Crime Information Center",
        "MVA – Motor Vehicle Accident",
        "FTA – Failure to Appear",
        "BLS – Basic Life Support",
        "ALS – Advanced Life Support",
        "EMS – Emergency Medical Services",
        "MCI – Mass Casualty Incident",
        "DOA – Dead on Arrival",
        "ROSC – Return of Spontaneous Circulation",
        "EDP – Emotionally Disturbed Person",
        "CAD – Computer-Aided Dispatch",
        "MDT – Mobile Data Terminal",
        "COMMS – Communications (radio/dispatch)",
        "RPU – Roleplay Unit",
        "ETD – Estimated Time of Departure",
        "CoC – Chain of Command",
        "TBD – To Be Determined",
        "NFA – No Further Action",
        "IA – Internal Affairs",
        "PS – Public Affairs",
        "OpsSec – Operations Security",
        "LoA – Leave of Absence",
        "NDA – Non-Disclosure Agreement",
        "CBA – Conduct-Based Action",
        "DB – Database",
        "RA – Ride Along"
      ]
    },
    {
      id: "1.0",
      title: "1.0 – General Conduct & Professionalism",
      content: [
        "1.1. Common Sense – Members are expected to apply common sense in all situations. Not every circumstance can be covered by the handbook, so it is your responsibility to act reasonably, professionally, and with respect for others.",
        "1.2. Discord Terms of Service – All members must comply with Discord Terms of Service at all times. Violations of Discord's ToS risk the safety of GVRO as a community and will result in immediate removal.",
        "1.3. Roblox Terms of Service – The Roblox Terms of Service apply whenever you are representing GVRO. Exploiting, bypassing filters, glitching, or engaging in prohibited activity will result in permanent removal.",
        "1.4. Confidentiality – Members must not leak or share private GVRO information. Doing so will result in immediate termination and an unappealable blacklist.",
        "1.5. Professionalism & Respect – Professional conduct is expected at all times. Members must remain respectful, patient, and courteous when interacting with civilians, staff, or other service members.",
        "1.6. Abuse of Authority – Any misuse of staff tools such as warnings, kicks, mutes, or bans will be considered abuse of authority and will result in immediate disciplinary action.",
        "1.7. Drama – Conflicts must be handled professionally through tickets. Public arguments, gossip, or instigating drama will result in disciplinary action.",
        "1.8. Moderation Enforcement – When issuing punishments, staff must provide valid evidence. Screenshots, recordings, or logs are required for transparency and fairness.",
        "1.9. Social Media & External Conduct – Members are representatives of GVRO even outside of Roblox/Discord. Negative behavior can still result in action within GVRO.",
        "1.10. Misuse of Tickets or Reports – Submitting false reports or spamming tickets will result in disciplinary action.",
        "1.11. Interdepartment Cooperation – Departments must work together professionally. Rivalries or interference is not tolerated.",
        "1.12. Chain of Command Respect – Members must respect the authority of higher-ranking staff and department leaders.",
        "1.13. Event & Training Attendance – If you register or are required to attend an official event, you must show up on time unless excused.",
        "1.14. Department Transfers – Transfers require approval from both department heads and leadership. Unauthorized transfers will result in removal.",
        "1.15. Use of Language & Communication – Members must use clear, respectful language in roleplay and staff communication.",
        "1.16. Radio & Comms Discipline – Radio communications must remain professional and concise. Unnecessary chatter disrupts operations.",
        "1.17. Personal Vendettas – Moderation or roleplay actions may not be taken to settle personal disputes.",
        "1.18. Respect for Civilians – Members must treat civilians fairly. Excessive targeting or harassment will result in action.",
        "1.19. Maturity Requirement – Members are expected to maintain maturity in all communications.",
        "1.20. Appeals & Disputes – Members have the right to appeal disciplinary actions through the appropriate ticket system.",
        "1.21. AFK on Duty – Members may not remain AFK while clocked in or on patrol.",
        "1.22. Real-Life Discretion – Members must never share real-life personal details in GVRO spaces.",
        "1.23. LOA Communication – Members on LOA must return on the stated date or notify staff of an extension.",
        "1.24. Harassment-Free Environment – GVRO maintains a zero-tolerance policy toward harassment and discrimination."
      ]
    },
    {
      id: "2.0",
      title: "2.0 – Vehicle & Driving Conduct",
      content: [
        "2.1. Traffic Flow – Driving against the flow of traffic while on duty is strictly prohibited.",
        "2.2. U-Turns – Performing U-turns over medians or unsafe locations is prohibited.",
        "2.3. Reckless Driving – Reckless driving while on duty is not permitted. Members are expected to drive responsibly and realistically.",
        "2.4. Responding Speeds – Members must not exceed 105 MPH (168 KM/H) while responding to emergencies or engaging in pursuits.",
        "2.5. Traffic Stops – Traffic stops may only be performed on civilians. Members are never permitted to pull over staff or other Public Affairs.",
        "2.6. Unauthorized Chases – Only designated High Speed Unit personnel may engage in pursuits. Unauthorized chasing will result in discipline.",
        "2.7. Emergency Lighting Systems (ELS) – ELS and sirens must only be used in legitimate roleplay situations. Misuse will result in strikes or suspension.",
        "2.8. Vehicle Use & Scene Realism – Vehicles used must fit the context of the roleplay. Excessive spawning or abandoning vehicles disrupts immersion."
      ]
    },
    {
      id: "3.0",
      title: "3.0 – Roleplay & Operational Standards",
      content: [
        "3.1. Use of Force & Roleplay Realism – Members must use appropriate force in all roleplay interactions. Escalation must be proportional to the situation.",
        "3.2. Corruption Roleplay – Corruption roleplay is strictly prohibited unless explicitly authorized by GVRO leadership.",
        "3.3. Off-Duty Conduct – When not on duty, members must still act responsibly and not disrupt roleplay sessions.",
        "3.4. Use of Recording & Media – Members may record sessions for evidence or training, but recordings must respect member privacy.",
        "3.5. Scene Ownership & Control – Once a roleplay scene is established, it is under the control of the initiating department.",
        "3.6. Staff Powers Outside of Roleplay – Staff must not use their powers to interfere with roleplay unless absolutely necessary.",
        "3.7. Retaliation Against Reports – Members may not retaliate against others for filing reports or cooperating with investigations.",
        "3.8. Mic/VC Etiquette – If using voice communications, members must maintain a clear and professional tone.",
        "3.9. Event Interference – Members who are not part of a scheduled event may not interfere or disrupt the session.",
        "3.10. Unauthorized Roleplay Scenarios – Large-scale scenarios must be coordinated through leadership.",
        "3.11. Proper Use of Department Resources – Department resources must only be used for their intended purpose.",
        "3.12. Accountability for Guests/Visitors – Members are responsible for the behavior of guests they invite.",
        "3.13. Conflict Resolution – Disagreements should be handled privately or with staff mediation.",
        "3.14. Timezones & Availability – Members should be transparent about their activity level and timezone.",
        "3.15. Promotions & Rank Advancement – Promotions are based on merit, activity, and professionalism.",
        "3.16. Training & Certification Requirements – Members may not perform specialized duties without completing required training.",
        "3.17. Emergency Situations (OOC Authority) – Staff may override regulations to protect the server or players.",
        "3.18. Chain of Evidence – Members must not falsify, alter, or destroy evidence.",
        "3.19. OOC vs IC Separation – Members must distinguish between in-character and out-of-character actions.",
        "3.20. Favoritism & Bias – Staff must remain impartial. All members are subject to the same rules.",
        "3.21. Dual-Clanning / Unauthorized Affiliations – Members may not represent competing groups while serving in GVRO.",
        "3.22. Use of Recording / Streaming – Recordings must comply with privacy and security standards.",
        "3.23. Staff Impersonation – Impersonating staff or misrepresenting rank is strictly prohibited.",
        "3.24. Exploit / Cheat Reporting – Members must report exploits or rule-breaking through appropriate channels.",
        "3.25. Alt Accounts – Members may only use their approved account when serving in GVRO.",
        "3.26. Documentation & Logs – Members must properly log shifts and activity when required.",
        "3.27. Chain of Custody – Evidence must be handled realistically during roleplay.",
        "3.28. Technology & Bots – Members may not use unauthorized bots, macros, or scripts.",
        "3.29. Transparency in Leadership – Leadership must clearly communicate decisions that affect departments.",
        "3.30. Safety Overrides in Roleplay – Staff may pause scenarios if they become unsafe or uncomfortable.",
        "3.31. Data Security & Privacy – Members must not attempt unauthorized access to GVRO systems."
      ]
    },
    {
      id: "4.0",
      title: "4.0 – Policies, Attendance & LOA",
      content: [
        "4.1. Radio Traffic Only VC – While on patrol, members must remain in Dispatch Communications channels.",
        "4.2. Promotions – Promotions are based on activity, professionalism, and overall contribution to GVRO.",
        "4.3. Resignations – Members may resign at any time. Upon returning, they may not retain their former rank.",
        "4.4. Leave of Absence (LOA) – Minimum Duration: 7 days, Maximum Duration: 28 days. Members must wait at least 10 days between LOA requests.",
        "4.5. Attendance Tracking – Members are required to log attendance for all official events and shifts.",
        "4.6. Late Arrival / Early Departure – Arriving late or leaving early without notice is a violation.",
        "4.7. LOA Extensions & Violations – Extensions may be requested for valid circumstances. Failure to communicate will result in removal.",
        "4.8. Return from LOA – Members must check in with their department upon return from LOA.",
        "4.9. Inactivity Policy – Members must maintain a minimum activity level according to department requirements.",
        "4.10. Event Participation Policy – Mandatory events must be attended unless excused.",
        "4.11. Accountability for Scheduling Conflicts – Members must proactively communicate conflicts that affect attendance."
      ]
    },
    {
      id: "5.0",
      title: "5.0 – Disciplinary Actions & Punishments",
      content: [
        "5.1. Verbal Warning Offenses:",
        "• First-time reckless driving",
        "• Improper ELS or siren use",
        "• Responding to unrelated calls",
        "• Failure to remain in RTO",
        "• Forgetting to log shifts",
        "• Improper radio etiquette",
        "• Improper parking or procedures",
        "• Speeding 4–9 MPH over FRP",
        "• Not using callsigns",
        "• Excessive casual talk in RTO",
        "• Pulling over staff or other services",
        "",
        "5.2. Strike Offenses:",
        "• Refusing to follow orders – 1–2 Strikes",
        "• Issuing false punishments – 2 Strikes",
        "• Repeated FRP – 1–2 Strikes",
        "• Driving 105+ MPH while responding – 1 Strike",
        "• Failure to follow handbook rules – 1 Strike",
        "• Unsafe driving – 1–2 Strikes",
        "• Unrealistic roleplay – 1 Strike",
        "• Interfering with staff scenes – 2 Strikes",
        "• Disrespect toward members – 1 Strike",
        "• Logging false activity – 2 Strikes",
        "• Unauthorized vehicle use – 1 Strike",
        "• Impersonating higher rank – 2 Strikes",
        "• Spam or harassment – 1 Strike",
        "• Unauthorized chases – 2 Strikes",
        "",
        "Strike Policy: Maximum of 3 active strikes results in automatic suspension.",
        "",
        "5.3. Suspension Offenses:",
        "• Misuse of authority tools – 3–7 days",
        "• Repeated strikes – 3–7 days",
        "• FRP/roleplay mechanics abuse – 3–7 days",
        "• Harassment or discrimination – 7–14 days",
        "• Leaking confidential info – 14 days or termination review",
        "• Corruption roleplay abuse – 7–14 days",
        "• Evidence falsification – 14 days or termination review",
        "• Event disruption – 5–10 days",
        "• Department sabotage – 7–14 days",
        "",
        "5.4. Termination Offenses:",
        "• Severe abuse of staff powers – Immediate",
        "• Multiple suspensions – After 2+ suspensions",
        "• Deliberate repeated harassment – Immediate",
        "• Exploiting system or game – Immediate",
        "• Major corruption or betrayal – Immediate",
        "• Repeated falsification – Immediate",
        "",
        "5.5. Blacklist Offenses:",
        "• Sharing confidential data – Permanent/Unappealable",
        "• Severe harassment or threats – Permanent/Unappealable",
        "• Exploiting platforms – Permanent/Unappealable",
        "• Exploiting staff powers – Permanent/Unappealable",
        "• Bribery or corruption – Permanent/Unappealable",
        "• Endangering real-world safety – Permanent/Unappealable"
      ]
    },
    {
      id: "6.0",
      title: "6.0 – Appeals & Review Procedures",
      content: [
        "6.1. Submitting Appeals – Members may appeal through the official GVRO ticket system with supporting evidence.",
        "6.2. Evidence & Documentation – All appeals must include relevant screenshots, recordings, logs, or witness statements.",
        "6.3. Review Process – Appeals are reviewed by appropriate staff level based on severity.",
        "6.4. Timeline for Responses – GVRO staff aim to respond to appeals within 72 hours.",
        "6.5. Final Decisions – Decisions made after an appeal are final."
      ]
    },
    {
      id: "7.0",
      title: "7.0 – Training & Certification",
      content: [
        "7.1. Mandatory Training – Specialized roles require completion of official GVRO training courses.",
        "7.2. Certification Requirements – Certifications may have expiration dates or renewal requirements.",
        "7.3. Attendance & Participation – Attendance in scheduled trainings is mandatory.",
        "7.4. Training Records – All completed trainings and certifications are documented in department records."
      ]
    },
    {
      id: "8.0",
      title: "8.0 – Community & External Conduct",
      content: [
        "8.1. Social Media & Public Representation – Members must maintain professionalism on all platforms.",
        "8.2. Interaction with External Servers – Participation in other communities must not conflict with GVRO responsibilities.",
        "8.3. Behavior Outside Roleplay – Members are expected to behave responsibly while off duty.",
        "8.4. Collaboration & Networking – Members are encouraged to network as long as GVRO rules are upheld."
      ]
    },
    {
      id: "9.0",
      title: "9.0 – Chain of Command & Leadership Structure",
      content: [
        "9.1. Overseer Level:",
        "• Public Affairs Overseer – Ultimate authority over all operations",
        "• Associate Public Affairs Overseer – Assists the Overseer",
        "• Assistant Public Affairs Overseer – Supports policy enforcement",
        "• Relations Overseer – Handles external partnerships",
        "• Community Overseer – Oversees internal member welfare",
        "• Events Overseer – Manages large-scale events",
        "",
        "9.2. Management Level:",
        "• Lead Management – Oversees Managers and enforces policies",
        "• Assistant Lead Management – Supports Lead Management",
        "",
        "9.3. Managerial Level:",
        "• Senior Public Affairs Manager – Supervises Managers",
        "• Public Affairs Manager – Handles shift logs and coordination",
        "• Junior Public Affairs Manager – Entry-level management",
        "• Trainee Public Affairs Manager – Undergoing evaluation",
        "",
        "9.4. Escalation Procedure – Concerns should be directed to Managers first, then escalated upward."
      ]
    },
    {
      id: "10.0",
      title: "10.0 – Uniforms, Equipment & Identification",
      content: [
        "10.1. Uniform Standards – All members must wear designated department uniforms while on duty.",
        "10.2. Vehicle Standards – Only approved department vehicles may be used while on duty.",
        "10.3. Callsigns & Identification – Members must use correct callsigns during operations.",
        "10.4. Equipment Use – Only authorized equipment may be used in roleplay scenarios."
      ]
    },
    {
      id: "11.0",
      title: "11.0 – Activity Requirements & Promotions",
      content: [
        "11.1. Minimum Activity Standards – Members must log a minimum of patrols or hours per week.",
        "11.2. Promotion Eligibility – Based on attendance, behavior, leadership qualities, and certifications.",
        "11.3. Inactivity Handling – Inactive members without LOA will be placed on probation."
      ]
    },
    {
      id: "12.0",
      title: "12.0 – Leadership Accountability & Oversight",
      content: [
        "12.1. Leadership Conduct – Leaders are held to the same standards with additional expectations.",
        "12.2. Oversight System – Leadership actions may be reviewed by the Overseer Team.",
        "12.3. Checks & Balances – Any staff member may report leadership misconduct."
      ]
    },
    {
      id: "13.0",
      title: "13.0 – Emergency Override Policy",
      content: [
        "13.1. Purpose – Grants staff authority to stabilize sessions during severe disruptions.",
        "13.2. Authority – Only Overseers or Lead Management may activate an Emergency Override.",
        "13.3. Actions Permitted – Temporary lockdowns, mass-kicking, freezing roleplay, restricting channels.",
        "13.4. Post-Event Review – All override actions must be logged and reviewed within 24 hours."
      ]
    },
    {
      id: "14.0",
      title: "14.0 – Recognition & Rewards",
      content: [
        "14.1. Commendations – Members may be nominated for outstanding contributions.",
        "14.2. Awards System – Member of the Month, Service Excellence Award, Training Excellence Award.",
        "14.3. Promotion Through Merit – Exceptional service may fast-track promotions.",
        "14.4. Public Recognition – Commendations may be announced in community channels."
      ]
    },
    {
      id: "15.0",
      title: "15.0 – Mental Health & Wellness",
      content: [
        "15.1. Stress Management – Members are encouraged to take breaks during long shifts.",
        "15.2. Reporting & Support – Members may confidentially report mental health concerns.",
        "15.3. Wellness Policies – Members should prioritize personal well-being over roleplay."
      ]
    },
    {
      id: "16.0",
      title: "16.0 – Diversity, Equity & Inclusion",
      content: [
        "16.1. Respect & Representation – All members must treat each other respectfully.",
        "16.2. Inclusive Roleplay – Scenarios should avoid offensive stereotypes or discrimination.",
        "16.3. Anti-Discrimination Policy – Discriminatory behavior may result in termination."
      ]
    },
    {
      id: "17.0",
      title: "17.0 – Technology, Cybersecurity & Data Handling",
      content: [
        "17.1. Authorized Tools – Members may only use approved bots, scripts, or software.",
        "17.2. Data Security – Access to confidential data must remain strictly controlled.",
        "17.3. Reporting Breaches – Members must report hacks or exploits immediately."
      ]
    },
    {
      id: "18.0",
      title: "18.0 – Recruitment & Membership Intake",
      content: [
        "18.1. Application & Vetting – All prospective members must complete the official application process.",
        "18.2. Probation & Training – New members undergo a probation period for evaluation.",
        "18.3. Restrictions & Anti-Abuse Measures – Unauthorized recruitment or manipulation is prohibited."
      ]
    },
    {
      id: "19.0",
      title: "19.0 – Event & Scenario Planning",
      content: [
        "19.1. Proposal Process – Large-scale events must be approved by Leadership or Events Overseer.",
        "19.2. Coordination & Execution – Departments must communicate clearly to avoid conflicts.",
        "19.3. Post-Event Review – Leadership will conduct a debrief after events."
      ]
    },
    {
      id: "20.0",
      title: "20.0 – Community Engagement & Outreach",
      content: [
        "20.1. Public Interaction – Members must maintain professionalism when engaging with the public.",
        "20.2. External Events – Public events or collaborations require prior approval.",
        "20.3. Media & Promotion – Social media posts must not reveal confidential information."
      ]
    },
    {
      id: "21.0",
      title: "21.0 – Internal Documentation & Reporting",
      content: [
        "21.1. Shift Logs – Members must record all relevant shift activity accurately.",
        "21.2. Incident Reports – Reports must include complete evidence and standard format.",
        "21.3. Record Retention – Historical records will be securely stored. Tampering is prohibited."
      ]
    },
    {
      id: "22.0",
      title: "22.0 – Equipment & Resource Management",
      content: [
        "22.1. Authorized Equipment – Only assigned members may access department equipment.",
        "22.2. Maintenance & Care – Equipment must be maintained and damage reported immediately.",
        "22.3. Check-In/Check-Out Procedures – Departments will track equipment issuance."
      ]
    },
    {
      id: "23.0",
      title: "23.0 – Ethics & Integrity",
      content: [
        "23.1. Conflict of Interest – Members may not engage in actions for personal gain.",
        "23.2. Honesty & Accountability – Members are expected to provide truthful reports.",
        "23.3. Impartiality – Staff must remain neutral when enforcing rules."
      ]
    },
    {
      id: "24.0",
      title: "24.0 – Simulation & Training Scenarios",
      content: [
        "24.1. Realistic Training – Training exercises should mimic real-world scenarios.",
        "24.2. Evaluation & Feedback – Participants will be evaluated on performance and teamwork.",
        "24.3. Safety & Oversight – Coordinators must ensure safety, pausing exercises if necessary."
      ]
    },
    {
      id: "25.0",
      title: "25.0 – Public Relations & Media Policy",
      content: [
        "25.1. Official Statements – Only designated leadership may issue statements on behalf of GVRO.",
        "25.2. Streaming & Recording Guidelines – Recordings must comply with privacy standards.",
        "25.3. Community Representation – Members must maintain professionalism when interacting publicly."
      ]
    },
    {
      id: "26.0",
      title: "26.0 – Systems, Databases & Digital Resources",
      content: [
        "26.1. Shift Logs & Forms – All members must complete shift logs for patrols and events.",
        "26.2. Incident & Activity Reports – Significant events must be documented using the official reporting system.",
        "26.3. Member & Department Databases – GVRO maintains databases using MongoDB for member records. Access is restricted to authorized personnel only.",
        "26.4. Data Privacy & Security – All information stored in GVRO systems is confidential. Unauthorized access will result in immediate disciplinary action.",
        "26.5. Accountability & Oversight – Department leaders are responsible for monitoring database usage. Leadership may audit logs and reports at any time."
      ]
    }
  ]

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId)
  }

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.ctrlKey && (e.key === 'c' || e.key === 'a' || e.key === 's' || e.key === 'p')) {
      e.preventDefault()
    }
    if (e.key === 'F12') {
      e.preventDefault()
    }
  }

  return (
    <div 
      className="min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 select-none"
      onContextMenu={handleContextMenu}
      onKeyDown={handleKeyDown}
      style={{ userSelect: 'none' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-5 tracking-tight">
            Greenville Roleplay Operation™<br/>Public Affairs Handbook
          </h1>
          <div className="w-20 h-1 bg-[#ccfd7f] mx-auto rounded-full"></div>
          <p className="text-gray-300 text-base mt-6 max-w-2xl mx-auto leading-relaxed">
            Comprehensive guide to policies, procedures, and standards for GVRO Public Affairs
          </p>
        </div>

        {/* Security Notice */}
        <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-5 mb-10">
          <div className="flex items-center space-x-3 mb-3">
            <Lock className="w-5 h-5 text-red-400" />
            <h3 className="text-lg font-bold text-white">Confidential Document</h3>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm">
            This handbook is the official property of Greenville Roleplay Operation (GVRO). It is intended solely for members of GVRO Public Affairs. 
            Unauthorized distribution, reproduction, or use in other servers will result in an immediate and permanent blacklist from GVRO Public Affairs.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
            <BookOpen className="w-6 h-6 text-[#ccfd7f] mx-auto mb-2" />
            <h3 className="text-xl font-bold text-white mb-1">26</h3>
            <p className="text-gray-300 text-xs">Sections</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
            <FileText className="w-6 h-6 text-[#ccfd7f] mx-auto mb-2" />
            <h3 className="text-xl font-bold text-white mb-1">200+</h3>
            <p className="text-gray-300 text-xs">Policies</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
            <Shield className="w-6 h-6 text-[#ccfd7f] mx-auto mb-2" />
            <h3 className="text-xl font-bold text-white mb-1">Protected</h3>
            <p className="text-gray-300 text-xs">Content</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
            <Clock className="w-6 h-6 text-[#ccfd7f] mx-auto mb-2" />
            <h3 className="text-xl font-bold text-white mb-1">24/7</h3>
            <p className="text-gray-300 text-xs">Access</p>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-10">
          <h3 className="text-xl font-bold text-white mb-5 flex items-center">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ccfd7f] mr-3 shadow-lg"></div>
            Table of Contents
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {handbookSections.map((section) => (
              <button
                key={section.id}
                onClick={() => toggleSection(section.id)}
                className="text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-semibold group-hover:text-[#ccfd7f] transition-colors text-xs">
                      {section.title}
                    </h4>
                  </div>
                  <div className="text-[#ccfd7f]">
                    {expandedSection === section.id ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                  </div>
                </div>
              </button>
            ))}
          </div>
            </div>

        {/* Handbook Sections */}
        <div className="space-y-6">
          {handbookSections.map((section) => (
            <div 
              key={section.id}
              className="rounded-xl shadow-xl overflow-hidden transition-all duration-300 bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <div 
                className="p-6 cursor-pointer group hover:bg-white/5 transition-all duration-300"
                onClick={() => toggleSection(section.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 bg-[#ccfd7f]/20">
                      <FileText className="w-6 h-6 text-[#ccfd7f]" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-white group-hover:text-[#ccfd7f] transition-colors duration-300">
                        {section.title}
                      </h2>
                    </div>
                  </div>
                  <div className="ml-6 transition-all duration-300 text-[#ccfd7f]">
                    {expandedSection === section.id ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
                  </div>
                </div>
            </div>

              {expandedSection === section.id && (
                <div className="px-6 pb-6 border-t border-white/20 transition-all duration-500 ease-in-out bg-white/5">
                  <div className="pt-5">
                    <div className="space-y-3">
                      {section.content.map((item, index) => (
                        <div key={index} className="flex items-start space-x-2.5 p-3 rounded-lg bg-white/5 border border-white/10">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#ccfd7f] mt-1.5 flex-shrink-0"></div>
                          <p className="text-gray-300 leading-relaxed text-sm">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Notice */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
          <div className="flex items-center space-x-3 mb-3">
            <AlertTriangle className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-bold text-white">Important Notice</h3>
            </div>
          <p className="text-gray-300 leading-relaxed text-sm">
            This handbook is the property of Greenville Roleplay Operations and contains confidential information. 
            All content is protected and unauthorized reproduction or distribution is strictly prohibited. 
            For questions or clarifications regarding any section, please contact your supervisor or department leadership.
          </p>
        </div>
      </div>
    </div>
  )
}
