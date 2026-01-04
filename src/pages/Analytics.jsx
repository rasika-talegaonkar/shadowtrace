import SideBar from "../components/Sidebar"
import TopBar from "../components/TopBar"

import AnalyticsStatCard from "../components/AnalyticsStatCard"
import PlatformAnalysis from "../components/PlatformAnalysis"
import EmergingSlang from "../components/EmergingSlang"
import CaseStatusBreakdown from "../components/CaseStatusBreakdown"
import WorkloadMetrics from "../components/WorkloadMetrics"

import "../styles/analytics.css"

export default function Analytics() {
  return (
    <div className="layout">
      <SideBar />

      <div className="main">
        <TopBar />

        <h2 className="page-title">ANALYTICS</h2>

        <section className="analytics-stats">
          <AnalyticsStatCard
            title="TOTAL ENTITIES FLAGGED"
            value="1,247"
            delta="+228 vs last 23 days"
            color="red"
          />

          <AnalyticsStatCard
            title="CASE FILES OPENED"
            value="92"
            delta="+20 vs last 23 days"
            color="gold"
          />
        </section>

        <section className="analytics-grid">
          <PlatformAnalysis />
          <EmergingSlang />
          <WorkloadMetrics />
          <CaseStatusBreakdown />
        </section>
      </div>
    </div>
  )
}
