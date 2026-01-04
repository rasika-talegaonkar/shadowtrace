import { useEffect, useState } from "react"
import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import FilterBar from "../components/FilterBar"
import FlaggedTable from "../components/FlaggedTable"
import "../styles/flaggedEntities.css"

export default function FlaggedEntities() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:8000/flagged-entities")
      .then(res => res.json())
      .then(setData)
  }, [])

  const exportCSV = () => {
    window.location.href = "http://127.0.0.1:8000/flagged-entities/export"
  }

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <TopBar />

        <div className="flagged-header">
          <h2>FLAGGED ENTITIES</h2>
          <div className="header-actions">
            <span className="count">Flagged: {data.length}</span>
            <button className="export-btn" onClick={exportCSV}>
              EXPORT ALL
            </button>
          </div>
        </div>

        <FilterBar />
        <FlaggedTable rows={data} />
      </div>
    </div>
  )
}
