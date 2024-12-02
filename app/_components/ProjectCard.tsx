"use client";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import ProjectTechnologiesMini from "./ProjectTechnologiesMini";
import { motion } from "framer-motion";

interface ProjectProps {
  id: string;
  heading: string;
  subheading: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  liveDemoUrl: string;
  sourceCodeUrl: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const { id, heading, liveDemoUrl, techStack } = project;
// some should be removed
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="bg-[#F3F4F3] dark:bg-dark-200 rounded-lg p-4 sm:p-8 space-y-8"
    >
      <div style={{ height:"30vh"}} className="rounded-lg overflow-hidden block">
        <div className="text-center justify-center items-center py-2">
          <p className="text-gray-500 w-full text-center">Live Preview</p>
        </div>
        <iframe
          src={liveDemoUrl}
          title="Driver Hub"
          style={{
            width: "100%",
            height: "100%",
            border: "1px solid #DDDDDD",
            borderRadius: "6px",
          }}
          allowFullScreen
        />
      </div>
        
      <div>
        <h3 className="text-2xl sm:text-3xl font-semibold">{heading}</h3>
        <div className="mt-4 flex flex-col sm:flex-row justify-between gap-5">
          <ProjectTechnologiesMini techStack={techStack} />
          <Link
            href={liveDemoUrl}
            target="_blank"
            className="p-3 bg-primary hover:bg-primary/80 transition-colors duration-200 rounded-lg self-start sm:self-end"
          >
            <MoveUpRight className="size-5 sm:size-8 text-[#F3F4F3] dark:text-dark-200" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
