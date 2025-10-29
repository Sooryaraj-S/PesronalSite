import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const name = "Sooryaraj";
  const tagline = "Full Stack Developer, Photographer & Video/Photo Editor";
  const email = "sooryaraj.dev@gmail.com";

  const photos = [
    { id: 1, src: "/images/photo1.jpg", title: "Sunset over the Bay" },
    { id: 2, src: "/images/photo2.jpg", title: "Urban Portrait" },
    { id: 3, src: "/images/photo3.jpg", title: "Mountain Trail" },
  ];

  const videos = [
    { id: 1, src: "/videos/video1.mp4", title: "Event Highlight Reel" },
    { id: 2, src: "/videos/video2.mp4", title: "Short Cinematic Clip" },
  ];

  const projects = [
    { id: "p1", title: "E-commerce SPA", desc: "React + Node.js + MongoDB. Real-time inventory." },
    { id: "p2", title: "Portfolio CMS", desc: "Next.js + Sanity CMS for dynamic updates." },
    { id: "p3", title: "Photo Print Shop", desc: "Stripe integration for photo prints." },
  ];

  const [message, setMessage] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [subject, setSubject] = useState("Portfolio Inquiry");

  function handleContactSubmit(e) {
    e.preventDefault();
    const body = encodeURIComponent(`Name: ${nameInput}\n\nMessage:\n${message}`);
    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailto;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-white text-gray-900">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-lg"
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold">{name}</h1>
          <nav className="space-x-4 text-sm font-medium">
            <a href="#gallery" className="hover:text-black">Photos</a>
            <a href="#videos" className="hover:text-black">Videos</a>
            <a href="#projects" className="hover:text-black">Projects</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </nav>
        </div>
      </motion.header>

      <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-orange-600">
            Hi — I’m {name}.
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            I build web applications, capture stunning photos, and edit cinematic videos. I blend
            technology with artistry to create digital experiences that inspire.
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl shadow-lg transition"
            >
              Hire / Contact
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-orange-500 text-orange-600 rounded-xl hover:bg-orange-50 transition"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <img
            src="/images/hero.jpg"
            alt="Hero"
            className="rounded-2xl shadow-2xl w-full object-cover"
          />
        </motion.div>
      </section>

      <section id="gallery" className="max-w-6xl mx-auto px-6 py-12">
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold mb-6 text-orange-600"
        >
          Photography
        </motion.h3>
        <div className="grid md:grid-cols-3 gap-5">
          {photos.map((p) => (
            <motion.figure
              key={p.id}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-xl shadow-lg cursor-pointer bg-white"
            >
              <img src={p.src} alt={p.title} className="w-full h-64 object-cover" />
              <figcaption className="p-3 text-sm text-gray-700 font-medium">{p.title}</figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <section id="videos" className="max-w-6xl mx-auto px-6 py-12">
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold mb-6 text-orange-600"
        >
          Videography
        </motion.h3>
        <div className="grid md:grid-cols-2 gap-6">
          {videos.map((v) => (
            <motion.div
              key={v.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <video controls className="w-full h-64 object-cover">
                <source src={v.src} type="video/mp4" />
              </video>
              <div className="p-3 text-gray-700 font-medium">{v.title}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-semibold mb-6 text-orange-600">Web Projects</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h4 className="font-semibold text-lg text-gray-800">{p.title}</h4>
              <p className="text-sm text-gray-600 my-2">{p.desc}</p>
              <a href="#" className="text-orange-600 underline text-sm">
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-orange-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-6 text-orange-600">Contact Me</h3>
          <form
            onSubmit={handleContactSubmit}
            className="bg-white shadow-md rounded-xl p-6 md:w-1/2"
          >
            <label className="block text-sm mb-1 font-medium text-gray-700">Your Name</label>
            <input
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 mb-3 focus:ring-2 focus:ring-orange-400 outline-none"
              required
            />
            <label className="block text-sm mb-1 font-medium text-gray-700">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full border rounded-lg px-3 py-2 mb-3 focus:ring-2 focus:ring-orange-400 outline-none"
              required
            />
            <button
              type="submit"
              className="px-5 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
            >
              Send Message
            </button>
          </form>

          <div className="mt-6 text-sm text-gray-700">
            <p>Or email me directly at:</p>
            <a
              href="mailto:sooryaraj.dev@gmail.com"
              className="text-orange-600 font-medium underline"
            >
              sooryaraj.dev@gmail.com
            </a>
          </div>
        </div>
      </section>

      <footer className="text-center py-6 bg-gradient-to-r from-orange-500 to-yellow-400 text-white text-sm">
        © {new Date().getFullYear()} {name} — Built with React, Tailwind & Framer Motion
      </footer>
    </div>
  );
}
