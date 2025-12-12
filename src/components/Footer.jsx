export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-slate-900">MINI SCHOOL</h4>
            <p className="subtext mt-2">Smart Learning. Smarter Future.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900">Quick Links</h4>
            <ul className="mt-2 text-slate-700 space-y-1">
              <li><a href="/courses">Courses</a></li>
              <li><a href="/facilities">Facilities</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900">Contact</h4>
            <p className="mt-2 text-slate-700">Rania, Aurbindo Nagar - Kolkata, WB</p>
            <p className="text-slate-700">minischool4923@gmail.com</p>
          </div>
        </div>
        <div className="mt-6 text-center text-slate-500 text-sm">© {new Date().getFullYear()} MINI SCHOOL. All rights reserved.</div>
      </div>
    </footer>
  );
}