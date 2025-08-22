import React from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

function PortfolioNavbar({ search, setSearch }) {
  
  const handleSearchKey = (e) => {
    setSearch(e.target.value);

    // Check if Enter key is pressed
    if (e.key === "Enter") {
      const query = e.target.value.toLowerCase();

      if (query.includes("home")) {
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
      } else if (query.includes("about")) {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      } else if (query.includes("blogs")) {
        document.getElementById("blogs")?.scrollIntoView({ behavior: "smooth" });
      } else if (query.includes("projects")) {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      } else if (query.includes("contact")) {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      style={{ borderBottom: "2px solid #00ff99" }}
    >
      <Container>
        <Navbar.Brand href="#home" style={{ color: "#00ff99", fontWeight: "bold" }}>
          MyPortfolio
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Links */}
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#blogs">Blogs</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>

          {/* Search Bar */}
          <Form className="d-flex me-3" onSubmit={(e) => e.preventDefault()}>
            <FormControl
              type="search"
              placeholder="Search Section"
              className="me-2 bg-dark text-light border-success"
              value={search}
              onChange={handleSearchKey}
              onKeyDown={handleSearchKey} // Detect Enter key
            />
          </Form>

          {/* Social Icons */}
          <div style={{ display: "flex", gap: "15px" }}>
            <a href="https://www.linkedin.com/in/jeevan26" target="_blank" rel="noreferrer" style={{ transition: "transform 0.2s" }}>
              <FaLinkedin color="#00ff99" size={20} onMouseOver={e => e.currentTarget.style.transform="scale(1.2)"} onMouseOut={e => e.currentTarget.style.transform="scale(1)"} />
            </a>
            <a href="https://github.com/jeevan-shetwe" target="_blank" rel="noreferrer" style={{ transition: "transform 0.2s" }}>
              <FaGithub color="#00ff99" size={20} onMouseOver={e => e.currentTarget.style.transform="scale(1.2)"} onMouseOut={e => e.currentTarget.style.transform="scale(1)"} />
            </a>
            <a href="https://www.facebook.com/jeevan.shetwe" target="_blank" rel="noreferrer" style={{ transition: "transform 0.2s" }}>
              <FaFacebook color="#00ff99" size={20} onMouseOver={e => e.currentTarget.style.transform="scale(1.2)"} onMouseOut={e => e.currentTarget.style.transform="scale(1)"} />
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PortfolioNavbar;
