export const personal = {
  name: 'Sanuja Salitha Andrahennadi',
  initials: 'SA',
  role: 'DATA SCIENCE STUDENT',
  institution: 'Your University',
  status: 'Open to Work',
  bio: `Aspiring data scientist passionate about turning raw data into meaningful insights.
I enjoy building predictive models, exploring datasets, and communicating findings through clear visualizations.`,
  email: 'your.email@example.com',
  phone: '+94 XX XXX XXXX',
  location: 'Sri Lanka',
  linkedin: 'https://linkedin.com',
  linkedinHandle: 'your-linkedin-handle',
  github: 'https://github.com',
  instagram: 'https://instagram.com',
  cvUrl: '#',
}

export const cta = {
  heading: "Let's Build Something Amazing",
  subtitle:
    "I'm always open to discussing new data projects, research ideas, internships, or opportunities to be part of your vision.",
  getInTouchLabel: 'Get In Touch',
  downloadResumeLabel: 'Download Resume',
}

export const contact = {
  heading: 'Get In Touch',
  subtitle:
    'Have a data project, internship opportunity, or collaboration in mind? I would love to hear from you!',
  connectTitle: "Let's Connect!",
  connectText:
    'Whether you have a question, a research idea, or just want to say hi, feel free to reach out. I typically respond within 24 hours.',
  form: {
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'you@example.com',
    subjectPlaceholder: 'Data Project Inquiry',
    messagePlaceholder: 'Tell me about your project or idea...',
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
    'A comprehensive overview of my technical proficiency across data science, analytics, and machine learning tools.',
  categories: [
    {
      title: 'Languages',
      skills: [
        { name: 'Python', icon: 'python', color: '3776AB' },
        { name: 'R', icon: 'r', color: '276DC3' },
        { name: 'SQL', icon: 'postgresql', color: '4169E1' },
        { name: 'Julia', icon: 'julia', color: '9558B2' },
      ],
    },
    {
      title: 'Data Analysis & Libraries',
      skills: [
        { name: 'Pandas', icon: 'pandas', color: '150458' },
        { name: 'NumPy', icon: 'numpy', color: '013243' },
        { name: 'SciPy', icon: 'scipy', color: '8CAAE6' },
        { name: 'Jupyter', icon: 'jupyter', color: 'F37626' },
        { name: 'Statsmodels', icon: 'statsmodels', color: '592681' },
      ],
    },
    {
      title: 'Machine Learning',
      skills: [
        { name: 'Scikit-learn', icon: 'scikitlearn', color: 'F7931E' },
        { name: 'TensorFlow', icon: 'tensorflow', color: 'FF6F00' },
        { name: 'PyTorch', icon: 'pytorch', color: 'EE4C2C' },
        { name: 'Keras', icon: 'keras', color: 'D00000' },
        { name: 'XGBoost', icon: 'xgboost', color: '1CAC48' },
      ],
    },
    {
      title: 'Data Visualization',
      skills: [
        { name: 'Matplotlib', icon: 'matplotlib', color: '11557C' },
        { name: 'Seaborn', icon: 'seaborn', color: '4C72B0' },
        { name: 'Plotly', icon: 'plotly', color: '3F4F75' },
        { name: 'Tableau', icon: 'tableau', color: 'E97627' },
        { name: 'Power BI', icon: 'powerbi', color: 'F2C811' },
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git', icon: 'git', color: 'F05032' },
        { name: 'Docker', icon: 'docker', color: '2496ED' },
        { name: 'Streamlit', icon: 'streamlit', color: 'FF4B4B' },
        { name: 'Colab', icon: 'googlecolab', color: 'F9AB00' },
        { name: 'Excel', icon: 'microsoftexcel', color: '217346' },
      ],
    },
  ] as SkillCategory[],
  github: {
    repos: 12,
    stars: 24,
    followers: 8,
    topLanguages: [
      { name: 'Python', count: 8 },
      { name: 'Jupyter Notebook', count: 5 },
      { name: 'R', count: 2 },
      { name: 'SQL', count: 2 },
      { name: 'HTML', count: 1 },
      { name: 'Other', count: 1 },
    ],
  },
  learning: {
    heading: 'Always Learning, Always Growing',
    text: 'Data science evolves rapidly, and so do I. I am constantly exploring new libraries, modeling techniques, and best practices to stay at the forefront of analytics and machine learning.',
  },
}

export const typewriterPhrases = [
  'Python & R',
  'Machine Learning',
  'Data Visualization',
  'SQL & Analytics',
  'Statistics',
]

export const stats = [
  { icon: 'chart', value: '10+', label: 'Datasets Analyzed' },
  { icon: 'brain', value: '8+', label: 'ML Projects' },
  { icon: 'layers', value: '15+', label: 'Tools & Libraries' },
  { icon: 'github', value: '200+', label: 'GitHub Contributions' },
]

export const homeAbout = {
  subtitle:
    'Passionate data science student with expertise in analytics, machine learning, and data visualization.',
  background: [
    `Currently pursuing a Bachelor's degree in Data Science with a strong focus on statistics, machine learning, and analytical problem solving.`,
    `Experienced in building predictive models using Python, scikit-learn, and Pandas. Strong understanding of EDA, feature engineering, SQL queries, and interactive dashboards with Streamlit and Plotly.`,
    `Passionate about turning raw data into actionable insights and staying updated with the latest tools in the data science ecosystem.`,
  ],
  whatIDo: [
    {
      icon: 'chart' as const,
      title: 'Data Analysis',
      description:
        'Exploring datasets, cleaning data, and uncovering patterns using Python, Pandas, and SQL.',
    },
    {
      icon: 'brain' as const,
      title: 'Machine Learning',
      description:
        'Building and evaluating classification, regression, and clustering models with scikit-learn.',
    },
    {
      icon: 'viz' as const,
      title: 'Data Visualization',
      description:
        'Creating clear charts and dashboards with Matplotlib, Seaborn, and interactive tools.',
    },
  ],
}

export const homeExperience = {
  heading: 'Experience & Education',
  subtitle: 'My journey in data science',
  items: [
    {
      title: 'B.Sc. in Data Science',
      institution: 'Your University (Update later)',
      period: '2022 – Present',
      description:
        'Focused on statistics, machine learning, data mining, and data visualization. Building portfolio projects along the way.',
    },
    {
      title: 'Secondary Education',
      institution: 'Your School (Update later)',
      period: 'Pre-University',
      description:
        'Completed secondary education with a strong focus on mathematics and science fundamentals.',
    },
  ],
}

export const featuredProjects = {
  heading: 'Featured Projects',
  subtitle: 'Some of my recent data science work',
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
    'Passionate data science student dedicated to turning data into insights that make a difference.',
  intro: {
    role: 'Data Science student',
    institution: 'Your University',
    paragraph:
      'with a passion for machine learning, statistical analysis, and data visualization. I love exploring datasets, building predictive models, and communicating findings through clear, impactful visuals.',
  },
  highlights: {
    left: [
      'Exploring data analysis, machine learning, and statistical modeling.',
      'Languages & tools: Python, R, SQL, Pandas, NumPy, and Jupyter.',
      'Interested in real-world datasets, Kaggle, and research projects.',
    ],
    right: [
      'Currently working with Python, scikit-learn, and visualization libraries.',
      'Learning & building ML pipelines, dashboards, and EDA workflows.',
      'Practicing problem solving through analytics and model evaluation.',
    ],
  },
  metrics: [
    { value: '10+', label: 'ML Projects Completed', color: 'blue' as const },
    { value: '15+', label: 'Tools & Libraries', color: 'teal' as const },
    { value: '200+', label: 'GitHub Contributions', color: 'green' as const },
    { value: '10+', label: 'Datasets Analyzed', color: 'lime' as const },
  ],
  timelineHeading: 'Education & Experience',
  timeline: [
    {
      title: 'Seeking Data Science Internship',
      subtitle: 'Open to opportunities',
      description:
        'Actively looking for an internship while building real-world data projects and sharpening skills in Python, ML, and analytics.',
      period: 'Present',
      type: 'internship' as const,
    },
    {
      title: 'B.Sc. in Data Science',
      subtitle: 'Your University (Update later)',
      description:
        'Undergraduate studies focused on statistics, machine learning, data mining, and data visualization.',
      period: '2022 – Present',
      type: 'education' as const,
    },
    {
      title: 'Secondary Education',
      subtitle: 'Your School (Update later)',
      description:
        'Completed secondary education with a strong foundation in mathematics and science.',
      period: '2018 – 2020',
      type: 'school' as const,
    },
  ] as AboutTimelineItem[],
}

export type ProjectCategory =
  | 'ML'
  | 'Analytics'
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
    'A collection of my work showcasing expertise in data analysis, machine learning, statistical modeling, and data visualization.',
  filters: ['All', 'ML', 'Analytics', 'NLP', 'Visualization'] as const,
  projects: [
    {
      title: 'Customer Churn Prediction',
      description:
        'ML pipeline predicting customer churn using ensemble models, feature engineering, and cross-validation on telecom datasets.',
      category: 'ML',
      completion: 90,
      tags: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter'],
      codeUrl: '#',
      imageGradient: 'from-blue-600/50 to-indigo-900/70',
    },
    {
      title: 'Sales Analytics Dashboard',
      description:
        'Interactive Streamlit dashboard analyzing sales trends, regional performance, and seasonality from retail data.',
      category: 'Analytics',
      completion: 85,
      tags: ['Python', 'SQL', 'Plotly', 'Streamlit'],
      codeUrl: '#',
      demoUrl: '#',
      imageGradient: 'from-cyan-600/40 to-blue-900/70',
    },
    {
      title: 'Sentiment Analysis — NLP',
      description:
        'Text classification model for product reviews using NLP preprocessing, TF-IDF, and logistic regression.',
      category: 'NLP',
      completion: 70,
      tags: ['Python', 'NLTK', 'Scikit-learn', 'Matplotlib'],
      codeUrl: '#',
      imageGradient: 'from-violet-600/40 to-navy-900/70',
    },
    {
      title: 'House Price Prediction',
      description:
        'Regression model predicting house prices with EDA, feature selection, and model comparison using scikit-learn.',
      category: 'ML',
      completion: 95,
      tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
      codeUrl: '#',
      imageGradient: 'from-emerald-600/35 to-slate-900/70',
    },
    {
      title: 'COVID-19 Data Visualization',
      description:
        'Exploratory analysis and interactive charts tracking cases, deaths, and vaccination trends across regions.',
      category: 'Visualization',
      completion: 100,
      tags: ['Python', 'Matplotlib', 'Seaborn', 'Plotly'],
      codeUrl: '#',
      imageGradient: 'from-rose-600/35 to-indigo-900/70',
    },
    {
      title: 'This Portfolio',
      description:
        'React + TypeScript + Vite portfolio with dark theme, separate pages for about, skills, projects, and contact.',
      category: 'Portfolio',
      completion: 100,
      tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
      codeUrl: '#',
      imageGradient: 'from-accent/50 to-navy-900/80',
    },
  ] as Project[],
}

const categoryFilterMap: Record<string, ProjectCategory | null> = {
  All: null,
  ML: 'ML',
  Analytics: 'Analytics',
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
