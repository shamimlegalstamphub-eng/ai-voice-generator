export default function StatCard({ label, value, sub, icon: Icon }) {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <p className="label-eyebrow">{label}</p>
        {Icon && <Icon size={16} className="text-violet" />}
      </div>
      <p className="mt-3 font-mono text-3xl font-semibold">{value}</p>
      {sub && <p className="mt-1 text-xs text-muted-v">{sub}</p>}
    </div>
  )
}
