'use client'

import { BookOpen, ArrowLeft, AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function HandbookPage() {
  const [expandedSections, setExpandedSections] = useState<number[]>([])

  const toggleSection = (sectionNumber: number) => {
    setExpandedSections(prev => 
      prev.includes(sectionNumber) 
        ? prev.filter(num => num !== sectionNumber)
        : [...prev, sectionNumber]
    )
  }

  // Prevent copying and right-click
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Prevent Ctrl+C, Ctrl+A, Ctrl+V, Ctrl+X, F12, Ctrl+Shift+I
    if (
      (e.ctrlKey && (e.key === 'c' || e.key === 'a' || e.key === 'v' || e.key === 'x')) ||
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && e.key === 'I')
    ) {
      e.preventDefault()
    }
  }

  const sections = [
    {
      number: 1,
      title: "General Conduct & Professionalism",
      content: [
        "1.1. Common Sense - Members are expected to apply common sense in all situations. Not every circumstance can be covered by the handbook, so it is your responsibility to act reasonably, professionally, and with respect for others. Rules are written to guide behavior, but your judgment must align with the spirit of these expectations.",
        "1.2. Discord Terms of Service - All members must comply with Discord Terms of Service at all times. This includes avoiding harassment, hate speech, scams, illegal activity, or the use of unauthorized bots or clients.",
        "1.3. Roblox Terms of Service - The Roblox Terms of Service apply whenever you are representing GVRO. Exploiting, bypassing filters, glitching, or engaging in prohibited activity on Roblox will not be tolerated.",
        "1.4. Confidentiality - Confidentiality is essential. Members must not leak or share private GVRO information, including restricted channels, documents, discussions, or assets.",
        "1.5. Professionalism & Respect - Professional conduct is expected at all times. Members must remain respectful, patient, and courteous when interacting with civilians, staff, or other service members.",
        "1.6. Abuse of Authority - Authority is a privilege, not a right. Any misuse of staff tools such as warnings, kicks, mutes, or bans will be considered abuse of authority.",
        "1.7. Drama - Drama is disruptive to both staff and roleplay. Conflicts with members or staff must be handled professionally through tickets.",
        "1.8. Moderation Enforcement - When issuing punishments, staff must provide valid evidence. Screenshots, recordings, or logs are required for transparency and fairness.",
        "1.9. Social Media & External Conduct - Members are representatives of GVRO even outside of Roblox/Discord. Negative behavior, harassment, or toxicity directed at others can still result in action within GVRO.",
        "1.10. Misuse of Tickets or Reports - Tickets and reporting systems must only be used for legitimate issues. Submitting false reports, spamming tickets, or using the system to harass others wastes staff time.",
        "1.11. Interdepartment Cooperation - Departments must work together professionally. Rivalries, interference with other department roleplay scenes, or \"one-upping\" behavior is not tolerated.",
        "1.12. Chain of Command Respect - Members must respect the authority of higher-ranking staff and department leaders. Disrespect, insubordination, or ignoring directives disrupts operations.",
        "1.13. Event & Training Attendance - If you register or are required to attend an official GVRO event or training, you must show up on time unless excused.",
        "1.14. Department Transfers - Members may not switch departments at will. Transfers require approval from both department heads and leadership.",
        "1.15. Use of Language & Communication - Members must use clear, respectful language in roleplay and staff communication.",
        "1.16. Radio & Comms Discipline - Radio/communications must remain professional and concise. Unnecessary chatter, soundboards, music, or irrelevant conversation clutters comms.",
        "1.17. Personal Vendettas - Moderation or roleplay actions may not be taken to settle personal disputes.",
        "1.18. Respect for Civilians & Non-Department Members - Members must treat civilians and non-department participants fairly.",
        "1.19. Maturity Requirement - Members are expected to maintain maturity in all communications, regardless of age.",
        "1.20. Appeals & Disputes - Members have the right to appeal disciplinary actions through the appropriate ticket or review system.",
        "1.21. AFK on Duty - Members may not remain AFK while clocked in, in uniform, or marked on patrol.",
        "1.22. Real-Life Discretion - Members must never share real-life personal details in GVRO spaces.",
        "1.23. LOA Communication - If a member goes on LOA, they are expected to return on the stated date or notify staff of an extension.",
        "1.24. Harassment-Free Environment - GVRO maintains a zero-tolerance policy toward harassment."
      ]
    },
    {
      number: 2,
      title: "Vehicle & Driving Conduct",
      content: [
        "2.1. Traffic Flow - Driving against the flow of traffic while on duty is strictly prohibited. This behavior is unrealistic and unsafe.",
        "2.2. U-Turns - Performing U-turns over medians or other unsafe locations is prohibited. In real life, such actions would result in significant vehicle damage.",
        "2.3. Reckless Driving - Reckless driving while on duty is not permitted. Examples include ignoring traffic laws, running stop signs, cutting off vehicles, or speeding excessively.",
        "2.4. Responding Speeds - Members must not exceed 105 MPH (168 KM/H) while responding to emergencies or engaging in pursuits.",
        "2.5. Traffic Stops - Traffic stops may only be performed on civilians. Members are never permitted to pull over staff, hosts/co-hosts, or other Public Services.",
        "2.6. Unauthorized Chases - Unauthorized pursuits are prohibited. Only designated High Speed Unit personnel may engage in pursuits.",
        "2.7. Emergency Lighting Systems (ELS) - ELS and sirens must only be used in legitimate roleplay situations, such as active calls, traffic stops, or emergency responses.",
        "2.8. Vehicle Use & Scene Realism - Vehicles used must fit the context of the roleplay. Excessive spawning, abandoning vehicles, or using unrealistic vehicles disrupts immersion."
      ]
    },
    {
      number: 3,
      title: "Roleplay & Operational Standards",
      content: [
        "3.1. Use of Force & Roleplay Realism - Members must use appropriate force in all roleplay interactions. Escalation of force must be proportional to the situation.",
        "3.2. Corruption Roleplay - Corruption roleplay is strictly prohibited unless explicitly authorized by GVRO leadership for a planned event.",
        "3.3. Off-Duty Conduct - When not on duty, members must still act responsibly and not disrupt roleplay sessions.",
        "3.4. Use of Recording & Media - Members may record sessions for evidence, training, or promotional purposes. However, recordings must respect member privacy.",
        "3.5. Scene Ownership & Control - Once a roleplay scene is established, it is under the control of the initiating department.",
        "3.6. Staff Powers Outside of Roleplay - Staff must not use their powers to interfere with roleplay unless absolutely necessary for enforcement or safety.",
        "3.7. Retaliation Against Reports - Members may not retaliate against others for filing reports, opening tickets, or cooperating with staff investigations.",
        "3.8. Mic/VC Etiquette - If using voice communications, members must maintain a clear and professional tone.",
        "3.9. Event Interference - Members who are not part of a scheduled training or event may not interfere, troll, or otherwise disrupt the session.",
        "3.10. Unauthorized Roleplay Scenarios - Members may not create large-scale roleplay scenarios without approval from staff.",
        "3.11. Proper Use of Department Resources - Department resources must only be used for their intended purpose.",
        "3.12. Accountability for Guests/Visitors - Members are responsible for the behavior of guests or visitors they invite into GVRO spaces.",
        "3.13. Conflict Resolution - Disagreements between members should be handled privately or with staff mediation.",
        "3.14. Timezones & Availability - Members should be transparent about their activity level and timezone.",
        "3.15. Promotions & Rank Advancement - Promotions are based on merit, activity, and professionalism.",
        "3.16. Training & Certification Requirements - Members may not perform specialized duties without completing the required training/certification.",
        "3.17. Emergency Situations (OOC Authority) - In rare cases, staff may override regulations to protect the server, players, or integrity of an event.",
        "3.18. Chain of Evidence (Proof Handling) - Members must not falsify, alter, or destroy screenshots, recordings, or logs when providing evidence.",
        "3.19. OOC vs IC Separation - Members must distinguish between in-character (IC) roleplay actions and out-of-character (OOC) communication.",
        "3.20. Favoritism & Bias - Staff and department leaders must remain impartial.",
        "3.21. Dual-Clanning / Unauthorized Affiliations - Members may not represent competing or unauthorized groups while serving in GVRO Public Services.",
        "3.22. Use of Recording / Streaming - Members who record or stream GVRO sessions must ensure that recordings comply with privacy, professionalism, and security standards.",
        "3.23. Staff Impersonation - Impersonating staff or misrepresenting rank/authority is strictly prohibited.",
        "3.24. Exploit / Cheat Reporting - If a member becomes aware of exploits, cheats, or rule-breaking, they must report it through the appropriate channel.",
        "3.25. Alt Accounts - Members may only use their approved account when serving in GVRO.",
        "3.26. Documentation & Logs - Members must properly log shifts, calls, or activity when required by their department.",
        "3.27. Chain of Custody (Evidence Handling) - Physical or digital evidence collected during roleplay must be handled realistically.",
        "3.28. Technology & Bots - Members may not use unauthorized bots, macros, scripts, or third-party tools that provide unfair advantages.",
        "3.29. Transparency in Leadership - Staff and leadership must clearly communicate decisions that affect departments or the wider membership.",
        "3.30. Safety Overrides in Roleplay - If at any point a roleplay scenario becomes unsafe, hostile, or personally uncomfortable for members, staff may pause or end the scenario.",
        "3.31. Data Security & Privacy - Members must not attempt to gain unauthorized access to GVRO databases, files, or systems."
      ]
    },
    {
      number: 4,
      title: "Policies, Attendance & LOA",
      content: [
        "4.1. Radio Traffic Only VC - While on patrol, members are required to remain in Dispatch Communications channels (1 or 2).",
        "4.2. Promotions - Promotions are based on activity, professionalism, and overall contribution to GVRO.",
        "4.3. Resignations - Members may resign at any time. Upon returning, they may not retain their former rank, depending on the length and circumstances of their absence.",
        "4.4. Leave of Absence (LOA) - Members may request an LOA under the following rules: Minimum Duration: 7 days, Maximum Duration: 28 days, Members must wait at least 10 days between LOA requests.",
        "4.5. Attendance Tracking - Members are required to log attendance for all official events, trainings, and shifts.",
        "4.6. Late Arrival / Early Departure - Arriving late or leaving early without valid reason or prior notice is a violation.",
        "4.7. LOA Extensions & Violations - Extensions may be requested if valid circumstances occur (illness, personal emergencies).",
        "4.8. Return from LOA / Resumption of Duties - Members must check in with their department upon return from LOA.",
        "4.9. Inactivity Policy - Members must maintain a minimum activity level according to their department requirements.",
        "4.10. Event Participation Policy - Mandatory events (trainings, drills, simulations) must be attended unless excused.",
        "4.11. Accountability for Scheduling Conflicts - Members must proactively communicate conflicts that affect attendance."
      ]
    },
    {
      number: 5,
      title: "Disciplinary Actions & Punishments",
      content: [
        "5.1. Verbal Warning Offenses:",
        "• First-time reckless driving (swerving, minor speeding, running stop signs)",
        "• Improper ELS or siren use",
        "• Responding to unrelated calls",
        "• Failure to remain in RTO",
        "• Forgetting to log shifts or patrols",
        "• Improper radio etiquette",
        "• Improper parking or traffic stop procedures",
        "• Speeding 4–9 MPH over FRP",
        "• Not using callsigns",
        "• Excessive casual talk in RTO",
        "• Pulling over staff or other services",
        "",
        "5.2. Strike Offenses:",
        "• Refusing to follow staff or department orders — 1–2 Strikes",
        "• Issuing false punishments or tickets — 2 Strikes",
        "• Repeated FRP — 1–2 Strikes",
        "• Driving 105+ MPH while responding — 1 Strike",
        "• Failure to follow handbook or department rules — 1 Strike",
        "• Unsafe driving (ramming, cutting off cars, desync abuse) — 1–2 Strikes",
        "• Unrealistic roleplay (incorrect penal codes, improper EMS care, etc.) — 1 Strike",
        "• Interfering with staff-run scenes — 2 Strikes",
        "• Disrespect toward civilians or members — 1 Strike",
        "• Logging false shift activity — 2 Strikes",
        "• Civilian suspension violations — 1–2 Strikes",
        "• Unauthorized vehicle use — 1 Strike",
        "• Impersonating higher rank — 2 Strikes",
        "• Spam or harassment in department channels — 1 Strike",
        "• Incorrect callsign use — 1 Strike",
        "• Unjustified traffic stops — 1 Strike",
        "• Unauthorized chases — 2 Strikes",
        "",
        "5.3. Suspension Offenses:",
        "• Misuse of authority tools (mute, kick, ban) — 3–7 days suspension",
        "• Repeated strikes within a short time frame — 3–7 days suspension",
        "• Deliberate abuse of FRP/roleplay mechanics — 3–7 days suspension",
        "• Harassment or discrimination — 7–14 days suspension",
        "• Leaking confidential GVRO info — 14 days suspension or immediate termination review",
        "• Corruption roleplay abuse — 7–14 days suspension",
        "• Evidence falsification — 14 days suspension or immediate termination review",
        "• Significant disruption of an event or roleplay — 5–10 days suspension",
        "• Intentional sabotage of department operations — 7–14 days suspension",
        "• Repeated unsafe driving or vehicle misuse — 3–5 days suspension",
        "• Unauthorized high-speed pursuits — 5–7 days suspension",
        "",
        "5.4. Termination Offenses:",
        "• Severe abuse of staff powers — Immediate termination",
        "• Multiple suspensions for misconduct — Termination after 2+ suspensions",
        "• Deliberate repeated harassment — Immediate termination",
        "• Exploiting the system, bots, or game glitches — Immediate termination",
        "• Major corruption or betrayal of department operations — Immediate termination",
        "• Repeated falsification of records or evidence — Immediate termination",
        "• Extreme roleplay misconduct causing major disruption — Termination after review",
        "",
        "5.5. Blacklist Offenses:",
        "• Sharing confidential or sensitive GVRO data — Permanent / Unappealable",
        "• Severe harassment, threats, or endangerment of members — Permanent / Unappealable",
        "• Exploiting Roblox or Discord platforms — Permanent / Unappealable",
        "• Exploiting staff powers for personal gain — Permanent / Unappealable",
        "• Attempted bribery or corruption with leadership — Permanent / Unappealable",
        "• Severe repeated abuse of authority — Temporary / Appealable – 6 months expiration",
        "• Endangering real-world safety or privacy — Permanent / Unappealable"
      ]
    },
    {
      number: 6,
      title: "Appeals & Review Procedures",
      content: [
        "6.1. Submitting Appeals - Members may appeal warnings, strikes, suspensions, or terminations through the official GVRO ticket system.",
        "6.2. Evidence & Documentation - All appeals must include relevant screenshots, recordings, logs, or witness statements to support the case.",
        "6.3. Review Process - Appeals are reviewed by the appropriate staff level. Minor issues may be reviewed by department heads or moderators.",
        "6.4. Timeline for Responses - GVRO staff aim to respond to appeals within 72 hours.",
        "6.5. Final Decisions - Decisions made after an appeal are final. Attempting to bypass the appeal process will result in disciplinary action."
      ]
    },
    {
      number: 7,
      title: "Training & Certification",
      content: [
        "7.1. Mandatory Training - Specialized roles (HSU, EMS advanced skills, fire command, etc.) require completion of official GVRO training courses.",
        "7.2. Certification Requirements - Certifications may have expiration dates or renewal requirements. Members are responsible for keeping certifications up to date.",
        "7.3. Attendance & Participation - Attendance in scheduled trainings is mandatory. Missing multiple training sessions without valid reason may affect promotions.",
        "7.4. Training Records - All completed trainings and certifications are documented in department records."
      ]
    },
    {
      number: 8,
      title: "Community & External Conduct",
      content: [
        "8.1. Social Media & Public Representation - Members representing GVRO on social media, forums, or public platforms must maintain professionalism.",
        "8.2. Interaction with External Servers or Groups - Participation in other servers, groups, or communities must not conflict with GVRO responsibilities.",
        "8.3. Behavior Outside Roleplay - While off duty, members are expected to behave responsibly. Publicly posting confidential GVRO information can result in disciplinary action.",
        "8.4. Collaboration & Networking - Members are encouraged to network with other communities or groups for learning and collaboration."
      ]
    },
    {
      number: 9,
      title: "Chain of Command & Leadership Structure",
      content: [
        "9.1. Overseer Level - Public Services Overseer (ultimate authority), Associate Public Services Overseer, Assistant Public Services Overseer, Relations Overseer, Community Overseer, Events Overseer.",
        "9.2. Management Level - Lead Management, Assistant Lead Management.",
        "9.3. Managerial Level - Senior Public Services Manager, Public Services Manager, Junior Public Services Manager, Trainee Public Services Manager.",
        "9.4. Escalation Procedure - Concerns should first be directed to Managers, then escalated upward as necessary. Appeals, disciplinary disputes, and serious matters must go directly to Overseer level."
      ]
    },
    {
      number: 10,
      title: "Uniforms, Equipment & Identification",
      content: [
        "10.1. Uniform Standards - All members must wear the designated department uniform while on duty. Unauthorized modifications (colors, accessories, decals) are prohibited.",
        "10.2. Vehicle Standards - Only approved department vehicles may be used while on duty. Unauthorized custom vehicles or liveries are not permitted.",
        "10.3. Callsigns & Identification - Members must use correct callsigns during patrols, events, and operations. Impersonating another rank or using false identification will result in strikes or suspension.",
        "10.4. Equipment Use - Only authorized equipment may be used in roleplay scenarios. Unauthorized use of tactical or medical gear is prohibited unless cleared by leadership."
      ]
    },
    {
      number: 11,
      title: "Activity Requirements & Promotions",
      content: [
        "11.1. Minimum Activity Standards - Members must log a minimum of X patrols or hours per week (set by management). Excessive inactivity without LOA may result in disciplinary review.",
        "11.2. Promotion Eligibility - Members must maintain professionalism, meet training requirements, and show consistent activity. Promotions are based on attendance, behavior, leadership qualities, and certifications.",
        "11.3. Inactivity Handling - Inactive members without LOA will be placed on probation. Continued inactivity may result in removal from Public Services."
      ]
    },
    {
      number: 12,
      title: "Leadership Accountability & Oversight",
      content: [
        "12.1. Leadership Conduct - Leaders are held to the same standards as all members, with additional expectations for fairness and professionalism.",
        "12.2. Oversight System - Leadership actions (terminations, blacklists, promotions) may be reviewed by the Overseer Team for accountability.",
        "12.3. Checks & Balances - Any staff member may report leadership misconduct through the proper escalation chain. Abuse of leadership powers may result in immediate suspension and review."
      ]
    },
    {
      number: 13,
      title: "Emergency Override Policy",
      content: [
        "13.1. Purpose - The Emergency Override Policy grants staff authority to stabilize sessions during severe disruptions (e.g., raids, mass FRP, trolling waves).",
        "13.2. Authority - Only Overseers, Lead Management, or Event Overseers may activate an Emergency Override. Managers may recommend an override but cannot enforce it without approval.",
        "13.3. Actions Permitted Under Override - Temporary server lockdowns, mass-kicking disruptive users, freezing or pausing roleplay until order is restored, restricting channels or disabling voice comms if necessary.",
        "13.4. Post-Event Review - All Emergency Override actions must be logged and reviewed within 24 hours."
      ]
    },
    {
      number: 14,
      title: "Recognition & Rewards",
      content: [
        "14.1. Commendations - Members may be nominated for commendations for professionalism, leadership, or outstanding contributions.",
        "14.2. Awards System - Examples include: Member of the Month, Service Excellence Award, Training Excellence Award. Awards may be presented monthly or quarterly depending on performance.",
        "14.3. Promotion Through Merit - Exceptional service may fast-track members for promotion with Overseer approval.",
        "14.4. Public Recognition - Commendations may be announced in community channels to highlight positive role models."
      ]
    },
    {
      number: 15,
      title: "Mental Health & Wellness",
      content: [
        "15.1. Stress Management - Members are encouraged to take breaks during long shifts or high-intensity roleplay sessions. Leadership should monitor members for signs of burnout or excessive stress.",
        "15.2. Reporting & Support - Members may confidentially report mental health concerns to designated support staff. GVRO may provide guidance or temporary duty relief to assist members in maintaining wellness.",
        "15.3. Wellness Policies - Members should prioritize personal well-being over roleplay immersion. Activities that compromise mental health must be reported."
      ]
    },
    {
      number: 16,
      title: "Diversity, Equity & Inclusion (DEI)",
      content: [
        "16.1. Respect & Representation - All members must treat each other respectfully regardless of race, gender, religion, sexuality, or other personal characteristics.",
        "16.2. Inclusive Roleplay - Roleplay scenarios should avoid offensive stereotypes or discriminatory actions. Inclusion promotes realistic, fair, and enjoyable experiences for all participants.",
        "16.3. Anti-Discrimination Policy - Any discriminatory behavior, harassment, or exclusion may result in strikes, suspension, or termination."
      ]
    },
    {
      number: 17,
      title: "Technology, Cybersecurity & Data Handling",
      content: [
        "17.1. Authorized Tools - Members may only use approved bots, scripts, or software provided by GVRO.",
        "17.2. Data Security - Access to confidential GVRO data must remain strictly controlled. Unauthorized copying, sharing, or exposing sensitive information will result in immediate disciplinary action.",
        "17.3. Reporting Breaches - Members must report hacks, exploits, or phishing attempts immediately to leadership. Ignoring or covering up security incidents may lead to suspension or termination."
      ]
    },
    {
      number: 18,
      title: "Recruitment & Membership Intake",
      content: [
        "18.1. Application & Vetting - All prospective members must complete the official GVRO application process. Background checks (activity history, prior conduct) will be conducted to ensure eligibility.",
        "18.2. Probation & Training - New members undergo a probation period during which behavior, attendance, and roleplay skill are evaluated. Mentorship programs may be assigned to assist onboarding.",
        "18.3. Restrictions & Anti-Abuse Measures - Members may not manipulate or exploit recruitment for personal gain. Unauthorized recruitment, solicitation, or \"double-dipping\" in other communities is prohibited."
      ]
    },
    {
      number: 19,
      title: "Event & Scenario Planning",
      content: [
        "19.1. Proposal Process - All large-scale events must be approved by Leadership or the Events Overseer. Proposals should include objectives, involved departments, and expected duration.",
        "19.2. Coordination & Execution - Departments must communicate clearly to avoid conflicts during events. Staff may assign specific roles or zones of control for operational clarity.",
        "19.3. Post-Event Review - After events, leadership will conduct a debrief to evaluate performance and identify improvements."
      ]
    },
    {
      number: 20,
      title: "Community Engagement & Outreach",
      content: [
        "20.1. Public Interaction - Members engaging with the public, media, or other Roblox communities must maintain professionalism.",
        "20.2. External Events - Public events, collaborations, or competitions require prior approval. Members must follow GVRO rules and maintain a positive reputation.",
        "20.3. Media & Promotion - Social media posts, streams, or videos must not reveal confidential information or staff strategies."
      ]
    },
    {
      number: 21,
      title: "Internal Documentation & Reporting",
      content: [
        "21.1. Shift Logs - Members must record all relevant shift activity accurately and promptly.",
        "21.2. Incident Reports - Reports for FRP, accidents, or disciplinary incidents must include complete evidence and be submitted in a standard format.",
        "21.3. Record Retention - Historical records will be securely stored. Tampering, falsifying, or deleting records is prohibited and subject to severe consequences."
      ]
    },
    {
      number: 22,
      title: "Equipment & Resource Management",
      content: [
        "22.1. Authorized Equipment - Only assigned members may access or use department vehicles, weapons, or tactical gear.",
        "22.2. Maintenance & Care - Equipment must be maintained in working order. Malfunctions or damage must be reported immediately.",
        "22.3. Check-In/Check-Out Procedures - Departments will track equipment issuance. Failing to follow procedures may result in disciplinary action."
      ]
    },
    {
      number: 23,
      title: "Ethics & Integrity",
      content: [
        "23.1. Conflict of Interest - Members may not engage in actions that create personal gain at the expense of GVRO operations.",
        "23.2. Honesty & Accountability - Members are expected to provide truthful reports, logs, and evidence. Deceptive practices will result in strikes, suspension, or termination.",
        "23.3. Impartiality - Staff must remain neutral when enforcing rules, regardless of personal relationships or biases."
      ]
    },
    {
      number: 24,
      title: "Simulation & Training Scenarios",
      content: [
        "24.1. Realistic Training - Training exercises should mimic real-world scenarios without affecting live roleplay.",
        "24.2. Evaluation & Feedback - Participants will be evaluated on performance, teamwork, and roleplay realism. Constructive feedback will be provided to improve future operations.",
        "24.3. Safety & Oversight - Scenario coordinators must ensure physical and virtual safety, pausing exercises if necessary."
      ]
    },
    {
      number: 25,
      title: "Public Relations & Media Policy",
      content: [
        "25.1. Official Statements - Only designated leadership may issue statements on behalf of GVRO.",
        "25.2. Streaming & Recording Guidelines - Recordings for streams or videos must comply with privacy standards and not disclose confidential operations.",
        "25.3. Community Representation - Members must maintain professionalism when interacting publicly, promoting GVRO positively and accurately."
      ]
    },
    {
      number: 26,
      title: "Systems, Databases & Digital Resources",
      content: [
        "26.1. Shift Logs & Forms - All members are required to complete shift logs for patrols, events, and official duties. Logs must be submitted promptly and accurately, including times, locations, actions taken, and any relevant evidence.",
        "26.2. Incident & Activity Reports - Any significant events, FRP violations, accidents, or disciplinary incidents must be documented using the official reporting system. Reports must include clear, factual details and evidence.",
        "26.3. Member & Department Databases - GVRO maintains databases using MongoDB for member records, including attendance, training certifications, disciplinary history, and role assignments. Access is restricted to authorized personnel only.",
        "26.4. Data Privacy & Security - All information stored in GVRO systems is confidential. Members must not share, leak, or misuse internal data. Unauthorized access, tampering, or distribution of sensitive information will result in immediate disciplinary action.",
        "26.5. Accountability & Oversight - Department leaders are responsible for monitoring database usage and ensuring shift logs and reports are properly maintained. Leadership may audit logs, reports, and database entries at any time to verify accuracy and compliance."
      ]
    }
  ]

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8 select-none" 
      style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}
      onContextMenu={handleContextMenu}
      onKeyDown={handleKeyDown}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl w-fit mx-auto mb-8 border border-white/20">
            <BookOpen className="w-16 h-16 text-white mx-auto" />
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
            Greenville Roleplay Operation™
          </h1>
          <h2 className="text-3xl font-semibold text-blue-200 mb-6">
            Public Services Handbook
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mb-8"></div>
        </div>

        {/* Notice */}
        <div className="bg-red-500/20 backdrop-blur-sm rounded-2xl p-8 border border-red-400/30 mb-12">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Notice</h3>
              <p className="text-red-200/90 leading-relaxed">
                This handbook is the official property of Greenville Roleplay Operation (GVRO). It is intended solely for members of GVRO Public Services. Unauthorized distribution, reproduction, or use in other servers will result in an immediate and permanent blacklist from GVRO Public Services.
              </p>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Table of Contents</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {sections.map((section) => (
              <button
                key={section.number}
                onClick={() => toggleSection(section.number)}
                className="text-left p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200"
              >
                <span className="text-blue-300 font-semibold">{section.number}.0</span>
                <span className="text-white ml-2">{section.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.number} className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <button
                onClick={() => toggleSection(section.number)}
                className="w-full p-6 text-left hover:bg-white/5 transition-all duration-200 rounded-t-2xl"
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  {section.number}.0 – {section.title}
                </h3>
                <div className="text-blue-200/80">
                  {expandedSections.includes(section.number) ? 'Click to collapse' : 'Click to expand'}
                </div>
              </button>
              
              {expandedSections.includes(section.number) && (
                <div className="px-6 pb-6 border-t border-white/10">
                  <div className="pt-6 space-y-4">
                    {section.content.map((item, index) => (
                      <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                        <p className="text-blue-200/90 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-16 text-center">
          <Link 
            href="/"
            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-white/20 hover:border-white/30 inline-flex items-center gap-3"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
