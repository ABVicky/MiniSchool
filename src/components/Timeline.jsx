import AnimatedWrapper from "./AnimatedWrapper";

const steps = [
  { title: "Understanding Basics", desc: "Strong foundations built with clarity." },
  { title: "Concept Mastery", desc: "Active practice and guided corrections." },
  { title: "Skill-Based Approach", desc: "Real-world applications and problem-solving." },
  { title: "Exam Excellence", desc: "Strategies, review cycles, and confidence." }
];

export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-primary/20 rounded" />
      <div className="space-y-10">
        {steps.map((s, i) => (
          <AnimatedWrapper key={i} delay={i * 0.1} className="relative">
            <div className={`md:grid md:grid-cols-2 gap-10 ${i % 2 ? "md:text-left" : "md:text-right"}`}>
              <div className={`glass rounded-2xl p-5 ${i % 2 ? "md:col-start-2" : ""}`}>
                <h4 className="font-bold text-slate-900">{s.title}</h4>
                <p className="text-slate-700">{s.desc}</p>
              </div>
            </div>
          </AnimatedWrapper>
        ))}
      </div>
    </div>
  );
}