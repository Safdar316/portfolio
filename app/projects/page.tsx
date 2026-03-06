"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const projects = [
  {
    title: "AI Teacher Assistant",
    description:
      "An AI-powered assistant built using modern web technologies with smart automation features.",
    tech: "Next.js, TypeScript, OpenAI",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A fully responsive animated portfolio with modern UI and smooth transitions.",
    tech: "Next.js, Tailwind, Framer Motion",
    link: "#",
  },
  {
    title: "Support Agent System",
    description:
      "Console-based multi-agent system with intelligent handoffs and tool integration.",
    tech: "Python, OpenAI Agents",
    link: "#",
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-950 text-white px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Some of the projects I have built using modern technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-slate-900 rounded-2xl p-8 border border-white/10 overflow-hidden group"
            >
              {/* Gradient Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative z-10 space-y-4">
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                <p className="text-blue-400 text-sm">
                  {project.tech}
                </p>

                <Link
                  href={project.link}
                  className="inline-block mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm hover:opacity-90 transition"
                >
                  View Project
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}