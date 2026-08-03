import { motion } from "framer-motion";

export default function GlassCard({ children, className = "", hover = true, ...props }) {
  return (
    <motion.div
      className={`glass ${className}`}
      whileHover={hover ? { y: -6 } : undefined}
      transition={{ duration: 0.25, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
