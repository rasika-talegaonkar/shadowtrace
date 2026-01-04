export default function CaseStatusBreakdown() {
  return (
    <div className="panel">
      <h3>Case Status Breakdown</h3>

      <ul className="status-list">
        <li><span className="pending" /> Pending — 52%</li>
        <li><span className="reviewed" /> Reviewed — 31%</li>
        <li><span className="approved" /> Approved — 17%</li>
      </ul>
    </div>
  )
}
