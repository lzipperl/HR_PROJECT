// ============================================================
// LPU HRConnect — All Mock Data
// ============================================================

// Dashboard Stats
export const dashboardStats = [
  { label: 'Total Students', value: 34871, suffix: '+', icon: 'GraduationCap' },
  { label: 'Faculty Strength', value: 2065, suffix: '+', icon: 'Users' },
  { label: 'Programs Offered', value: 150, suffix: '+', icon: 'BookOpen' },
  { label: 'Campus Size (Acres)', value: 600, suffix: '', icon: 'Building2' },
];

export const rankings = [
  { body: 'NIRF 2025 — Overall', rank: '#49' },
  { body: 'NIRF 2025 — University', rank: '#31' },
  { body: 'NIRF 2025 — Pharmacy', rank: '#13' },
  { body: 'NIRF 2025 — Law', rank: '#26' },
  { body: 'NIRF 2025 — Architecture', rank: '#24' },
  { body: 'QS World Rankings 2026', rank: '#901–950 (Global), #31 (India)' },
  { body: 'THE World Rankings 2026', rank: 'Top 5 in India' },
  { body: 'THE Impact Rankings 2025', rank: '#2 in India' },
];

export const researchData = {
  patents: '1,418',
  scopusPublications: '19,800+',
  scopusCitations: '2,16,674+',
  grantedIPRs: '2,900+',
  globalCollabs: '550+',
  stanfordTop2: 49,
};

// HR Planning — Demand Forecasting
export const ratioAnalysis = {
  currentStudents: 30000,
  currentFaculty: 1500,
  ratio: '20:1',
  projectedGrowth: 15,
  projectedStudents: 34500,
  projectedFacultyNeeded: 1725,
  additionalHires: 225,
};

export const delphiRounds = [
  {
    round: 1,
    experts: [
      { name: 'Dr. R. Sharma (HR Director)', opinion: 'We need 150 new faculty across STEM departments.' },
      { name: 'Prof. A. Gupta (Dean, Engineering)', opinion: 'At least 180 hires needed to maintain quality.' },
      { name: 'Dr. M. Singh (Academic Planner)', opinion: 'I recommend 100 hires with focus on research faculty.' },
    ],
  },
  {
    round: 2,
    experts: [
      { name: 'Dr. R. Sharma', opinion: 'Revised to 130 — some gaps can be filled with visiting faculty.' },
      { name: 'Prof. A. Gupta', opinion: 'Agree with 140 — balancing teaching and research needs.' },
      { name: 'Dr. M. Singh', opinion: 'Moving to 125 — internal promotions can cover 20 positions.' },
    ],
  },
  {
    round: 3,
    experts: [
      { name: 'Dr. R. Sharma', opinion: 'Final recommendation: 120 new faculty hires.' },
      { name: 'Prof. A. Gupta', opinion: 'Consensus: 120 hires with priority in AI, Biotech, and Law.' },
      { name: 'Dr. M. Singh', opinion: 'Agreed — 120 hires spread across 2 semesters.' },
    ],
  },
];

export const skillGapData = [
  { dept: 'Engineering', required: 92, available: 78 },
  { dept: 'Management', required: 85, available: 72 },
  { dept: 'Law', required: 80, available: 65 },
  { dept: 'Design', required: 88, available: 60 },
  { dept: 'Pharmacy', required: 90, available: 82 },
  { dept: 'Sciences', required: 87, available: 75 },
  { dept: 'Agriculture', required: 78, available: 58 },
  { dept: 'Computer Apps', required: 95, available: 80 },
];

export const successionPipeline = [
  { role: 'Vice Chancellor', holder: 'Dr. Ashok Mittal', readiness: 'green', replacement: 'Pro Vice Chancellor' },
  { role: 'Pro Vice Chancellor', holder: 'Dr. R.K. Singla', readiness: 'green', replacement: 'Dean (Senior)' },
  { role: 'Dean', holder: 'Dr. S. Mehta', readiness: 'yellow', replacement: 'HoD (Senior)' },
  { role: 'Head of Department', holder: 'Dr. P. Kaur', readiness: 'green', replacement: 'Senior Faculty' },
  { role: 'Senior Faculty', holder: 'Dr. N. Kumar', readiness: 'yellow', replacement: 'Junior Faculty' },
  { role: 'Junior Faculty', holder: 'Mr. A. Verma', readiness: 'red', replacement: 'External Hire / PhD Scholar' },
];

// Supply Forecasting
export const employeeInventory = [
  { id: 'LPU-001', name: 'Dr. Anita Sharma', dept: 'Engineering', skills: 'AI/ML, Python, Data Science', experience: 12, training: 'FDP 2024, AI Workshop', promotionEligible: 'Yes' },
  { id: 'LPU-002', name: 'Prof. Rajesh Kumar', dept: 'Management', skills: 'Strategic Planning, HRM, Finance', experience: 15, training: 'Leadership Program', promotionEligible: 'Yes' },
  { id: 'LPU-003', name: 'Dr. Priya Patel', dept: 'Law', skills: 'Corporate Law, IPR, Litigation', experience: 8, training: 'Research Methods 2024', promotionEligible: 'No' },
  { id: 'LPU-004', name: 'Mr. Vikram Singh', dept: 'Design', skills: 'UI/UX, Figma, Adobe Suite', experience: 5, training: 'Digital Tools Workshop', promotionEligible: 'No' },
  { id: 'LPU-005', name: 'Dr. Suman Gupta', dept: 'Pharmacy', skills: 'Pharmacology, Drug Discovery', experience: 18, training: 'FDP, Research Excellence', promotionEligible: 'Yes' },
  { id: 'LPU-006', name: 'Prof. Neha Joshi', dept: 'Sciences', skills: 'Physics, Quantum Computing', experience: 10, training: 'FDP 2023', promotionEligible: 'Yes' },
  { id: 'LPU-007', name: 'Dr. Arun Mehta', dept: 'Computer Apps', skills: 'Cloud Computing, DevOps, Java', experience: 7, training: 'AWS Certification', promotionEligible: 'No' },
  { id: 'LPU-008', name: 'Ms. Kavita Rao', dept: 'Agriculture', skills: 'Agronomy, Soil Science', experience: 6, training: 'Soft Skills Bootcamp', promotionEligible: 'No' },
  { id: 'LPU-009', name: 'Dr. Deepak Verma', dept: 'Engineering', skills: 'Robotics, IoT, Embedded Systems', experience: 14, training: 'Leadership Program, FDP', promotionEligible: 'Yes' },
  { id: 'LPU-010', name: 'Prof. Sunita Kaur', dept: 'Management', skills: 'Marketing, Digital Marketing, Analytics', experience: 11, training: 'FDP 2024, Digital Workshop', promotionEligible: 'Yes' },
  { id: 'LPU-011', name: 'Dr. Amit Thakur', dept: 'Law', skills: 'Constitutional Law, Human Rights', experience: 9, training: 'Research Methods', promotionEligible: 'Yes' },
  { id: 'LPU-012', name: 'Mr. Rahul Nair', dept: 'Design', skills: 'Animation, 3D Modeling, VFX', experience: 4, training: 'Creative Workshop', promotionEligible: 'No' },
];

export const replacementCharts = [
  { current: 'Dr. S. Mehta (Dean, Engineering)', replacements: ['Dr. D. Verma (HoD, Robotics)', 'Dr. A. Sharma (Sr. Faculty, AI/ML)'] },
  { current: 'Prof. R. Kumar (Dean, Management)', replacements: ['Prof. S. Kaur (HoD, Marketing)', 'Dr. P. Jain (Sr. Faculty, Finance)'] },
  { current: 'Dr. K. Reddy (HoD, Pharmacy)', replacements: ['Dr. S. Gupta (Sr. Faculty, Pharmacology)', 'Dr. R. Das (Associate Prof.)'] },
  { current: 'Prof. M. Das (HoD, Law)', replacements: ['Dr. A. Thakur (Sr. Faculty, Constitutional)', 'Dr. P. Patel (Associate Prof.)'] },
];

export const markovMatrix = [
  { level: 'Junior Faculty', stayProb: 0.70, promoteProb: 0.20, leaveProb: 0.10 },
  { level: 'Senior Faculty', stayProb: 0.65, promoteProb: 0.25, leaveProb: 0.10 },
  { level: 'Assoc. Professor', stayProb: 0.60, promoteProb: 0.30, leaveProb: 0.10 },
  { level: 'Professor', stayProb: 0.75, promoteProb: 0.15, leaveProb: 0.10 },
  { level: 'HoD', stayProb: 0.80, promoteProb: 0.12, leaveProb: 0.08 },
  { level: 'Dean', stayProb: 0.85, promoteProb: 0.08, leaveProb: 0.07 },
];

export const decisionPanelData = {
  departments: ['Engineering', 'Management', 'Law', 'Design', 'Pharmacy', 'Sciences', 'Agriculture', 'Computer Apps'],
  vacancyTypes: ['Junior Faculty', 'Senior Faculty', 'Associate Professor', 'Professor', 'HoD'],
  recommendations: {
    Engineering: { 'Junior Faculty': 'external', 'Senior Faculty': 'internal', 'Associate Professor': 'internal', 'Professor': 'internal', 'HoD': 'internal' },
    Management: { 'Junior Faculty': 'external', 'Senior Faculty': 'internal', 'Associate Professor': 'internal', 'Professor': 'external', 'HoD': 'internal' },
    Law: { 'Junior Faculty': 'external', 'Senior Faculty': 'external', 'Associate Professor': 'internal', 'Professor': 'external', 'HoD': 'internal' },
    Design: { 'Junior Faculty': 'external', 'Senior Faculty': 'external', 'Associate Professor': 'external', 'Professor': 'external', 'HoD': 'external' },
    Pharmacy: { 'Junior Faculty': 'external', 'Senior Faculty': 'internal', 'Associate Professor': 'internal', 'Professor': 'internal', 'HoD': 'internal' },
    Sciences: { 'Junior Faculty': 'external', 'Senior Faculty': 'internal', 'Associate Professor': 'internal', 'Professor': 'external', 'HoD': 'internal' },
    Agriculture: { 'Junior Faculty': 'external', 'Senior Faculty': 'external', 'Associate Professor': 'internal', 'Professor': 'external', 'HoD': 'external' },
    'Computer Apps': { 'Junior Faculty': 'external', 'Senior Faculty': 'internal', 'Associate Professor': 'internal', 'Professor': 'internal', 'HoD': 'internal' },
  },
  reasons: {
    internal: [
      'Strong internal talent pipeline with ready successors',
      'Existing faculty with required qualifications and institutional knowledge',
      'Promotion eligible candidates available — boosts retention & morale',
    ],
    external: [
      'No promotion-ready internal candidates currently available',
      'Niche skill set required — market hire recommended',
      'Fresh perspective and industry experience will benefit the department',
    ],
  },
};

// HRD Practices — Training
export const trainingPrograms = [
  { name: 'Faculty Development Program (FDP)', target: 'All Faculty', duration: '2 Weeks', mode: 'Hybrid', trainer: 'Dr. R. Sharma & External Experts', status: 'Ongoing' },
  { name: 'Leadership Excellence Workshop', target: 'Senior Faculty & HoDs', duration: '3 Days', mode: 'Offline', trainer: 'Prof. Amit Verma', status: 'Upcoming' },
  { name: 'Digital Tools & AI Workshop', target: 'All Faculty & Admin Staff', duration: '1 Week', mode: 'Online', trainer: 'Tech Team, LPU', status: 'Completed' },
  { name: 'Research Methodology Masterclass', target: 'PhD Scholars & Faculty', duration: '5 Days', mode: 'Offline', trainer: 'Dr. Priya Kapoor (IIT Delhi)', status: 'Upcoming' },
  { name: 'Customer Service for Admin Staff', target: 'Administrative Staff', duration: '2 Days', mode: 'Online', trainer: 'Ms. Nidhi Choudhary', status: 'Completed' },
  { name: 'Soft Skills Bootcamp', target: 'Junior Faculty & New Hires', duration: '3 Days', mode: 'Hybrid', trainer: 'Dr. Sunita Rao', status: 'Ongoing' },
];

export const trainingModeDistribution = [
  { name: 'Online', value: 40, fill: '#8B0000' },
  { name: 'Offline', value: 35, fill: '#FFD700' },
  { name: 'Hybrid', value: 25, fill: '#DAA520' },
];

export const tnaDepartmentGaps = {
  Engineering: { gaps: ['AI/ML Integration', 'Research Writing', 'Industry 4.0'], recommended: 'Digital Tools & AI Workshop' },
  Management: { gaps: ['Data Analytics', 'Digital Marketing', 'ESG Reporting'], recommended: 'Leadership Excellence Workshop' },
  Law: { gaps: ['Cyber Law Updates', 'International Law', 'Legal Tech'], recommended: 'Research Methodology Masterclass' },
  Design: { gaps: ['3D Prototyping', 'AR/VR Design', 'Sustainability Design'], recommended: 'Digital Tools & AI Workshop' },
  Pharmacy: { gaps: ['Bioinformatics', 'Clinical Trials', 'Regulatory Affairs'], recommended: 'Research Methodology Masterclass' },
  Sciences: { gaps: ['Quantum Computing', 'Lab Automation', 'Data Science'], recommended: 'Faculty Development Program (FDP)' },
  Agriculture: { gaps: ['Precision Farming', 'Drone Technology', 'Climate Science'], recommended: 'Digital Tools & AI Workshop' },
  'Computer Apps': { gaps: ['Cloud Architecture', 'DevSecOps', 'Blockchain'], recommended: 'Digital Tools & AI Workshop' },
};

// Performance Appraisal
export const departmentAppraisalScores = [
  { dept: 'Engineering', score: 4.3 },
  { dept: 'Management', score: 4.1 },
  { dept: 'Law', score: 3.9 },
  { dept: 'Design', score: 4.0 },
  { dept: 'Pharmacy', score: 4.5 },
  { dept: 'Sciences', score: 4.2 },
  { dept: 'Agriculture', score: 3.8 },
  { dept: 'Computer Apps', score: 4.4 },
];

// Career Ladder
export const careerLadder = [
  { level: 'Lecturer', years: '0–3 years', requirements: 'Master\'s degree, NET/SET qualified', publications: 'Not mandatory' },
  { level: 'Assistant Professor', years: '3–6 years', requirements: 'PhD (preferred), 3+ years teaching', publications: '2+ papers in peer-reviewed journals' },
  { level: 'Associate Professor', years: '6–12 years', requirements: 'PhD mandatory, 6+ years experience', publications: '5+ papers, 1 book chapter' },
  { level: 'Professor', years: '12–20 years', requirements: 'PhD, 12+ years, recognized researcher', publications: '10+ papers, 2+ books, h-index 8+' },
  { level: 'Dean', years: '20+ years', requirements: 'Professor rank, 20+ years, leadership record', publications: '15+ papers, significant national grants' },
];

// Employee Engagement
export const engagementInitiatives = [
  { name: 'Annual Sports Meet', description: 'Inter-departmental sports competition fostering team spirit', icon: 'Trophy' },
  { name: 'Faculty Felicitation Ceremony', description: 'Annual awards recognizing outstanding teaching & research', icon: 'Award' },
  { name: 'Research Excellence Awards', description: 'Celebrating top researchers with publications & patents', icon: 'Star' },
  { name: 'Wellness Programs', description: 'Yoga sessions, mental health workshops, health checkups', icon: 'Heart' },
  { name: 'Birthday Celebrations', description: 'Monthly birthday celebrations for all employees', icon: 'Cake' },
];

export const engagementTrend = [
  { year: '2020', score: 72 },
  { year: '2021', score: 76 },
  { year: '2022', score: 81 },
  { year: '2023', score: 85 },
  { year: '2024', score: 89 },
];

export const surveyQuestions = [
  'I feel valued and recognized for my contributions at LPU.',
  'I have access to adequate training and development opportunities.',
  'My department has a supportive and collaborative work environment.',
  'I see a clear career growth path at LPU.',
  'Overall, I am satisfied with my experience at LPU.',
];

// Leadership Development
export const leadershipPrograms = [
  { name: 'Emerging Leaders Program', target: 'Mid-level Faculty (5–10 yrs)', duration: '6 Months', description: 'Identifies and grooms future academic leaders through mentorship, strategic projects, and executive coaching.' },
  { name: 'Women in Leadership Initiative', target: 'Female Faculty & Admin', duration: '4 Months', description: 'Empowers women leaders with networking, skill-building workshops, and sponsorship opportunities.' },
  { name: 'Research Leaders Fellowship', target: 'Senior Researchers', duration: '1 Year', description: 'Supports top researchers in building research teams, securing grants, and publishing in top-tier journals.' },
];

export const leadershipCompetencies = [
  { subject: 'Vision', current: 78, target: 95 },
  { subject: 'Communication', current: 82, target: 90 },
  { subject: 'Decision Making', current: 70, target: 92 },
  { subject: 'Team Building', current: 85, target: 93 },
  { subject: 'Innovation', current: 68, target: 90 },
  { subject: 'Integrity', current: 90, target: 95 },
];

export const leadershipQuizQuestions = [
  { question: 'Do you actively seek feedback from your peers and subordinates?', key: 'feedback' },
  { question: 'Can you make difficult decisions under pressure?', key: 'decisions' },
  { question: 'Do you mentor or coach junior colleagues regularly?', key: 'mentoring' },
  { question: 'Do you take initiative in proposing new academic programs or improvements?', key: 'initiative' },
  { question: 'Are you comfortable with public speaking and leading large meetings?', key: 'speaking' },
];

// Achievements
export const kpiStats = [
  { label: 'Retention Rate', value: 91, suffix: '%', icon: 'UserCheck' },
  { label: 'Training ROI', value: 340, suffix: '%', icon: 'TrendingUp' },
  { label: 'Internal Promotions', value: 68, suffix: '%', icon: 'ArrowUpCircle' },
  { label: 'Avg Appraisal Score', value: 4.2, suffix: '/5', icon: 'Star', decimals: 1 },
  { label: 'New Hires This Year', value: 850, suffix: '+', icon: 'UserPlus' },
  { label: 'Leadership Programs', value: 24, suffix: '', icon: 'Award' },
];

export const productivityData = [
  { metric: 'Faculty Research Output', before: 62, after: 85 },
  { metric: 'Student Satisfaction', before: 71, after: 88 },
  { metric: 'Admin Efficiency', before: 58, after: 79 },
  { metric: 'Grievance Resolution', before: 45, after: 82 },
  { metric: 'Absenteeism Rate', before: 78, after: 42 },
];

export const nirfCorrelation = [
  { year: '2020', hrInvestment: '₹12 Cr', nirfRank: 75, highlights: 'Launched FDP & digital training' },
  { year: '2021', hrInvestment: '₹15 Cr', nirfRank: 68, highlights: 'Leadership program + 360° appraisal' },
  { year: '2022', hrInvestment: '₹19 Cr', nirfRank: 58, highlights: 'AI-based recruitment, LMS launch' },
  { year: '2023', hrInvestment: '₹23 Cr', nirfRank: 52, highlights: 'Employee engagement push, wellness' },
  { year: '2024', hrInvestment: '₹28 Cr', nirfRank: 49, highlights: 'Full HRMS integration, 1418 patents' },
];

export const techSolutions = [
  { name: 'HRMS Software', icon: 'Monitor', desc: 'Centralized human resource management system' },
  { name: 'AI Recruitment', icon: 'Brain', desc: 'AI-powered candidate screening & matching' },
  { name: 'LMS Platform', icon: 'BookOpen', desc: 'Learning Management System for e-training' },
  { name: 'Biometric Attendance', icon: 'Fingerprint', desc: 'Automated biometric attendance tracking' },
  { name: 'e-Appraisal System', icon: 'ClipboardCheck', desc: 'Digital performance appraisal management' },
  { name: 'Analytics Dashboard', icon: 'BarChart3', desc: 'Real-time HR analytics & reporting' },
];

// Gap Analysis
export const gapAnalysisData = {
  departments: ['Engineering', 'Management', 'Law', 'Design', 'Pharmacy', 'Sciences', 'Agriculture', 'Computer Apps'],
  roles: ['Junior Faculty', 'Senior Faculty', 'Associate Professor', 'Professor', 'HoD'],
  levels: ['Beginner', 'Intermediate', 'Advanced'],
  requiredLevel: {
    'Junior Faculty': 40,
    'Senior Faculty': 60,
    'Associate Professor': 75,
    'Professor': 90,
    'HoD': 95,
  },
  currentLevel: {
    Beginner: 20,
    Intermediate: 50,
    Advanced: 80,
  },
  actionPlans: {
    large: { action: 'Intensive Training Program + External Course + Mentorship', timeline: '12–18 months' },
    medium: { action: 'Targeted Training Workshop + Job Rotation', timeline: '6–9 months' },
    small: { action: 'Peer Mentorship + Self-paced Online Course', timeline: '2–4 months' },
    none: { action: 'No action needed — meets or exceeds requirements', timeline: 'N/A' },
  },
};
