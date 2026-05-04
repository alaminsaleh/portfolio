import { motion } from "framer-motion";
import { FaGraduationCap, FaRobot, FaFlask } from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
    },
  },
};

const Projects = () => {
  const projects = [
    {
      icon: <FaGraduationCap />,
      title: "Academic Projects",
      color: "from-blue-100 to-blue-200",
      iconBg: "bg-blue-600",
      items: [
        "Student Management System",
        "Library Management System",
        "Web-based Mini Projects",
      ],
      desc: "Course-based and university projects focusing on programming fundamentals, data structures, and web development concepts.",
    },
    {
      icon: <FaRobot />,
      title: "AI Projects",
      color: "from-purple-100 to-purple-200",
      iconBg: "bg-purple-600",
      items: [
        "Chatbot Applications",
        "Recommendation Systems",
        "AI-based Prediction Models",
      ],
      desc: "Artificial Intelligence and machine learning projects exploring data-driven decision making and automation.",
    },
    {
      icon: <FaFlask />,
      title: "Research Projects",
      color: "from-green-100 to-green-200",
      iconBg: "bg-green-600",
      items: [
        "Technical Research Papers",
        "Case Study Analysis",
        "Experimental Prototypes",
      ],
      desc: "Research-oriented projects involving analysis, experimentation, and documentation with a focus on problem-solving.",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden text-green-800">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gray-100" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_25%_20%,white,transparent_40%),radial-gradient(circle_at_75%_80%,white,transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Projects
          </h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            A categorized view of my academic, AI, and research-based work
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >

          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={card}

              whileHover={{
                y: -2,
                scale: 1.04,
                rotateX: 3,
                rotateY: -3,
                transition: { type: "spring", stiffness: 180, damping: 12 },
              }}

              className={`relative rounded-3xl p-8 shadow-xl bg-gradient-to-br ${project.color} overflow-hidden`}
            >
              {/* glow overlay */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-300 bg-white/30 pointer-events-none" />

              <div className="relative z-4">

                {/* ICON */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  className={`w-14 h-14 flex items-center justify-center rounded-full ${project.iconBg} text-white mb-6 shadow-lg`}
                >
                  <span className="text-2xl">{project.icon}</span>
                </motion.div>

                {/* TITLE */}
                <h3 className="text-2xl font-semibold mb-3 text-green-900">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  {project.desc}
                </p>

                {/* LIST */}
                <ul className="space-y-2 text-sm text-gray-700">
                  {project.items.map((item, i) => (
                    <motion.li
                      key={i}
                      whileHover={{ x: 5 }}
                      className="transition"
                    >
                      • {item}
                    </motion.li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;


