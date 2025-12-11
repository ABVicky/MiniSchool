import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from '../assets/icons/logo.jpg'; 

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/facilities", label: "Facilities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" }
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 mx-auto max-w-7xl rounded-2xl glass mt-4 px-4 py-3"
    >
      <div className="flex items-center justify-between">
        <Link to="" className="flex items-center gap-2">
          {/* <div className="w-9 h-9 rounded-xl premium-gradient shadow-glow" /> */}
          <img src={Logo} alt="Mini School Logo" className="w-10 h-8 rounded premium-gradient shadow-glow" />
          <span className="font-extrabold text-slate-900">MINI SCHOOL</span>
        </Link>
        <div className="hidden md:flex items-center gap-2">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} className="nav-link">
              {l.label}
            </NavLink>
          ))}
        </div>
        <Link to="/contact" className="btn-primary hidden md:inline-flex">Enroll Now</Link>
      </div>
    </motion.nav>
  );
}