
import React from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      {/* Full-width Navbar */}
      <nav className="navbar">
        <div className="logo">NeoTalent</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#resume">Submit Resume</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Full-width Hero Section */}
      <header className="hero">
        <h1>Connecting Talent to Opportunity</h1>
        <p>Your dream job is just a resume away.</p>
        <a href="#resume" className="cta-button">Submit Your Resume</a>
      </header>

      {/* Centered Main Content */}
      <div className="main-wrapper">
        <section id="about" className="section about">
          <h2>About NeoTalent</h2>
          <p>
            We are a recruitment agency focused on placing top talent into the right roles
            quickly and efficiently. Whether you're a job seeker or an employer, we streamline
            the hiring journey with precision.
          </p>
        </section>

        <section id="resume" className="section resume">
          <h2>Submit Your Resume</h2>
          <form className="resume-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="file" />
            <button type="submit">Upload Resume</button>
          </form>
        </section>

        <section id="contact" className="section contact">
          <h2>Contact Us</h2>
          <p>Email: hello@neotalent.in</p>
          <p>Phone: +91-98765-43210</p>
        </section>
      </div>

      <footer className="footer">© 2025 NeoTalent. All rights reserved.</footer>
    </div>
  );
}