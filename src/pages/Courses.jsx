import AnimatedWrapper from "../components/AnimatedWrapper";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/sampleData";

export default function Courses() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <AnimatedWrapper>
        <h2 className="h2-modern">Courses</h2>
        <p className="subtext mt-2">
          Concept-first learning across core subjects for classes 3–10.
        </p>
      </AnimatedWrapper>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((c, i) => (
          <AnimatedWrapper key={c.title} delay={i * 0.05}>
            <CourseCard {...c} />
          </AnimatedWrapper>
        ))}
      </div>
    </div>
  );
}