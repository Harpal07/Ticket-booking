import { useState } from "react";
import EventCard from "../components/eventcard";
import BookingForm from "../components/bookingform";

function Events({ setMyTicket }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [detailsEvent, setDetailsEvent] = useState(null);
  const [booking, setBooking] = useState(null);
  const [bookedEvent, setBookedEvent] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortPrice, setSortPrice] = useState("default");

  const events = [
    {
      id: 1,
      name: "Music Night",
      date: "25 September 2026",
      location: "Bareilly, UP",
      price: 499,
      seats: 100,
      category: "Music",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Tech Fest",
      date: "05 October 2026",
      location: "Invertis University",
      price: 299,
      seats: 150,
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Comedy Show",
      date: "12 October 2026",
      location: "Lucknow, UP",
      price: 399,
      seats: 80,
      category: "Comedy",
      image:
        "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 4,
        name: "DJ Night",
        date: "20 October 2026",
        location: "Agra, UP",
        price: 599,
        seats: 120,
        category: "Music",
        image:
          "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 5,
        name: "Food Festival",
        date: "28 October 2026",
        location: "Delhi, India",
        price: 249,
        seats: 200,
        category: "Food",
        image:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 6,
        name: "Startup Conference",
        date: "08 November 2026",
        location: "Noida, UP",
        price: 799,
        seats: 100,
        category: "Business",
        image:
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      },
];

  const filteredEvents = events
    .filter((event) => {
      const matchesSearch = event.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || event.category === category;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortPrice === "low") {
        return a.price - b.price;
      }

      if (sortPrice === "high") {
        return b.price - a.price;
      }

      return 0;
    });

  const handleBooking = (data) => {
    setBooking(data);

    setMyTicket({
      event: selectedEvent,
      booking: data,
    });

    setBookedEvent(selectedEvent);
    setSelectedEvent(null);
  };

  return (
    <section className="events-section">

      <div className="page-heading">
        <h1>Upcoming Events</h1>
        <p>Choose an event and book your ticket.</p>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="category-filter">

        <button
          className={category === "All" ? "active-category" : ""}
          onClick={() => setCategory("All")}
        >
          All
        </button>

        <button
          className={category === "Music" ? "active-category" : ""}
          onClick={() => setCategory("Music")}
        >
          Music
        </button>

        <button
          className={category === "Technology" ? "active-category" : ""}
          onClick={() => setCategory("Technology")}
        >
          Technology
        </button>

        <button
          className={category === "Comedy" ? "active-category" : ""}
          onClick={() => setCategory("Comedy")}
        >
          Comedy
        </button>

        <button
          className={category === "Food" ? "active-category" : ""}
          onClick={() => setCategory("Food")}
        >
          Food
        </button>

        <button
          className={category === "Business" ? "active-category" : ""}
          onClick={() => setCategory("Business")}
        >
          Business
        </button>

      </div>

      <div className="sort-box">

        <label htmlFor="sortPrice">
          Sort by Price:
        </label>

        <select
          id="sortPrice"
          value={sortPrice}
          onChange={(e) => setSortPrice(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>

      </div>

      <div className="event-container">

        {filteredEvents.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onBook={setSelectedEvent}
            onDetails={setDetailsEvent}
          />
        ))}

      </div>

      {filteredEvents.length === 0 && (
        <p className="no-events">
          No events found.
        </p>
      )}

      {detailsEvent && (
        <div className="modal">

          <div className="booking-box">

            <button
              className="close"
              onClick={() => setDetailsEvent(null)}
            >
              X
            </button>

            <h2>{detailsEvent.name}</h2>

            <p>
              <strong>Date:</strong> {detailsEvent.date}
            </p>

            <p>
              <strong>Location:</strong> {detailsEvent.location}
            </p>

            <p>
              <strong>Ticket Price:</strong> ₹{detailsEvent.price}
            </p>

            <p>
              This event is available for online ticket booking.
            </p>

            <button
              className="generate-btn"
              onClick={() => {
                setSelectedEvent(detailsEvent);
                setDetailsEvent(null);
              }}
            >
              Book This Event
            </button>

          </div>

        </div>
      )}

      {selectedEvent && (
        <BookingForm
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          onGenerate={handleBooking}
        />
      )}

      {booking && bookedEvent && (
        <div className="modal">

          <div className="pass-card">

            <div className="pass-header">
              <h2>EVENT PASS</h2>
              <p>EventPass Booking System</p>
            </div>

            <div className="pass-body">

              <h3>{bookedEvent.name}</h3>

              <div className="pass-details">

                <p>
                  <strong>Booking ID:</strong>{" "}
                  {booking.bookingId}
                </p>

                <p>
                  <strong>Name:</strong> {booking.name}
                </p>

                <p>
                  <strong>Email:</strong> {booking.email}
                </p>

                <p>
                  <strong>Date:</strong> {bookedEvent.date}
                </p>

                <p>
                  <strong>Location:</strong> {bookedEvent.location}
                </p>

                <p>
                  <strong>Tickets:</strong> {booking.quantity}
                </p>

                <p>
                  <strong>Seat Type:</strong> {booking.seatType}
                </p>

                <p>
                  <strong>Total Amount:</strong> ₹{booking.total}
                </p>

              </div>

              <div className="pass-status">
                Booking Confirmed
              </div>

              <button
                className="print-pass"
                onClick={() => window.print()}
              >
                Print Pass
              </button>

              <button
                className="close-pass"
                onClick={() => {
                  setBooking(null);
                  setBookedEvent(null);
                }}
              >
                Close Pass
              </button>

            </div>

          </div>

        </div>
      )}

    </section>
  );
}

export default Events;