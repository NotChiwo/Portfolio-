import { motion } from "framer-motion";
import CardHeader from "../components/CardHeader";
import { academicProjects } from "../data/content";
import "./AcademicProjects.css";

export default function AcademicProjects() {
  return (
    <motion.div
      id="academic-projects"
      className="glass bento-card card-journey"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <CardHeader
        number="03"
        label="Journey"
        title="Academic projects — no internships yet, but these are real"
      />

      <div className="journey-row">
        {academicProjects.map((item, i) => (
          <motion.div
            key={item.title}
            className="journey-tile"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <span className="journey-year mono">{item.year}</span>
            <h4>{item.title}</h4>
            <p className="journey-place">{item.place}</p>
            <p className="journey-desc">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
