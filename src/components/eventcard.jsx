function EventCard({ event, onBook, onDetails }) {
  return (
    <div className="event-card">

      <div className="event-image">
        <img src={event.image} alt={event.name} />
      </div>

      <h3>{event.name}</h3>

      <p>Date: {event.date}</p>

      <p>Location: {event.location}</p>

      <p className="avilable-seats"> 
        Available Seats: {event.seats}
      </p>

      <div className="card-bottom">

        <strong>₹{event.price}</strong>

        <div className="card-buttons">

          <button
            className="details-btn"
            onClick={() => onDetails(event)}
          >
            Details
          </button>

          <button
            onClick={() => onBook(event)}
          >
            Book Now
          </button>

        </div>

      </div>

    </div>
  );
}

export default EventCard;