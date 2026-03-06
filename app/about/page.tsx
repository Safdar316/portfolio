"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-slate-950 text-white px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500 to-purple-600 blur-2xl opacity-30"></div>

            <Image
              src="/img/profile.png"
              alt="Safdar Ali"
              fill
              className="rounded-2xl object-cover border border-white/10 shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="text-gray-400 leading-relaxed">
            I'm <span className="text-white font-semibold">Safdar Ali</span>, a passionate 
            Full Stack Developer specializing in modern web technologies like 
            Next.js, TypeScript, and Python. I love building scalable, 
            high-performance applications with clean UI and smooth UX.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I am deeply interested in Artificial Intelligence and constantly 
            learning new technologies to stay ahead in the development world. 
            My goal is to become a world-class software engineer and build 
            impactful digital solutions.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 pt-6">
            <div className="bg-slate-900 p-6 rounded-xl border border-white/10 text-center hover:scale-105 transition duration-300">
              <h3 className="text-3xl font-bold text-blue-500">2+</h3>
              <p className="text-gray-400 mt-2">Years Learning</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl border border-white/10 text-center hover:scale-105 transition duration-300">
              <h3 className="text-3xl font-bold text-purple-500">15+</h3>
              <p className="text-gray-400 mt-2">Projects Built</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl border border-white/10 text-center hover:scale-105 transition duration-300">
              <h3 className="text-3xl font-bold text-blue-500">100%</h3>
              <p className="text-gray-400 mt-2">Passion</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl border border-white/10 text-center hover:scale-105 transition duration-300">
              <h3 className="text-3xl font-bold text-purple-500">∞</h3>
              <p className="text-gray-400 mt-2">Learning Mindset</p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}