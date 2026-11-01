// Single source of truth for all portfolio content. Edit this file to update the site.
// Every fact below comes from Ruthwik's resume (same content as version 2).

import {
  BsLayers, BsWindowStack, BsHddNetwork, BsDatabase, BsTools, BsStars, BsPlug, BsPhone, BsBug, BsGit,
  BsShieldCheck, BsPatchCheck, BsRouter, BsTerminal, BsShieldLock, BsBoxSeam, BsBuildings, BsMortarboard,
  BsGlobe2, BsBraces, BsArrowLeftRight, BsKey, BsCodeSlash, BsDiagram3, BsLightningCharge, BsFiletypeSql,
} from 'react-icons/bs'
import {
  SiReact, SiFastapi, SiMysql, SiPython, SiJavascript, SiHtml5, SiCss, SiBootstrap, SiNodedotjs, SiExpress,
  SiMongodb, SiSqlalchemy, SiGit, SiGithub, SiVercel, SiRender, SiLinux, SiGnubash, SiReactrouter,
  SiGithubcopilot, SiClaude, SiPostman, SiVite, SiWordpress,
} from 'react-icons/si'
import { RiOpenaiFill } from 'react-icons/ri'

// Free stock photos from Pexels (free to use, no attribution required). Swap any URL for your own photo.
const pexels = (id, w = 1600) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`

// Prefixes files in public/ with Vite's base path so they resolve when hosted under a sub-path (GitHub Pages).
const asset = (path) => `${import.meta.env.BASE_URL}${path}`

export const images = {
  hero: pexels(6424584, 1920),
  about: pexels(4439901, 1200),
  contact: 'https://images.pexels.com/photos/16018144/pexels-photo-16018144/free-photo-of-code-on-monitor.jpeg?auto=compress&cs=tinysrgb&w=1920',
}

export const profile = {
  name: 'Ruthwik Pendem',
  firstName: 'Ruthwik',
  lastName: 'Pendem',
  initials: 'RP',
  title: 'Full Stack Developer',
  image: asset('assets/profile.webp'),
  imageAlt: 'Portrait of Ruthwik Pendem',
  email: 'pendemruthwik@gmail.com',
  phone: '+91 7093762284',
  phoneHref: 'tel:+917093762284',
  linkedin: 'https://www.linkedin.com/in/ruthwik-pendem-9670692b3/',
  github: 'https://github.com/Ruthwiknetha143',
  resumeFile: asset('assets/Ruthwik_Pendem_Resume.docx'),
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

// Name → icon + brand colour. Used by the hero, the orbit, the marquee and the skill tiles.
// `color: null` means "use the current text colour" (for monochrome logos).
export const skillIcons = {
  'HTML5': { Icon: SiHtml5, color: '#E34F26' },
  'CSS3': { Icon: SiCss, color: '#2965F1' },
  'JavaScript': { Icon: SiJavascript, color: '#F7DF1E' },
  'JavaScript (ES6+)': { Icon: SiJavascript, color: '#F7DF1E' },
  'React.js': { Icon: SiReact, color: '#61DAFB' },
  'Bootstrap': { Icon: SiBootstrap, color: '#8B5CF6' },
  'React Router': { Icon: SiReactrouter, color: '#F44250' },
  'Responsive design': { Icon: BsPhone, color: null },
  'API integration': { Icon: BsPlug, color: null },
  'Python': { Icon: SiPython, color: '#4B8BBE' },
  'FastAPI': { Icon: SiFastapi, color: '#05998B' },
  'Node.js': { Icon: SiNodedotjs, color: '#5FA04E' },
  'Express.js': { Icon: SiExpress, color: null },
  'REST APIs': { Icon: BsArrowLeftRight, color: null },
  'CRUD operations': { Icon: BsDiagram3, color: null },
  'CORS': { Icon: BsShieldCheck, color: null },
  'MySQL': { Icon: SiMysql, color: '#5E9FD8' },
  'SQL': { Icon: BsFiletypeSql, color: null },
  'MongoDB': { Icon: SiMongodb, color: '#47A248' },
  'SQLAlchemy': { Icon: SiSqlalchemy, color: '#D71F00' },
  'Git': { Icon: SiGit, color: '#F05032' },
  'GitHub': { Icon: SiGithub, color: null },
  'VS Code': { Icon: BsCodeSlash, color: '#2F9BF0' },
  'Vercel': { Icon: SiVercel, color: null },
  'Render': { Icon: SiRender, color: null },
  'Linux': { Icon: SiLinux, color: '#FCC624' },
  'Bash': { Icon: SiGnubash, color: '#4EAA25' },
  'API testing': { Icon: SiPostman, color: '#FF6C37' },
  'Environment variables': { Icon: BsKey, color: null },
  'ChatGPT': { Icon: RiOpenaiFill, color: null },
  'GitHub Copilot': { Icon: SiGithubcopilot, color: null },
  'Claude': { Icon: SiClaude, color: '#D97757' },
  'Vite': { Icon: SiVite, color: '#9B6BFF' },
  'WordPress': { Icon: SiWordpress, color: '#21759B' },
}
export const iconFor = (name) => skillIcons[name] ?? { Icon: BsBraces, color: null }

// Hero
export const hero = {
  greeting: 'Hi, I’m',
  roles: ['Full Stack Developer', 'React.js Developer', 'Python & FastAPI Builder', 'Security-aware Engineer'],
  intro:
    'I build responsive web applications end to end: React frontends, FastAPI backends and MySQL databases, deployed on Vercel and Render.',
  // Core skills shown as chips in the hero.
  coreSkills: ['React.js', 'JavaScript', 'Python', 'FastAPI', 'MySQL', 'Bootstrap', 'Node.js', 'Git'],
  // Logos on the two orbits around the portrait.
  orbitInner: ['React.js', 'Python', 'FastAPI', 'MySQL'],
  orbitOuter: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Git', 'Linux'],
}

// Counters (all verifiable from the resume).
export const stats = [
  { value: 4, suffix: '', label: 'Live deployed projects' },
  { value: 3, suffix: '', label: 'Professional roles and internships' },
  { value: 3, suffix: '', label: 'Industry certifications' },
  { value: 8.2, suffix: '', decimals: 1, label: 'B.Tech GPA out of 10' },
]

export const about = {
  paragraphs: [
    'I am an entry-level Full Stack Developer who has built and deployed responsive web applications with React.js, JavaScript, Python, FastAPI and MySQL. I have built REST APIs, connected frontend interfaces to databases, and implemented CRUD operations end to end.',
    'I bring practical website development experience, Python automation skills, and a strong foundation in debugging, Git and collaborative development. My B.Tech in Computer Science (Cybersecurity) gives me a security-aware background alongside my development work.',
  ],
  highlights: [
    { icon: BsMortarboard, text: 'B.Tech CSE (Cybersecurity), GPA 8.2' },
    { icon: BsShieldLock, text: 'Cybersecurity intern at Cigniti Technology' },
    { icon: BsGlobe2, text: 'Four projects live on Vercel and the web' },
  ],
}

export const skillGroups = [
  {
    title: 'Frontend',
    icon: BsWindowStack,
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Bootstrap', 'React Router', 'Responsive design', 'API integration'],
  },
  {
    title: 'Backend',
    icon: BsHddNetwork,
    items: ['Python', 'FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'CRUD operations', 'CORS'],
  },
  {
    title: 'Databases',
    icon: BsDatabase,
    items: ['MySQL', 'SQL', 'MongoDB', 'SQLAlchemy'],
  },
  {
    title: 'Tools & Deployment',
    icon: BsTools,
    items: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Render', 'Linux', 'Bash', 'API testing', 'Environment variables'],
  },
  {
    title: 'AI-assisted',
    icon: BsStars,
    items: ['ChatGPT', 'GitHub Copilot', 'Claude'],
  },
]

// Two rows of the scrolling logo band under the hero.
export const marqueeRows = [
  ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'React Router', 'Vite', 'Node.js', 'Express.js'],
  ['Python', 'FastAPI', 'MySQL', 'SQLAlchemy', 'MongoDB', 'Git', 'GitHub', 'Vercel', 'Render', 'Linux', 'Bash'],
]

export const strengths = [
  { label: 'Full-stack application development', icon: BsLayers },
  { label: 'REST API integration', icon: BsPlug },
  { label: 'Responsive UI development', icon: BsPhone },
  { label: 'Database connectivity', icon: BsDatabase },
  { label: 'Debugging and troubleshooting', icon: BsBug },
  { label: 'Git-based workflows', icon: BsGit },
]

export const experience = [
  {
    role: 'Associate Software Engineer',
    org: 'SAVR Design',
    date: 'Sep 2026 – Present',
    points: [
      'Assisted with development of the Tecqubes WordPress website alongside experienced developers and designers.',
      'Worked on website implementation, content structure and frontend presentation for a client-facing project.',
    ],
    tags: ['WordPress', 'Frontend'],
  },
  {
    role: 'Cybersecurity Intern',
    org: 'Cigniti Technology (A Coforge Company)',
    date: 'Nov 2024 – Feb 2025',
    points: [
      'Developed Python and Bash scripts to automate recurring technical tasks.',
      'Supported troubleshooting, system analysis and technical documentation in structured team workflows.',
      'Applied programming and problem-solving skills to simplify routine operations.',
    ],
    tags: ['Python', 'Bash', 'Automation'],
  },
  {
    role: 'Intern',
    org: 'Center for Cyber Security Studies & Research',
    date: 'Apr 2024 – Jun 2024',
    points: [
      'Worked with network monitoring and digital forensics tools in practical technical environments.',
      'Analyzed system information using structured investigation methods and developed troubleshooting skills.',
    ],
    tags: ['Network monitoring', 'Digital forensics'],
  },
]

export const education = [
  {
    degree: 'B.Tech in Computer Science – Cybersecurity',
    school: 'Sri Indu College of Engineering and Technology, Hyderabad',
    date: 'Graduated 2026',
    points: ['GPA: 8.2/10'],
  },
]

export const certifications = [
  { title: 'Google Cybersecurity Professional Certificate', issuer: 'Google', icon: BsShieldCheck },
  { title: 'ISO/IEC 27001:2022 Information Security Associate', issuer: 'ISO/IEC 27001', icon: BsPatchCheck },
  { title: 'CCNA 2025 (200-301) + Cisco Security Training', issuer: 'Cisco', icon: BsRouter },
]

export const expertise = [
  {
    title: 'Full Stack Web Development',
    icon: BsLayers,
    image: pexels(6424588, 1100),
    text: 'Built and deployed full stack applications with a React frontend and a FastAPI backend: REST endpoints, MySQL through SQLAlchemy, create/read/update/delete operations, CORS and environment variables. Frontend deployed on Vercel and backend on Render.',
    tech: ['React.js', 'FastAPI', 'MySQL', 'SQLAlchemy', 'REST APIs', 'Vercel', 'Render'],
  },
  {
    title: 'Responsive Frontend Development',
    icon: BsWindowStack,
    image: pexels(2653362, 1100),
    text: 'Developed responsive, mobile-friendly interfaces from reusable React components, including a 12-section admissions landing page with a validated enquiry modal, FAQ accordion, anchor navigation and testimonial slider, and a property-listing site with JavaScript search and filtering.',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Bootstrap', 'React Router'],
  },
  {
    title: 'Python & Linux Automation',
    icon: BsTerminal,
    image: pexels(7325498, 1100),
    text: 'Wrote Python and Bash scripts to automate recurring technical tasks during an internship, and configured a customized Linux development environment (i3wm, Picom) with scripted battery, Wi-Fi and volume status monitoring.',
    tech: ['Python', 'Bash', 'Linux', 'i3wm', 'System configuration'],
  },
  {
    title: 'Cybersecurity Foundations',
    icon: BsShieldLock,
    image: pexels(5380603, 1100),
    text: 'B.Tech in Computer Science (Cybersecurity), with internship experience using network monitoring and digital forensics tools and structured investigation methods, plus certifications in cybersecurity, information security and networking.',
    tech: ['Network monitoring', 'Digital forensics', 'Troubleshooting', 'System analysis'],
  },
]

export const projects = [
  {
    title: 'QuartzKraft',
    type: 'Full Stack Web Application',
    icon: BsBoxSeam,
    tech: ['React.js', 'FastAPI', 'MySQL', 'SQLAlchemy', 'REST APIs'],
    description: 'A full stack product-management application with a React frontend and a FastAPI backend.',
    points: [
      'Built REST endpoints for retrieving and managing product data.',
      'Integrated MySQL through SQLAlchemy and implemented create, read, update and delete operations.',
      'Connected frontend components to backend APIs; configured CORS and environment variables for deployment.',
      'Deployed the frontend on Vercel and the backend on Render; managed source code with Git and GitHub.',
    ],
    live: 'https://quartzkraft-frontend.vercel.app/',
    github: '',
    image: asset('preview/qk_prev.webp'),
  },
  {
    title: 'LiveLot',
    type: 'Real Estate Web Application',
    icon: BsBuildings,
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    description: 'A responsive property-listing frontend built as a hackathon project, with JavaScript-powered search and filtering.',
    points: [
      'Implemented reusable, mobile-friendly UI components.',
      'Deployed on Vercel as part of a hackathon.',
      'Post-login and registration features were limited by restricted backend access, so the public landing page is the primary entry point.',
    ],
    live: 'https://livelot-ai-based-real-estate-site.vercel.app/',
    github: '',
    image: asset('preview/livelot_prev.webp'),
  },
  {
    title: 'EAK International School',
    type: 'Admissions Landing Page',
    icon: BsMortarboard,
    tech: ['React.js', 'Vite', 'Bootstrap', 'JavaScript', 'CSS3'],
    description: 'A responsive admissions landing page with 12 sections covering programs, fees, facilities, testimonials and FAQs.',
    points: [
      'Developed reusable React components with dynamic data rendering using .map().',
      'Implemented a validated enquiry modal, FAQ accordion, anchor navigation, and mobile-friendly fee cards and testimonial slider.',
      'Deployed on Vercel and managed version control using Git and GitHub.',
    ],
    live: 'https://eak-international-school-sigma.vercel.app/',
    github: '',
    image: asset('preview/eak_prev.webp'),
  },
  {
    title: 'Tecqubes',
    type: 'Business Website',
    icon: BsGlobe2,
    tech: ['WordPress', 'Responsive design'],
    description: 'A client-facing business website built with the SAVR Design team.',
    points: ['Contributed to website structure, frontend presentation and content implementation.'],
    live: 'https://tecqubes.com',
    github: '',
    image: asset('preview/tec_prev.webp'),
  },
]

export const additionalProject = {
  title: 'Linux Development Environment',
  icon: BsLightningCharge,
  tech: ['Linux', 'i3wm', 'Bash', 'System configuration'],
  points: [
    'Configured a customized Linux environment using i3wm, Picom and Bash scripting.',
    'Automated battery, Wi-Fi and volume status monitoring to streamline daily development workflows.',
  ],
}
