import React from "react";
import { motion } from "framer-motion";

function AnimatedSection({ children, refProp, inView }) {
  return (
    <motion.div
      ref={refProp}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 1.0 }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;
