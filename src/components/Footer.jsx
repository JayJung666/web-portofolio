import { GitFork, Link2, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-white dark:bg-dark-800 border-t border-gray-100 dark:border-dark-600">
      <div className="section-container py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left: copyright */}
          <div className="text-center sm:text-left">
            <p className="text-sm text-gray-500 dark:text-gray-500">
              © {new Date().getFullYear()} Antonius Vincent Jung
            </p>
          </div>

          {/* Center: social links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/JayJung666"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-600 transition-all"
            >
              <GitFork size={18} />
            </a>
            <a
              href="https://linkedin.com/in/antoniusvincentjung"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-600 transition-all"
            >
              <Link2 size={18} />
            </a>
            <a
              href="mailto:antoniusvincent09@gmail.com"
              aria-label="Email"
              className="p-2 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-600 transition-all"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Right: back to top */}
          <button
            id="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            Back to top
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
