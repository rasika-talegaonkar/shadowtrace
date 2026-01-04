import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import DrugBible from "../assets/DrugBible.jpeg"
import Torlink from "../assets/Torlink.jpeg"
import Hashmazon from "../assets/Hashmazon.jpeg"
import Drugstore from "../assets/Drugstore.jpeg"
import ShadowX from "../assets/ShadowX.jpeg"
import Drugstar from "../assets/Drugstar.jpeg"
import "../styles/darkAnalytics.css"

const DARK_WEB_LINKS = [
  {
    title: "Tor Metrics",
    description: "Tor network usage & statistics",
    url: "https://tor.link/site/torlink3/info?q=Video",
    image: Torlink
  },
  {
    title: "Hashmazon",
    description: "Hashmazon",
    url: "http://darkzpclh3dvhdbrmavcejij4ftljmkgdpcugseljxkhl2qptpr5yxid.onion/",
    image: Hashmazon
  },
  {
    title: "Drug Store",
    description: "List of drugs",
    url: "https://haveibeenpwned.com/",
    image: Drugstore
  },
  {
    title: "Drug Bible",
    description: "Drug Bible",
    url: "https://www.drugusersbible.com/",
    image: DrugBible
  },
  {
    title: "ShadowX",
    description: "ShadowX",
    url: "http://shadowxn3o3kvvkbjyaoe33emqxrtadijp7xybizbht2thb6x5dvfhad.onion/",
    image: ShadowX
  },
  {
    title: "Drugstar",
    description: "Drugstar",
    url: "http://4okuccqaylolhkypnybchgiqrbsaaruwx2vxa6ux3nokgben3tc5miqd.onion/",
    image: Drugstar
  }
]

export default function DarkAnalytics() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <TopBar />

        <div className="dark-header">
          <h2>DARK WEB ANALYTICS</h2>
          <p>External intelligence & monitoring gateways</p>
        </div>

        <div className="dark-grid">
          {DARK_WEB_LINKS.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="dark-card"
            >
              <div
                className="dark-card-bg"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="dark-card-overlay">
                <h3>{item.title}</h3>
                <span>{item.description}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
