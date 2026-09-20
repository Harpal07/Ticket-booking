import { useState } from "react";

function BookingForm({ event, onClose, onGenerate }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [seatType, setSeatType] = useState("Regular");
  const seatExtraPrice = {
    Regular: 0,
    Premium: 200,
    VIP: 500,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Please enter your name and email");
      return;
    }
    if  (quantity > event.seats) {
      alert(`Only ${event.seats} seats are available`);
      return;
    }

    const bookingData = {
      bookingId: "IK" + Date.now(),
      name: name,
      email: email,
      quantity: quantity,
      seatType: seatType,
      total:
      (event.price + seatExtraPrice[seatType]) * quantity,
    };

    onGenerate(bookingData);
  };

  return (
    <div className="modal">

      <div className="booking-box">

        <button className="close" onClick={onClose}>
          X
        </button>

        <h2>Book Ticket</h2>

        <h3>{event.name}</h3>

        <p>Date: {event.date}</p>
        <p>Location: {event.location}</p>
        <p>Price: ₹{event.price}</p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="number"
            min="1"
            max={event.seats}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />

          <select
            value={seatType}
            onChange={(e) => setSeatType(e.target.value)}
          >
            <option value="Regular">Regular Seat</option>
            <option value="Premium">Premium Seat</option>
            <option value="VIP">VIP Seat</option>
          </select>

          <p className="total-price">
            Total: ₹
            {(event.price + seatExtraPrice[seatType]) * quantity}
          </p>

          <button type="submit" className="generate-btn">
            Generate Pass
          </button>

        </form>

      </div>

    </div>
  );
}

export default BookingForm;