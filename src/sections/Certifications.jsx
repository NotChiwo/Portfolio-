import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import CardHeader from "../components/CardHeader";
import { certifications } from "../data/content";
import "./Certifications.css";

export default function Certifications() {
  return (
    <motion.div
      id="certifications"
      className="glass bento-card card-certs"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
    >
      <CardHeader number="04" label="Credentials" title="Certifications" />

      {certifications.length === 0 ? (
        <p className="cert-empty">No certifications added yet — check back soon.</p>
      ) : (
        <div className="cert-list">
          {certifications.map((cert) => (
            <div key={cert.title} className="cert-item">
              <FiAward size={16} className="cert-icon" />
              <div>
                <h4>{cert.title}</h4>
                <p>
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
