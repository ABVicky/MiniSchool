import AnimatedWrapper from "../components/AnimatedWrapper";
import Button from "../components/Button";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <AnimatedWrapper>
        <h2 className="h2-modern">Contact</h2>
        <p className="subtext mt-2">We’d love to help you enroll or explore courses.</p>
      </AnimatedWrapper>

      <div className="mt-6 grid md:grid-cols-2 gap-8">
        <AnimatedWrapper>
          <form className="glass rounded-2xl p-6 space-y-4">
            <div className="relative">
              <input
                className="w-full p-4 rounded-xl bg-white/70 border border-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                placeholder="Your name"
              />
            </div>
            <div className="relative">
              <input
                className="w-full p-4 rounded-xl bg-white/70 border border-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                placeholder="Email or phone"
              />
            </div>
            <div>
              <textarea
                rows="4"
                className="w-full p-4 rounded-xl bg-white/70 border border-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                placeholder="How can we help?"
              />
            </div>
            <Button>Send Message</Button>
          </form>
        </AnimatedWrapper>

        <AnimatedWrapper delay={0.1}>
          <div className="space-y-4">
            <div className="glass rounded-2xl p-5">
              <h4 className="font-bold text-slate-900">Address</h4>
              <p className="text-slate-700">Rania Mauza, Aurobindo Nagar - Kolkata, WB</p>
            </div>

            {/* Google Map */}
            <div className="rounded-2xl border border-slate-300 shadow-md p-1 bg-white">
              <iframe
                src="https://www.google.com/maps?q=Rania+Mauza&hl=en&z=16&t=k&output=embed"
                width="100%"
                height="300"
                className="rounded-xl"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </AnimatedWrapper>
      </div>
    </div>
  );
}
