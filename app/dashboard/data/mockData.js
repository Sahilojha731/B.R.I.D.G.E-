// ─── Mock Data ──────────────────────────────────────────────────────────────
// Replace these with real API calls when the backend is ready.

export const currentUser = {
  name: "Sakshi Pawar",
  id: "ID: #PT-80621",
  role: "Patient",
  avatarInitials: "SP",
};

export const upcomingConsultation = {
  status: "Ready to Join",
  startsIn: "Starts in 25 mins",
  doctorName: "Dr. Ananya Mehta",
  credentials: "BDS, MDS - Endodontics • Apex Dental Center • License #DEN-44910",
  date: "Today • 4:30 PM",
  type: "Dental Teleconsultation (30 min)",
  languageBridge: "Language Bridge: English ⇄ Marathi (IndicTrans2 + Faster Whisper)",
};

export const recentConsultations = [
  {
    id: "1",
    doctorName: "Dr. Ananya Mehta",
    initials: "AM",
    color: "bg-teal-500",
    status: "Completed",
    specialization: "General Dental & Endodontics",
    fdi: "FDI Tooth #46",
    date: "12 Sep 2026",
    languages: "English → Marathi",
    summary: '"Sharp pain in lower right tooth with thermal sensitivity."',
  },
  {
    id: "2",
    doctorName: "Dr. Rajesh Iyer",
    initials: "RI",
    color: "bg-blue-500",
    status: "Completed",
    specialization: "Orthodontics Review",
    fdi: "Clear Aligner Tray #14",
    date: "28 Aug 2025",
    languages: "English → Marathi",
    summary: '"Spacing progression check. Good aligner tracking."',
  },
  {
    id: "3",
    doctorName: "Dr. Tanvi Deshmukh",
    initials: "TD",
    color: "bg-purple-500",
    status: "Completed",
    specialization: "Emergency Tele-Triage",
    fdi: "Wisdom Tooth Pericoronitis",
    date: "14 Jul 2025",
    languages: "English → Hindi",
    summary: '"Prescribed warm saline rinse and antibacterial gel."',
  },
];

export const aiConsultationSummary = {
  title: "AI-Assisted Consultation Summary",
  badge: "Dental NLP",
  fdiLabel: "FDI #46",
  condition: "Lower Right Molar Sensitivity",
  validatedBy: "Validated by Dr. Ananya Mehta • Session #12-SEP",
  details: [
    { label: "Chief Concern:", value: "Tooth pain triggered by cold/hot liquids" },
    { label: "Affected Area:", value: "Lower right first molar (FDI #46)" },
    { label: "Procedure Discussed:", value: "Root Canal Treatment (RCT)" },
    { label: "Follow-up:", value: "Clinical evaluation in 7 days" },
  ],
  marathiSynopsis: {
    title: "मराठी सारांश (Auto-Translated Marathi Synopsis)",
    text: "खालील उजव्या दाढेमध्ये (#46) तीव्र वेदना व संवेदनशीलता आहे. रूट कॅनल उपचारांची (RCT) शिफारस करण्यात आली आहे. १४ दिवसांत पुनर्पाहणी आवश्यक आहे.",
  },
};

export const languageSettings = {
  preferredLanguage: "Marathi (मराठी)",
  liveCaptionsStream: true,
  audioTranslation: true,
  latency: "120 ms (Optimized)",
};

export const dentalVisualization = {
  toothLabel: "3. Pulp Chamber (मज्जा)",
  description:
    "The innermost layer containing blood vessels and nerves. Tooth #46 shows inflammation (Pulpitis) requiring Root Canal disinfection.",
  layers: ["1. Enamel (इनॅमल)", "2. Dentin (डेंटीन)", "3. Pulp Chamber"],
};

export const navItems = [
  { label: "Dashboard", icon: "grid", active: true },
  { label: "Find a Dentist", icon: "search" },
  { label: "Appointments", icon: "calendar" },
  { label: "Consultations", icon: "video" },
  { label: "Consultation History", icon: "clock" },
  { label: "Dental Visualizations", icon: "eye" },
  { label: "Profile", icon: "user" },
  { label: "Settings", icon: "settings" },
];
