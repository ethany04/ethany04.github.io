"use client";

import { motion } from "framer-motion";

const ProjectCardAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  );
};

export default ProjectCardAnimation;
