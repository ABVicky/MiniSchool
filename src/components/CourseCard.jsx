import { motion } from "framer-motion";

export default function CourseCard({ title, classes, icon, popular }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="relative glass rounded-2xl p-5"
    >
      {popular && (
        <div className="absolute -top-3 -right-3 bg-accent text-black text-xs font-bold px-3 py-1 rounded-full shadow-soft">
          Most Popular
        </div>
      )}
      <div className="text-3xl">{icon}</div>
      <h4 className="mt-2 font-bold text-slate-900">{title}</h4>
      <p className="text-slate-600">Class {classes}</p>
    </motion.div>
  );
}