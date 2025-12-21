import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from '/assets/icons/logo.jpg';

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/facilities", label: "Facilities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 mx-auto max-w-7xl rounded-2xl glass mt-4 px-4 py-3"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="Mini School Logo" className="w-10 h-8 rounded premium-gradient shadow-glow" />
          <span className="font-extrabold text-slate-900">MS Coaching Center</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} className="nav-link">
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary">Enroll Now</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-3 bg-white premium-gradient rounded-xl shadow-md flex flex-col items-center gap-3 p-4"
        >
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className="nav-link"
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="btn-primary w-full items-center text-center"
            onClick={() => setIsOpen(false)}
          >
            Enroll Now
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
