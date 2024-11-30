"use client";
import Footer from "@/app/_components/Footer";
import ProjectTechnologiesMini from "@/app/_components/ProjectTechnologiesMini";
import { Navbar } from "@/app/_components/ui/Navbar";
import ShinyButton from "@/app/_components/ui/ShinyButton";
import { portfolioProjects } from "@/app/_lib/constants";
import {
  BriefcaseBusiness,
  Code,
  ContactIcon,
  Globe,
  House,
  MoveDown,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { handleGetGithubProjects } from "../_lib/utils";

// export const generateMetadata =()=>  ({  title: 'Github Projects'});

const navItems = [
  { name: "Home", link: "/", icon: <House /> },
  { name: "Work", link: "/#work", icon: <BriefcaseBusiness /> },
  { name: "About", link: "/#about", icon: <UserRound /> },
  { name: "Contact", link: "/#contact", icon: <ContactIcon /> },
];

const Projects = ({ params }: { params: { projectName: string } }) => {
  const [projects, setProjects] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
    setLoading(true);
      const response: any = await handleGetGithubProjects();
      setProjects(
        response.map((obj: any) => ({
          name: obj.name,
          description: obj.description,
          technologies: [obj.language, ...obj.topics],
          url: obj.html_url,
        }))
      );
    setLoading(false);
    })();
  }, []);

  return (
    <main className="flex flex-col px-5 sm:px-10 relative">
      
      <div className="max-w-7xl mx-auto w-full">
        <Navbar navItems={navItems} />
        { loading ? "Loading":<div>
        <div className="flex gap-4 flex-col sm:flex-row sm:items-center justify-between">
          <h2 className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200">
            Github Projects
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 mt-8">
          {projects.map((project: any) => (
            <a href={project.url} key={project.name} target="_blank">
              <div className="flex flex-1 items-start gap-5 p-2.5 rounded-xl border border-[#FAFAFA] dark:border-dark-200 bg-[#FAFAFA] dark:bg-dark-200 hover:bg-[#F2F2F2] dark:hover:bg-dark-300 hover:border-[#E0E0E0] dark:hover:border-dark-700 transition-colors duration-200">
                <div
                  className="p-3 bg-dark-200/10 dark:bg-white/10 rounded-lg w-fit"
                >
                  <span className={`size-8 dark:invert}`}>
                    {project.name.substring(0, 2).toLocaleUpperCase()}
                  </span>
                </div>
                <div>
                  <div>
                    <h4 className="text-lg font-medium">{project.name}</h4>
                    <p className="text-dark-200/70 dark:text-white/70 text-sm">
                      {project.description?.length > 80
                        ? `${project.description?.substring(0, 80)}...`
                        : project.description}
                    </p>
                  </div>
                  <div className="w-full py-2 flex flex-wrap items-center justify-start">
                    {project.technologies.map(
                      (topic: any) =>
                        topic && (
                          <span
                            key={topic}
                            className="p-1.5 bg-dark-200/10 dark:bg-white/10 rounded-lg w-fit text-xs m-1"
                          >
                            {topic}
                          </span>
                        )
                    )}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>


        </div>}
        <Footer />
      </div> 
    </main>
  );
};

export default Projects;
