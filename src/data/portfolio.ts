export const personal = {
  name: 'Sanuja Salitha Andrahennadi',
  initials: 'SA',
  role: 'DATA SCIENCE STUDENT',
  institution: 'SLIIT',
  status: 'Open to Internships',
  bio: `Motivated undergraduate pursuing a BSc (Hons) in Data Science at SLIIT and a Bachelor of Physical Science at the University of Sri Jayewardenepura. Experienced in data warehousing, business intelligence, web applications, and Android development through academic and personal projects.`,
  email: 'sanujaandrahennadi@gmail.com',
  phone: '+94 76 304 3874',
  location: 'Sri Lanka',
  linkedin: 'https://linkedin.com/in/sanuja-salitha',
  linkedinHandle: 'sanuja-salitha',
  github: 'https://github.com/SanujaAndrahennadi',
  cvUrl: '/Sanuja_CV.pdf',
}

export const cta = {
  heading: "Let's Build Something Amazing",
  subtitle:
    'Seeking an internship or entry-level role in data science, analytics, or machine learning where I can apply my technical knowledge and grow as a professional.',
  getInTouchLabel: 'Get In Touch',
  downloadResumeLabel: 'Download Resume',
}

export const contact = {
  heading: 'Get In Touch',
  subtitle:
    'Have a data project, internship opportunity, or collaboration in mind? I would love to hear from you!',
  connectTitle: "Let's Connect!",
  connectText:
    'Whether you have a question about my projects, an internship opportunity, or just want to say hi, feel free to reach out. I typically respond within 24 hours.',
  form: {
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'you@example.com',
    subjectPlaceholder: 'Internship or Project Inquiry',
    messagePlaceholder: 'Tell me about your opportunity or idea...',
    submitLabel: 'Send Message',
  },
}

export type SkillItem = {
  name: string
  icon?: string
  color?: string
}

export type SkillCategory = {
  title: string
  skills: SkillItem[]
}

export const skillsPage = {
  heading: 'Skills & Expertise',
  subtitle:
    'Technical proficiency across data science, analytics, software development, and database systems.',
  categories: [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: 'python', color: '3776AB' },
        { name: 'SQL', icon: 'postgresql', color: '4169E1' },
        { name: 'Java', icon: 'openjdk', color: 'ED8B00' },
        { name: 'Kotlin', icon: 'kotlin', color: '7F52FF' },
        { name: 'JavaScript', icon: 'javascript', color: 'F7DF1E' },
        { name: 'C', icon: 'c', color: 'A8B9CC' },
        { name: 'C++', icon: 'cplusplus', color: '00599C' },
      ],
    },
    {
      title: 'Data Science & Analytics',
      skills: [
        { name: 'Data Analysis' },
        { name: 'Data Visualization' },
        { name: 'Statistical Analysis' },
        { name: 'Machine Learning' },
        { name: 'Data Warehousing' },
        { name: 'Business Intelligence' },
      ],
    },
    {
      title: 'Libraries & Tools',
      skills: [
        { name: 'Pandas', icon: 'pandas', color: '150458' },
        { name: 'NumPy', icon: 'numpy', color: '013243' },
        { name: 'Scikit-learn', icon: 'scikitlearn', color: 'F7931E' },
        { name: 'Jupyter', icon: 'jupyter', color: 'F37626' },
        { name: 'Power BI', icon: 'powerbi', color: 'F2C811' },
        { name: 'Git', icon: 'git', color: 'F05032' },
        { name: 'GitHub', icon: 'github', color: '181717' },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', icon: 'mysql', color: '4479A1' },
        { name: 'PostgreSQL', icon: 'postgresql', color: '4169E1' },
        { name: 'MongoDB', icon: 'mongodb', color: '47A248' },
      ],
    },
    {
      title: 'Development Practices',
      skills: [
        { name: 'ETL Processes' },
        { name: 'Database Design' },
        { name: 'REST APIs' },
        { name: 'Version Control' },
        { name: 'Agile (Scrum)' },
        { name: 'Team Collaboration' },
      ],
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Problem-Solving' },
        { name: 'Critical Thinking' },
        { name: 'Communication' },
        { name: 'Leadership' },
        { name: 'Time Management' },
        { name: 'Teamwork' },
      ],
    },
  ] as SkillCategory[],
  github: {
    repos: 5,
    stars: 0,
    followers: 0,
    topLanguages: [
      { name: 'JavaScript', count: 1 },
      { name: 'Python', count: 1 },
      { name: 'Kotlin', count: 1 },
      { name: 'TypeScript', count: 1 },
    ],
  },
  learning: {
    heading: 'Always Learning, Always Growing',
    text: 'Pursuing dual degrees in Data Science and Physical Science while building real-world projects in data warehousing, full-stack development, and mobile applications. Eager to keep learning and contribute to innovative, data-driven solutions.',
  },
}

export const typewriterPhrases = [
  'Python & SQL',
  'Data Warehousing',
  'Business Intelligence',
  'Machine Learning',
  'Android Development',
]

export const stats = [
  { icon: 'chart', value: '3.45', label: 'CGPA at SLIIT' },
  { icon: 'brain', value: '4+', label: 'Academic Projects' },
  { icon: 'layers', value: '15+', label: 'Skills & Tools' },
  { icon: 'github', value: '5', label: 'GitHub Repositories' },
]

export const homeAbout = {
  subtitle:
    'Analytical undergraduate with a strong foundation in data analytics, statistical analysis, software development, and problem-solving.',
  background: [
    `Pursuing a BSc (Hons) in IT specializing in Data Science at SLIIT (CGPA 3.45, Dean's List) and a Bachelor of Physical Science at the University of Sri Jayewardenepura, with studies in Mathematics, Statistics, and Economics.`,
    `Experienced in developing data warehouse solutions, business intelligence systems, web applications, and Android applications through academic and personal projects.`,
    `Passionate about leveraging data-driven insights and technology to solve real-world problems and contribute to innovative projects through internships and entry-level opportunities.`,
  ],
  whatIDo: [
    {
      icon: 'chart' as const,
      title: 'Data Warehousing & BI',
      description:
        'Designing ETL workflows, dimensional models, and analytical reporting for business decision-making.',
    },
    {
      icon: 'brain' as const,
      title: 'Data Science & Analytics',
      description:
        'Applying statistical analysis, machine learning, and data visualization to extract actionable insights.',
    },
    {
      icon: 'viz' as const,
      title: 'Software Development',
      description:
        'Building web and Android applications with clean database design, REST APIs, and Agile practices.',
    },
  ],
}

export const homeExperience = {
  heading: 'Experience & Education',
  subtitle: 'My academic journey in data science and physical science',
  items: [
    {
      title: 'BSc (Hons) in IT — Data Science',
      institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
      period: '2023 – Present',
      description:
        "Current CGPA: 3.45 / 4.00. Recipient of the Dean's List award. Focused on data analytics, machine learning, and software development.",
    },
    {
      title: 'Bachelor of Physical Science',
      institution: 'University of Sri Jayewardenepura',
      period: '2023 – Present',
      description:
        'Pursuing studies in Mathematics, Statistics, and Economics alongside the data science degree.',
    },
    {
      title: 'G.C.E. Advanced Level (A/L)',
      institution: 'Mahinda Rajapaksha College, Matara — Mathematics Stream',
      period: 'Completed',
      description:
        'Completed Advanced Level examinations in the Mathematics stream, building a strong foundation for university studies.',
    },
  ],
}

export const featuredProjects = {
  heading: 'Featured Projects',
  subtitle: 'Academic and personal projects from my CV',
  count: 3,
}

export type AboutTimelineItem = {
  title: string
  subtitle: string
  description: string
  period: string
  type: 'internship' | 'education' | 'school'
}

export const aboutPage = {
  heading: 'About Me',
  subtitle:
    'Motivated and analytical undergraduate dedicated to turning data into insights and building practical software solutions.',
  intro: {
    role: 'Data Science student',
    institution: 'SLIIT & University of Sri Jayewardenepura',
    paragraph:
      'with a passion for data analytics, statistical analysis, and software development. I enjoy building data warehouse solutions, business intelligence systems, web applications, and Android apps that solve real-world problems.',
  },
  highlights: {
    left: [
      'Dual undergraduate degrees in Data Science (SLIIT) and Physical Science (USJ).',
      "CGPA 3.45 / 4.00 at SLIIT with Dean's List recognition.",
      'Projects in data warehousing, BI, web development, and Android applications.',
    ],
    right: [
      'Technical stack: Python, SQL, Java, Kotlin, JavaScript, Pandas, and Power BI.',
      'Database experience with MySQL, PostgreSQL, and MongoDB.',
      'Strong soft skills: problem-solving, leadership, communication, and teamwork.',
    ],
  },
  metrics: [
    { value: '3.45', label: 'CGPA at SLIIT', color: 'blue' as const },
    { value: '4+', label: 'Academic Projects', color: 'teal' as const },
    { value: '5', label: 'GitHub Repositories', color: 'green' as const },
    { value: "Dean's List", label: 'Academic Award', color: 'lime' as const },
  ],
  timelineHeading: 'Education & Experience',
  timeline: [
    {
      title: 'Seeking Data Science Internship',
      subtitle: 'Open to opportunities',
      description:
        'Looking for an internship or entry-level position in Data Science, Data Analytics, Machine Learning, or related fields to apply my technical knowledge and grow professionally.',
      period: 'Present',
      type: 'internship' as const,
    },
    {
      title: 'BSc (Hons) in IT — Data Science',
      subtitle: 'Sri Lanka Institute of Information Technology (SLIIT)',
      description:
        "Undergraduate studies with a current CGPA of 3.45 / 4.00. Dean's List recipient. Focused on data analytics, machine learning, and software development.",
      period: '2023 – Present',
      type: 'education' as const,
    },
    {
      title: 'Bachelor of Physical Science',
      subtitle: 'University of Sri Jayewardenepura',
      description:
        'Concurrent degree pursuing Mathematics, Statistics, and Economics.',
      period: '2023 – Present',
      type: 'education' as const,
    },
    {
      title: 'G.C.E. Advanced Level (A/L)',
      subtitle: 'Mahinda Rajapaksha College, Matara — Mathematics Stream',
      description:
        'Completed Advanced Level education in the Mathematics stream.',
      period: 'Completed',
      type: 'school' as const,
    },
  ] as AboutTimelineItem[],
}

export type ProjectCategory =
  | 'ML'
  | 'Analytics'
  | 'Web'
  | 'Mobile'
  | 'NLP'
  | 'Visualization'
  | 'Portfolio'

export type Project = {
  title: string
  description: string
  category: ProjectCategory
  completion: number
  tags: string[]
  codeUrl: string
  demoUrl?: string
  imageGradient?: string
}

export const projectsPage = {
  heading: 'My Projects',
  subtitle:
    'A collection of academic and personal projects in data warehousing, business intelligence, web development, and mobile applications.',
  filters: ['All', 'Analytics', 'Web', 'Mobile', 'Portfolio'] as const,
  projects: [
    {
      title: 'CarRentalDW',
      description:
        'Data warehouse and BI project for a car rental business with ETL workflows, dimensional modeling, and analytical reporting for decision-making.',
      category: 'Analytics',
      completion: 100,
      tags: ['SQL', 'ETL', 'Data Warehousing', 'Business Intelligence'],
      codeUrl: 'https://github.com/SanujaAndrahennadi/car_rental_DWBI_Project',
      imageGradient: 'from-blue-600/50 to-indigo-900/70',
    },
    {
      title: 'Auto Elite',
      description:
        'Automotive service management platform with vehicle service tracking, customer management, scheduling, and database operations.',
      category: 'Web',
      completion: 100,
      tags: ['Java', 'Database Systems', 'Web Development'],
      codeUrl:
        'https://github.com/SanujaAndrahennadi/Automotive-Service-Management-System',
      imageGradient: 'from-cyan-600/40 to-blue-900/70',
    },
    {
      title: 'Smart Campus Operations Hub',
      description:
        'Centralized campus management system with modules to improve operational efficiency, built collaboratively using Git and Agile practices.',
      category: 'Web',
      completion: 90,
      tags: ['Full-Stack Development', 'Database Systems', 'Agile', 'Git'],
      codeUrl: 'https://github.com/SanujaAndrahennadi',
      imageGradient: 'from-violet-600/40 to-navy-900/70',
    },
    {
      title: 'Mobile Application Development',
      description:
        'Android application demonstrating core mobile development concepts with user-friendly interfaces and object-oriented design.',
      category: 'Mobile',
      completion: 100,
      tags: ['Kotlin', 'Android Studio', 'OOP'],
      codeUrl: 'https://github.com/SanujaAndrahennadi/MAD-Project',
      imageGradient: 'from-emerald-600/35 to-slate-900/70',
    },
    {
      title: 'This Portfolio',
      description:
        'React + TypeScript + Vite portfolio with dark theme, separate pages for about, skills, projects, and contact.',
      category: 'Portfolio',
      completion: 100,
      tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
      codeUrl: 'https://github.com/SanujaAndrahennadi/Portfolio',
      imageGradient: 'from-accent/50 to-navy-900/80',
    },
  ] as Project[],
}

const categoryFilterMap: Record<string, ProjectCategory | null> = {
  All: null,
  ML: 'ML',
  Analytics: 'Analytics',
  Web: 'Web',
  Mobile: 'Mobile',
  NLP: 'NLP',
  Visualization: 'Visualization',
}

export function filterProjects(
  projects: Project[],
  filter: (typeof projectsPage.filters)[number]
): Project[] {
  const category = categoryFilterMap[filter]
  if (!category) return projects
  return projects.filter((p) => p.category === category)
}

export const categoryBadgeStyles: Record<
  ProjectCategory,
  string
> = {
  ML: 'bg-emerald-500/20 text-emerald-400',
  Analytics: 'bg-cyan-500/20 text-cyan-400',
  Web: 'bg-indigo-500/20 text-indigo-400',
  Mobile: 'bg-orange-500/20 text-orange-400',
  NLP: 'bg-violet-500/20 text-violet-400',
  Visualization: 'bg-teal-500/20 text-teal-400',
  Portfolio: 'bg-blue-500/20 text-blue-400',
}

export type NavLink =
  | { id: string; label: string; path: string }
  | { id: string; label: string; section: string }

export const navLinks: NavLink[] = [
  { id: 'home', label: 'Home', section: 'home' },
  { id: 'projects', label: 'Projects', path: '/projects' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'skills', label: 'Skills', path: '/skills' },
  { id: 'contact', label: 'Contact', path: '/contact' },
]
