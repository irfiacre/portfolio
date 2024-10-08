import React, { useState } from "react";
import BaseCard from "./BaseCard";
import Link from "next/link";

const BaseModel = ({
  projectContent,
  onClose,
}: {
  projectContent: any;
  onClose: () => void;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity flex justify-center items-center z-50 p-4">
      <BaseCard>
        <div className="w-full flex flex-row items-center justify-between p-4">
          <h1 className="text-2xl font-bold text-textLightColor capitalize">
            Project: {projectContent.name}
          </h1>

          <button
            type="button"
            className="top-3 text-gray-100 bg-transparent hover:bg-primary hover:text-white rounded-full text-sm w-8 h-8 ms-auto inline-flex justify-center items-center shadow-none"
            onClick={() => onClose()}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        <div className="flex flex-column -md:flex-wrap">
          <div className="w-3/4 space-y-5 px-4">
            <p>{projectContent.description}</p>
            <p>
              <Link href={projectContent.html_url} target="_blank" className="font-medium hover:underline p-2">GitHub</Link>
              {projectContent.homepage &&<Link href={projectContent.homepage} target="_blank" className="text-primary hover:underline p-2">Live Demo</Link>}
            </p>
            <div>
              {projectContent.topics.map((topic: any)=>(
                <span key={topic} className="rounded-full bg-primary/10 p-3 cursor-pointer hover:scale-105 ease-in duration-300 m-1">{topic}</span>
              ))}
            </div>
          </div>

          <div className="w-full p-2">
            <h1 className="text-xl font-bold text-gray-400 capitalize w-full text-center py-2">
              {projectContent.homepage ? "Live Preview" : "GitHub Repo"}
            </h1>
            <div style={{ height: "60vh", width: "100%" }}>
              {isLoading ? (
                <div className="text-center justify-center items-center py-11">
                  <p className="text-gray-300">Loading Live Preview...</p>
                </div>
              ):
              <iframe
                src={
                  projectContent.homepage
                    ? projectContent.homepage
                    : projectContent.html_url
                }
                title="Driver Hub"
                style={{ width: "100%", height: "100%", border: "1px solid #DDDDDD", borderRadius:"6px" }}
                onLoad={handleIframeLoad}
                allowFullScreen
              />}
            </div>
          </div>
        </div>
      </BaseCard>
    </div>
  );
};

export default BaseModel;
