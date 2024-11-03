"use client";

import { techCardsItems } from "../_lib/constants";
import TechCard from "./TechCard";
import { motion } from "framer-motion";

const AllSkills = () => {
  return (
    <div className="relative -py-16 space-y-4" id="about">
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
      <div>
        <motion.h3
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-xl font-medium text-dark-200/50 dark:text-stone-200/70 p-3"
        >
          Proficient with:
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4"
        >
          {techCardsItems.proficient.map((cardItem) => (
            <TechCard key={cardItem.name} cardInfo={cardItem} />
          ))}
          <br />
        </motion.div>
      </div>
      
      <div>
        <motion.p
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-xl font-medium text-dark-200/50 dark:text-stone-200/70 p-3"
        >
          I am familiar with:
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
  );
};

export default AllSkills;
