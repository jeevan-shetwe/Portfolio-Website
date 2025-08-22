import React, { useEffect } from "react";
import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiSpring,
  SiSpringboot,
  SiHibernate,
  SiMysql,
  SiMongodb,
} from "react-icons/si";
import { useInView } from "react-intersection-observer";
import "./About.css";

function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const skills = [
    { name: "Java", icon: <FaJava color="#f89820" />, level: 90 },
    { name: "Spring", icon: <SiSpring color="#6DB33F" />, level: 85 },
    { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" />, level: 80 },
    { name: "Hibernate", icon: <SiHibernate color="#59666C" />, level: 70 },
    { name: "Git", icon: <FaGitAlt color="#F05032" />, level: 85 },
    { name: "GitHub", icon: <FaGithub color="white" />, level: 80 },
    { name: "MySQL", icon: <SiMysql color="#4479A1" />, level: 85 },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" />, level: 75 },
    { name: "ReactJS", icon: <FaReact color="#61dafb" />, level: 90 },
  ];

  useEffect(() => {
    // Binary rain effect
    const canvas = document.getElementById("binaryRain");
    const ctx = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const binary = "01";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#1f1e1aff"; // Yellow binary rain
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = binary[Math.floor(Math.random() * binary.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    // Reduced speed (was 50ms → now 80ms)
    const interval = setInterval(draw, 80);

    const handleResize = () => {
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="about" className="about-section" ref={ref}>
      {/* Binary Rain Canvas */}
      <canvas id="binaryRain"></canvas>

      <div className="container about-container">
        <div className="about-left">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            Hi, I'm <span className="highlight">Jeevan Shetwe</span>. I’m a
            passionate <b>Full Stack Java Developer</b> who loves building
            clean, scalable, and beautiful web applications. I believe in
            continuous learning and improving my skills every day.
          </p>

          {/* Download CV Button */}
          <a href="/resume.pdf" download className="download-btn">
            Download CV
          </a>

          {/* Education */}
          <div className="edu-section">
            <h3 className="section-title">Education</h3>
            <ul>
              <li>Oriental English Medium High School</li>
              <li>PUC Science – GSS College</li>
              <li>
                B.E in Computer Science – Jain College of Engineering, Belgaum
                (Karnataka, India)
              </li>
            </ul>
          </div>

          {/* Internship */}
          <div className="internship-section">
            <h3 className="section-title">Internships</h3>
            <ul>
              <li>KodNest – 6 months (Java Full Stack Developer)</li>
              <li>Comedkares – 2 months ago (Social Internship)</li>
            </ul>
          </div>
        </div>

        {/* Skills Right Side */}
        <div className="about-right">
          <h3 className="skills-title">My Skills</h3>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="progress">
                  <div
                    className={`progress-bar ${inView ? "glow" : ""}`}
                    role="progressbar"
                    style={{
                      width: inView ? `${skill.level}%` : "0%",
                      transition: "width 2s ease-in-out",
                    }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
