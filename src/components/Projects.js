import React from "react";

function Projects({ search }) {
  const projects = [
    { name: "Portfolio Website", desc: "My personal responsive portfolio." },
    { name: "React To-Do App", desc: "A simple app to manage tasks." },
    { name: "E-commerce Clone", desc: "Basic e-commerce website demo." },
  ];

  // filter projects by search input
  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(search.toLowerCase()) ||
      project.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      id="projects"
      style={{
        padding: "100px 20px",
        backgroundColor: "#1a1a1a",
        color: "white",
        minHeight: "100vh"
      }}
    >
      <h1 style={{ color: "#00ff99" }}>Projects</h1>
      {filteredProjects.length > 0 ? (
        filteredProjects.map((project, index) => (
          <div key={index} style={{ margin: "20px 0", borderBottom: "1px solid #333" }}>
            <h3 style={{ color: "#00ff99" }}>{project.name}</h3>
            <p style={{ color: "#cccccc" }}>{project.desc}</p>
          </div>
        ))
      ) : (
        <p style={{ color: "#cccccc" }}>No projects match your search.</p>
      )}
    </section>
  );
}

export default Projects;
