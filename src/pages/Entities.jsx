import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import "../styles/entities.css"

export default function Entities() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <TopBar />

        {/* Header */}
        <div className="entity-header">
          <div>
            <h2>ENTITY PROFILE / DOPEBOY_247</h2>
            <span className="status-pending">Pending Review</span>
          </div>

          <div className="entity-actions">
            <button className="approve">APPROVE</button>
            <button className="dismiss">DISMISS</button>
          </div>
        </div>

        {/* Entity Meta */}
        <section className="entity-meta">
          <div className="meta-card">
            <p><strong>Platform:</strong> Telegram</p>
            <p><strong>Risk Level:</strong> HIGH</p>
            <p><strong>Last Activity:</strong> Apr 23, 2024 · 6:08 AM</p>
            <p><strong>Assigned Analyst:</strong> Analyst_02</p>
          </div>
        </section>

        {/* Main Grid */}
        <section className="entity-grid">
          <div className="panel">
            <h4>WHY FLAGGED</h4>
            <ul>
              <li>Repeated coded drug slang (“snow”, “white”)</li>
              <li>Prices per gram (₹4500/g)</li>
              <li>Delivery & meetup language</li>
              <li>Photos of cocaine packets</li>
            </ul>
          </div>

          <div className="panel">
            <h4>EVIDENCE TIMELINE</h4>
            <ul className="timeline">
              <li>Apr 23 — “Fresh snow in town: 4500/g”</li>
              <li>Apr 20 — Image: powder baggies</li>
              <li>Apr 19 — “Bombay snow dropping soon”</li>
              <li>Apr 16 — “6 buyers confirmed”</li>
            </ul>
          </div>
        </section>

        <section className="entity-grid">
          <div className="panel">
            <h4>BEHAVIOR CHARTS</h4>
            <div className="placeholder">[Posting Rhythm Chart]</div>
          </div>

          <div className="panel">
            <h4>NETWORK CONNECTIONS</h4>
            <div className="placeholder">[Network Graph]</div>
          </div>

          <div className="panel">
            <h4>ANALYST ACTIONS</h4>
            <ul>
              <li>✔ Flagged for drug dealing</li>
              <li>✔ Cross-platform behavior</li>
              <li>✔ Evidence verified</li>
            </ul>
            <button className="case-btn">Mirror to Case File</button>
          </div>
        </section>
      </div>
    </div>
  )
}
