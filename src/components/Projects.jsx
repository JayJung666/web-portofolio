import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "ai-ml", label: "AI & ML" },
  { key: "web", label: "Web Dev" },
  { key: "mobile", label: "Mobile Dev" },
];

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => {
          const cats = p.categories || (p.category ? [p.category] : []);
          return cats.includes(activeFilter);
        });

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-dark-900">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-sm font-mono font-medium text-primary-600 dark:text-primary-400">
                02. projects
              </span>
              <h2 className="section-title mt-1">Featured Projects</h2>
              <p className="section-subtitle">
                A curated collection of AI/ML, web, and mobile applications I've built.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  id={`filter-${f.key}`}
                  onClick={() => setActiveFilter(f.key)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeFilter === f.key
                      ? "bg-primary-500 text-white shadow-lg shadow-primary-500/25"
                      : "bg-white dark:bg-dark-700 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-dark-600 hover:border-primary-300 dark:hover:border-primary-700"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <ProjectCard
                    project={project}
                    onClick={() => setSelectedProject(project)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
