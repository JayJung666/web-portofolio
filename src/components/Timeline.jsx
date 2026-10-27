import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { experience } from "../data/experience";
import { GraduationCap, Briefcase } from "lucide-react";

export default function Timeline() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="py-24 bg-white dark:bg-dark-800">
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
              05. journey
            </span>
            <h2 className="section-title mt-1">Education & Experience</h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-primary-300 to-transparent dark:from-primary-600 dark:via-primary-700" />

            <div className="space-y-8">
              {experience.map((item, i) => {
                const Icon = item.type === "education" ? GraduationCap : Briefcase;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.12 + 0.2 }}
                    className="relative flex gap-6 pl-14"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-950 border-2 border-primary-200 dark:border-primary-800 flex items-center justify-center text-primary-600 dark:text-primary-400 z-10">
                      <Icon size={18} />
                    </div>

                    {/* Content */}
                    <div className="card p-5 flex-1 hover:-translate-y-0.5">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {item.title}
                          </h3>
                          <p className="text-sm text-primary-600 dark:text-primary-400">
                            {item.organization}
                          </p>
                        </div>
                        <span className="text-xs font-mono text-gray-500 dark:text-gray-500 whitespace-nowrap">
                          {item.period}
                        </span>
                      </div>

                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span key={tag} className="tech-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
