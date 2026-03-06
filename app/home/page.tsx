// "use client"

// import { motion } from "framer-motion"
// import { Typewriter } from "react-simple-typewriter"
// import Image from "next/image"
// import Link from "next/link"

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6"
//     >
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

//         {/* Left Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="space-y-6"
//         >
//           <h1 className="text-4xl md:text-6xl font-bold leading-tight">
//             Hi, I'm{" "}
//             <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
//               Safdar Ali
//             </span>
//           </h1>

//           <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
//             I am a{" "}
//             <span className="text-blue-500">
//               <Typewriter
//                 words={[
//                   "Full Stack Developer",
//                   "Next.js Expert",
//                   "Python Developer",
//                   "AI Enthusiast",
//                 ]}
//                 loop
//                 cursor
//                 cursorStyle="|"
//                 typeSpeed={70}
//                 deleteSpeed={50}
//                 delaySpeed={1500}
//               />
//             </span>
//           </h2>

//           <p className="text-gray-400 max-w-lg">
//             I build modern, responsive, and high-performance web applications 
//             using cutting-edge technologies with a strong focus on AI and scalable systems.
//           </p>

//           <div className="flex flex-wrap gap-4">
//             <Link
//               href="#projects"
//               className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition-transform duration-300 font-medium"
//             >
//               View Projects
//             </Link>

//             <Link
//               href="#contact"
//               className="px-6 py-3 rounded-full border border-gray-400 hover:bg-white hover:text-black transition duration-300 font-medium"
//             >
//               Contact Me
//             </Link>
//           </div>
//         </motion.div>

//         {/* Right Side Image */}
//         <motion.div
//           initial={{ opacity: 0, x: 60 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative flex justify-center"
//         >
//           <div className="relative w-72 h-72 md:w-96 md:h-96">
            
//             {/* Gradient Glow Border */}
//             <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 blur-2xl opacity-40"></div>

//             {/* Profile Image */}
//             <Image
//               src="/img/profile.png"
//               alt="Safdar Ali"
//               fill
//               priority
//               className="rounded-full object-cover border-4 border-white/10 shadow-2xl"
//             />
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   )
// }

"use client"

import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-[100svh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-2 items-center gap-12 py-16">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full text-center md:text-left space-y-6 order-1"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Safdar Ali
            </span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300 min-h-[40px]">
            I am a{" "}
            <span className="text-blue-500">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "Next.js Expert",
                  "Python Developer",
                  "AI Enthusiast",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto md:mx-0">
            I build modern, responsive, and high-performance web applications
            with a strong focus on AI and scalable systems.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="#projects"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 font-medium transition-transform duration-300 hover:scale-105"
            >
              View Projects
            </Link>

            <Link
              href="#contact"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-full border border-gray-400 font-medium transition duration-300 hover:bg-white hover:text-black"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center order-2"
        >
          <div className="relative w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-96 lg:h-96">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 blur-2xl opacity-40"></div>

            <Image
              src="/img/profile.png"
              alt="Safdar Ali"
              fill
              priority
              sizes="(max-width: 640px) 180px,
                     (max-width: 768px) 240px,
                     (max-width: 1024px) 300px,
                     400px"
              className="rounded-full object-cover border-4 border-white/10 shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}