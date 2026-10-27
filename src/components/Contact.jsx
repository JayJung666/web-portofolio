import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import {
  Mail,
  GitFork,
  Link2,
  Copy,
  Check,
  MessageSquare,
} from "lucide-react";

const EMAIL = "antoniusvincent09@gmail.com";

const contactLinks = [
  {
    id: "contact-github",
    icon: GitFork,
    label: "GitHub",
    value: "@JayJung666",
    href: "https://github.com/JayJung666",
  },
  {
    id: "contact-linkedin",
    icon: Link2,
    label: "LinkedIn",
    value: "linkedin.com/in/antoniusvincentjung",
    href: "https://linkedin.com/in/antoniusvincentjung",
  },
];

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const el = document.createElement("input");
      el.value = EMAIL;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-dark-900">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Header */}
          <span className="text-sm font-mono font-medium text-primary-600 dark:text-primary-400">
            07. contact
          </span>
          <h2 className="section-title mt-1 mb-4">Let's Connect!</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
            Whether you're a recruiter, fellow researcher, or someone with an exciting idea —
            I'm always open to discussing research collaborations, project opportunities,
            or simply chatting about AI and tech.
          </p>

          {/* Email card */}
          <div className="card p-6 mb-6 text-left">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-950 flex items-center justify-center text-primary-600 dark:text-primary-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-0.5">Email</p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="font-medium text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>
              <button
                id="copy-email"
                onClick={copyEmail}
                aria-label="Copy email address"
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  copied
                    ? "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400"
                    : "bg-gray-100 dark:bg-dark-600 text-gray-600 dark:text-gray-400 hover:bg-primary-50 dark:hover:bg-primary-950 hover:text-primary-600 dark:hover:text-primary-400"
                }`}
              >
                {copied ? (
                  <>
                    <Check size={14} />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Other links */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  id={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-5 flex items-center gap-3 hover:-translate-y-1 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-950 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all">
                    <Icon size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-500 dark:text-gray-500">{link.label}</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{link.value}</p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Open to work badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <MessageSquare size={14} />
            Open for collaborations & job opportunities
          </div>
        </motion.div>
      </div>
    </section>
  );
}
