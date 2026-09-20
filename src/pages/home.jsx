import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      <section className="hero">

        <div className="hero-content">

          <p className="hero-label">YOUR EVENT, YOUR PASS</p>

          <h1>
            Book Events.
            <br />
            Create Memories.
          </h1>

          <p className="hero-description">
            Discover exciting events, book your tickets easily,
            and get your digital event pass instantly.
          </p>

          <div className="hero-buttons">
            <Link to="/events" className="explore-btn">
              Explore Events
            </Link>

            <Link to="/tickets" className="ticket-link">
              My Tickets
            </Link>
          </div>

        </div>

        <div className="ticket-preview">

          <div className="preview-top">
            <span>EVENTPASS</span>
            <span>2026</span>
          </div>

          <div className="preview-line"></div>

          <p className="preview-label">UPCOMING EVENT</p>

          <h2>Music Night</h2>

          <div className="preview-info">
            <div>
              <span>Date</span>
              <strong>25 Sep 2026</strong>
            </div>

            <div>
              <span>Location</span>
              <strong>Bareilly, UP</strong>
            </div>
          </div>

          <div className="preview-bottom">
            <strong>₹499</strong>
            <span>Digital Pass</span>
          </div>

        </div>

      </section>

      <section className="home-features">

        <div className="feature-card">
          <div className="feature-number">01</div>
          <h3>Find Events</h3>
          <p>Explore upcoming events and choose the one you like.</p>
        </div>

        <div className="feature-card">
          <div className="feature-number">02</div>
          <h3>Book Tickets</h3>
          <p>Enter your details and select the number of tickets.</p>
        </div>

        <div className="feature-card">
          <div className="feature-number">03</div>
          <h3>Get Your Pass</h3>
          <p>Generate your digital event pass after booking.</p>
        </div>

      </section>

    </div>
  );
}

export default Home;