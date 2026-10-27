import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { BookOpen, Code2, Brain, MapPin } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: "6+", icon: Code2 },
  { label: "Publications", value: "1", icon: BookOpen },
  { label: "Primary Focus", value: "AI/ML", icon: Brain },
  { label: "Location", value: "Indonesia", icon: MapPin },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="py-24 bg-white dark:bg-dark-800">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="mb-12">
            <span className="text-sm font-mono font-medium text-primary-600 dark:text-primary-400">
              01. about
            </span>
            <h2 className="section-title mt-1">About Me</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                I am <span className="font-semibold">Antonius Vincent Jung</span>, an Informatics Graduate specializing
                in <span className="text-primary-600 dark:text-primary-400 font-semibold">AI, Computer Vision, and Software Engineering</span>. 
                I believe impactful AI must be seamlessly integrated into scalable software to solve real-world problems and deliver measurable results.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                My undergraduate thesis focuses on classifying push-up posture quality using pose estimation and deep learning. 
                This research was accepted and presented at the international 
                conference <span className="font-semibold">IEEE ICoDSA 2026</span>.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                Beyond AI research, I build clean, functional, and production-ready web applications 
                using modern frameworks like Laravel, Node.js, and React. Having strong software engineering 
                principles allows me to bridge the gap between intelligent machine learning models and end-user platforms.
              </p>

              {/* Info pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["Telkom University", "Informatics · 2022–2026", "GPA: 3.9/4.0"].map(
                  (item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm rounded-lg bg-gray-100 dark:bg-dark-600 text-gray-600 dark:text-gray-300"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="card p-6 text-center hover:-translate-y-1"
                  >
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-950 text-primary-600 dark:text-primary-400 mb-3">
                      <Icon size={20} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {stat.label}
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
