import AnimatedWrapper from "../components/AnimatedWrapper";
import { gallery } from "../data/sampleData";

export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <AnimatedWrapper>
        <h2 className="h2-modern">Gallery</h2>
        <p className="subtext mt-2">A glimpse of our classrooms and learning moments.</p>
      </AnimatedWrapper>
      <div className="mt-6 columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {gallery.map((src, i) => (
          <AnimatedWrapper key={src} delay={i * 0.05}>
            <div className="overflow-hidden glass rounded-2xl">
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full hover:scale-[1.03] transition"
              />
            </div>
          </AnimatedWrapper>
        ))}
      </div>
    </div>
  );
}