import "../styles/sidebar.css"
import { NavLink } from "react-router-dom"

export default function Sidebar({ open, setOpen }) {
  return (
    <>
      {/* EDGE RAIL */}
      <div className="edge-rail">
        <div
          className="hamburger"
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>
      </div>

      {/* SIDEBAR */}
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <nav className="sidebar-nav">
          <NavLink to="/" className={({isActive}) => isActive ? "sidebar-item active" : "sidebar-item"}>Dashboard</NavLink>
          <NavLink to="/flagged-entities" className={({isActive}) => isActive ? "sidebar-item active" : "sidebar-item"}>Flagged Entities</NavLink>
          <NavLink to="/entities" className={({isActive}) => isActive ? "sidebar-item active" : "sidebar-item"}>Entities</NavLink>
          <NavLink to="/intelligence-reports" className={({isActive}) => isActive ? "sidebar-item active" : "sidebar-item"}>Intelligence Reports</NavLink>
          <NavLink to="/network-view" className={({isActive}) => isActive ? "sidebar-item active" : "sidebar-item"}>Network View</NavLink>
          <NavLink to="/analytics" className={({isActive}) => isActive ? "sidebar-item active" : "sidebar-item"}>Analytics</NavLink>
          <NavLink to="/system-audit" className={({isActive}) => isActive ? "sidebar-item active" : "sidebar-item"}>System & Audit</NavLink>
          <NavLink
  to="/dark-web-analytics"
  className={({ isActive }) =>
    isActive ? "sidebar-item active" : "sidebar-item"
  }
>
  Dark Web Analytics
</NavLink>
        </nav>

        <div className="sidebar-logout">Logout</div>
      </aside>
    </>
  )
}
