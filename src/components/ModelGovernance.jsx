export default function ModelGovernance() {
  return (
    <div className="panel">
      <h3>Model Governance</h3>

      <div className="progress-item">
        <span>Data Retention Status</span>
        <progress value="52" max="100" />
        <span>52%</span>
      </div>

      <div className="progress-item">
        <span>Legal Holds</span>
        <progress value="31" max="100" />
        <span>31%</span>
      </div>

      <div className="progress-item">
        <span>Export Logs</span>
        <progress value="17" max="100" />
        <span>17%</span>
      </div>
    </div>
  )
}
