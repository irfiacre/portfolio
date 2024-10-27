"use client";

import { techCardsItems } from "../_lib/constants";
import TechCard from "./TechCard";
import { motion } from "framer-motion";

const ModalSkills = ({
  handleCloseModal,
}: {
  handleCloseModal: () => void;
}) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity flex justify-center items-center z-50 p-4">
      <div className="w-full bg-white border border-primary rounded-lg">
        <div className="space-y-4 mb-10">
          <motion.h1
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200"
          >
            All Technologies & Tools
          </motion.h1>
        </div>
        {/* Proficient */}
        <div>
          <motion.p
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-sm min-[430px]:text-base max-w-lg md:max-w-3xl text-dark-200/70 dark:text-stone-200/70"
          >
            Proficient in:
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4"
          >
            {techCardsItems.familiar.map((cardItem) => (
              <TechCard key={cardItem.name} cardInfo={cardItem} />
            ))}
            <br />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ModalSkills;
