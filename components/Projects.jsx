"use client";
import React, { useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import handleGetGithubProjects from "../utils/projects";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [paginatedProjects, setPaginatedProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await handleGetGithubProjects();
      setProjects(response);
      setPaginatedProjects(response);
    })();
  }, []);

  console.log(paginatedProjects);
  const handleLoadMore = () => {
    console.log("-------> Should update Paginated projects");
  };

  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-6 py-16">
        <p className="text-xl tracking-widest uppercase text-primary">
          Projects
        </p>
        <div>
          <h2 className="py-4">GitHub Projects</h2>
          <span className="text-xs capitalize text-primary/50">
            last Sync (Just now)
          </span>
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <ProjectItem details={project} key={project.name} />
            ))}
          </div>
          <div className="flex items-center mt-4 cursor-pointer">
            <div className="border-t border border-primary/20 flex-grow"></div>
            <div
              onClick={handleLoadMore}
              className="px-3 text-primary font-light hover:font-medium text-sm p-2 rounded-full border border-primary/20 hover:bg-primary/20"
            >
              {paginatedProjects.lenght === projects.lenght
                ? "End"
                : "Load More"}
            </div>
            <div className="border-t border border-primary/20 flex-grow"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
