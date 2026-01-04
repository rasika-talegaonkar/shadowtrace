import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import "../styles/intelligenceReport.css"

export default function IntelligenceReports() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <TopBar />

        {/* Report Header */}
        <div className="report-header">
          <div>
            <h2>INTELLIGENCE REPORT</h2>
            <p>Report ID: ST-230423-001</p>
          </div>

          <span className="confidential">CONFIDENTIAL</span>
        </div>

        {/* Meta Strip */}
        <div className="report-meta">
          <span><strong>Subject:</strong> DOPEBOY_247</span>
          <span><strong>Risk Level:</strong> HIGH</span>
          <span><strong>Platform:</strong> Telegram</span>
          <span><strong>Date:</strong> Apr 23, 2024</span>
        </div>

        {/* Executive Summary */}
        <section className="report-section">
          <h3>EXECUTIVE SUMMARY</h3>
          <p>
            DOPEBOY_247 is a Telegram account linked to drug dealing activities
            in Goa. Analysis indicates consistent coded language, high-frequency
            postings, and pricing structures consistent with cocaine distribution
            (₹4500 per gram). Evidence confirms active targeting of local buyers.
          </p>
        </section>

        {/* Entity Overview */}
        <section className="report-section">
          <h3>ENTITY OVERVIEW</h3>

          <div className="overview-grid">
            <div>
              <p><strong>Entity:</strong> DOPEBOY_247</p>
              <p><strong>Status:</strong> CONFIRMED</p>
              <p><strong>Risk Level:</strong> HIGH</p>
            </div>

            <div>
              <p><strong>Platform:</strong> Telegram</p>
              <p><strong>First Flagged:</strong> Apr 23, 2024</p>
              <p><strong>Assigned Analyst:</strong> Analyst_02</p>
            </div>
          </div>
        </section>

        {/* Evidence Excerpts */}
        <section className="report-section">
          <h3>EVIDENCE EXCERPTS</h3>

          <ul className="evidence-list">
            <li>
              <strong>Apr 23, 6:08 AM:</strong> “Fresh snow in town: ₹4500/g.
              Meet discreetly in Panaji today.”
            </li>
            <li>
              <strong>Apr 20, 8:17 PM:</strong> Image of clear baggies captioned
              “Pure. Good stuff, ready for drop.”
            </li>
            <li>
              <strong>Apr 19, 5:34 PM:</strong> “Bombay snow dropping soon.
              Only serious buyers DM.”
            </li>
          </ul>
        </section>

        {/* Network Graph */}
        <section className="report-section">
          <h3>NETWORK RELATIONSHIPS</h3>
          <div className="graph-placeholder">
            [ Network Graph Visualization ]
          </div>
        </section>
      </div>
    </div>
  )
}
