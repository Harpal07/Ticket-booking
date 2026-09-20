function Tickets({ myTicket, setMyTicket }) {

  const handleCancel = () => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this ticket?"
    );

    if (confirmCancel) {
      setMyTicket(null);
    }
  };

  return (
    <section className="tickets-section">

      <div className="page-heading">
        <h1>My Tickets</h1>
        <p>Your booked event tickets will appear here.</p>
      </div>

      {!myTicket ? (
        <div className="ticket-empty">
          <h2>No Tickets Yet</h2>
          <p>You have not booked any event yet.</p>
        </div>
      ) : (
        <div className="my-ticket-card">

          <div className="my-ticket-header">
            <h2>EVENT PASS</h2>
            <span>Confirmed</span>
          </div>

          <div className="my-ticket-body">

            <h3>{myTicket.event.name}</h3>

            <p>
              <strong>Booking ID:</strong>{" "}
              {myTicket.booking.bookingId}
            </p>

            <p>
              <strong>Name:</strong> {myTicket.booking.name}
            </p>

            <p>
              <strong>Email:</strong> {myTicket.booking.email}
            </p>

            <p>
              <strong>Date:</strong> {myTicket.event.date}
            </p>

            <p>
              <strong>Location:</strong> {myTicket.event.location}
            </p>

            <p>
              <strong>Tickets:</strong> {myTicket.booking.quantity}
            </p>

            <p>
              <strong>Seat Type:</strong> {myTicket.booking.seatType}
            </p>

            <p>
              <strong>Total Amount:</strong>{" "}
              ₹{myTicket.booking.total}
            </p>

            <button
              className="cancel-ticket-btn"
              onClick={handleCancel}
            >
              Cancel Ticket
            </button>

          </div>

        </div>
      )}

    </section>
  );
}

export default Tickets;