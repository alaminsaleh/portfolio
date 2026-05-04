import React from "react";
import { motion } from "framer-motion";

const Highlights = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >

          {/* Card */}
          <div className="text-center p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <h3 className="text-4xl font-extrabold text-green-700">
              10+
            </h3>
            <p className="text-gray-500 mt-2">
              Projects Completed
            </p>
          </div>

          {/* Card */}
          <div className="text-center p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <h3 className="text-4xl font-extrabold text-green-700">
              5+
            </h3>
            <p className="text-gray-500 mt-2">
              Technologies Used
            </p>
          </div>

          {/* Card */}
          <div className="text-center p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <h3 className="text-2xl md:text-3xl font-extrabold text-green-700">
              Full Stack
            </h3>
            <p className="text-gray-500 mt-2">
              Development Focus
            </p>
          </div>

          {/* Card */}
          <div className="text-center p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <h3 className="text-4xl font-extrabold text-green-700">
              100%
            </h3>
            <p className="text-gray-500 mt-2">
              Learning Mindset
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;

