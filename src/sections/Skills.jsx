import { motion } from "framer-motion";
import CardHeader from "../components/CardHeader";
import { skills } from "../data/content";
import "./Skills.css";

export default function Skills() {
  return (
    <motion.div
      id="skills"
      className="glass bento-card card-skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
    >
      <CardHeader number="02" label="Skills" title="Skills & tools" />

      <div className="skills-compact">
        {skills.map((group) => (
          <div key={group.category} className="skill-group">
            <span className="skill-group-label mono">{group.category}</span>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
