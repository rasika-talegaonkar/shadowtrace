import "../styles/header.css"
import logo from "../assets/logo.png"
import govt1 from "../assets/govt1.png"
import govt2 from "../assets/govt2.png";

export default function Header() {
  return (
    <header className="app-header">

      {/* LEFT: LOGO / SYSTEM NAME */}
      <div className="header-left">
        <img src={logo} alt="Logo" className="app-logo" />
        <span className="header-title">ShadowCorps</span>
      </div>

      {/* CENTER: OPTIONAL (future use) */}
      <div className="header-center">
        <span className="header-subtitle">
          SHADOWTRACE : TRACING SHADOWS, FIGHTING DRUGS
        </span>
      </div>

      {/* RIGHT: STATUS / PLACEHOLDER */}
      <div className="header-right">
        <img src={govt1} className="govt-logo" />
        <img src={govt2} className="govt-logo" />
        <span className="header-status">SECURE MODE</span>
      </div>

    </header>
  );
}
