import React from "react";
import "./About.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function About() {
  return (
    <>
    <Navbar />
    <main className="about-page">
      
      {/* About Section */}
      <section className="about-header">
        <h1>
          ABOUT <span>US</span>
        </h1>
        <div className="about-content">
          <img
            src="https://st3.depositphotos.com/1037987/32639/i/450/depositphotos_326395534-stock-photo-female-medical-team-having-informal.jpg"
            alt="Doctors"
            className="about-image"
          />
          <div className="about-text">
            <p>
              Welcome to MediPredict, your trusted partner in managing your healthcare
              needs conveniently and efficiently. At MediPredict, we understand the
              challenges individuals face when it comes to scheduling doctor appointments
              and managing their health records.
            </p>
            <p>
              MediPredict is committed to excellence in healthcare technology. We
              continuously strive to enhance our platform, integrating the latest
              advancements to improve user experience and deliver superior service.
              Whether you're booking your first appointment or managing ongoing care,
              MediPredict is here to support you every step of the way.
            </p>
            <h2 sty>Our Vision</h2>
            <p>
              Our vision at MediPredict is to create a seamless healthcare experience for
              every user. We aim to bridge the gap between patients and healthcare
              providers, making it easier for you to access the care you need, when you
              need it.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>
          WHY <span>CHOOSE US</span>
        </h2>
        <div className="features">
          <div className="feature">
            <h3>EFFICIENCY:</h3>
            <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>
          <div className="feature">
            <h3>CONVENIENCE:</h3>
            <p>
              Access to a network of trusted healthcare professionals in your area.
            </p>
          </div>
          <div className="feature">
            <h3>PERSONALIZATION:</h3>
            <p>
              Tailored recommendations and reminders to help you stay on top of your
              health.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
    </main>
    <Footer/>
    </>

  );
}
