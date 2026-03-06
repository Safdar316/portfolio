"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("Sending...")

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })

    if (res.ok) {
      setStatus("Message sent successfully ✅")
      setForm({ name: "", email: "", message: "" })
    } else {
      setStatus("Something went wrong ❌")
    }
  }

  return (
    <section
      id="contact"
      className="py-24 bg-slate-900 text-white px-6"
    >
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Contact{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-gray-400 mt-4">
            Feel free to send me a message. I will reply as soon as possible.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6 bg-slate-800 p-8 rounded-2xl border border-white/10"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-slate-900 border border-white/10 focus:outline-none focus:border-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-slate-900 border border-white/10 focus:outline-none focus:border-blue-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full p-3 rounded-lg bg-slate-900 border border-white/10 focus:outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition duration-300 font-medium"
          >
            Send Message
          </button>

          {status && (
            <p className="text-center text-sm text-gray-300 mt-4">
              {status}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}