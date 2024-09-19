import ProjectItem from "./ProjectItem";
import { projects } from "./../data/projects";

function Projects() {

  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-6 py-16">
        <p className="text-xl tracking-widest uppercase text-primary">
          Personal Projects (To USE a GITHUB API, For this)
        </p>
        <p>
          - Repos: https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28
          - Auth: https://docs.github.com/en/rest/using-the-rest-api/getting-started-with-the-rest-api?apiVersion=2022-11-28#authentication
          - Commits: https://docs.github.com/en/rest/commits/commits?apiVersion=2022-11-28
          
        </p>
        <br />
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectItem
              key={project.id}
              title={project.title}
              backgroundImg={project.backgroundImg}
              projectUrl={project.projectUrl}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
