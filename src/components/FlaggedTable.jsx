import { useState } from "react"

export default function FlaggedTable({ rows }) {
  const [statusMap, setStatusMap] = useState({})

  const updateStatus = (username, status) => {
    setStatusMap(prev => ({ ...prev, [username]: status }))
  }

  return (
    <div className="flagged-table">
      <table>
        <thead>
          <tr>
            <th>USERNAME / ID</th>
            <th>RISK</th>
            <th>STATUS</th>
            <th>WHY FLAGGED</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {rows.map(row => {
            const status = statusMap[row.username] || "Pending"

            return (
              <tr key={row.username}>
                <td>
                  <div className="entity-name">
                    <strong>{row.username}</strong>
                    <span>{row.platform}</span>
                  </div>
                </td>

                <td>
                  <span className={`risk ${row.risk.toLowerCase()}`}>
                    {row.risk}
                  </span>
                </td>

                <td>
                  <select
                    className={`status ${status.toLowerCase()}`}
                    value={status}
                    onChange={e => updateStatus(row.username, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Reviewed">Reviewed</option>
                    <option value="Approved">Approved</option>
                  </select>
                </td>

                <td className="reason">{row.reason}</td>

                <td>
                  <button className="review-btn">REVIEW</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
