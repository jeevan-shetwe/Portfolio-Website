import React, { useRef, useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "./Contact.css"; // Make sure Contact.css is in the same folder

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(10);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_nm9nfno",
        "template_b3uh2zt",
        form.current,
        "G-49DG5lyhmhdh8C7"
      )
      .then(
        () => {
          setStatus("Message sent successfully! ✅");
          e.target.reset();
          setLoading(false);
          setTimeout(() => setStatus(""), 5000);
        },
        (error) => {
          console.log(error.text);
          setStatus("Oops! Something went wrong... ❌");
          setLoading(false);
          setTimeout(() => setStatus(""), 5000);
        }
      );
  };

  // Countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 1 ? prev - 1 : 10)); // reset at 0 -> 10
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="contact"
      style={{
        padding: "100px 20px",
        backgroundColor: "#0d0d0d",
        color: "white",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <h1
        style={{
          color: "#00ff99",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Contact Me
      </h1>

      <Form
        style={{ maxWidth: "500px", margin: "0 auto" }}
        ref={form}
        onSubmit={sendEmail}
      >
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label style={{ color: "#00ff99" }}>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Type your name"
            name="name"
            className="bg-dark text-light border-success"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label style={{ color: "#00ff99" }}>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Type your email"
            name="email"
            className="bg-dark text-light border-success"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label style={{ color: "#00ff99" }}>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Type your message"
            name="message"
            className="bg-dark text-light border-success"
            required
          />
        </Form.Group>

        <Button
          variant="success"
          type="submit"
          disabled={loading}
          className="w-100"
        >
          {loading ? "Sending..." : "Send"}
        </Button>
      </Form>

      {status && (
        <p
          className={`status-message ${
            status.includes("successfully")
              ? "status-success"
              : "status-error"
          }`}
          aria-live="polite"
        >
          {status}
        </p>
      )}

      {/* Hire Me Countdown */}
      <div className="hire-me">
        <h2>🚀 Hire Me in</h2>
        <div className="countdown">{countdown}</div>
      </div>
    </section>
  );
}

export default Contact;
