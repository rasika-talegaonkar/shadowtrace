import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import ForceGraph2D from "react-force-graph-2d"
import "../styles/networkView.css"

/* ===============================
   NETWORK DATA
   =============================== */

const graphData = {
  nodes: [
    { id: "Dealer", role: "dealer" },
    { id: "SA", role: "supplier" },
    { id: "SB", role: "supplier" },
    { id: "rx_king", role: "user" },
    { id: "dark_supply", role: "user" },
    { id: "neo_source", role: "user" },
    { id: "TA", role: "transporter" },
    { id: "TB", role: "transporter" },
    { id: "Storage_A", role: "storage" }
  ],
  links: [
    { source: "Dealer", target: "SA" },
    { source: "Dealer", target: "SB" },
    { source: "Dealer", target: "rx_king" },
    { source: "SA", target: "TA" },
    { source: "SA", target: "Storage_A" },
    { source: "SA", target: "dark_supply" },
    { source: "SB", target: "TB" },
    { source: "SB", target: "neo_source" }
  ]
}

/* ===============================
   RED–BLACK + GOLD THEME
   =============================== */

const roleColors = {
  dealer: "#dc2626",       // threat red
  supplier: "#f59e0b",     // muted gold
  user: "#c084fc",         // violet (kept readable on black)
  transporter: "#22c55e",  // logistics green
  storage: "#334155"       // dark slate (NOT blue)
}

/* ===============================
   COMPONENT
   =============================== */

export default function NetworkView() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <TopBar />

        <h2 className="page-title">NETWORK VIEW</h2>

        <div className="network-container">
          <ForceGraph2D
            graphData={graphData}

            /* interaction */
            enableZoomInteraction
            enablePanInteraction
            minZoom={0.4}
            maxZoom={6}

            /* links – red intelligence lines */
            linkWidth={1.4}
            linkColor={() => "rgba(220,38,38,0.35)"}

            /* node rendering */
            nodeCanvasObject={(node, ctx, globalScale) => {
              const label = node.id
              const radius = 8
              const fontSize = 14 / globalScale

              /* subtle glow (red / gold only) */
              ctx.beginPath()
              ctx.arc(node.x, node.y, radius + 3, 0, 2 * Math.PI)
              ctx.fillStyle =
                node.role === "dealer"
                  ? "rgba(220,38,38,0.30)"
                  : "rgba(245,158,11,0.20)"
              ctx.fill()

              /* main node */
              ctx.beginPath()
              ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI)
              ctx.fillStyle = roleColors[node.role]
              ctx.fill()

              /* outline */
              ctx.lineWidth = 1
              ctx.strokeStyle = "#000000"
              ctx.stroke()

              /* label background – black (no blue) */
              ctx.font = `${fontSize}px Orbitron`
              const textWidth = ctx.measureText(label).width
              const padding = 2
              const offsetY = radius + fontSize + 6

              ctx.fillStyle = "rgba(0, 0, 0, 0.42)"
              ctx.fillRect(
                node.x - textWidth / 2 - padding,
                node.y + offsetY - fontSize,
                textWidth + padding * 2,
                fontSize + padding
              )
              /* label text */
              ctx.fillStyle = "#f8fafc"
              ctx.fillText(
                label,
                node.x - textWidth / 2,
                node.y + offsetY
              )
            }}

            /* physics */
            d3VelocityDecay={0.3}
            cooldownTicks={120}
          />
        </div>
      </div>
    </div>
  )
}
