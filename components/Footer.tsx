import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Safdar.dev
              </span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Developer passionate about building modern,
              scalable, and high-performance web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link href="#home" className="hover:text-blue-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-blue-500 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-blue-500 transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-blue-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-5">

              <Link
                href="https://github.com/Safdar316"
                target="_blank"
                className="p-2 bg-slate-900 rounded-full hover:bg-blue-600 transition"
              >
                <Github size={20} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/sardar-safdar-ali-khan-34503b2b7/"
                target="_blank"
                className="p-2 bg-slate-900 rounded-full hover:bg-blue-600 transition"
              >
                <Linkedin size={20} />
              </Link>

              <Link
                href="mailto:your@email.com"
                className="p-2 bg-slate-900 rounded-full hover:bg-blue-600 transition"
              >
                <Mail size={20} />
              </Link>

            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">Safdar Ali</span>.
          All Rights Reserved.
        </div>

      </div>
    </footer>
  )
}