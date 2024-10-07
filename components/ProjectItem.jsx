import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalComponent from "./ModalComponents";
import BaseModel from "./base/BaseModel";
import BaseCard from "./base/BaseCard";

const ProjectItem = ({ details }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-center h-auto w-full rounded-md group py-1">
      {open && (
        <BaseModel
          projectContent={details}
          onClose={() => setOpen(false)}
        />
      )}
      
      <BaseCard className="p-4" onClick={()=>setOpen(true)}>
        <h3 className="py-2 capitalize cursor-pointer">{details.name}</h3>
        <p>{`${details.description?.substring(0, 50)}...`}</p>
      </BaseCard>
    </div>
  );
};

export default ProjectItem;
