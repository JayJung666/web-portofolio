import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X, GitFork, ExternalLink, FileText, AlertCircle, CheckCircle2, User } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  const [imgError, setImgError] = useState(false);
  const showImage = project.image && !imgError;

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const thumbnailIcons = {
    "indonesian-llm-pgabl": "💻",
    "garbage-classification": "♻️",
    "financial-transaction-ml": "📊",
    "disneyplus-sentiment": "💬",
    "ai-knowledge-base": "🤖",
    "pushup-posture-icodsa": "🏋️",
    "scanora-ai": "🍎",
    "kp-brmp-ecommerce": "🌱",
    "catch-u-dating": "📱",
    // Fallbacks
    "pushup-posture": "🏋️",
    "icodsa-2026": "📄",
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Project details: ${project.title}`}
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-dark-700 rounded-2xl shadow-2xl"
      >
        {/* Close button */}
        <button
          id="modal-close"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-gray-100 dark:bg-dark-600 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-dark-500 transition-colors"
        >
          <X size={18} />
        </button>

        {/* Header thumbnail */}
        <div className="h-56 sm:h-64 bg-gradient-to-br from-primary-500/20 to-teal-500/10 flex items-center justify-center rounded-t-2xl relative overflow-hidden">
          {showImage ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="text-8xl select-none">
              {thumbnailIcons[project.id] || "💻"}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Title and links */}
          <div>
            <div className="flex flex-wrap gap-2 mb-2">
              {(project.categories || (project.category ? [project.category] : [])).map((cat) => (
                <span key={cat} className="tech-tag text-xs">
                  {cat === "ai-ml" ? "AI & ML" : cat === "web" ? "Web Dev" : cat === "mobile" ? "Mobile Dev" : cat}
                </span>
              ))}
              {project.featured && (
                <span className="tech-tag text-xs bg-primary-50 dark:bg-primary-950 border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300">
                  Featured
                </span>
              )}
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {project.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Sections */}
          <Section title="🎯 Problem Statement" content={project.problem} />
          <Section title="🔬 Approach" content={project.approach} />

          {/* Results */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-500" />
              Key Results
            </h3>
            <div className="p-4 rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 text-sm text-green-800 dark:text-green-300 leading-relaxed">
              {project.results}
            </div>
          </div>

          {/* Limitations */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2 flex items-center gap-2">
              <AlertCircle size={16} className="text-amber-500" />
              Limitations
            </h3>
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
              {project.limitations}
            </div>
          </div>

          {/* Role */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2 flex items-center gap-2">
              <User size={16} className="text-primary-500" />
              My Role
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{project.role}</p>
          </div>

          {/* Tech stack */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">
              🛠️ Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {(project.links.github || project.links.demo || project.links.paper) && (
            <div className="flex flex-wrap gap-3 pt-2 border-t border-gray-100 dark:border-dark-600">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm py-2 px-4"
                >
                  <GitFork size={16} />
                  GitHub
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm py-2 px-4"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
              {project.links.paper && (
                <a
                  href={project.links.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm py-2 px-4"
                >
                  <FileText size={16} />
                  Paper
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

function Section({ title, content }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{content}</p>
    </div>
  );
}
