import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { certificates } from "../data/certificates";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";

export default function Certificates() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="certificates" className="py-24 bg-gray-50 dark:bg-dark-900">
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
              06. certifications
            </span>
            <h2 className="section-title mt-1">Certifications & Licenses</h2>
            <p className="section-subtitle">
              Professional credentials and specializations completed in AI/ML and software development.
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="card p-6 flex flex-col justify-between hover:-translate-y-1 transition-all group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white dark:bg-dark-700 border border-gray-200 dark:border-dark-600 flex items-center justify-center p-2 flex-shrink-0 shadow-sm overflow-hidden">
                        {cert.logo ? (
                          <img
                            src={cert.logo}
                            alt={`${cert.issuer} logo`}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                              if (e.currentTarget.nextElementSibling) {
                                e.currentTarget.nextElementSibling.style.display = "flex";
                              }
                            }}
                          />
                        ) : null}
                        <span
                          className="text-2xl"
                          style={{ display: cert.logo ? "none" : "flex" }}
                        >
                          {cert.icon || "🏆"}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-snug">
                          {cert.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-dark-600 text-gray-600 dark:text-gray-300 flex-shrink-0">
                      {cert.date}
                    </span>
                  </div>

                  {/* Credential ID */}
                  {cert.credentialId && (
                    <div className="flex items-center gap-1.5 text-xs font-mono text-gray-500 dark:text-gray-500 mb-4">
                      <ShieldCheck size={14} className="text-primary-500" />
                      <span>ID: {cert.credentialId}</span>
                    </div>
                  )}

                  {/* Skills pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="tech-tag text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer action */}
                {cert.credentialUrl && (
                  <div className="pt-4 border-t border-gray-100 dark:border-dark-600 flex justify-end">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                    >
                      <Award size={14} />
                      Verify Credential
                      <ExternalLink size={12} />
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
