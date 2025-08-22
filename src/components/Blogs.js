import React, { useState } from "react";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";
import "./Blogs.css";

// Import images from local assets
import portfolioImg from "../assets/portfolio.png";
import springImg from "../assets/spring.png";
import reactImg from "../assets/react.png";
import blockchainImg from "../assets/blockchain.png";
import internshipImg from "../assets/internship.png";

function Blogs({ search }) {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShow = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  const handleClose = () => {
    setSelectedBlog(null);
    setShowModal(false);
  };

  const filteredBlogs = blogPosts.filter(
    post =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.summary.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="blogs" style={{ padding: "80px 20px", backgroundColor: "#111", color: "white" }}>
      <h1 style={{ color: "#00ff99", textAlign: "center", marginBottom: "40px" }}>Blogs</h1>

      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredBlogs.map(post => (
          <Col key={post.id}>
            <Card className="bg-dark text-light h-100 border-success blog-card">
              {post.image && (
                <Card.Img
                  variant="top"
                  src={post.image}
                  style={{ height: "200px", width: "100%", objectFit: "cover", display: "block", borderRadius: "12px" }}
                />
              )}
              <Card.Body className="d-flex flex-column">
                <Card.Title style={{ color: "#00ff99" }}>{post.title}</Card.Title>
                <Card.Subtitle className="mb-2 card-subtitle">{post.date}</Card.Subtitle>
                <Card.Text>{post.summary}</Card.Text>
                <Button variant="success" onClick={() => handleShow(post)} className="mt-auto">
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}

        {filteredBlogs.length === 0 && (
          <p style={{ textAlign: "center", width: "100%", marginTop: "20px" }}>
            No blogs found.
          </p>
        )}
      </Row>

      {/* Modal for detailed blog */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedBlog?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Date:</strong> {selectedBlog?.date}</p>
          {selectedBlog?.image && <img src={selectedBlog.image} alt={selectedBlog.title} style={{ width: "100%", marginBottom: "15px", borderRadius: "8px" }} />}
          <p>{selectedBlog?.details}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

// Blogs data with local images
const blogPosts = [
  {
    id: 1,
    title: "Portfolio Development",
    date: "August 21, 2025",
    summary: "Created a personal portfolio website using React and Bootstrap.",
    image: portfolioImg,
    details: `Step 1: Setup React project with Vite.
Step 2: Create components: Home, About, Projects, Blogs, Contact.
Step 3: Add Navbar and routing.
Step 4: Implement responsive design using Bootstrap.
Step 5: Deploy website online and test responsiveness.`
  },
  {
    id: 2,
    title: "Spring & Spring Boot Project",
    date: "June 15, 2025",
    summary: "Developed backend APIs using Spring and Spring Boot framework.",
    image: springImg,
    details: `Step 1: Setup Spring Boot project with Maven.
Step 2: Create REST APIs for CRUD operations.
Step 3: Connect to MySQL database.
Step 4: Test APIs using Postman.
Step 5: Deploy on local server and verify endpoints.`
  },
  {
    id: 3,
    title: "React & Frontend Development",
    date: "May 10, 2025",
    summary: "Built dynamic frontend pages using React, JSX, and CSS.",
    image: reactImg,
    details: `Step 1: Create React components for various pages.
Step 2: Apply CSS and Bootstrap for styling.
Step 3: Use state and props to manage data.
Step 4: Implement reusable components.
Step 5: Test frontend functionalities thoroughly.`
  },
  {
    id: 4,
    title: "Blockchain & E-Certificate Generation",
    date: "April 12, 2025",
    summary: "Implemented blockchain-based system to generate secure e-certificates.",
    image: blockchainImg,
    details: `Step 1: Setup blockchain environment with Ethereum.
Step 2: Design smart contract for certificate issuance.
Step 3: Integrate frontend to request and display certificates.
Step 4: Test with multiple users.
Step 5: Document the workflow and security measures.`
  },
  {
    id: 5,
    title: "Final Year Project - Comedkares Internship",
    date: "August 20, 2024",
    summary: "Completed a 6-month internship developing web applications for Comedkares.",
    image: internshipImg,
    details: `Step 1: Understand project requirements and architecture.
Step 2: Develop web modules using HTML, CSS, JS, and backend APIs.
Step 3: Test and debug functionalities.
Step 4: Prepare documentation and presentation.
Step 5: Submit project and receive internship completion certificate.`
  }
];

export default Blogs;
