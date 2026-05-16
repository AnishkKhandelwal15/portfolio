"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowUpRight, FiCode, FiDatabase, FiLayers } from "react-icons/fi";

interface ProjectCardData {
  title: string;
  description: string;
  impact: string;
  tech: string[];
  date: string;
  role: string;
  badge: string;
  image: string;
}

const PROJECTS: ProjectCardData[] = [
  {
    title: "ERP Platform",
    description:
      "Offline-first construction ERP focused on inventory, workforce, and project tracking. Built with Electron.js, React, Redux Toolkit, and PouchDB so teams can keep working even when connectivity drops.",
    impact: "Designed local-first workflows with sync-ready architecture.",
    tech: ["Electron.js", "React", "Redux Toolkit", "PouchDB", "Node.js"],
    date: "2025",
    role: "Full Stack Developer",
    badge: "offline-first ERP",
    image: "/projects/erp-bala.svg",
  },
  {
    title: "GEXUS",
    description:
      "Gaming platform with a hybrid data layer and high-throughput APIs. The stack blends NestJS, React 19, Go services, PostgreSQL, MongoDB, and Prisma for a fast, scalable experience.",
    impact: "Handled concurrent traffic with clean service boundaries.",
    tech: ["NestJS", "React 19", "Go", "PostgreSQL", "MongoDB"],
    date: "2025",
    role: "Full Stack Developer",
    badge: "scalable platform",
    image: "/projects/gexus.svg",
  },
  {
    title: "Synchora",
    description:
      "A sync-focused product concept shaped around collaboration and reliable state sharing. Built to highlight real-time UX patterns, durable persistence, and a modern full-stack delivery approach.",
    impact: "Centered on dependable data flow and collaboration.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Docker", "REST APIs"],
    date: "2025",
    role: "Full Stack Developer",
    badge: "sync engine",
    image: "/projects/synchora.svg",
  },
  {
    title: "ChatWithPDF",
    description:
      "AI-powered document interaction platform that lets users upload PDFs and chat with them using natural language. Uses RAG with Gemini embeddings, Pinecone retrieval, PostgreSQL, and Drizzle ORM for fast semantic search and conversation history.",
    impact: "Built semantic retrieval with contextual answers.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Pinecone", "Gemini"],
    date: "2025",
    role: "Full Stack Developer",
    badge: "AI document search",
    image: "/projects/chatpdf.svg",
  },
];

const PROJECT_STATS = [
  { label: "Projects", value: "4 focused builds", accent: "#00e5ff", Icon: FiLayers },
  { label: "Core stack", value: "Full stack + AI", accent: "#bf5af2", Icon: FiCode },
  { label: "Retrieval", value: "RAG + Pinecone", accent: "#ff375f", Icon: FiDatabase },
];

function ProjectCard({ project, index }: { project: ProjectCardData; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-[28px] border border-white/[0.06]"
      style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))" }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "radial-gradient(circle at 30% 10%, rgba(0,229,255,0.12), transparent 55%)" }}
      />

      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.06]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060810] via-transparent to-transparent" />
        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#060810]/70 px-3 py-1 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-[#00e5ff]" />
          <span className="text-[10px] font-medium tracking-[0.16em] text-white/65" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            {project.badge}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
          <div>
            <p className="mb-1 text-[10px] uppercase tracking-[0.3em] text-white/35" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              {project.date}
            </p>
            <h3 className="max-w-[11rem] break-words text-lg font-extrabold leading-none text-white sm:max-w-none sm:text-xl" style={{ fontFamily: "'Syne', sans-serif" }}>
              {project.title}
            </h3>
          </div>
          <div className="max-w-[44%] rounded-full border border-white/[0.08] bg-[#060810]/70 px-3 py-1.5 text-right text-[10px] text-white/60 backdrop-blur-md" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            {project.role}
          </div>
        </div>
      </div>

      <div className="flex flex-col p-5 pb-4">
        <p className="mb-3 text-sm leading-relaxed text-white/48">
          {project.description}
        </p>

        <p className="mb-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3 text-xs leading-relaxed text-white/60">
          {project.impact}
        </p>

        <div className="mb-3 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-[10px] text-white/45"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-1 flex items-center justify-between border-t border-white/[0.06] pt-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          <span className="text-[10px] text-white/30">{project.role}</span>
          <FiArrowUpRight size={14} className="text-white/35 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/70" />
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 text-white" style={{ background: "#060810", fontFamily: "'DM Sans', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <h2
            className="text-4xl sm:text-5xl font-extrabold mb-3"
            style={{
              fontFamily: "'Syne', sans-serif",
              background: "linear-gradient(135deg, #00e5ff 0%, #bf5af2 50%, #ff375f 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Project Portfolio
          </h2>
          <p className="text-white/40 text-base">
            Four selected builds shaped around product, ERP, and AI workflows.
          </p>
        </motion.div>

        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          {PROJECT_STATS.map(({ label, value, accent, Icon }) => (
            <div key={label} className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: `${accent}14` }}>
                <Icon size={16} style={{ color: accent }} />
              </div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-white/30" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {label}
              </p>
              <p className="mt-2 text-lg font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid items-start gap-5 md:grid-cols-2 xl:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
