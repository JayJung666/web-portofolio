import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { skills } from "../data/skills";

const categoryIcons = {
  "Programming Languages": "{ }",
  "AI & Machine Learning": "🤖",
  "Web Development": "🌐",
  "Tools & Platforms": "🛠️",
};

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="py-24 bg-white dark:bg-dark-800">
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
              03. skills
            </span>
            <h2 className="section-title mt-1">Skills & Technologies</h2>
            <p className="section-subtitle">
              Technologies and tools I work with daily.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: gi * 0.1 + 0.2 }}
                className="card p-6 hover:-translate-y-1"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl" role="img" aria-hidden="true">
                    {categoryIcons[group.category]}
                  </span>
                  <h3 className="font-semibold text-sm text-gray-700 dark:text-gray-300">
                    {group.category}
                  </h3>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, ii) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: gi * 0.1 + ii * 0.04 + 0.3 }}
                      className="tech-tag"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
