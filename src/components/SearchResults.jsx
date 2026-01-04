export default function SearchResults({ results }) {
  if (results === null) {
    return (
      <div className="search-results empty">
        Search for information in the above fields and hit “Search” button.
      </div>
    )
  }

  if (results.length === 0) {
    return (
      <div className="search-results empty">
        No results found for the given criteria.
      </div>
    )
  }

  return (
    <div className="search-results">
      <h3>Search Results</h3>

      <table>
        <thead>
          <tr>
            <th>Entity ID</th>
            <th>Username</th>
            <th>Platform</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {results.map(r => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.username}</td>
              <td>{r.platform}</td>
              <td>{r.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
