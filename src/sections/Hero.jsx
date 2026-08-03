import { motion } from "framer-motion";
import { FiDownload, FiMail, FiGithub } from "react-icons/fi";
import Button from "../components/Button";
import useTypewriter from "../hooks/useTypewriter";
import { useTheme } from "../context/ThemeContext";
import { profile, socials } from "../data/content";
import profilePhoto from "../assets/profile.png";
import "./Hero.css";

export default function Hero() {
  const typed = useTypewriter(profile.roles);
  const { theme } = useTheme();

  return (
    <motion.div
      id="hero"
      className="glass bento-card card-identity"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {theme === "dark" ? (
        <p className="hero-preline mono">piedrii@portfolio:~$ whoami</p>
      ) : (
        <p className="hero-preline hero-dateline">Field Notes — Est. 2026</p>
      )}

      <motion.img
        src={profilePhoto}
        alt={`Portrait of ${profile.name}`}
        className="hero-photo"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <span className="section-eyebrow">{profile.title}</span>
      <h1 className="hero-name">
        Hi, I'm <span className="accent">{profile.shortName}</span>
      </h1>
      <p className="hero-role">
        {typed}
        <span className="hero-caret" aria-hidden="true" />
      </p>
      <p className="hero-tagline">{profile.tagline}</p>

      <div className="hero-actions">
        <Button href={profile.resumeUrl} icon={FiDownload} target="_blank">
          Resume
        </Button>
        <Button href="#contact" variant="secondary" icon={FiMail}>
          Contact
        </Button>
      </div>

      <a
        href={socials.github}
        target="_blank"
        rel="noopener noreferrer"
        className="hero-github-link"
      >
        <FiGithub size={14} /> github.com/NotChiwo
      </a>
    </motion.div>
  );
}
