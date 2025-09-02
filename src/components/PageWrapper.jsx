import React from "react";
import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, rotateY: -90 },
  enter: { opacity: 1, rotateY: 0 },
  exit: { opacity: 0, rotateY: 90 },
};

export default function PageWrapper({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      style={{ width: "100%", height: "100%" }}
    >
      {children}
    </motion.div>
  );
}
