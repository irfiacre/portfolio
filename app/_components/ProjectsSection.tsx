"use client"
import Link from "next/link";
import { portfolioProjects } from "../_lib/constants";
import ProjectCard from "./ProjectCard";
import ShinyButton from "./ui/ShinyButton";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { handleGetGithubProjects } from "../_lib/utils";

const ProjectsSection = () => {

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
            updated: new Date(obj.updated_at).toLocaleDateString()
          }))
        );
      setLoading(false);
      })();
    }, []);

  console.log("=======", projects);
  
  return (
    <div className="py-32" id="work">
      <div className="flex gap-4 flex-col sm:flex-row sm:items-center justify-between">
        <h2 className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200">
          My portfolio
        </h2>

        <ShinyButton icon={<ChevronRight />}>
          <Link href="/projects">
            All Projects
          </Link>
        </ShinyButton>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 mt-8">
        {portfolioProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
