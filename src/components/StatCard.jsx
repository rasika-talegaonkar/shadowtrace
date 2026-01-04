export default function StatCard({ title, value, delta, color }) {
  return (
    <div className={`stat-card ${color}`}>
      <h4>{title}</h4>
      <h1>{value}</h1>
      <span>{delta}</span>
    </div>
  )
}
