import React, { useEffect, useState } from "react";
import "./App.css";

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
}

export default function App() {
  useScrollAnimation();

  // State for Resume Form Submission
  const [resumeSubmitted, setResumeSubmitted] = useState(false);

  // State for Contact Form Submission
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Handling Resume Form Submit
  const handleResumeSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
    .then(() => {
      setResumeSubmitted(true);
      form.reset();
    })
    .catch((error) => {
      alert("Oops! Something went wrong. Please try again later.");
    });
  };

  // Handling Contact Form Submit
  const handleContactSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
    .then(() => {
      setContactSubmitted(true);
      form.reset();
    })
    .catch((error) => {
      alert("Oops! Something went wrong. Please try again later.");
    });
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">NeoTalent</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#resume">Submit Resume</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>Connecting Talent to Opportunity</h1>
        <p className="hero-subtext">Your dream job is just a resume away</p>
        <a href="#resume" className="cta-button">Submit Your Resume</a>
      </header>

      {/* About Section */}
      <div className="main-wrapper">
        <section id="about" className="section about fade-in">
          <h2>About NeoTalent</h2>
          <p className="about-intro">
            NeoTalent connects passionate job seekers with top companies globally. We deliver recruitment excellence through <strong>speed</strong>, <strong>transparency</strong>, and <strong>meaningful connections</strong>.
          </p>

          <div className="industry-list">
            <h3>Industries We Serve</h3>
            <ul>
              <li>🚀 Technology and IT Services</li>
              <li>🏦 Finance and Banking</li>
              <li>🏥 Healthcare and Life Sciences</li>
              <li>💼 Consulting and Professional Services</li>
              <li>🌱 Startups and Emerging Businesses</li>
            </ul>
          </div>

          <div className="about-gallery">
            <div className="about-item fade-in">
              <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" alt="Team Collaboration" />
              <p>Collaborating to achieve excellence.</p>
            </div>
            <div className="about-item fade-in">
              <img src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg" alt="Client Meeting" />
              <p>Building lasting client relationships.</p>
            </div>
            <div className="about-item fade-in">
              <img src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg" alt="Success Stories" />
              <p>Celebrating global success stories.</p>
            </div>
          </div>

          <div className="services-grid">
            <h3>Our Services</h3>
            <div className="services-inner-grid">
              <div className="service-item">
                <div className="service-icon">👔</div>
                <h4>Permanent Hiring</h4>
                <p>Finding full-time talents who align with your company's mission, culture, and long-term goals.</p>
              </div>
              <div className="service-item">
                <div className="service-icon">📄</div>
                <h4>Contract Hiring</h4>
                <p>Flexible hiring solutions with skilled professionals available on-demand to meet project needs.</p>
              </div>
              <div className="service-item">
                <div className="service-icon">💻</div>
                <h4>Technology Hiring</h4>
                <p>Specialized recruitment for IT, Software Development, Cloud, and emerging tech roles.</p>
              </div>
              <div className="service-item">
                <div className="service-icon">📚</div>
                <h4>Non-Tech Hiring</h4>
                <p>Efficient hiring across HR, Sales, Finance, Marketing, Admin, and other business domains.</p>
              </div>
            </div>
          </div>

          <div className="mission-box fade-in">
            <h3>Our Mission</h3>
            <p>
              To empower talent and companies by creating opportunities that drive success, foster innovation, and change lives for the better.
            </p>
          </div>
        </section>

        {/* Submit Your Resume Section */}
        <section id="resume" className="section resume fade-in">
          <h2 className="section-title">Submit Your Resume</h2>
          <p className="section-subtitle">Get closer to your dream opportunity today!</p>

          {resumeSubmitted ? (
            <div className="thank-you-message">
              Thank you! Your resume has been submitted successfully.
            </div>
          ) : (
            <form 
              action="https://formspree.io/f/xnndnvpb" 
              method="POST" 
              encType="multipart/form-data"
              onSubmit={handleResumeSubmit}
              className="resume-form centered-form"
            >
              <input type="text" name="name" placeholder="Full Name" required />
              <input type="email" name="email" placeholder="Email Address" required />
              <input type="file" name="resume" required />
              <button type="submit" className="submit-button">Upload Resume</button>
            </form>
          )}
        </section>

        {/* Let's Connect Section */}
        <section id="contact" className="section contact fade-in">
          <h2 className="contact-title">Let's Connect 🤝</h2>
          <p className="contact-subtitle">Have questions? Looking for opportunities? Reach out to us!</p>

          {contactSubmitted ? (
            <div className="thank-you-message">
              Thank you! We have received your message. We'll get back to you soon.
            </div>
          ) : (
            <form 
              action="https://formspree.io/f/mldbdnjv" 
              method="POST"
              onSubmit={handleContactSubmit}
              className="contact-form centered"
            >
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className="send-button">Send Message</button>
            </form>
          )}

          <div className="contact-info centered-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <p>shalinisri.ss.143@gmail.com</p>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <p>+91-8400263683</p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        © 2025 NeoTalent. All rights reserved.
      </footer>
    </div>
  );
}
