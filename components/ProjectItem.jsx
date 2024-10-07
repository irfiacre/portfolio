import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalComponent from "./ModalComponents";
import BaseModel from "./base/BaseModel";
import BaseCard from "./base/BaseCard";

const ProjectItem = ({ details }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-center h-auto w-full rounded-md group  hover:bg-primary">
      {open && (
        <BaseModel
          projectContent={details}
          onClose={() => setOpen(false)}
        />
      )}
      
      <BaseCard>
      <h3>{details.name}</h3>
      <p>{details.description}</p>
      </BaseCard>
    </div>
  );
};

export default ProjectItem;
