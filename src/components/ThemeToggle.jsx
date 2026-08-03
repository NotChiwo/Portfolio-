import { motion } from "framer-motion";
import { FiTerminal, FiFeather } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "Field Notes (light)" : "Terminal (dark)"} mode`}
      aria-pressed={!isDark}
    >
      <span className={`theme-toggle-label ${isDark ? "theme-toggle-label-active" : ""}`}>
        <FiTerminal size={13} /> term
      </span>
      <span className="theme-toggle-track">
        <motion.span
          className="theme-toggle-thumb"
          animate={{ x: isDark ? 0 : 22 }}
          transition={{ type: "spring", stiffness: 500, damping: 32 }}
        />
      </span>
      <span className={`theme-toggle-label ${!isDark ? "theme-toggle-label-active" : ""}`}>
        <FiFeather size={13} /> notes
      </span>
    </button>
  );
}
