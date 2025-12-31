import { useEffect, useState } from "react";
import AnimatedWrapper from "../components/AnimatedWrapper";

const DRIVE_API =
  "https://script.google.com/macros/s/AKfycbySdijS0RO5zWxqV7j1tydWtmnovXUPSqoALFe-y5iKBTO-AzMCyfDasbUYFvPH0VvoDQ/exec";

export default function Gallery() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetch(DRIVE_API)
      .then(res => res.json())
      .then(setGallery);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <AnimatedWrapper>
        <h2 className="h2-modern">Gallery</h2>
        <p className="subtext mt-2">
          A glimpse of our classrooms and learning moments.
        </p>
      </AnimatedWrapper>

      <div className="mt-6 columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {gallery.map((img, i) => (
          <AnimatedWrapper key={img.url} delay={i * 0.05}>
            <div className="overflow-hidden glass rounded-2xl">
              <img
                src={img.url}
                loading="lazy"
                decoding="async"
                alt=""
                className="w-full block object-cover hover:scale-[1.03] transition"
              />
            </div>
          </AnimatedWrapper>
        ))}
      </div>
    </div>
  );
}
