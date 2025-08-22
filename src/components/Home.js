import React from "react";
import "./Home.css";
import profile from "../assets/profile.jpg";

function Home() {
  // Binary rain spans
  const binaryRain = Array.from({ length: 40 }, (_, i) => (
    <span
      key={i}
      style={{
        left: `${Math.random() * 100}%`,
        animationDuration: `${2 + Math.random() * 4}s`,
        animationDelay: `${Math.random() * 5}s`,
      }}
    >
      010101
    </span>
  ));

  return (
    <section
      id="home"
      className="d-flex flex-column justify-content-center align-items-center text-center position-relative overflow-hidden"
      style={{ minHeight: "100vh", backgroundColor: "#0d0d0d", color: "white" }}
    >
      {/* Binary Rain Background */}
      <div className="binary-animation">{binaryRain}</div>

      {/* Top Left Info */}
      <div className="top-left-info text-start">
        <h3 className="role-title">Full Stack Java Developer</h3>
        <a
          href="/resume.pdf" // 👉 Replace with your CV file in public folder
          download
          className="btn btn-cv mt-2"
        >
          Download CV
        </a>
      </div>

      {/* Profile Image */}
      <img
        src={profile}
        alt="Jeevan Shetwe"
        className="rounded-circle profile-photo mb-3"
      />

      {/* Name */}
      <h1 className="fw-bold" style={{ color: "royalblue", fontSize: "3rem" }}>
        Jeevan Shetwe
      </h1>

      {/* Tagline */}
      <p style={{ color: "#00ff99", fontSize: "1.5rem", fontWeight: "500" }}>
        I design and code beautifully, and I love what I do.
      </p>
    </section>
  );
}

export default Home;
