import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { publications } from "../data/publications";
import { ExternalLink, BookOpen, FileText, Image } from "lucide-react";

const typeConfig = {
  conference: {
    label: "Conference",
    icon: BookOpen,
    className:
      "bg-violet-50 dark:bg-violet-950 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800",
  },
  thesis: {
    label: "Thesis",
    icon: FileText,
    className:
      "bg-primary-50 dark:bg-primary-950 text-primary-700 dark:text-primary-300 border-primary-200 dark:border-primary-800",
  },
  poster: {
    label: "Poster",
    icon: Image,
    className:
      "bg-orange-50 dark:bg-orange-950 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800",
  },
};

export default function Publications() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="publications" className="py-24 bg-gray-50 dark:bg-dark-900">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-12">
            <span className="text-sm font-mono font-medium text-primary-600 dark:text-primary-400">
              04. publications
            </span>
            <h2 className="section-title mt-1">Publications & Research</h2>
            <p className="section-subtitle">
              Academic papers and research presentations I've produced.
            </p>
          </div>

          {/* Publications list */}
          <div className="space-y-5">
            {publications.map((pub, i) => {
              const config = typeConfig[pub.type];
              const Icon = config.icon;
              return (
                <motion.div
                  key={pub.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="card p-6 flex gap-5 hover:-translate-y-0.5"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-950 flex items-center justify-center text-primary-600 dark:text-primary-400">
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span
                        className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${config.className}`}
                      >
                        {config.label}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-500 font-mono">
                        {pub.year}
                      </span>
                    </div>

                    <h3 className="font-semibold text-gray-900 dark:text-white leading-snug mb-1">
                      {pub.title}
                    </h3>

                    <p className="text-sm text-primary-600 dark:text-primary-400 mb-2">
                      {pub.venue}
                    </p>

                    <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-3">
                      {pub.authors}
                    </p>

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                      {pub.abstract}
                    </p>

                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-3 text-sm text-primary-600 dark:text-primary-400 hover:underline"
                      >
                        Read paper
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
