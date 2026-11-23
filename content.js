/* =====================================================================
   CONTENT FILE — this is the ONLY file you need to edit to update
   your portfolio. Change the text between the quotes, save, commit to
   GitHub, and Vercel publishes the change automatically.

   Tips:
   - Keep the quotes " " and commas , exactly where they are.
   - To add a project / job / certificate: copy one block { ... },
     paste it below the last one (with a comma between blocks), edit it.
   - Images go in the /images folder. Then write the path here,
     e.g.  photo: "images/victor.jpg"
   - Leave an image as "" and the site shows a neat placeholder instead.
   ===================================================================== */

window.CONTENT = {
  // ---------- BASICS ----------
  name: "Victor Moke",
  fullName: "Victor Daramola Moke",
  shortName: "VICTOR",              // big pixel name on the home page
  initials: "VM",
  role: "IT Consultant, Software Developer & IT Auditor",
  status: "Open to new roles and good problems",
  headline: "I turn business needs into projects that ship.",
  photo: "assets/img/victor-casual.jpg",   // main photo (polaroids)
  workspacePhoto: "assets/img/victor-suit.jpg", // second polaroid on the home page
  avatar: "assets/img/avatar-casual.jpg",  // small round picture
  email: "Victormoke75@gmail.com",
  phone: "+351 917 387114",
  cvFile: "assets/Victor-Daramola-Moke-CV.pdf", // replace this PDF to update your CV download
  links: {
    linkedin: "https://www.linkedin.com/in/victor-d-49547724b",
    github: "https://github.com/MokeDara"
  },

  // Sticky notes around your name on the home page (3 or 4 of them)
  heroNotes: ["IT Consulting", "Software Developer", "IT Audit & Governance", "Project Management"],

  // ---------- SHORT INTRO (home + about) ----------
  intro:
    "I'm an IT consultant, developer and IT auditor who gets a little too excited about turning messy business needs into reliable, well-controlled systems. ✨ I keep teams aligned, deadlines real, and clients happy.",

  // Colourful skill chips (colors: yellow, green, pink, blue)
  chips: [
    { label: "IT Consulting", color: "yellow", emoji: "💡" },
    { label: "IT Audit & Compliance", color: "green", emoji: "🔍" },
    { label: "Agile & Jira", color: "pink", emoji: "🧩" },
    { label: "Python & SQL", color: "blue", emoji: "💻" }
  ],

  // ---------- ABOUT PAGE ----------
  bio: [
    "For 4 years I've worked across IT consulting, software development and IT audit, in IT services, branding, healthcare and education: analysing requirements, designing solutions, automating processes and checking that systems are reliable and compliant.",
    "My favourite part of any project is the start, sitting with clients, leadership and end users, understanding what they actually need, and turning that into a plan the whole team believes in. Then I keep it moving, one working increment at a time.",
    "I'm currently completing an MSc in Information Systems at Universidade do Minho, where I also work as a Research Fellow in Strategy & Competitiveness."
  ],
  bioNotes: [
    "Right now I'm finishing Skyloom, an AI clinical decision support system for my MSc, and looking for my next role in IT consulting, software development or IT audit.",
    "When I'm not working, I'm organising events as Director of Inclusion at SEA UMinho, or building side projects to learn something new."
  ],

  // "How I work" sticky notes (colors: lavender, sand, mint, pink)
  howIWork: [
    { title: "Start with the people", text: "Before any plan or tool, I sit with the users and stakeholders: doctors, directors, clients. A project built on the right questions saves weeks later.", note: "questions before tools.", color: "lavender" },
    { title: "Ship in small wins", text: "I plan work in short Agile iterations, track it in Jira, and deliver something that works at every step. 5 of my client projects finished ahead of schedule and under budget.", note: "small wins, often.", color: "sand" },
    { title: "Check before go-live", text: "Before each of 21+ live football broadcasts, I audited system configuration and data accuracy. When something broke, I fixed it under pressure and documented the root cause.", note: "trust, but verify.", color: "mint" }
  ],

  // ---------- EXPERIENCE (newest first) ----------
  experience: [
    {
      role: "Localization QA Specialist (English)",
      company: "Side",
      location: "Braga, Portugal",
      dates: "Jul 2026 – Sep 2026",
      years: "2026",
      highlight: "Pre-release quality and compliance checks across multiple platforms",
      points: [
        "Tested localized software builds across multiple platforms, verifying functional, linguistic and cultural accuracy before release.",
        "Audited deliverables against client standards, style guides and acceptance criteria, documenting non-compliance and recommending corrections.",
        "Logged, prioritised and tracked defects in issue-tracking systems through to resolution, keeping releases on schedule."
      ],
      tags: ["QA Testing", "Compliance Checks", "Issue Tracking"]
    },
    {
      role: "Match Operations & VAR Systems Engineer (Freelance)",
      company: "Hawk-Eye Innovations Ltd",
      location: "Multiple stadiums, Portugal",
      dates: "Sep 2025 – Jun 2026",
      years: "2025 – 2026",
      highlight: "21+ live professional matches · 5 team members trained",
      points: [
        "Operated and supported mission-critical real-time systems, including network, audio, video and data transmission, across multiple professional football venues.",
        "Performed pre-match system audits and configuration checks, verifying system integrity, data accuracy and compliance with operational standards before go-live.",
        "Diagnosed and resolved network, audio and video incidents in real time, documenting root causes and corrective actions in post-incident reports.",
        "Coordinated with broadcast IT teams, technical staff and match officials across 21+ matches, and trained 5 technical team members on operating procedures."
      ],
      tags: ["Live Operations", "System Audits", "Incident Management", "Training"]
    },
    {
      role: "Junior Developer",
      company: "Mokesinfotech Solution",
      location: "Remote / Hybrid",
      dates: "Nov 2023 – Dec 2025",
      years: "2023 – 2025",
      highlight: "Client applications, REST APIs, CI/CD and automated workflows",
      points: [
        "Built and maintained server-side applications and REST API integrations for client projects using Python, SQL and Node.js, with PostgreSQL and MongoDB.",
        "Managed CI/CD pipelines, containerised deployments and cloud services (AWS, Docker, Vercel), balancing reliability, security and running cost.",
        "Redesigned manual business processes as automated Python and n8n workflows, reducing manual effort and errors.",
        "Implemented automated unit testing and quality controls that reduced regressions and protected service levels.",
        "Produced system documentation, user manuals and installation guides that supported client handover and traceability."
      ],
      tags: ["Python", "SQL", "REST APIs", "AWS", "Docker", "n8n"]
    },
    {
      role: "Junior IT Consultant",
      company: "Athwart Global",
      location: "Remote",
      dates: "Nov 2022 – Aug 2023",
      years: "2022 – 2023",
      highlight: "5 projects delivered ahead of schedule and under budget",
      points: [
        "Advised clients on IT and branding engagements from requirements through solution design, delivering 5 projects ahead of schedule and under budget.",
        "Assessed client requirements and business processes, managing resources and priorities in Jira, Microsoft Dynamics AX and Excel.",
        "Translated business strategy and customer pain points into technical roadmaps, advising senior leadership on the right delivery approach.",
        "Introduced Agile workflows for distributed teams, improving visibility, accountability and delivery speed.",
        "Conducted operational and IT asset audits, cost analyses and asset verifications, reporting findings to executive management."
      ],
      tags: ["IT Consulting", "Requirements", "IT Asset Audits", "Agile", "Jira"]
    }
  ],

  // ---------- LEADERSHIP ----------
  leadership: [
    {
      role: "Co-Founder",
      company: "Cycle Point Branding",
      dates: "",
      points: [
        "Co-lead daily branding and IT operations.",
        "Manage product delivery from brief to handover, in line with client needs."
      ]
    },
    {
      role: "Director of Inclusion",
      company: "SEA UMinho (Estudantes Africanos na AAUMinho)",
      dates: "",
      points: [
        "Plan and coordinate association events.",
        "Support member and resource management.",
        "Introduced Agile methods to speed up event delivery."
      ]
    }
  ],

  // ---------- PROJECTS ----------
  // color: blue, ink, yellow, pink   |  image: "images/skyloom.png" or ""
  projects: [
    {
      title: "Skyloom",
      date: "2026",
      category: "Healthcare AI · MSc Project",
      summary: "An AI clinical decision support system that keeps patient records safe and in sync.",
      points: [
        "Kept 500 synthetic patient records in sync across PostgreSQL, Amazon Neptune and ChromaDB.",
        "Delivered in 3 Agile iterations, ending in a self-repairing AI agent.",
        "The agent repaired 25/25 test faults with a 1.4 s median repair time.",
        "Presented to nurses, doctors and care-home directors and turned their feedback into requirements."
      ],
      tags: ["Python", "Django", "AWS", "Claude API"],
      link: "",
      image: "",
      color: "blue"
    },
    {
      title: "OPtioN!",
      date: "2026",
      category: "Education Platform · Personal Project",
      summary: "Optional course selection for 4 Master's programmes, without the email chaos.",
      points: [
        "Replaced email-based course selection for MEGSI, MSI, MECD and METI with a web prototype.",
        "Separate access for students, course directors and school management.",
        "Modelled seat limits, approvals and ECTS rules, checked by automated tests.",
        "Gathered feedback from a programme director and lecturers to prioritise features."
      ],
      tags: ["Next.js", "React", "TypeScript", "Tailwind", "Vercel"],
      link: "https://o-ptio-n.vercel.app/",
      image: "",
      color: "ink"
    },
    {
      title: "AITAS",
      date: "2026",
      category: "Intelligent Automation · MSc Project",
      summary: "Automated Intelligent Talent Acquisition System: 4 robots that screen, grade and onboard candidates.",
      points: [
        "Orchestrated 4 Python robots that collect resumes from Outlook, grade them with AI, and decide: hire, test or reject.",
        "Graded candidates 1–10 on QA skills (Selenium, Jira) with Google Gemini 2.0 Flash, returning structured JSON.",
        "Generated Word contract offers automatically, or sent Google Form tests, based on the AI score.",
        "Designed to cut recruitment screening time by 95% (TechFlow Solutions case study)."
      ],
      tags: ["Python", "Gemini API", "Outlook", "Pandas", "docxtpl"],
      link: "https://github.com/MokeDara/AITAS-Intelligent-Recruitment-System",
      image: "",
      color: "yellow"
    },
    {
      title: "JOBMEET",
      date: "",
      category: "AI Career Tool · Personal Project",
      summary: "AI resume optimizer and ATS matcher: upload a CV, paste a job ad, and see how well they fit.",
      points: [
        "Built a Streamlit web app that scores a PDF resume against a job description from 0 to 100, listing missing keywords and skills.",
        "Offers two analysis modes: Google Gemini for detailed reasoning, or TF-IDF and cosine similarity with no API calls.",
        "Falls back automatically to TF-IDF matching if the AI service is unavailable.",
        "Keeps the uploaded resume in the session, so one CV can be checked against several job ads."
      ],
      tags: ["Python", "Streamlit", "Gemini API", "scikit-learn", "NLTK"],
      link: "https://github.com/MokeDara/JOBMEET",
      image: "",
      color: "pink"
    }
  ],

  // "Worked with" tape labels on the home page (text only)
  workedWith: ["Hawk-Eye", "Mokesinfotech", "Athwart Global", "UMinho"],

  // ---------- EDUCATION ----------
  education: [
    { degree: "MSc in Information Systems", school: "Universidade do Minho, Braga", dates: "Sep 2024 – Present", note: "Research Fellow, Strategy & Competitiveness (2025 – Present)" },
    { degree: "BSc in Computer Science", school: "Iheris University, Togo", dates: "Nov 2018 – Nov 2022", note: "" }
  ],

  // ---------- CERTIFICATIONS ----------
  certifications: [
    "AWS Partner Accreditation – Technical & Business (2026)",
    "AWS Cloud Financial Management",
    "AWS Technical Essentials",
    "Open Course Week on Energy & Modeling – Centro ALGORITMI (2026)",
    "Product Design Certificate"
  ],

  // ---------- SKILLS (grouped) ----------
  skills: [
    { group: "IT Consulting & Audit", items: ["Requirements Analysis", "Solution Design", "Process Improvement", "IT Risk Identification", "System & Asset Audits", "Compliance Checks", "Root-Cause Analysis", "Incident Reporting"] },
    { group: "Project Management", items: ["Agile / Scrum", "Kanban", "SDLC", "Risk & Issue Mgmt", "Stakeholder Mgmt", "Change Requests", "Jira", "MS Dynamics AX", "Excel"] },
    { group: "Programming", items: ["Python", "SQL", "Next.js", "REST APIs", "GitHub", "n8n"] },
    { group: "Data & AI", items: ["PostgreSQL", "MySQL", "MongoDB", "Amazon Neptune", "ChromaDB", "Claude API", "Gemini API", "AI Agents", "scikit-learn", "Streamlit"] },
    { group: "Cloud & DevOps", items: ["AWS (EC2, DynamoDB, Neptune)", "Docker", "Vercel", "CI/CD"] }
  ],

  languages: ["English (Fluent)", "Portuguese (Fluent)"],

  // Inverting square that drifts across your name on the home page (true = on, false = off)
  cursorLens: true,

  // ---------- TERMINAL (opens with the code button, the >_ button or Ctrl+K) ----------
  // What the "about" command prints. Keep each line short (under 40 characters).
  terminalAbout: [
    "VICTOR DARAMOLA MOKE",
    "IT Consultant · Developer · IT Auditor",
    "",
    "4 years in IT consulting, software",
    "development and IT audit.",
    "5 projects delivered ahead of",
    "schedule and under budget.",
    "21+ live football broadcasts.",
    "MSc Information Systems, UMinho."
  ],

  // ---------- CONTACT ----------
  contactLine: "Got a project, a messy process, or just want to say hi? Send it over. I read every message.",
  contactNote:
    "Open to contract work, full-time roles, and interesting conversations about continuous process improvement, ideation and project development."
};
