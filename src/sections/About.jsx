import { motion } from "framer-motion";
import { FiMapPin, FiBookOpen } from "react-icons/fi";
import CardHeader from "../components/CardHeader";
import { profile, education } from "../data/content";
import "./About.css";

export default function About() {
  return (
    <motion.div
      id="about"
      className="glass bento-card card-about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
    >
      <CardHeader number="01" label="About" title="A little about me" />

      <p>
        I'm a {profile.title.toLowerCase()} taking up Data Science, currently deep in thesis
        work on a fraud detection system. I learn best by shipping a working version, then
        improving it.
      </p>
      <p>
        One developer whose work I look up to is {profile.roleModel} — seeing how he approaches
        his own site pushed me to think harder about what mine should feel like.
      </p>

      <div className="about-meta">
        <span>
          <FiMapPin /> {profile.location}
        </span>
        <span>
          <FiBookOpen /> {education[0].place}
        </span>
      </div>
    </motion.div>
  );
}
