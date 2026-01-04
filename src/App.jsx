import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import FlaggedEntities from "./pages/FlaggedEntities";
import Entities from "./pages/Entities";
import IntelligenceReports from "./pages/IntelligenceReports";
import NetworkView from "./pages/NetworkView";
import Search from "./pages/Search";
import Analytics from "./pages/Analytics";
import SystemAudit from "./pages/SystemAudit";
import DarkAnalytics from "./pages/DarkAnalytics";

import "./App.css";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="bg-video"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="video-overlay"></div>
      <div className={`app-layout ${sidebarOpen ? "sidebar-open" : ""}`}>
        {/* TOP FIXED HEADER */}
        <Header />

        {/* LEFT EDGE RAIL + SIDEBAR */}
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

        {/* MAIN CONTENT AREA */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/flagged-entities" element={<FlaggedEntities />} />
            <Route path="/entities" element={<Entities />} />
            <Route path="/intelligence-reports" element={<IntelligenceReports />} />
            <Route path="/network-view" element={<NetworkView />} />
            <Route path="/search" element={<Search />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/system-audit" element={<SystemAudit />} />
            <Route path="/dark-web-analytics" element={<DarkAnalytics />} />

          </Routes>
        </main>
      </div>
    </>
  );
}
