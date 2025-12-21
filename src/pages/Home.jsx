import { motion } from "framer-motion";
import AnimatedWrapper from "../components/AnimatedWrapper";
import Button from "../components/Button";
import StatBadge from "../components/StatBadge";
import TestimonialCard from "../components/TestimonialCard";
import SmartSlider from "../components/SmartSlider";
import Timeline from "../components/Timeline";
import { stats, whyMini, testimonials } from "../data/sampleData";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate(); // ✅ useNavigate inside component

  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 premium-gradient opacity-20" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-7xl mx-auto px-6 py-20"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="h1-modern">Register for. MathQuest.</h1>
              <p className="subtext mt-4">
                <b>MathQuest</b> is a fun challenge on <b>28th Dec, 2025</b> that sharpens maths aptitude, logic, and problem-solving skills. 🚀➗
              </p>

              <div className="mt-6 flex gap-3">
                {/* Call button */}
                <Button
                  variant="secondary"
                  onClick={() => window.location.href = "tel:+918240934380"}
                >
                  Call Now
                </Button>


                {/* Navigate to courses page */}
                {/* <Button
                  variant="secondary"
                  onClick={() => navigate("/courses")}
                >
                  Register for MathQuest
                </Button> */}
                <a
                  href="https://forms.gle/YGyth438wXqtWFo99"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary">
                    Register for MathQuest
                  </Button>
                </a>

              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {stats.map((s, i) => (
                  <AnimatedWrapper key={s.label} delay={i * 0.1}>
                    <StatBadge label={s.label} value={s.value} />
                  </AnimatedWrapper>
                ))}
              </div>
            </div>

            {/* Floating icons with clickable background */}
            <Link to="/contact">
              <div className="relative cursor-pointer">
                <img
                  src="/assets/gallery/whiteboard1.png"
                  alt="bg"
                  className="absolute inset-0 w-full border-4 border-black/40 h-full object-cover rounded-[12px] pointer-events-none"
                />
                <motion.div className="float-fast absolute top-6 left-6 glass rounded-2xl p-4">📚</motion.div>
                <motion.div className="float-slow absolute top-24 right-8 glass rounded-2xl p-4">🧪</motion.div>
                <motion.div className="float-fast absolute bottom-10 left-12 glass rounded-2xl p-4">🧠</motion.div>
                <div className="neu h-72 md:h-96" />
              </div>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Why MINI SCHOOL */}
      <section className="max-w-7xl mx-auto px-6">
        <AnimatedWrapper>
          <h2 className="h2-modern">Why MS Coaching Center</h2>
        </AnimatedWrapper>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyMini.map((item, i) => (
            <AnimatedWrapper key={item.title} delay={i * 0.1}>
              <div className="group glass rounded-2xl p-5 hover:shadow-glow transition">
                <div className="text-3xl">{item.icon}</div>
                <h4 className="mt-2 font-bold text-slate-900">{item.title}</h4>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            </AnimatedWrapper>
          ))}
        </div>
      </section>

      {/* Smart Classroom Showcase */}
      <section className="max-w-7xl mx-auto px-6">
        <SmartSlider />
      </section>

      {/* Learning Journey */}
      <section className="max-w-7xl mx-auto px-6">
        <AnimatedWrapper>
          <h2 className="h2-modern">Your Learning Journey</h2>
        </AnimatedWrapper>
        <div className="mt-6">
          <Timeline />
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6">
        <AnimatedWrapper>
          <h2 className="h2-modern">Voices of Success</h2>
        </AnimatedWrapper>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedWrapper key={t.name} delay={i * 0.1}>
              <TestimonialCard {...t} />
            </AnimatedWrapper>
          ))}
        </div>
      </section>
    </div>
  );
}
