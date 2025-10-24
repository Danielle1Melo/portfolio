import { Github, Linkedin } from 'lucide-react';

interface ExperienceItem {
  id: number;
  role: string;
  company?: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export const NAVLINKS = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Tech Stack',
    href: '#tech-stack',
  },
  {
    name: 'Projects',
    href: '#projects',
  },
  {
    name: 'Experience',
    href: '#experience',
  },
  {
    name: 'Contact',
    href: '#footer',
  }
]

export const SOCIALLINKS = [
  {
    icon: <Github size={20} />,
    href: "https://github.com/Danielle1Melo",
  },
  {
    icon:  <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/danielle-melo-0013b823a/",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
    {
      id: 1,  
      role: "Junior Developer",
      duration: "Ago 2025 - Present",
      description: [
        "Develop applications for managing cryptocurrency sales."
      ],
      technologies: ["Next.js", "TypeScript", "Figma", "Git", "Golang", "PostgreSQL"]
    },
    {
      id: 2,
      role: "Trainee Developer",
      company: "Sicoob Credisul",
      duration: "Sep 2024 - Ago 2025",
      description: [
        "Model BPMN diagrams for process automation in low-code platforms.",
        "Develop interactive and responsive interfaces using Next.js and TypeScript.",
        "Create prototypes in Figma.",
        "Use Git for version control.",
        "Consume REST APIs for integration between the front-end and the backend."
      ],
      technologies: ["BPMN diagrams", "Next.js", "TypeScript", "Figma", "Git", "REST APIs"]
    },
    {
      id: 3,
      role: "Development Apprentice",
      company: "Sicoob Credisul",
      duration: "Nov 2023 - Sep 2024",
      description: [
        "Develop interactive and responsive interfaces using Next.js and TypeScript.",
        "Create prototypes in Figma.",
        "Use Git for version control.",
        "Consume REST APIs for integration between the front-end and the backend."
      ],
      technologies: ["Next.js", "TypeScript", "Figma", "Git", "REST APIs"]
    },
  ];


export const TECHNOLOGIES = [
    { name: 'Next.js', icon: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/next_js.png' },
    { name: 'React', icon: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png' },
    { name: 'Angular', icon: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/angular.png' },
    { name: 'HTML', icon: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/html.png' },
    { name: 'CSS', icon: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/css.png' },
    { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png' },
    { name: 'TypeScript', icon: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/typescript.png' },
    { name: 'Tailwind CSS', icon: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/tailwind_css.png' },
    { name: 'Sass', icon: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/sass.png' },
    { name: 'Figma', icon: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/figma.png' },
    { name: 'Git', icon: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/git.png' },
    { name: 'GitHub', icon: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/github.png' },
    { name: 'Node', icon: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png' },
    { name: 'Python', icon: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png' },
    { name: 'MySQL', icon: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mysql.png' },
    { name: 'MongoDB', icon: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png' },
  ];
