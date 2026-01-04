export default function AuditLogTable() {
  return (
    <div className="panel">
      <table className="audit-table">
        <thead>
          <tr>
            <th>Date & Time</th>
            <th>Username</th>
            <th>Role</th>
            <th>Action</th>
            <th>Result</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Apr 23, 2024 – 6:55 AM</td>
            <td>Analyst_02</td>
            <td>Analyst</td>
            <td>Viewed evidence</td>
            <td><span className="tag viewed">Viewed</span></td>
          </tr>

          <tr>
            <td>Apr 23, 2024 – 7:12 PM</td>
            <td>Inspector R. Singh</td>
            <td>Supervisor</td>
            <td>Approved report</td>
            <td><span className="tag approved">Approved</span></td>
          </tr>

          <tr>
            <td>Apr 22, 2024 – 2:00 PM</td>
            <td>Auditor_JS</td>
            <td>Auditor</td>
            <td>Exported data</td>
            <td><span className="tag exported">Exported</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
