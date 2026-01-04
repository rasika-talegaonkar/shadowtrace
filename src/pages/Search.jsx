import { useState } from "react"
import SideBar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import SearchForm from "../components/SearchForm"
import SearchResults from "../components/SearchResults"
import "../styles/search.css"

export default function Search() {
  const [results, setResults] = useState(null)

  const handleSearch = (formData) => {
    // TEMP mock response (later → FastAPI)
    if (Object.values(formData).every(v => !v)) {
      setResults([])
      return
    }

    setResults([
      {
        id: "ENT-001",
        username: "DOPEBOY_247",
        platform: "Telegram",
        note: "Selling cocaine for pickup in Goa"
      },
      {
        id: "ENT-002",
        username: "darkmarket_vendor",
        platform: "Dark Web",
        note: "Selling pills and powdered drugs"
      }
    ])
  }

  return (
    <div className="layout">
      <SideBar />

      <div className="main">
        <TopBar />

        <div className="search-page">
          <h2>SEARCH</h2>
          <p className="search-desc">
            Use any field below to find existing data. This function retrieves, it does not flag or score.
          </p>

          <SearchForm onSearch={handleSearch} />
          <SearchResults results={results} />
        </div>
      </div>
    </div>
  )
}
