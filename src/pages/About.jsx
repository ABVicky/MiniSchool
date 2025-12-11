import AnimatedWrapper from "../components/AnimatedWrapper";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 space-y-14">
      <section className="mt-6">
        <AnimatedWrapper>
          <h2 className="h2-modern">Our Story</h2>
          <p className="subtext mt-2">
            MINI SCHOOL began with a simple belief: clarity creates confidence. From one classroom to a smart, safe, and engaging learning space, our journey is shaped by outcomes and care.
          </p>
        </AnimatedWrapper>
      </section>
      {/* other sections omitted for brevity */}
    </div>
  );
}