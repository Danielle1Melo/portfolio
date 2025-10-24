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
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Sass', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Node', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },

  ];
  