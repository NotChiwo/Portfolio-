import { FiGithub, FiMail, FiLinkedin, FiArrowUp } from "react-icons/fi";
import { profile, socials } from "../data/content";
import { useTheme } from "../context/ThemeContext";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">
          {theme === "dark" ? "// " : "— "}
          {year} {profile.name}. All rights reserved.
        </p>

        <div className="footer-socials">
          <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub size={18} />
          </a>
          <a href={`mailto:${socials.email}`} aria-label="Email">
            <FiMail size={18} />
          </a>
          {socials.linkedin && (
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={18} />
            </a>
          )}
        </div>

        <button className="footer-top" onClick={scrollToTop} aria-label="Back to top">
          <FiArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}
