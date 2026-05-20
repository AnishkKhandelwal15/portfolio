"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FiCode, FiServer, FiZap, FiTool,
  FiBookOpen, FiBox, FiCloud, FiCpu,
} from "react-icons/fi";
import {
  SiNestjs, SiPostgresql, SiMysql,
  SiDocker, SiRedis, SiRabbitmq,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import type { IconType } from "react-icons";
import { RESUME_PATH } from "@/lib/site";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Skill {
  name: string;
  level: number;
  Icon?: IconType;
  iconColor?: string;
}

interface SkillCategoryProps {
  title: string;
  Icon: IconType;
  accent: string;
  skills: Skill[];
}

interface TimelineItem {
  title: string;
  role: string;
  tech: string[];
  Icon: IconType;
}

// ─── Static Data ──────────────────────────────────────────────────────────────

const TIMELINE: TimelineItem[] = [
  {
    title: "Offline-first ERP Platform",
    role: "Full Stack Developer",
    tech: ["Electron.js", "React.js", "Redux Toolkit", "PouchDB", "Node.js"],
    Icon: FiBox,
  },
  {
    title: "GEXUS",
    role: "Full Stack Developer",
    tech: ["NestJS", "React 19", "PostgreSQL", "MongoDB"],
    Icon: FiZap,
  },
  {
    title: "Synchora",
    role: "Full Stack Developer",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Docker", "REST APIs"],
    Icon: FiTool,
  },
  {
    title: "ChatWithPDF",
    role: "Full Stack Developer",
    tech: ["Next.js", "TypeScript", "Pinecone", "Gemini", "Drizzle ORM"],
    Icon: FiCode,
  },
];

const SKILL_CATEGORIES: SkillCategoryProps[] = [
  {
    title: "Frontend",
    Icon: FiCode,
    accent: "#00e5ff",
    skills: [
      { name: "React.js",      level: 92 },
      { name: "Next.js",       level: 90 },
      { name: "Electron.js",   level: 88 },
      { name: "TypeScript",    level: 87 },
      { name: "Redux Toolkit", level: 85 },
      { name: "Framer Motion", level: 80 },
      { name: "Tailwind CSS",  level: 85 },
    ],
  },
  {
    title: "Backend & Databases",
    Icon: FiServer,
    accent: "#bf5af2",
    skills: [
      { name: "Node.js/Express.js", level: 92 },
      { name: "PostgreSQL",      level: 85, Icon: SiPostgresql, iconColor: "#336791" },
      { name: "MongoDB",         level: 88 },
      { name: "PouchDB",         level: 87 },
      { name: "Drizzle ORM",     level: 84 },
      { name: "Pinecone",        level: 82 },
    ],
  },
  {
    title: "Security & AI Tools",
    Icon: FiCloud,
    accent: "#ff375f",
    skills: [
      { name: "AES-256 Encryption", level: 88 },
      { name: "JWT Auth",        level: 90 },
      { name: "Google OAuth",    level: 85 },
      { name: "Google Gemini",   level: 84 },
      { name: "Git / GitHub",    level: 95 },
      { name: "Postman & REST",  level: 92 },
    ],
  },
];

// ─── SkillCategory ────────────────────────────────────────────────────────────

const SkillCategory = ({ title, Icon, accent, skills }: SkillCategoryProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    className="relative group rounded-2xl p-6 border border-white/[0.06] overflow-hidden transition-all duration-300 hover:border-white/[0.12]"
    style={{ background: "rgba(255,255,255,0.025)" }}
  >
    {/* Hover glow */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{ background: `radial-gradient(circle at 20% 20%, ${accent}10, transparent 65%)` }}
    />

    {/* Header */}
    <div className="flex items-center gap-3 mb-6 relative z-10">
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center"
        style={{ background: `${accent}16` }}
      >
        <Icon style={{ color: accent }} size={18} />
      </div>
      <h3
        className="font-bold text-base text-white/80"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        {title}
      </h3>
    </div>

    {/* Skills */}
    <div className="space-y-4 relative z-10">
      {skills.map((skill, i) => (
        <div key={skill.name}>
          <div className="flex justify-between items-center mb-1.5">
            <span className="flex items-center gap-1.5 text-sm text-white/55">
              {skill.Icon && (
                <skill.Icon
                  size={13}
                  style={{ color: skill.iconColor ?? accent }}
                />
              )}
              {skill.name}
            </span>
            <span
              className="text-xs font-mono"
              style={{ color: accent, fontFamily: "'JetBrains Mono', monospace" }}
            >
              {skill.level}%
            </span>
          </div>
          <div
            className="h-[3px] rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="h-full rounded-full"
              style={{ background: `linear-gradient(90deg, ${accent}cc, ${accent}55)` }}
            />
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

// ─── AboutPage ────────────────────────────────────────────────────────────────

const AboutPage: React.FC = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=JetBrains+Mono:wght@400;500&family=DM+Sans:wght@400;500&display=swap');

        .grad-text-about {
          background: linear-gradient(135deg, #00e5ff 0%, #bf5af2 50%, #ff375f 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>

      <div
        id="about"
        className="text-white"
        style={{ background: "#060810", fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20">

          {/* ── PROFILE HEADER ───────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-3 gap-8 mb-20"
          >
            {/* Profile card */}
            <div className="relative group col-span-1">
              <div
                className="absolute -inset-[1px] rounded-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(135deg, #00e5ff22, #bf5af222, #ff375f22)",
                  filter: "blur(6px)",
                }}
              />
              <div
                className="relative rounded-2xl p-7 border border-white/[0.07] h-full"
                style={{ background: "#0d1117" }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.03] shrink-0">
                    <Image
                      src="/anishk.png"
                      alt="Anishk"
                      width={56}
                      height={56}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h1
                      className="grad-text-about text-3xl font-extrabold mb-1"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      Anishk
                    </h1>
                    <p
                      className="text-white/40 text-sm"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      Full Stack Developer 
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  {[
                    { Icon: FiZap,    color: "#00e5ff", text: "Open to full-time and freelance work" },
                    { Icon: FiCode,   color: "#bf5af2", text: "1.1+ years building production software" },
                    { Icon: FiServer, color: "#ff375f", text: "1.1+ years of industry experience" },
                  ].map(({ Icon, color, text }) => (
                    <div key={text} className="flex items-center gap-3">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: `${color}14` }}
                      >
                        <Icon size={13} style={{ color }} />
                      </div>
                      <span className="text-white/55">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Intro + focus */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-white/60 leading-relaxed border-l-2 border-[#00e5ff]/40 pl-5"
              >
                I build robust, scalable systems that power modern applications. My focus is on ERP
                platforms, document intelligence, and backend architectures with Next.js, Node.js,
                PostgreSQL, and AI-driven retrieval workflows.
              </motion.p>

              {/* Current focus */}
              <div
                className="p-5 rounded-xl border border-[#00e5ff]/12"
                style={{ background: "rgba(0,229,255,0.04)" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ background: "#00e5ff" }}
                  />
                  <h3
                    className="text-sm font-medium"
                    style={{
                      color: "#00e5ff",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    // current_focus
                  </h3>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">
                  Focused on shipping full-stack products with clean user experiences, while
                  expanding deeper into RAG pipelines, embeddings, and production-grade AI search.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── TIMELINE ─────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-20"
          >
            <SectionLabel>Notable Contributions</SectionLabel>

            <div className="relative max-w-3xl mx-auto">
              {/* Centre line */}
              <div
                className="absolute left-1/2 -translate-x-1/2 w-[1px] h-full hidden md:block"
                style={{ background: "linear-gradient(to bottom, transparent, #00e5ff22, #bf5af222, transparent)" }}
              />

              {TIMELINE.map(({ title, role, tech, Icon }, i) => {
                const isLeft = i % 2 === 0;
                const accent = ["#00e5ff", "#bf5af2", "#00e5ff", "#ff375f"][i];
                return (
                  <div
                    key={title}
                    className={`mb-10 w-full ${isLeft ? "md:pr-20 md:text-right" : "md:pl-20"}`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ y: -4 }}
                      className="relative group rounded-2xl p-5 border border-white/[0.06] transition-all duration-300 hover:border-white/[0.12]"
                      style={{ background: "rgba(255,255,255,0.025)" }}
                    >
                      {/* Hover glow */}
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{ background: `radial-gradient(circle at 50% 0%, ${accent}0d, transparent 70%)` }}
                      />

                      {/* Centre dot (desktop) */}
                      <div
                        className="absolute top-5 hidden md:flex items-center justify-center w-8 h-8 rounded-full border border-white/10 z-10"
                        style={{
                          [isLeft ? "right" : "left"]: "-52px",
                          background: `${accent}18`,
                        }}
                      >
                        <Icon size={14} style={{ color: accent }} />
                      </div>

                      {/* Mobile icon */}
                      <div className="md:hidden mb-3">
                        <div
                          className="inline-flex w-8 h-8 items-center justify-center rounded-xl"
                          style={{ background: `${accent}16` }}
                        >
                          <Icon size={14} style={{ color: accent }} />
                        </div>
                      </div>

                      <h3
                        className="text-base font-bold text-white/85 mb-1"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        {title}
                      </h3>
                      <p
                        className="text-xs mb-3"
                        style={{
                          color: accent,
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {role}
                      </p>
                      <div className={`flex flex-wrap gap-1.5 ${isLeft ? "md:justify-end" : ""}`}>
                        {tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-0.5 rounded-full text-xs text-white/40 border border-white/[0.06]"
                            style={{ background: "rgba(255,255,255,0.04)" }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* ── SKILLS ───────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <SectionLabel>Technical Arsenal</SectionLabel>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SKILL_CATEGORIES.map((cat) => (
                <SkillCategory key={cat.title} {...cat} />
              ))}
            </div>
          </motion.div>

          {/* ── PHILOSOPHY ───────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div
              className="flex items-center justify-center gap-2 mb-6"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <span className="text-[#00e5ff]/40 text-xs">◆</span>
              <span className="text-[#bf5af2]/40 text-xs">◆</span>
              <span className="text-[#ff375f]/40 text-xs">◆</span>
            </div>
            <h3
              className="text-xl font-bold text-white/80 mb-5"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Development Philosophy
            </h3>
            <p
              className="text-white/40 leading-relaxed text-base border border-white/[0.06] rounded-2xl px-8 py-6"
              style={{
                background: "rgba(255,255,255,0.02)",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "13px",
              }}
            >
              &ldquo;I believe in building systems that are not only functional but also resilient,
              scalable, and a joy to maintain. Code should tell a story — clear, purposeful, and
              built to last.&rdquo;
            </p>
          </motion.div>

        </div>
      </div>
    </>
  );
};

// ─── Section Label ────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <div className="flex-1 h-[1px]" style={{ background: "linear-gradient(to right, transparent, rgba(0,229,255,0.15))" }} />
      <h2
        className="text-2xl font-extrabold text-white/80 shrink-0"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        {children}
      </h2>
      <div className="flex-1 h-[1px]" style={{ background: "linear-gradient(to left, transparent, rgba(0,229,255,0.15))" }} />
    </div>
  );
}

export default AboutPage;