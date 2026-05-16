"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiFileText } from "react-icons/fi";
import type { IconType } from "react-icons";
import { RESUME_PATH } from "@/lib/site";

// ─── Types ────────────────────────────────────────────────────────────────────

interface SocialLink {
  href: string;
  Icon: IconType;
  label: string;
  accent: string;
  external: boolean;
}

// ─── Static data ──────────────────────────────────────────────────────────────

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://github.com/AnishkKhandelwal15",
    Icon: FiGithub,
    label: "GitHub",
    accent: "#00e5ff",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/anishk-khandelwal",
    Icon: FiLinkedin,
    label: "LinkedIn",
    accent: "#bf5af2",
    external: true,
  },
  {
    href: "mailto:anishkkhandelwal04@gmail.com",
    Icon: FiMail,
    label: "Email",
    accent: "#ff375f",
    external: false,
  },
];

// ─── Footer ───────────────────────────────────────────────────────────────────

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#060810",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          {/* Left — wordmark */}
          <span
            className="text-base font-extrabold"
            style={{
              fontFamily: "'Syne', sans-serif",
              background: "linear-gradient(135deg, #00e5ff, #bf5af2)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            AK
            <span
              className="font-normal text-xs ml-1.5"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                background: "none",
                WebkitTextFillColor: "rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.2)",
              }}
            >
              /portfolio
            </span>
          </span>

          {/* Centre — copyright */}
          <p
            className="text-[11px] order-last sm:order-none"
            style={{
              color: "rgba(255,255,255,0.2)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            © {year} Anishk Khandelwal. All rights reserved.
          </p>

          {/* Right — socials */}
          <div className="flex items-center gap-2">
            <motion.a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download resume"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 flex items-center justify-center rounded-xl border transition-all duration-200"
              style={{
                borderColor: "rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.35)",
                background: "rgba(255,255,255,0.03)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#00e5ff30";
                (e.currentTarget as HTMLAnchorElement).style.color = "#00e5ff";
                (e.currentTarget as HTMLAnchorElement).style.background = "#00e5ff0c";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.35)";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.03)";
              }}
            >
              <FiFileText size={15} />
            </motion.a>
            {SOCIAL_LINKS.map(({ href, Icon, label, accent, external }) => (
              <motion.a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 flex items-center justify-center rounded-xl border transition-all duration-200"
                style={{
                  borderColor: "rgba(255,255,255,0.06)",
                  color: "rgba(255,255,255,0.35)",
                  background: "rgba(255,255,255,0.03)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = `${accent}30`;
                  (e.currentTarget as HTMLAnchorElement).style.color = accent;
                  (e.currentTarget as HTMLAnchorElement).style.background = `${accent}0c`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.35)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.03)";
                }}
              >
                <Icon size={15} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;