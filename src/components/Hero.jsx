import { motion } from "framer-motion";
import { GitFork, Link2, Mail, ArrowDown, Download, ExternalLink } from "lucide-react";

export default function Hero() {
  const handleScrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gray-50 dark:bg-dark-900"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-hero-pattern pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-400/10 rounded-full blur-3xl pointer-events-none animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl pointer-events-none" />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #14b8a6 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="section-container relative z-10 w-full pt-20 pb-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              Informatics Graduate | AI & Software Engineer
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
            >
              Hi, I'm{" "}
              <span className="text-gradient">Antonius Vincent Jung</span> 👋
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
             Informatics Graduate specializing in <span className="text-primary-600 dark:text-primary-400 font-semibold">AI & Software Engineering</span> — 
             building intelligent systems, computer vision models, and scalable web solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8"
            >
              <button
                id="cta-projects"
                onClick={handleScrollToProjects}
                className="btn-primary"
              >
                View Projects
                <ExternalLink size={16} />
              </button>
              <a
                id="cta-cv"
                href="/cv.pdf"
                download
                className="btn-secondary"
              >
                Download CV
                <Download size={16} />
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <span className="text-sm text-gray-500 dark:text-gray-500">Connect with me:</span>
              <a
                id="social-github"
                href="https://github.com/JayJung666"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-dark-600 transition-all"
              >
                <GitFork size={20} />
              </a>
              <a
                id="social-linkedin"
                href="https://linkedin.com/in/antoniusvincentjung"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-dark-600 transition-all"
              >
                <Link2 size={20} />
              </a>
              <a
                id="social-email"
                href="mailto:antoniusvincent09@gmail.com"
                aria-label="Email"
                className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-dark-600 transition-all"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </div>

          {/* Avatar / visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Outer ring */}
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary-400 to-teal-500 p-1 animate-float">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-50 to-teal-50 dark:from-dark-800 dark:to-dark-700 flex items-center justify-center overflow-hidden">
                  {/* Foto Profil (masukkan file foto dengan nama profile.jpg ke folder public/) */}
                  <img
                    src="/profile.jpg"
                    alt="Antonius Vincent Jung"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      // Fallback jika profile.jpg belum diletakkan di folder public
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback teks jika foto belum ada */}
                  <div className="hidden flex-col items-center gap-3">
                    <div className="text-6xl lg:text-8xl font-black text-gradient select-none">
                      VJ
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                      AI · ML · CV
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 dark:text-gray-600"
        >
          <span className="text-xs">Scroll down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
