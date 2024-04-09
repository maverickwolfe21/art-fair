import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send email, display success message)
    console.log("Form submitted:", { name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 style={{ textAlign: "center" }}>Contact Us</h1>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <label htmlFor="name" style={{ color: "black", marginBottom: "0.5rem" }}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            border: "2px solid black",
            borderRadius: "4px",
            backgroundColor: "transparent",
            color: "black",
            padding: "0.5rem",
            marginBottom: "1rem",
          }}
        />

        <label htmlFor="email" style={{ color: "black", marginBottom: "0.5rem" }}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            border: "2px solid black",
            borderRadius: "4px",
            backgroundColor: "transparent",
            color: "black",
            padding: "0.5rem",
            marginBottom: "1rem",
          }}
        />

        <label htmlFor="message" style={{ color: "black", marginBottom: "0.5rem" }}>
          Message:
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={{
            border: "2px solid black",
            borderRadius: "4px",
            backgroundColor: "transparent",
            color: "black",
            padding: "0.5rem",
            marginBottom: "1rem",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "0.5rem",
            border: "2px solid black",
            borderRadius: "4px",
            backgroundColor: "transparent",
            color: "black",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Contact;
