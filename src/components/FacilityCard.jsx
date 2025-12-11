import { motion } from "framer-motion";

export default function FacilityCard({ title, icon, img }) {
  return (
    <motion.div
      whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
      className="neu p-5"
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <h4 className="font-bold text-slate-900">{title}</h4>
      </div>
      <div className="mt-4 glass rounded-2xl overflow-hidden">
        <img src={img} alt={title} className="w-full h-40 object-cover" />
      </div>
    </motion.div>
  );
}