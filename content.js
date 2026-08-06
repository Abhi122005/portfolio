// ============================================================
// SITE CONTENT — edit everything here. No HTML/CSS knowledge needed.
// Anything wrapped in [BRACKETS] is a placeholder — replace it with
// your real info before publishing.
// ============================================================

const SITE = {
  meta: {
    title: "Abhishek D. | AI Agents & Automation",
    description: "Abhishek D. builds AI agents and automation systems that execute real tasks. Open to internships in AI/automation engineering.",
    url: "https://[YOUR-DOMAIN-OR-USERNAME].github.io/",
    image: "./assets/profile.jpg"
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Path", href: "#path" },
    { label: "Contact", href: "#contact" }
  ],

  hero: {
    eyebrow: "AI OPERATOR · SYSTEMS BUILDER",
    availability: "🟢 Open to Summer 2026 Internships",
    headline: ["Building AI agents", "that execute"],
    sub: "I design and ship AI agents and automation pipelines that do real work — not just answer questions. From workshop prototypes to bots running in production.",
    avatar: "https://abhi122005.github.io/portfolio/profile.jpg",
    ctaPrimary: { label: "View Work", href: "#projects" },
    ctaSecondary: { label: "Get in Touch", href: "#contact" },
    socials: [
      { label: "GitHub", url: "https://github.com/Abhi122005" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/abhishek-d-/" },
      { label: "LeetCode", url: "https://leetcode.com/u/Abhishekdivakaran_18/" },
      { label: "X", url: "https://x.com/Abh_ishekD" }
    ]
  },

  about: {
    bio: [
      "I started on the frontend—crafting HTML, CSS, and JavaScript interfaces that looked right and worked seamlessly. What pulled me deeper was the gap between a page that merely displays information and one that acts on it.",

"Watching people manually screen resumes line by line or confirm appointments one by one made the problem obvious: those aren't UI issues, they're workflow issues. I started building autonomous agents to read documents, make decisions, and execute tasks unattended—which led directly to my resume checker and appointment bot. Tackling fast-paced hackathons along the way has only sharpened how quickly I can take a rough concept and turn it into a running system"
    ],
    facts: [
      { label: "Based in", value: "Chengannur,Kerala, India" },
      { label: "Studying", value: "B.Tech CSE" },
      { label: "Focus", value: "FRONTEND · PYTHON · AI Agents · Workflow Automation" },
      { label: "Status", value: "Open to internships" }
    ]
  },

  projects: [
    {
      id: "mcp-learning-path",
      emoji: "🧠",
      name: "MCP Learning Path Generator",
      meta: "Built during the NxtWave MCP Mega Workshop",
      status: "live",
      description: "An AI agent that generates structured learning paths from natural-language prompts — a shift from AI assistant to AI operator performing real tasks, integrated with external tools.",
      tags: ["Model Context Protocol", "Cursor IDE", "YouTube API", "Drive API", "Notion"],
      link: "https://abhi122005-abhishek-app-8qxwau.streamlit.app/",
      linkLabel: "Try it live →"
    },
    {
      id: "resume-checker-agent",
      emoji: "📄",
      name: "Resume Checker Agent",
      meta: "Runs live on Telegram",
      status: "bot",
      description: "Takes a Google Docs resume as input, runs it through structured scoring plus AI evaluation logic, and delivers a detailed report by email and Telegram — automating resume screening and feedback.",
      tags: ["Make.com", "AI Agents", "MCP Workflow Design", "Gmail API", "Telegram API"],
      link: "https://t.me/Resume_checker_ai_agent0019_bot",
      linkLabel: "Try it on Telegram →"
    },
    {
      id: "opd-appointment-bot",
      emoji: "🏥",
      name: "OPD Appointment Automation Bot",
      meta: "Built with Automation Anywhere (RPA)",
      status: "build",
      description: "Reads appointment data from Excel, validates the doctor, and sends personalized email confirmations — with loop processing and dynamic message generation to cut admin workload and reduce errors.",
      tags: ["Automation Anywhere", "RPA", "Excel"],
      link: "",
      linkLabel: "Under construction — demo coming soon"
    }
  ],

  skillGroups: [
    {
      title: "AI & Agents",
      items: ["AI Agent Design", "Model Context Protocol", "Workflow Architecture"]
    },
    {
      title: "Automation",
      items: ["Automation Anywhere (RPA)", "Make.com", "n8n"]
    },
    {
      title: "Languages",
      items: ["Python", "JavaScript", "HTML5", "CSS3"]
    }
  ],

  // Chronological — newest first. Styled like a commit log.
  // type: "added" | "merged" | "fixed" | "learned"
  timeline: [
    {
      hash: "a1b2c3d",
      date: "2024-2028",
      type: "added",
      title: "CSE — COLLEGE OF ENGINEERING, CHENGANNUR",
      description: "[Relevant coursework, CGPA if strong, or a one-line highlight.]"
    },
    {
      hash: "[hash]",
      date: "[Month Year]",
      type: "[added / merged / fixed / learned]",
      title: "[Another milestone — certification, hackathon, prior internship, competitive programming rank, etc.]",
      description: "[One or two lines of concrete detail. Numbers and outcomes read better than adjectives.]"
    }
  ],

  // Leave empty to hide this section entirely. Add entries like:
  // { title: "1st Place — XYZ Hackathon", meta: "Nov 2025", link: "" }
  achievements: [{
    title: "2nd Place — Season of Code (College of Engineering, Chengannur)",
    meta: "2026",
    description: "Secured 2nd rank overall by contributing clean code, resolving real open-source project issues, and completing time-bound feature sprints under mentor guidance.",
    link: ""
  }],

  contact: {
    // Sign up free at https://formspree.io, create a form, and paste the
    // endpoint below. Until you do, the form falls back to opening email.
    formEndpoint: "https://formspree.io/f/xkjwgolv",
    email: "abhishekd1822@gmail.com",
    heading: "Let's build something that runs itself.",
    body: "Open to internships, collaborations, and automation projects. Send a message or reach out on whichever channel you use most."
  }
};
