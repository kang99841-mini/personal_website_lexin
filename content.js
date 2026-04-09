/**
 * ┌─────────────────────────────────────────────────────────┐
 * │  LEXIN'S PORTFOLIO — CONTENT EDITOR                     │
 * │                                                         │
 * │  This is the ONLY file you need to edit.                │
 * │                                                         │
 * │  HOW TO EDIT:                                           │
 * │  1. Open this file in TextEdit, Notepad, or VSCode      │
 * │  2. Find the section you want to change (search by      │
 * │     the section name e.g. "HERO" or "EDUCATION")        │
 * │  3. Edit the text between the  " "  quote marks         │
 * │  4. Save the file  (Cmd+S)                              │
 * │  5. Refresh your browser to see the changes             │
 * │                                                         │
 * │  RULE: Only change text inside " " quotes.              │
 * │  Don't delete commas  ,  colons  :  or brackets  { }   │
 * └─────────────────────────────────────────────────────────┘
 */

const PORTFOLIO = {


  // ════════════════════════════════════════════════════════
  // SECTION 1 — YOUR BASIC DETAILS
  //             Change these first — they appear everywhere
  // ════════════════════════════════════════════════════════

  name:             "Lexin",
  role:             "AI Product Manager",
  location:         "Singapore",

  email:            "your.email@gmail.com",         // ← change this

  linkedin_url:     "https://linkedin.com/in/yourprofile",  // ← change this
  linkedin_display: "linkedin.com/in/yourprofile",          // ← what shows on screen

  // Path to your resume PDF.
  // Drop your PDF into assets/resume/ and update the filename below.
  resume_file: "assets/resume/Lexin_Resume.pdf",

  // Show "Open to Opportunities" banner?
  // true = yes show it  |  false = hide it
  open_to_work: true,


  // ════════════════════════════════════════════════════════
  // SECTION 2 — HERO
  //             The first thing visitors see at the top
  // ════════════════════════════════════════════════════════

  hero: {

    // The big 3-line headline.
    // Line 3 is highlighted in purple — make it punchy.
    headline: [
      "I design products",
      "where AI does the work",
      "humans hate."
    ],

    // 1–2 sentences below the headline.
    subtext: "Human Centred Design graduate from SUTD, building an AI agent platform with Workato. I make complex AI behaviour feel simple, trustworthy, and worth using."

  },


  // ════════════════════════════════════════════════════════
  // SECTION 3 — STATS
  //             4 small highlight cards in the hero section
  // ════════════════════════════════════════════════════════

  stats: [
    { value: "HCD",   label: "Master's Focus"  },
    { value: "AI PM", label: "Target Role"      },
    { value: "SUTD",  label: "Graduating 2025"  },
    { value: "0→1",   label: "Builder Mindset"  },
  ],


  // ════════════════════════════════════════════════════════
  // SECTION 4 — ABOUT ME
  //             Short personal section with photo and bio
  // ════════════════════════════════════════════════════════

  about: {

    // Your profile photo.
    // Drop a photo into assets/photos/ and update the filename below.
    // If the file isn't found, your initials show instead — that's fine.
    photo:    "assets/photos/profile.jpg",
    initials: "LX",   // shown as fallback if no photo

    // Write 2–3 sentences about yourself here.
    bio: "I'm a Human Centred Design student at SUTD, focused on the space where AI systems meet real human behaviour. I'm drawn to AI product management because the hardest problems aren't the models — they're the moments users don't trust the output, don't understand what went wrong, or just give up. My goal is to be the PM who designs those moments right.",

    // 3 things you're currently working on or learning.
    // Keep each one short — one sentence each.
    currently: [
      "Building an AI agent platform for enterprise workflows with Workato",
      "Studying LLM evaluation, prompt design, and AI product metrics",
      "Exploring how to design for uncertainty in AI-powered interfaces",
    ]

  },


  // ════════════════════════════════════════════════════════
  // SECTION 5 — VALUE PROPS
  //             "What I bring" — 3 cards explaining your strengths
  // ════════════════════════════════════════════════════════

  props: [
    {
      icon:  "🎯",
      title: "Human-Centred Design",
      body:  "Trained in HCD — I start every problem with people, not technology. User interviews, journey mapping, and iterative prototyping are how I build conviction before writing a single spec."
    },
    {
      icon:  "🤖",
      title: "AI Agent Literacy",
      body:  "Hands-on building an enterprise AI agent platform with Workato. I understand how agentic systems work, where they break down, and how to design the human-in-the-loop moments that make them trustworthy."
    },
    {
      icon:  "🔗",
      title: "PM–Designer Bridge",
      body:  "I speak both languages. I can run a design sprint and write a PRD in the same week. I know when to zoom into the interaction and when to zoom out to the business problem."
    }
  ],


  // ════════════════════════════════════════════════════════
  // SECTION 6 — FEATURED PROJECT (WORKATO CAPSTONE)
  //             Your main case study — gets the full treatment
  // ════════════════════════════════════════════════════════

  featured_project: {

    title:   "AI Agent Platform for Enterprise Workflows",
    company: "Workato × SUTD Capstone",
    period:  "2024 – 2025",
    status:  "In Progress",    // Change to "Completed" when done

    // Logo image: drop file into assets/logos/ and update below.
    // If no file is found, the logo_initials letter shows instead.
    logo:          "assets/logos/workato_logo.png",
    logo_bg:       "#1a1a2e",    // background colour behind logo
    logo_initials: "W",          // fallback letter if no logo

    // My role label (shown as a badge on the card)
    my_role: "Product Manager & UX Lead",

    // 1–2 sentence description of the project
    summary: "Capstone project designing an AI agent system for Workato — one of the world's leading enterprise automation platforms. The agent handles complex multi-step business workflows that previously required full human orchestration.",

    // THE 4 HCD PROCESS STAGES
    // Fill in what YOU specifically did at each stage.
    // Keep each "what" to 1–2 sentences.
    process: [
      {
        step: "Discover",
        icon: "🔍",
        what: "Conducted user interviews with enterprise operations teams to map pain points in existing automation workflows and uncover unmet needs"
      },
      {
        step: "Define",
        icon: "📋",
        what: "Synthesised research into core user problems and authored the full product requirements document (PRD) with acceptance criteria"
      },
      {
        step: "Design",
        icon: "✏️",
        what: "Led interaction design for the agent interface — focusing on transparency, user control, and graceful failure states users can recover from"
      },
      {
        step: "Deliver",
        icon: "🚀",
        what: "Shipped a working prototype with Workato engineering, then ran usability testing sessions with enterprise users to validate and iterate"
      }
    ],

    // KEY OUTCOMES — change these to your real numbers.
    // You can have 2, 3, or 4 outcomes.
    outcomes: [
      { value: "12+",   label: "User interviews"        },
      { value: "1 PRD", label: "Requirements document"  },
      { value: "Tested",label: "With enterprise users"  },
    ],

    // Tags shown at the bottom
    tags: ["AI Agents", "Product Management", "UX Research", "Workato", "PRD Writing", "Usability Testing"],

    // Link to your full case study write-up.
    // Leave blank ("") if not ready yet — the button won't show.
    case_study_url:   "",
    case_study_label: "View Full Case Study",

  },


  // ════════════════════════════════════════════════════════
  // SECTION 7 — MORE PROJECTS
  //             Add other projects here as you build them.
  //             Set  placeholder: true  for empty slots.
  // ════════════════════════════════════════════════════════

  projects: [

    // ── HOW TO ADD A REAL PROJECT ──────────────────────────
    // Copy this block and paste it above the placeholders:
    //
    // {
    //   placeholder: false,
    //   title:         "Project Name",
    //   company:       "Company or Course Name",
    //   period:        "Year or date range",
    //   logo:          "assets/logos/company_logo.png",
    //   logo_bg:       "#000000",   ← background colour
    //   logo_initials: "AB",        ← fallback initials
    //   summary:       "One or two sentence description.",
    //   outcomes: [
    //     { value: "X%",  label: "Describe the result" },
    //     { value: "3",   label: "Another result"      },
    //   ],
    //   tags: ["Tag 1", "Tag 2", "Tag 3"],
    //   link_url:   "",             ← link to project (or leave blank)
    //   link_label: "View Project",
    // },
    // ──────────────────────────────────────────────────────

    {
      placeholder: true,
      icon:  "🖼️",
      title: "UX Case Study",
      hint:  "Add a design project that shows your process end-to-end",
      tips: [
        "What was the problem, and who was affected?",
        "Show your research method — interviews, journey mapping, usability tests",
        "Include before/after: what changed because of your design decision?",
        "Quantify impact where possible: task success rate, time saved, NPS score",
        "Best fit: redesigning an AI feature, fixing a broken workflow, improving onboarding"
      ]
    },

    {
      placeholder: true,
      icon:  "🧠",
      title: "AI Tool or Side Project",
      hint:  "Something you built — even small projects show initiative and curiosity",
      tips: [
        "A GPT assistant or prompt-engineered tool you built for a real personal use case",
        "An AI feature concept backed by a PRD write-up and Figma mockups",
        "A no-code automation you built with Zapier, Make, or Workato",
        "Include: what it does, what happens when it fails, how you designed for that edge case"
      ]
    },

    {
      placeholder: true,
      icon:  "📐",
      title: "Research or Academic Project",
      hint:  "Academic work belongs in a PM portfolio when it shows product thinking",
      tips: [
        "A SUTD HCD coursework project with clear research synthesis and design decisions",
        "A thesis or study on AI adoption, human-AI trust, or workflow automation",
        "A competitive analysis or market landscape you wrote for a class or personally",
        "Frame it: what product decision does this research actually inform?"
      ]
    },

  ],


  // ════════════════════════════════════════════════════════
  // SECTION 8 — SKILLS
  //             Add or remove tags in any category.
  //             To add a tag: add  "New Tag",  to the list.
  //             To remove: delete that line (keep the commas neat).
  // ════════════════════════════════════════════════════════

  skills: [
    {
      category: "Human Centred Design",
      tags: ["User Research", "Journey Mapping", "Usability Testing", "Affinity Mapping", "Personas", "Storyboarding"]
    },
    {
      category: "Product Management",
      tags: ["PRD Writing", "Roadmapping", "User Stories", "Prioritisation", "Stakeholder Management"]
    },
    {
      category: "AI & Automation",
      tags: ["AI Agents", "LLMs", "Prompt Engineering", "Workato", "No-Code Tools"]
    },
    {
      category: "Design Tools",
      tags: ["Figma", "Prototyping", "Wireframing", "Miro", "FigJam"]
    },
    {
      category: "PM Frameworks",
      tags: ["Design Thinking", "Double Diamond", "Jobs-to-be-Done", "Agile / Scrum", "CIRCLES Method"]
    },
    {
      category: "PM Tools",
      tags: ["Notion", "Jira", "Confluence", "Linear"]
    }
  ],


  // ════════════════════════════════════════════════════════
  // SECTION 9 — EDUCATION
  //             Add each degree as a block.
  //             Remove  placeholder: true  once a block is filled in.
  // ════════════════════════════════════════════════════════

  education: [

    {
      degree:   "Master of Science, Human Centred Design",
      school:   "Singapore University of Technology and Design (SUTD)",
      period:   "2024 – 2025",

      // Drop logo into assets/logos/ and update filename below
      logo:          "assets/logos/sutd_logo.png",
      logo_bg:       "#003b5c",
      logo_initials: "SUTD",

      highlight: "Capstone: AI Agent Platform with Workato",
      achievements: [
        "Specialisation in Human-Computer Interaction and AI product design",
        "Industry capstone project in partnership with Workato (enterprise automation platform)"
      ],

      placeholder: false   // this block is filled — leave as false
    },

    {
      // ── FILL IN YOUR UNDERGRAD BELOW ──────────────────
      degree:   "Your Undergraduate Degree — fill in your major here",
      school:   "Your University Name",
      period:   "20XX – 20XX",

      logo:          "",           // drop logo file and put filename here
      logo_bg:       "#4a4a6a",
      logo_initials: "UG",

      highlight: "",               // e.g. "Honours (Distinction)" or leave blank
      achievements: [
        "Add your honours class, GPA, or any awards here",
        "Add a notable project, thesis, or extracurricular activity"
      ],

      placeholder: true   // ← delete this line once you've filled in the details above
    }

  ],

};
