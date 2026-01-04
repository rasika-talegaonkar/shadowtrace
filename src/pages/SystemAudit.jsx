import SideBar from "../components/Sidebar"
import TopBar from "../components/TopBar"

import AuditLogTable from "../components/AuditLogTable"
import UserRolePanel from "../components/UserRolePanel"
import ModelGovernance from "../components/ModelGovernance"
import CompliancePanel from "../components/CompliancePanel"

import "../styles/systemAudit.css"

export default function SystemAudit() {
  return (
    <div className="layout">
      <SideBar />

      <div className="main">
        <TopBar />

        {/* Header */}
        <div className="audit-header">
          <h2 className="heading">System Audit Log</h2>
        </div>

        {/* SEARCH + EXPORT BAR (NEW) */}
        <div className="audit-toolbar">
          <input
            className="audit-search"
            placeholder="Search audit logs..."
          />
          <button className="export-btn">EXPORT</button>
        </div>

        <AuditLogTable />

        <div className="audit-bottom-grid">
          <UserRolePanel />
          <ModelGovernance />
          <CompliancePanel />
        </div>
      </div>
    </div>
  )
}
