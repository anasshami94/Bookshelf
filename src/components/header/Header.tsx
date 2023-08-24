import { useState } from "react";
import { ROUTES } from "./constants";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles.scss";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate()
  return (
    <header className="header-container">
      <section className="logo-container">
        <section className="logo">
          <strong>Books</strong>
          Reviews
        </section>
        <button className="burger-btn" onClick={() => setShowMenu(!showMenu)}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </section>
      <nav className={`nav-container ${showMenu ? "" : "hidden"}`}>
        {/* for now just support books */}
        {Object.values(ROUTES).map((route) => (
          <button
            key={route.route}
            onClick={() => navigate(route.route)}
            disabled={location.pathname !== route.route}
            className={`nav-item ${
              location.pathname === route.route ? "active" : ""
            }`}
          >
            {route.label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
