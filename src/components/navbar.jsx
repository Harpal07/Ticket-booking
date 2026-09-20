import { Link } from "react-router-dom";

function Navbar({ onLogin }) {
  return (
    <nav className="navbar">
      <h2>EventPass</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/tickets">My Tickets</Link>
      </div>

      <button className="login-btn" onClick={onLogin}>
        Login
      </button>
    </nav>
  );
}

export default Navbar;