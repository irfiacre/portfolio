import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalComponent from "./ModalComponents";
import BaseModel from "./base/BaseModel";

const ProjectItem = ({ title, backgroundImg, tech, projectUrl }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-center h-auto w-full rounded-md group  hover:bg-primary">
      {open && (
        <BaseModel
          title={title}
          onClose={() => setOpen(false)}
          containerStyle="w-4/6"
        >
          <div className="px-5">
            {/* To Do: */}
            <div> Description, Links, Gallery</div>
          </div>
        </BaseModel>
      )}
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt={title}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] w-[80%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-base lg:text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="text-sm lg:text-base pb-4 pt-2 text-white text-center">
          {tech}
        </p>

        <p
          className="text-center py-2 px-10 rounded-lg w-fit mx-auto bg-white text-gray-700 font-bold text-sm lg:text-lg lg:py-3 cursor-pointer"
          onClick={() => setOpen(true)}
        >
          More Info
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
