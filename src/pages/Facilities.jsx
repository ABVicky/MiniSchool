import AnimatedWrapper from "../components/AnimatedWrapper";
import FacilityCard from "../components/FacilityCard";
import { facilities } from "../data/sampleData";

export default function Facilities() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <AnimatedWrapper>
        <h2 className="h2-modern">Facilities</h2>
        <p className="subtext mt-2">Safe, smart, and thoughtfully designed for learning.</p>
      </AnimatedWrapper>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {facilities.map((f, i) => (
          <AnimatedWrapper key={f.title} delay={i * 0.05}>
            <FacilityCard {...f} />
          </AnimatedWrapper>
        ))}
      </div>
    </div>
  );
}