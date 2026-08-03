// ============================================
// CENTRAL CONTENT FILE
// Edit everything here — components just read from this.
// ============================================

export const profile = {
  name: "Piedrii B. Prado",
  shortName: "Piedrii",
  title: "BSCS 4th Year Student",
  roles: [
    "Aspiring Software Developer",
    "Aspiring Web Developer",
    "BSCS Student",
  ],
  tagline:
    "I'm a BSCS student majoring in Data Science, building practical software as I learn.",
  roleModel: 'Bryl "Mr. 800k" Lim',
  location: "Dasmariñas, Cavite, Philippines",
  resumeUrl: "#", // TODO: replace with a link to your resume PDF once ready
  photo: "profile.png",
};

export const socials = {
  github: "https://github.com/NotChiwo",
  email: "pied.prado21@gmail.com",
  linkedin: "https://www.linkedin.com/in/piedrii-prado-9372502ab/", // TODO: add when available
};

// EmailJS config — fill these in from your EmailJS dashboard (emailjs.com).
// See the setup steps in README.md. Nothing works until these 3 are filled in.
export const emailConfig = {
  serviceId: "service_xyyak8b",
  templateId: "template_umfrduo",
  publicKey: "OMMCv8zQ7QrPTKJ4O",
};

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  // { label: "Projects", href: "#projects" }, // re-enable once real projects are added
  { label: "Journey", href: "#academic-projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const education = [
  {
    year: "2023 — Present",
    title: "BSCS, Data Science",
    place: "University of Perpetual Help System DALTA – Molino Campus",
    description:
      "Currently a 4th year student focused on data science and applied machine learning, working on a thesis around fraud detection systems.",
  },
];

export const skills = [
  {
    category: "Programming",
    items: ["Python", "Java", "JavaScript", "C#"],
  },
  {
    category: "Frontend",
    items: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js",],
  },
  {
    category: "Database",
    items: ["MySQL"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
];

// Placeholder project — duplicate this object in the array to add more.
export const projects = [
  {
    id: "project-1",
    title: "Project Title",
    description:
      "A short, punchy description of what this project does, the problem it solves, and your role in building it.",
    image: null, // TODO: add a screenshot path from src/assets
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/NotChiwo",
    demo: "",
    featured: true,
  },
];

// Real academic projects — shown as a timeline instead of invented job experience,
// since Piedrii is a student and this should reflect actual coursework.
export const academicProjects = [
  {
    year: "2026 (in progress)",
    title: "FraudSentry — Online Transaction Fraud Detection System",
    place: "BSCS Thesis · with John Vincent T. Abeneta & Rafael L. Ragasa",
    description:
      "Thesis project building a fraud detection system using the Random Forest algorithm, with OCR-based receipt/transaction parsing and cross-evidence comparison. Currently in final development and defense preparation.",
  },
  {
    year: "2025",
    title: "UNHCR Asylum Seeker Data Visualization",
    place: "BSCS 3214 Data Visualization Final Project · with Abeneta",
    description:
      "Analyzed UNHCR asylum seeker data (2000–2016) and built a Jupyter Notebook analysis, an interactive Streamlit dashboard, and a written data story.",
  },
  {
    year: "2025",
    title: "Automated Financial Monitoring and Management System (AFMMS)",
    place: "School project for Thre Tech Construct Inc. · with Ragasa & Abeneta",
    description:
      "A Flask web app covering payroll automation, automatic expense categorization, and an invoice engine, built with a clean glassmorphism UI.",
  },
];

// Real certifications from Credly (badge wallet).
export const certifications = [
  {
    title: "IT Specialist - Cybersecurity",
    issuer: "Certiport, a Pearson VUE business",
    year: "Expires Mar 14, 2031",
    link: "",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    year: "Issued Sep 11, 2025",
    link: "",
  },
];
