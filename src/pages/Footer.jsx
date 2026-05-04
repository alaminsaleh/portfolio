import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-red-300 text-green-900 overflow-hidden border-t border-gray-200">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gray-100"></div>
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,white,transparent_40%),radial-gradient(circle_at_80%_70%,white,transparent_40%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

          {/* BRAND */}
          <div className="flex flex-col items-center md:items-start">
            <motion.h2
              whileHover={{ scale: 1.05 }}
              className="
                text-2xl md:text-3xl font-black tracking-[0.2em]
                bg-gradient-to-r from-green-700 via-emerald-500 to-green-800
                text-transparent bg-clip-text mb-4
              "
            >
              ALAMIN
            </motion.h2>

            <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
              Full Stack Developer & Founder of{" "}
              <span className="font-semibold text-green-700">
                Innovative Horizon
              </span>. I build modern, scalable and high-performance web
              applications with clean UI/UX.
            </p>
          </div>

          {/* LINKS */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-2 text-sm">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href={`/${item.toLowerCase()}`}
                      className="relative hover:text-green-700 transition group"
                    >
                      {item}
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-600 transition-all group-hover:w-full"></span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Connect</h3>

            <div className="flex gap-4 justify-center">
              {[
                {
                  icon: <FaGithub />,
                  link: "https://github.com/alaminsaleh",
                  hover: "hover:bg-gray-900",
                },
                {
                  icon: <FaLinkedinIn />,
                  link: "https://www.linkedin.com/in/abu-saleh-al-amin/",
                  hover: "hover:bg-blue-600",
                },
                {
                  icon: <FaFacebookF />,
                  link: "https://www.facebook.com/profile.php?id=61577218236738",
                  hover: "hover:bg-blue-500",
                },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className={`
                    w-11 h-11 flex items-center justify-center rounded-full
                    bg-white shadow-md transition text-gray-700
                    ${social.hover} hover:text-white
                  `}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-300 mt-12 pt-6 text-center text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-green-700">
              Al Amin
            </span>{" "}
            — Founder of{" "}
            <span className="font-semibold text-green-700">
              Innovative Horizon
            </span>
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;