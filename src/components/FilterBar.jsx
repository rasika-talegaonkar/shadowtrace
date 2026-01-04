export default function FilterBar() {
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label>Status</label>
        <select>
          <option>Pending</option>
          <option>Reviewed</option>
          <option>Approved</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Risk</label>
        <select>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>

      <div className="filter-group search">
        <input placeholder="Search entity..." />
      </div>
    </div>
  )
}
