import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import GlassCard from "../components/GlassCard";
import { projects } from "../data/content";
import "./Projects.css";

export default function Projects() {
  const allTags = useMemo(() => {
    const tags = new Set();
    projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return ["All", ...Array.from(tags)];
  }, []);

  const [activeTag, setActiveTag] = useState("All");

  const filtered =
    activeTag === "All" ? projects : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <SectionWrapper id="projects">
      <div className="container">
        <SectionHeading
          number="03"
          eyebrow="My Work"
          title="Featured"
          accent="projects"
          subtitle="A placeholder project is set up below as a template — real projects will replace it here."
        />

        <div className="project-filters">
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`filter-chip ${activeTag === tag ? "filter-chip-active" : ""}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
              >
                <GlassCard className="project-card">
                  <div className="project-image">
                    {project.image ? (
                      <img src={project.image} alt={project.title} loading="lazy" />
                    ) : (
                      <div className="project-image-placeholder">Preview coming soon</div>
                    )}
                  </div>

                  <div className="project-body">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <ul className="project-tags">
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>

                    <div className="project-actions">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary project-btn"
                        >
                          <FiGithub /> Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary project-btn"
                        >
                          <FiExternalLink /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
