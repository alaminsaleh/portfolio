import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 50, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 16,
      mass: 0.8,
    },
  },
};

const Skills = () => {
  const skillData = [
    {
      category: "Programming Languages",
      items: ["C++", "Java", "JavaScript", "Python"],
    },
    {
      category: "Web Technologies",
      items: ["HTML", "CSS", "Tailwind CSS"],
    },
    {
      category: "Frameworks & Libraries",
      items: ["React.js", "DaisyUI"],
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "VS Code"],
    },
    {
      category: "Computer Skills",
      items: ["Email Handling", "Internet Browsing", "Google Workspace"],
    },
    {
      category: "Problem Solving",
      items: ["Debugging", "Logical Thinking", "DSA Basics"],
    },
  ];

  return (
    <section className="relative pb-20 pt-40 overflow-hidden text-green-800">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gray-100" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,white,transparent_40%),radial-gradient(circle_at_80%_70%,white,transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Skills
          </h2>
          <p className="text-gray-600 mt-2">
            Technologies and abilities I work with
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillData.map((skill, index) => (
            <motion.div
              key={index}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}

              whileHover={{
                y: -10,
                scale: 1.04,
                rotateX: 6,
                rotateY: -6,
                transition: { type: "spring", stiffness: 180, damping: 12 },
              }}

              className="relative bg-white/30 backdrop-blur-md shadow-xl rounded-2xl p-6 overflow-hidden"
            >
              {/* LIGHT GLOW EFFECT */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-300 bg-gradient-to-tr from-white/40 to-transparent pointer-events-none" />

              {/* CONTENT */}
              <div className="relative z-10">

                <h3 className="text-xl font-bold mb-4">
                  {skill.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.08 }}
                      className="px-3 py-1 bg-white shadow-sm rounded-md text-sm font-medium cursor-default transition"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;