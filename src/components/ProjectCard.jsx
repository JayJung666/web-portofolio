import { useState } from "react";
import { GitFork, ExternalLink, FileText, ArrowRight } from "lucide-react";

const categoryColors = {
  "ai-ml": "bg-violet-50 dark:bg-violet-950 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800",
  web: "bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
  mobile: "bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
};

const categoryLabel = {
  "ai-ml": "AI & ML",
  web: "Web Dev",
  mobile: "Mobile Dev",
};

// Gradient placeholders for project thumbnails
const thumbnailGradients = {
  "indonesian-llm-pgabl": "from-purple-500/20 via-indigo-500/10 to-transparent",
  "garbage-classification": "from-emerald-500/20 via-teal-500/10 to-transparent",
  "financial-transaction-ml": "from-blue-500/20 via-cyan-500/10 to-transparent",
  "disneyplus-sentiment": "from-red-500/20 via-orange-500/10 to-transparent",
  "ai-knowledge-base": "from-indigo-500/20 via-sky-500/10 to-transparent",
  "pushup-posture-icodsa": "from-violet-500/20 via-purple-500/10 to-transparent",
  "scanora-ai": "from-amber-500/20 via-lime-500/10 to-transparent",
  "kp-brmp-ecommerce": "from-green-500/20 via-emerald-500/10 to-transparent",
  "catch-u-dating": "from-pink-500/20 via-rose-500/10 to-transparent",
  // Fallbacks
  "pushup-posture": "from-violet-500/20 via-purple-500/10 to-transparent",
  "icodsa-2026": "from-indigo-500/20 via-blue-500/10 to-transparent",
};

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

export default function ProjectCard({ project, onClick }) {
  const [imgError, setImgError] = useState(false);
  const projectCategories =
    project.categories || (project.category ? [project.category] : []);
  const showImage = project.image && !imgError;

  return (
    <div
      className="card group cursor-pointer flex flex-col h-full overflow-hidden hover:-translate-y-2"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View project details: ${project.title}`}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      id={`project-card-${project.id}`}
    >
      {/* Thumbnail */}
      <div
        className={`h-44 bg-gradient-to-br ${thumbnailGradients[project.id] || "from-gray-200/50 to-transparent"} flex items-center justify-center relative overflow-hidden`}
      >
        {showImage ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="text-6xl select-none">{thumbnailIcons[project.id] || "💻"}</div>
        )}
        {project.featured && (
          <span className="absolute top-3 right-3 text-xs font-mono font-medium px-2 py-0.5 rounded-full bg-primary-500 text-white">
            Featured
          </span>
        )}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 max-w-[70%]">
          {projectCategories.map((cat) => (
            <span
              key={cat}
              className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${categoryColors[cat] || "bg-gray-100 text-gray-700 border-gray-200"}`}
            >
              {categoryLabel[cat] || cat}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-snug">
          {project.title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
          {project.summary}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="tech-tag">
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="tech-tag">+{project.tech.length - 4}</span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-dark-600">
          <div className="flex gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label="GitHub"
                className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
              >
                <GitFork size={16} />
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label="Demo"
                className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
              >
                <ExternalLink size={16} />
              </a>
            )}
            {project.links.paper && (
              <a
                href={project.links.paper}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label="Paper"
                className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
              >
                <FileText size={16} />
              </a>
            )}
          </div>
          <span className="flex items-center gap-1 text-xs text-primary-600 dark:text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity">
            Details <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </div>
  );
}
