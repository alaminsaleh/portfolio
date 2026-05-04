import { Link, NavLink } from "react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 px-4"
    >
      {/* GLASS CONTAINER */}
      <div className="max-w-7xl mx-auto mt-3 rounded-2xl backdrop-blur-xl bg-white/70 border border-white/40 shadow-lg px-6">

        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <motion.h1
            whileHover={{ scale: 1.1 }}
            className="text-xl md:text-2xl font-black tracking-[0.25em]
              bg-gradient-to-r from-green-700 to-green-900
              text-transparent bg-clip-text font-serif"
          >
            <Link to="/">ALAMIN</Link>
          </motion.h1>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-2 relative">

            {navItems.map((item, i) => (
              <NavLink key={i} to={item.to}>
                {({ isActive }) => (
                  <div className="relative px-3 py-1.5">

                    {/* ACTIVE BACKGROUND */}
                    {isActive && (
                      <motion.span
                        layoutId="active-pill"
                        className="absolute inset-0 rounded-lg bg-green-200"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}

                    <span
                      className={`relative z-10 font-medium transition ${isActive
                        ? "text-green-800"
                        : "text-gray-600 hover:text-green-700"
                        }`}
                    >
                      {item.label}
                    </span>
                  </div>
                )}
              </NavLink>
            ))}

            {/* HIRE ME (DESKTOP) */}
            <motion.a
              href="/portfolioCV.pdf"
              target="_blank"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="ml-3 px-5 py-2 rounded-xl font-semibold text-white
              bg-gradient-to-r from-green-700 to-green-900 shadow-md"
            >
              Hire Me
            </motion.a>
          </div>

          {/* HAMBURGER BUTTON (MOBILE ONLY) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-green-800"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden flex flex-col gap-3 pb-5"
          > 
            {navItems.map((item, i) => (
              <NavLink
                key={i}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded-lg text-gray-700 hover:bg-green-100"
              >
                {item.label}
              </NavLink>
            ))}

            <a
              href="/portfolioCV.pdf"
              target="_blank"
              className="mt-2 px-5 py-2 text-center rounded-xl font-semibold text-white
              bg-gradient-to-r from-green-700 to-green-900 shadow-md"
            >
              Hire Me
            </a>
          </motion.div>
        )}

      </div>
    </motion.nav>
  );
};

export default Navbar;


