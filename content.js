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
  role: "IT Consultant & Project Coordinator",
  status: "Open to new roles and good problems",
  headline: "I turn business needs into projects that ship.",
  photo: "assets/img/victor-casual.jpg",   // main photo (polaroids)
  workspacePhoto: "assets/img/victor-suit.jpg", // second polaroid on the home page
  avatar: "assets/img/avatar-casual.jpg",  // small round picture
  email: "Victormoke75@gmail.com",
  phone: "+351 917 387114",
  cvFile: "assets/Victor-Daramola-Moke-CV.pdf", // replace this PDF to update your CV download
  links: {
    linkedin: "",                    // e.g. "https://www.linkedin.com/in/your-name"
    github: "https://github.com/MokeDara"
  },

  // Sticky notes around your name on the home page
  heroNotes: ["Ships on time", "Talks to people", "IT Consultant", "Project Coordinator"],

  // ---------- SHORT INTRO (home + about) ----------
  intro:
    "I'm an IT project coordinator who gets a little too excited about turning messy business needs into clear plans and working systems. ✨ I keep teams aligned, deadlines real, and clients happy.",

  // Colourful skill chips (colors: yellow, green, pink, blue)
  chips: [
    { label: "Project Coordination", color: "yellow", emoji: "🗂️" },
    { label: "IT Consulting", color: "green", emoji: "💡" },
    { label: "Agile & Jira", color: "pink", emoji: "🧩" },
    { label: "Python & SQL", color: "blue", emoji: "💻" }
  ],

  // ---------- ABOUT PAGE ----------
  bio: [
    "Over the last 4 years I've worked where business and technology meet: coordinating IT and branding projects for clients, building web applications and APIs, and running live VAR systems for professional football broadcasts.",
    "My favourite part of any project is the start, sitting with the people who will use the thing, understanding what they actually need, and turning that into a plan the whole team believes in. Then I keep it moving, one working increment at a time.",
    "I'm currently completing an MSc in Information Systems at Universidade do Minho, where I also work as a Research Fellow in Strategy & Competitiveness."
  ],
  bioNotes: [
    "Right now I'm finishing Skyloom, an AI clinical decision support system for my MSc, and looking for my next role in IT consulting or project management.",
    "When I'm not working, I'm organising events as Director of Inclusion at SEA UMinho, or building side projects to learn something new."
  ],

  // "How I work" sticky notes (colors: lavender, sand, mint, pink)
  howIWork: [
    { title: "Start with the people", text: "Before any plan or tool, I sit with the users and stakeholders: doctors, directors, clients. A project built on the right questions saves weeks later.", note: "questions before tools.", color: "lavender" },
    { title: "Ship in small wins", text: "I plan work in short Agile iterations, track it in Jira, and deliver something that works at every step. 5 of my 7 client projects finished ahead of schedule and under budget.", note: "small wins, often.", color: "sand" },
    { title: "Stay calm when it's live", text: "Across 21+ live football broadcasts, I learned to fix problems under pressure, keep everyone informed, and write down what we learned afterwards.", note: "no second takes.", color: "mint" }
  ],

  // ---------- EXPERIENCE (newest first) ----------
  experience: [
    {
      role: "Localization QA Specialist (English)",
      company: "Side",
      location: "Braga, Portugal",
      dates: "Jul 2026 – Sep 2026",
      years: "2026",
      highlight: "Quality checks on video game content across multiple platforms",
      points: [
        "Tested localized video game content for linguistic, cultural and functional accuracy.",
        "Audited deliverables against client style guides and acceptance criteria.",
        "Logged and tracked defects to keep fixes on schedule for release."
      ],
      tags: ["QA Testing", "Issue Tracking", "Attention to Detail"]
    },
    {
      role: "Match Operations & VAR Systems Engineer",
      company: "Hawk-Eye Innovations Ltd",
      location: "Multiple stadiums, Portugal",
      dates: "Sep 2025 – Jun 2026",
      years: "2025 – 2026",
      highlight: "21+ live professional matches · 5 team members trained",
      points: [
        "Coordinated match officials, broadcasters, stadium managers and technical teams to deliver VAR operations to fixed broadcast deadlines.",
        "Resolved network, audio and video incidents in real time under pressure.",
        "Trained and onboarded 5 VAR technical team members across different stadiums.",
        "Wrote post-match incident reports with root causes and recommendations."
      ],
      tags: ["Live Operations", "Incident Management", "Training", "Stakeholders"]
    },
    {
      role: "Software Developer",
      company: "Mokesinfotech Solution",
      location: "Remote / Hybrid",
      dates: "Nov 2023 – Dec 2025",
      years: "2023 – 2025",
      highlight: "Client web applications, REST APIs and automated workflows",
      points: [
        "Built server-side applications and REST API integrations with Python, SQL and Node.js.",
        "Managed CI/CD and deployments with Docker, Vercel and AWS, watching reliability and cost.",
        "Redesigned manual business processes as automated Python and n8n workflows.",
        "Wrote documentation and guides that cut onboarding time for new team members."
      ],
      tags: ["Python", "Node.js", "SQL", "AWS", "Docker", "Agile"]
    },
    {
      role: "Project Coordinator – IT & Brand Delivery",
      company: "Athwart Global",
      location: "Remote",
      dates: "Nov 2022 – Aug 2023",
      years: "2022 – 2023",
      highlight: "7+ client projects · 5 delivered ahead of schedule and under budget",
      points: [
        "Coordinated 7+ major client projects across IT and branding teams, including work for a national development bank and a real-estate company.",
        "Managed schedules, resources and priorities in Jira, Microsoft Dynamics AX and Excel.",
        "Introduced Agile practices to plan, delegate and track work across remote teams.",
        "Translated client and business needs into clear plans for the delivery team."
      ],
      tags: ["Project Coordination", "Jira", "Agile", "Client Delivery"]
    }
  ],

  // ---------- LEADERSHIP ----------
  leadership: [
    {
      role: "Co-Founder",
      company: "Cycle Point Branding",
      dates: "",
      points: [
        "Coordinate daily branding and IT operations.",
        "Manage product delivery from brief to handover.",
        "Align business strategy with customer needs."
      ]
    },
    {
      role: "Director of Inclusion",
      company: "SEA UMinho (Estudantes Africanos na AAUMinho)",
      dates: "",
      points: [
        "Plan and coordinate association events.",
        "Support HR in member and resource management.",
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
      link: "",
      image: "",
      color: "yellow"
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
    { group: "Project Management", items: ["Agile / Scrum", "Kanban", "Jira", "Risk & Issue Mgmt", "Stakeholder Mgmt", "MS Dynamics AX", "Excel"] },
    { group: "Development", items: ["Python", "SQL", "JavaScript", "TypeScript", "Node.js", "React", "Next.js", "Django", "Java"] },
    { group: "Data, Cloud & AI", items: ["PostgreSQL", "MongoDB", "Amazon Neptune", "ChromaDB", "AWS", "Docker", "Vercel", "n8n", "Claude API", "Gemini API", "Pandas"] }
  ],

  languages: ["English (Fluent)", "Portuguese (Fluent)"],

  // Inverting square that drifts across your name on the home page (true = on, false = off)
  cursorLens: true,

  // ---------- TERMINAL (opens with the code button, the >_ button or Ctrl+K) ----------
  // What the "about" command prints. Keep each line short (under 40 characters).
  terminalAbout: [
    "VICTOR DARAMOLA MOKE",
    "IT Consultant & Project Coordinator",
    "",
    "4 years turning business needs",
    "into projects that ship.",
    "7+ client projects, 5 ahead of",
    "schedule and under budget.",
    "21+ live football broadcasts.",
    "MSc Information Systems, UMinho."
  ],

  // ---------- CONTACT ----------
  contactLine: "Got a project, a messy process, or just want to say hi? Send it over. I read every message.",
  contactNote:
    "Open to contract work, full-time roles, and interesting conversations about continuous process improvement, ideation and project development."
};
