import React, { useState } from "react";
import PortfolioNavbar from "./Navbar"; 

// Importing all sections
import Home from "./components/Home";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  // state for search bar (filters Blogs + Projects)
  const [search, setSearch] = useState("");

  return (
    <>
      {/* Navbar (stays fixed at top) */}
      <PortfolioNavbar search={search} setSearch={setSearch} />

      {/* Main content, with padding so it doesn’t hide under navbar */}
      <main style={{ paddingTop: "80px" }}>
        <Home />
        <About />
        <Blogs search={search} />
        <Projects search={search} />
        <Contact />
      </main>
    </>
  );
}

export default App;
