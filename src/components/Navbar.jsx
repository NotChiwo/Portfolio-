import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, profile } from "../data/content";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <nav className="navbar-inner container" aria-label="Primary">
        <a href="#hero" className="navbar-logo">
          {profile.shortName}
          <span className="dot">.</span>
        </a>

        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="navbar-right">
          <ThemeToggle />

          <button
            className="navbar-toggle"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar-mobile glass"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={handleLinkClick}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="navbar-mobile-toggle">
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
