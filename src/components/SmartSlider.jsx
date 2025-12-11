import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  { title: "CCTV Coverage", desc: "Animated spotlight tracking movement.", color: "from-primary/30 to-transparent" },
  { title: "Dynamic Whiteboard", desc: "Ink flow simulation under writing.", color: "from-accent/30 to-transparent" },
  { title: "Smart LED Panel", desc: "Interactive lesson mockups.", color: "from-primary/40 to-transparent" },
  { title: "Projector Class", desc: "Ambient glow and focus.", color: "from-accent/40 to-transparent" }
];

export default function SmartSlider() {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative glass rounded-3xl p-6 overflow-hidden">
      <div className="flex justify-between items-center">
        <h3 className="h2-modern">Smart Classroom Showcase</h3>
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${i === index ? "bg-primary" : "bg-slate-300"}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-6 relative h-56 rounded-2xl bg-white/60 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${items[index].color}`} />
            <div className="absolute inset-0">
              {/* CCTV spotlight mock */}
              {index === 0 && (
                <motion.div
                  initial={{ x: 20, y: 20 }}
                  animate={{ x: ["10%", "60%", "30%"], y: ["15%", "40%", "20%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="w-36 h-36 rounded-full bg-primary/30 blur-xl"
                />
              )}
              {/* Whiteboard ink flow */}
              {index === 1 && (
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: ["20%", "60%", "40%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="h-2 bg-slate-700/60 mt-20 rounded"
                />
              )}
              {/* LED panel pulse */}
              {index === 2 && (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0.7 }}
                  animate={{ scale: [0.9, 1.02, 0.98], opacity: [0.7, 1, 0.85] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="m-10 h-32 rounded-xl premium-gradient"
                />
              )}
              {/* Projector ambient glow */}
              {index === 3 && (
                <motion.div
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: [0.6, 0.9, 0.7] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-6 right-6 w-40 h-40 rounded-full bg-accent/50 blur-2xl"
                />
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4">
        <h4 className="font-bold text-slate-900">{items[index].title}</h4>
        <p className="text-slate-600">{items[index].desc}</p>
      </div>
    </div>
  );
}