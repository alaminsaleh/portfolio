import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="pb-20 pt-40 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-green-700 mb-3">
            About Me
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A quick overview of who I am and what I do
          </p>
        </motion.div>

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl shadow-lg p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center"
        >

          {/* LEFT */}
          <div>
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              Full Stack Developer
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              I am a passionate developer focused on building modern,
              responsive, and user-friendly web applications using React,
              JavaScript, and Tailwind CSS. I enjoy turning ideas into
              real-world products while continuously learning new technologies.
            </p>

            <p className="text-gray-600 leading-relaxed">
              My goal is to grow as a developer by working on meaningful
              projects and contributing to impactful digital experiences.
            </p>
          </div>

          {/* RIGHT INFO */}
          <div className="grid grid-cols-2 gap-6">

            <div className="p-5 rounded-2xl bg-gray-50 shadow-sm hover:shadow-md transition">
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-semibold text-black">Mr. Al Amin</p>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 shadow-sm hover:shadow-md transition">
              <p className="text-sm text-gray-500">Role</p>
              <p className="font-semibold text-black">Full Stack Developer</p>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 shadow-sm hover:shadow-md transition">
              <p className="text-sm text-gray-500">Location</p>
              <p className="font-semibold text-black">Sylhet, Bangladesh</p>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 shadow-sm hover:shadow-md transition">
              <p className="text-sm text-gray-500">Experience</p>
              <p className="font-semibold text-black">Fresher / Junior</p>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;


