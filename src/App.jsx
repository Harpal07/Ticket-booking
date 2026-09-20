import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./pages/home";
import Events from "./pages/events";
import Tickets from "./pages/tickets";

function App() {
  const [myTicket, setMyTicket] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <BrowserRouter>

      <Navbar onLogin={() => setShowLogin(true)} />

        <div className="made-by">
          Made by <strong>MOHD IMRAN KHAN</strong>
        </div>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/events"
          element={<Events setMyTicket={setMyTicket} />}
        />

        <Route
          path="/tickets"
          element={
          <Tickets
             myTicket={myTicket} 
             setMyTicket={setMyTicket}
          />
          }
        />
      </Routes>

      {showLogin && (
        <div className="modal">

          <div className="booking-box">

            <button
              className="close"
              onClick={() => setShowLogin(false)}
            >
              X
            </button>

            <h2>Login</h2>

            <p>Login to manage your event bookings.</p>

            <input
              type="email"
              placeholder="Enter your email"
            />

            <input
              type="password"
              placeholder="Enter your password"
            />

            <button
              className="generate-btn"
              onClick={() => {
                alert("Login feature is for demonstration.");
                setShowLogin(false);
              }}
            >
              Login
            </button>

          </div>

        </div>
      )}

    </BrowserRouter>
  );
}

export default App;