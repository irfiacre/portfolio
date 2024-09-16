import blog from "../public/assets/img/blog.png";
import home from "../public/assets/img/home.png";
import socialapp from "../public/assets/img/socialapp.png";

export const projects = [
  {
    id: 0,
    title:
      "Aplicación para la Gestión de Horarios de Empleados y Zonas de Trabajo - FullStack",
    backgroundImg: home,
    projectUrl: "/zone-clocker",
    tech: "React JS (vite) | React Redux | TypeScript | Tailwind | Node JS | Express JS | MySQL",
  },
  {
    id: 1,
    title: "Social App - FullStack",
    backgroundImg: socialapp,
    projectUrl: "/social-app",
    tech: "React JS | Tailwind | Material-UI | Node JS | Express JS | MySQL | Unit Testing",
  },
  {
    id: 2,
    title: "Blog - FullStack",
    backgroundImg: blog,
    projectUrl: "/blog",
    tech: "SCSS | Material-UI | React JS | TypeScript | Node JS | Express JS | MySQL | Unit Testing",
  },
];

export const education = [
  {
    id: 0,
    title: "Adventist University Of Central Africa (AUCA)",
    subtitle: "EU Blue Card- eligible university & degree. Top 10% of my class",
    startDate: "Jan/2020",
    endDate: "Nov/2024",
    location: "Rwanda, Kigali",
    relevantCourses: [
      "Mobile Programming",
      "Java Programming",
      "Software Project Management",
      "Software Modeling & Design",
      "LINUX Administration",
      "Operating Systems",
      "Database Development with PL/SQL",
      "Theory of Computation",
    ],
  },
];
