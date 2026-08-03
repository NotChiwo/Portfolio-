import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function SectionHeading({ number, eyebrow, title, accent, subtitle }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
    >
      {(number || eyebrow) && (
        <motion.span className="section-eyebrow" variants={itemVariants}>
          {number && <span className="num">{number}</span>}
          {eyebrow}
        </motion.span>
      )}
      <motion.h2 className="section-title" variants={itemVariants}>
        {title} {accent && <span className="accent">{accent}</span>}
      </motion.h2>
      {subtitle && (
        <motion.p className="section-subtitle" variants={itemVariants}>
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
