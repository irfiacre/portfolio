import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalComponent from "./ModalComponents";
import BaseModel from "./base/BaseModel";
import BaseCard from "./base/BaseCard";

const ProjectItem = ({ details }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="cursor-pointer relative flex items-center justify-center h-auto w-full rounded-md group py-1">
      {open && (
        <BaseModel projectContent={details} onClose={() => setOpen(false)} />
      )}
      <BaseCard className="p-4" onClick={() => setOpen(true)}>
        <h3 className="py-2 capitalize">{details.name}</h3>
        <p>{details.description?.length >50?`${details.description?.substring(0, 50)}...`:details.description}</p>
        <div className="w-full py-2 flex flex-wrap items-center justify-start">
          {[details.language, ...details.topics].map((topic) => (
            topic && <span
              key={topic}
              className="rounded-full bg-primary/10 p-2 hover:scale-105 ease-in duration-300 text-gray-500 text-sm m-1"
            >
              {topic}
            </span>
          ))}
        </div>
      </BaseCard>
    </div>
  );
};

export default ProjectItem;
