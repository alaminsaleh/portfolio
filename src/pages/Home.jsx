import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Highlights from "./Highlights";
import alamin from "../assets/portfolio image.jpg";

const roles = ["Full Stack Developer", "React Developer", "Junior Developer"];

const Home = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    const current = roles[index];
    let i = 0;

    const typing = setInterval(() => {
      setText(current.slice(0, i));
      i++;
      if (i > current.length) {
        clearInterval(typing);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % roles.length);
        }, 1500);
      }
    }, 80);

    return () => clearInterval(typing);
  }, [index]);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-28 text-green-800">

        {/* Background */}
        <div className="absolute inset-0 bg-gray-100"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,white,transparent_40%),radial-gradient(circle_at_80%_70%,white,transparent_40%)]"></div>

        {/* CONTENT */}
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >
            <h3 className="text-lg opacity-80">I'm</h3>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Abu Saleh Al Amin
            </h1>

            {/* Typing */}
            <p className="text-2xl md:text-3xl font-semibold h-10">
              {text}
              <span className="animate-pulse">|</span>
            </p>

            <p className="text-gray-600 max-w-lg leading-relaxed">
              I build fast, scalable, and user-focused web applications using React, Tailwind, and modern technologies.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-6">

              {/* Primary Button */}
              <motion.a
                href="/portfolioCV.pdf"
                target="_blank"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-green-700 text-white font-semibold rounded-lg shadow-md hover:bg-green-800 transition"
              >
                Download CV
              </motion.a>

              {/* Secondary Button */}
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-green-700 text-green-700 font-semibold rounded-lg hover:bg-green-700 hover:text-white transition"
              >
                View Projects
              </motion.a>

            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-[310px] h-80 md:w-96 md:h-[420px] overflow-hidden rounded-2xl shadow-2xl bg-white/10 backdrop-blur-md">
              <img
                src={alamin}
                alt="profile"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </motion.div>

        </div>
      </section>

      <Highlights />
    </>
  );
};

export default Home;

