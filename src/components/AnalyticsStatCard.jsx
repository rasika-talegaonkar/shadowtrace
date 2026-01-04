export default function AnalyticsStatCard({ title, value, delta, color }) {
  return (
    <div className={`analytics-card ${color}`}>
      <p className="card-title">{title}</p>
      <h2>{value}</h2>
      <span className="delta">{delta}</span>
    </div>
  )
}
