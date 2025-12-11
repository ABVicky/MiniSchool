export default function StatBadge({ label, value }) {
  return (
    <div className="glass rounded-2xl px-6 py-4 flex items-center justify-between">
      <span className="text-slate-700">{label}</span>
      <span className="text-primary font-extrabold">{value}</span>
    </div>
  );
}