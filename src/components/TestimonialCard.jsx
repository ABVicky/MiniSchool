import { motion } from "framer-motion";

export default function TestimonialCard({ name, role, quote, img }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative glass rounded-3xl p-6 overflow-hidden"
    >
      <div className="absolute inset-0 premium-gradient opacity-10" />
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-white/70 overflow-hidden">
          <img src={img} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="font-bold text-slate-900">{name}</div>
          <div className="text-slate-600 text-sm">{role}</div>
        </div>
      </div>
      <p className="mt-4 text-slate-800 italic">“{quote}”</p>
      <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full premium-gradient blur-2xl opacity-30" />
    </motion.div>
  );
}