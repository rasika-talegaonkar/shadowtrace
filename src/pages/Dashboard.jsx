import { useEffect, useState } from "react"

import SideBar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import StatCard from "../components/StatCard"
import RecentFlags from "../components/RecentFlags"
import ActivityChart from "../components/ActivityChart"
import PlatformPie from "../components/PlatformPie"

import { 
  getDashboardStats,
  getActivityTrends,
  getPlatformDistribution
} from "../services/api"

import "../styles/dashboard.css"

export default function Dashboard() {
  const [stats, setStats] = useState({
    high_risk_entities: 0,
    channels_monitored: 0,
  })

  const [activityData, setActivityData] = useState([])
  const [platformData, setPlatformData] = useState([])

  useEffect(() => {
    // Top cards
    getDashboardStats().then(res => setStats(res.data))

    // Charts
    getActivityTrends().then(res => setActivityData(res.data))
    getPlatformDistribution().then(res => setPlatformData(res.data))
  }, [])

  return (
    <div className="layout">
      <SideBar />

      <div className="main">
        <TopBar />

        <section className="mission-control">
          <StatCard
            title="HIGH-RISK ENTITIES"
            value={stats.high_risk_entities}
            delta="Live"
            color="red"
          />

          <StatCard
            title="CHANNELS MONITORED"
            value={stats.channels_monitored}
            delta="Telegram"
            color="blue"
          />

          <StatCard
            title="NEW REPORTS FILED"
            value="—"
            delta="Module pending"
            color="gold"
          />
        </section>

        <section className="content-grid">
          <RecentFlags />
          <ActivityChart data={activityData} />
          <PlatformPie data={platformData} />
        </section>
      </div>
    </div>
  )
}
