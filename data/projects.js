import blog from "../public/assets/img/blog.png";
import home from "../public/assets/img/home.png";
import socialapp from "../public/assets/img/socialapp.png";

export const projects = [
  {
    id: 0,
    title:
      "Driver Hub (Web)",
    description:"This is a recruitment web application intended mainly as a comprehensive platform to efficiently manage both submitted applications and individual onboarding plans for drivers.",
    backgroundImg: home,
    tech: ["React JS (vite)" ,"React Redux" ,"TypeScript" ,"Tailwind" ,"Firebase Functions", "Firestore DB"],
    link: 'driverhub.netlify.app/',
    screenShots:[],
    thumbnail:''
    
  },
  {
    id: 1,
    title: "Driver Hub (mobile)",
    backgroundImg: socialapp,
    description:"This is a recruitment system that provides drivers with a user-friendly mobile app that allows them to submit applications, take onboarding courses, submit feedback, and track the status of application and onboarding plan.",
    tech: ["React Native" ,"Expo" ,"TypeScript" ,"Native Wind" ,"Firebase Functions", "Firestore DB"],
    link: 'driverhub.netlify.app/',
    screenShots:[],
    thumbnail:''
  },
  {
    id: 2,
    title: "ML-Prediction-AI",
    description:"A machine learning model, that makes predictions for certain outcomes basing on a certain provided parameters",
    tech: ["React Native" ,"Expo" ,"TypeScript" ,"Native Wind" ,"Firebase Functions", "Firestore DB"],
    link: 'driverhub.netlify.app/',
    screenShots:[],
    thumbnail:''
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
