import { motion } from "framer-motion";

/**
 * Wraps a <section> with a fade + slide-up reveal that triggers
 * once when it scrolls into view. Keeps animation logic out of
 * every individual section component.
 */
const revealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function SectionWrapper({ id, className = "", children }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={revealVariants}
    >
      {children}
    </motion.section>
  );
}
