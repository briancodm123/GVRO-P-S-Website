export interface PenalCode {
  code: string
  meaning: string
  type: 'Citation' | 'Misdemeanor' | 'Felony'
  fine: string
  impoundment: 'Y' | 'N'
}

export interface PenalSection {
  title: string
  codes: PenalCode[]
}

export const penalCodes: PenalSection[] = [
  {
    title: "Section 1: Traffic Violations",
    codes: [
      { code: "GV § 346.57(4)", meaning: "Speeding 6-10 Over the Speed Limit", type: "Citation", fine: "$300", impoundment: "N" },
      { code: "GV § 346.57(5)", meaning: "Speeding 11-20 MPH Over the Speed Limit", type: "Citation", fine: "$625", impoundment: "N" },
      { code: "GV § 346.57(6)", meaning: "Speeding 21-30 MPH Over the Speed Limit", type: "Citation", fine: "$1,250", impoundment: "N" },
      { code: "GV § 346.57(7)", meaning: "Speeding 31-40 MPH Over the Speed Limit", type: "Citation", fine: "$1,500", impoundment: "N" },
      { code: "GV § 346.57(8)", meaning: "Speeding 41+ MPH Over the Speed Limit", type: "Citation", fine: "$2,000", impoundment: "Y" },
      { code: "GV § 346.57(10)", meaning: "Speeding (in a school zone)", type: "Citation", fine: "$1,000", impoundment: "Y" },
      { code: "GV § 346.57(1)", meaning: "Unsafe Speed for the Conditions", type: "Citation", fine: "$500", impoundment: "N" },
      { code: "GV § 346.10", meaning: "Failure to Maintain Lanes", type: "Citation", fine: "$300", impoundment: "N" },
      { code: "GV § 346.18(2)", meaning: "Failure to Signal", type: "Citation", fine: "$200", impoundment: "N" },
      { code: "GV § 346.33(2)", meaning: "Rolling a Stop Sign", type: "Citation", fine: "$250", impoundment: "N" },
      { code: "GV § 346.33(1)", meaning: "Running a Red Light", type: "Citation", fine: "$250", impoundment: "N" },
      { code: "GV § 346.24", meaning: "Failure to Yield to Pedestrian", type: "Citation", fine: "$300", impoundment: "N" },
      { code: "GV § 346.34", meaning: "Following Too Closely (Tailgating)", type: "Citation", fine: "$300", impoundment: "N" },
      { code: "GV § 346.62", meaning: "Reckless Driving", type: "Misdemeanor", fine: "$250 | 180s", impoundment: "Y" },
      { code: "GV § 346.63(1)", meaning: "Driving While Intoxicated (DWI)", type: "Misdemeanor", fine: "$500", impoundment: "Y" },
      { code: "GV § 346.63(2)", meaning: "Driving While Ability Impaired (DWAI)", type: "Misdemeanor", fine: "$300", impoundment: "Y" },
      { code: "GV § 346.63(2)(a)", meaning: "Driving While Ability Impaired by Drugs", type: "Misdemeanor", fine: "$500", impoundment: "Y" },
      { code: "GV § 343.45", meaning: "Aggravated Unlicensed Operation (AUO)", type: "Misdemeanor", fine: "$300 | 90s", impoundment: "Y" },
      { code: "GV § 346.67(1)", meaning: "Leaving the Scene of an Accident (Property Damage)", type: "Misdemeanor", fine: "$1,000 | 60s", impoundment: "Y" },
      { code: "GV § 346.67(2)", meaning: "Leaving the Scene of an Accident (Injury)", type: "Misdemeanor", fine: "$400 | 180s", impoundment: "Y" },
      { code: "GV § 346.03", meaning: "Failing to Yield to Emergency Vehicles", type: "Citation", fine: "$500", impoundment: "N" },
      { code: "GV § 346.63(3)", meaning: "Street Racing", type: "Misdemeanor", fine: "$250 | 120s", impoundment: "Y" },
      { code: "GV § 346.09(1)", meaning: "Improper Passing on the Right", type: "Citation", fine: "$200", impoundment: "N" },
      { code: "GV § 347.36(1)", meaning: "Illegal Equipment (e.g., broken lights)", type: "Citation", fine: "$250", impoundment: "N" },
      { code: "GV § 347.08", meaning: "Headlight Violation", type: "Citation", fine: "$400", impoundment: "N" },
      { code: "GV § 346.13", meaning: "Improper/Unsafe Turn", type: "Citation", fine: "$300", impoundment: "N" },
      { code: "GV § 346.15(2)", meaning: "Illegal U-Turn (where posted prohibited)", type: "Citation", fine: "$300", impoundment: "N" },
      { code: "GV § 346.18(1)", meaning: "Failure to Yield Right of Way at Intersection", type: "Citation", fine: "$250", impoundment: "N" },
      { code: "GV § 346.34(1)", meaning: "Failure to Stop at a Stop Sign", type: "Citation", fine: "$250", impoundment: "N" },
      { code: "GV § 346.40", meaning: "Passing a Stopped School Bus", type: "Misdemeanor", fine: "$1,000", impoundment: "N" },
      { code: "GV § 346.50(1)", meaning: "Parking on a Sidewalk", type: "Citation", fine: "$250", impoundment: "Y" },
      { code: "GV § 346.50(2)", meaning: "Double Parking", type: "Citation", fine: "$200", impoundment: "Y" },
      { code: "GV § 346.50(3)", meaning: "Parking in a No Parking Zone", type: "Citation", fine: "$150", impoundment: "Y" },
      { code: "GV § 346.50(4)", meaning: "Parking in a Handicapped Spot (w/o permit)", type: "Citation", fine: "$350", impoundment: "Y" },
      { code: "GV § 347.23", meaning: "Driving with Broken or Missing Brake Lights", type: "Citation", fine: "$250", impoundment: "N" },
      { code: "GV § 346.89", meaning: "Use of Mobile Device While Driving (Texting)", type: "Citation", fine: "$300", impoundment: "N" },
      { code: "GV § 346.89(2)", meaning: "Distracted Driving (eating, reaching, etc.)", type: "Citation", fine: "$300", impoundment: "N" },
      { code: "GV § 287.55", meaning: "Littering From a Vehicle", type: "Citation", fine: "$300", impoundment: "N" },
      { code: "GV § 346.55", meaning: "Stopping or Standing on Highway (Improperly)", type: "Citation", fine: "$500", impoundment: "N" },
      { code: "GV § 347.09", meaning: "Expired Inspection Sticker", type: "Citation", fine: "$250", impoundment: "Y" },
      { code: "GV § 347.48", meaning: "Failure to Wear Seatbelt (Driver)", type: "Citation", fine: "$200", impoundment: "N" },
      { code: "GV § 347.49", meaning: "Excessively Loud Exhaust / Muffler Violation", type: "Citation", fine: "$300", impoundment: "N" },
      { code: "GV § 346.04", meaning: "Failure to Obey Lawful Order of Police Officer", type: "Misdemeanor", fine: "$500 | 120s", impoundment: "Y" },
      { code: "GV § 346.46", meaning: "Failure to Stop for Railroad Crossing Signals", type: "Citation", fine: "$400", impoundment: "N" },
      { code: "GV § 346.94(20)", meaning: "Excessive Horn Use / Noise Violation", type: "Citation", fine: "$250", impoundment: "N" },
      { code: "GV § 346.94(6)", meaning: "Unnecessary Display of Speed (Burnouts, revving)", type: "Misdemeanor", fine: "$300 | 60s", impoundment: "Y" },
      { code: "GV § 346.90", meaning: "Operating Wrong Way on Divided Highway", type: "Citation", fine: "$400", impoundment: "Y" },
      { code: "GV § 346.70", meaning: "Hit and Run (Unattended Vehicle)", type: "Misdemeanor", fine: "$500 | 60s", impoundment: "Y" }
    ]
  },
  {
    title: "Section 2: Documentation",
    codes: [
      { code: "GV § 343.05", meaning: "Operating Without a Valid License", type: "Citation", fine: "$7500 | 180s", impoundment: "Y" },
      { code: "GV § 343.12", meaning: "Driving on a Learners Permit without Supervision", type: "Citation", fine: "$500", impoundment: "Y" },
      { code: "GV § 343.46", meaning: "Driving on a Suspended License", type: "Citation", fine: "$1000 | 120s", impoundment: "Y" },
      { code: "GV § 341.50", meaning: "Driving with no/invalid Vehicle Registration", type: "Citation", fine: "$750", impoundment: "Y" },
      { code: "GV § 344.62", meaning: "Driving without Insurance", type: "Citation", fine: "$300", impoundment: "Y" },
      { code: "GV § 343.06", meaning: "Driving with Expired License", type: "Citation", fine: "$200", impoundment: "N" },
      { code: "GV § 343.07", meaning: "Driving with License Not in Possession", type: "Citation", fine: "$150", impoundment: "N" },
      { code: "GV § 341.25", meaning: "Failing to Display Registration", type: "Citation", fine: "$200", impoundment: "Y" },
      { code: "GV § 343.16", meaning: "Operating with Restricted License", type: "Citation", fine: "$400 | 90s", impoundment: "Y" },
      { code: "GV § 344.63", meaning: "Driving Without Proof of Insurance", type: "Citation", fine: "$350", impoundment: "Y" }
    ]
  },
  {
    title: "Section 3: Crime Against Property",
    codes: [
      { code: "GV § 943.01", meaning: "Vandalism", type: "Misdemeanor", fine: "$1,000 | 180s", impoundment: "N" },
      { code: "GV § 943.02", meaning: "Arson (Occupied Structure)", type: "Felony", fine: "$5,000 | 300s", impoundment: "Y" },
      { code: "GV § 943.50", meaning: "Shoplifting", type: "Misdemeanor", fine: "$300 | 180s", impoundment: "N" },
      { code: "GV § 943.41", meaning: "Destruction of Government Property", type: "Felony", fine: "$2,000 | 180s", impoundment: "Y" },
      { code: "GV § 943.01(1)", meaning: "Destruction of Civilian Property", type: "Misdemeanor", fine: "$1,000 | 60s", impoundment: "Y" },
      { code: "GV § 943.32", meaning: "Robbery", type: "Felony", fine: "$1,000 | 180s", impoundment: "Y" },
      { code: "GV § 943.32(2)", meaning: "Armed Robbery", type: "Felony", fine: "$1,500 | 240s", impoundment: "Y" },
      { code: "GV § 943.10", meaning: "Burglary", type: "Felony", fine: "$500 | 120s", impoundment: "Y" },
      { code: "GV § 943.11", meaning: "Armed Burglary", type: "Felony", fine: "$1,000 | 180s", impoundment: "Y" },
      { code: "GV § 943.20", meaning: "Theft (Over $1,000)", type: "Misdemeanor", fine: "$1,000 | 180s", impoundment: "N" },
      { code: "GV § 943.20(1)", meaning: "Grand Theft", type: "Felony", fine: "$2,000 | 180s", impoundment: "Y" },
      { code: "GV § 943.23", meaning: "Grand Theft Auto", type: "Felony", fine: "$10,000 | 240s", impoundment: "Y" },
      { code: "GV § 943.14", meaning: "Trespassing", type: "Misdemeanor", fine: "$500 | 180s", impoundment: "N" },
      { code: "GV § 943.25", meaning: "Forgery", type: "Felony", fine: "$2,500 | 180s", impoundment: "N" },
      { code: "GV § 943.27", meaning: "Embezzlement", type: "Felony", fine: "$2,000 | 180s", impoundment: "N" },
      { code: "GV § 943.47", meaning: "Check / Credit Card Fraud", type: "Felony", fine: "$1,500 | 180s", impoundment: "N" },
      { code: "GV § 943.55", meaning: "Graffiti / Defacement", type: "Misdemeanor", fine: "$500 | 90s", impoundment: "N" },
      { code: "GV § 943.05", meaning: "Arson (Vehicle)", type: "Felony", fine: "$3,000 | 180s", impoundment: "Y" },
      { code: "GV § 346.65", meaning: "At Fault in a Death", type: "Felony", fine: "$10,000 | 360s", impoundment: "N" },
      { code: "GV § 943.34", meaning: "Possession of Stolen Property", type: "Felony", fine: "$1,000 | 180s", impoundment: "N" }
    ]
  },
  {
    title: "Section 4: Crimes Involving Deadly Weapons And Equipment",
    codes: [
      { code: "GV § 941.20", meaning: "Illegal / Unlicensed Weapon", type: "Felony", fine: "$500 | 180s", impoundment: "N" },
      { code: "GV § 941.23", meaning: "Recklessly Firing a Firearm", type: "Felony", fine: "$1,000 | 240s", impoundment: "N" },
      { code: "GV § 941.26", meaning: "Possession of a Stolen Firearm", type: "Felony", fine: "$1,500 | 240s", impoundment: "N" },
      { code: "GV § 941.29", meaning: "Unlawful Selling of a Firearm", type: "Felony", fine: "$1,000 | 120s", impoundment: "N" },
      { code: "GV § 941.23(1)", meaning: "Carrying a Concealed Weapon w/o Permit", type: "Felony", fine: "$1,500 | 300s", impoundment: "N" },
      { code: "GV § 941.235", meaning: "Brandishing a Weapon", type: "Misdemeanor", fine: "$500 | 120s", impoundment: "N" },
      { code: "GV § 941.24", meaning: "Possession of a Firearm in a School Zone", type: "Felony", fine: "$2,000 | 360s", impoundment: "N" },
      { code: "GV § 941.21", meaning: "Possession of a Short-Barreled Rifle/Shotgun", type: "Felony", fine: "$2,500 | 360s", impoundment: "N" },
      { code: "GV § 941.22", meaning: "Possession of a Switchblade / Prohibited Knife", type: "Misdemeanor", fine: "$250 | 90s", impoundment: "N" }
    ]
  },
  {
    title: "Section 5: Crime Against People and Peace",
    codes: [
      { code: "GV § 940.31", meaning: "Kidnapping", type: "Felony", fine: "$5,000 | 600s", impoundment: "N" },
      { code: "GV § 948.21", meaning: "Child Endangerment", type: "Misdemeanor", fine: "$10,000 | 300s", impoundment: "N" },
      { code: "GV § 947.02", meaning: "Public Endangerment", type: "Misdemeanor", fine: "$10,000 | 180s", impoundment: "N" },
      { code: "GV § 940.32", meaning: "Criminal Threats", type: "Misdemeanor", fine: "$2,000 | 120s", impoundment: "N" },
      { code: "GV § 947.06", meaning: "Inciting a Riot", type: "Felony", fine: "$4,000 | 240s", impoundment: "N" },
      { code: "GV § 947.01", meaning: "Disturbing the Peace", type: "Misdemeanor", fine: "$550 | 90s", impoundment: "N" },
      { code: "GV § 940.19", meaning: "Assault (Simple)", type: "Felony", fine: "$1,000 | 180s", impoundment: "N" },
      { code: "GV § 940.20", meaning: "Assault with a Deadly Weapon", type: "Felony", fine: "$1,000 | 240s", impoundment: "N" },
      { code: "GV § 940.22", meaning: "Assault on a Peace Officer", type: "Felony", fine: "$1,000 | 300s", impoundment: "N" },
      { code: "GV § 940.09", meaning: "Assault with a Motor Vehicle", type: "Felony", fine: "$4,000 | 300s", impoundment: "N" },
      { code: "GV § 940.05", meaning: "Attempted Murder", type: "Felony", fine: "$1,000 | 600s", impoundment: "N" },
      { code: "GV § 940.01", meaning: "Murder (First Degree)", type: "Felony", fine: "$10,000 | 900s", impoundment: "N" },
      { code: "GV § 940.32(2)", meaning: "Stalking", type: "Misdemeanor", fine: "$400 | 180s", impoundment: "N" },
      { code: "GV § 947.01(2)", meaning: "Disorderly Conduct", type: "Misdemeanor", fine: "$1,500 | 120s", impoundment: "N" },
      { code: "GV § 940.05(2)", meaning: "Involuntary Manslaughter", type: "Misdemeanor", fine: "$2,000 | 240s", impoundment: "N" },
      { code: "GV § 940.10", meaning: "Manslaughter", type: "Felony", fine: "$3,500 | 400s", impoundment: "N" },
      { code: "GV § 940.19(1)", meaning: "Battery", type: "Misdemeanor", fine: "$1,500 | 180s", impoundment: "N" },
      { code: "GV § 947.06(1)", meaning: "Loitering", type: "Misdemeanor", fine: "$1,250 | 90s", impoundment: "N" },
      { code: "GV § 940.05(1)", meaning: "Murder (2nd Degree)", type: "Felony", fine: "$5,000 | 900s", impoundment: "N" },
      { code: "GV § 947.013", meaning: "Harassment (1st Degree)", type: "Misdemeanor", fine: "$600 | 120s", impoundment: "N" },
      { code: "GV § 940.21", meaning: "Reckless Endangerment", type: "Felony", fine: "$2,500 | 300s", impoundment: "N" },
      { code: "GV § 947.012", meaning: "Harassment (2nd Degree)", type: "Misdemeanor", fine: "$400 | 90s", impoundment: "N" },
      { code: "GV § 947.015", meaning: "Threats to Judges / Public Officials", type: "Felony", fine: "$3,000 | 360s", impoundment: "N" },
      { code: "GV § 940.30", meaning: "False Imprisonment", type: "Felony", fine: "$1,500 | 240s", impoundment: "N" }
    ]
  },
  {
    title: "Section 6: Crime Against Justice",
    codes: [
      { code: "GV § 946.10", meaning: "Bribery", type: "Felony", fine: "$10,000 | 600s", impoundment: "N" },
      { code: "GV § 946.41", meaning: "Resisting Arrest", type: "Felony", fine: "$900 | 180s", impoundment: "N" },
      { code: "GV § 346.04", meaning: "Evading a Peace Officer", type: "Felony", fine: "$300 | 120s", impoundment: "Y" },
      { code: "GV § 346.05", meaning: "Felony Evading a Peace Officer", type: "Felony", fine: "$600 | 300s", impoundment: "Y" },
      { code: "GV § 946.46", meaning: "Impersonation of a Peace Officer", type: "Misdemeanor", fine: "$1,000 | 240s", impoundment: "N" },
      { code: "GV § 946.63", meaning: "Filing a False Police Report", type: "Misdemeanor", fine: "$700 | 120s", impoundment: "N" },
      { code: "GV § 346.04", meaning: "Avoiding/Evading a Lawful Traffic Stop", type: "Misdemeanor", fine: "$500 | 150s", impoundment: "Y" },
      { code: "GV § 946.41(2)", meaning: "Failure to Identify to a Peace Officer", type: "Misdemeanor", fine: "$800 | 180s", impoundment: "N" },
      { code: "GV § 946.41(3)", meaning: "Failure to Comply with a Lawful Order", type: "Misdemeanor", fine: "$800 | 180s", impoundment: "N" },
      { code: "GV § 946.42", meaning: "Escape from Custody", type: "Felony", fine: "$1,000 | 600s", impoundment: "N" },
      { code: "GV § 946.43", meaning: "Prisoner Breakout", type: "Felony", fine: "$10,000 | 900s", impoundment: "N" },
      { code: "GV § 946.48", meaning: "Obstruction of Justice", type: "Felony", fine: "$1,000 | 300s", impoundment: "N" },
      { code: "GV § 946.49", meaning: "Cop Baiting", type: "Misdemeanor", fine: "$3,000 | 180s", impoundment: "Y" },
      { code: "GV § 946.51", meaning: "Lying to a Law Enforcement Officer", type: "Misdemeanor", fine: "$4,000 | 180s", impoundment: "N" },
      { code: "GV § 939.05", meaning: "Aiding and Abetting", type: "Misdemeanor", fine: "$2,500 | 150s", impoundment: "Y" },
      { code: "GV § 946.46(1)", meaning: "Tampering with Evidence", type: "Felony", fine: "$2,500 | 360s", impoundment: "N" },
      { code: "GV § 946.42(1)", meaning: "Obstruction of an Officer", type: "Felony", fine: "$1,500 | 300s", impoundment: "N" },
      { code: "GV § 946.48(1)", meaning: "Perjury", type: "Felony", fine: "$5,000 | 600s", impoundment: "N" },
      { code: "GV § 946.49(1)", meaning: "Witness Intimidation", type: "Felony", fine: "$3,000 | 420s", impoundment: "N" },
      { code: "GV § 946.63(1)", meaning: "False Swearing", type: "Misdemeanor", fine: "$1,000 | 240s", impoundment: "N" },
      { code: "GV § 346.07", meaning: "Failure to Obey Court Summons", type: "Misdemeanor", fine: "$500 | 120s", impoundment: "N" }
    ]
  }
]
