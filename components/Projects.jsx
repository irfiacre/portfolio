"use client";
import React, { useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import handleGetGithubProjects from "../utils/projects";

function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await handleGetGithubProjects();
      setProjects(response);
    })();
  }, []);

  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-6 py-16">
        <p className="text-xl tracking-widest uppercase text-primary">
          Personal Projects <span className="text-xs capitalize">(last GitHub Sync just now)</span>
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectItem
              details={project}
              key={project.name}
            />
          ))}
          {/* <div style={{ height: '100vh', width: '100%' }}>
      <iframe
        src="http://driverhub.netlify.app/"
        title="Driver Hub"
        style={{ width: '100%', height: '100%', border: 'none' }}
        allowFullScreen
      />
    </div> */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
