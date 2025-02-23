import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./AvailableDoc.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

const doctorsByHospital = {
  "City Hospital": [
    { name: "Dr. Richard James", specialty: "General Physician", available: true , image: "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg" },
    { name: "Dr. Emily Larson", specialty: "Gynecologist", available: false ,  image: "https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg"},
  ],
  "Green Valley Medical Center": [
    { name: "Dr. Michael Brown", specialty: "Neurologist", available: true, image: "https://thumbs.dreamstime.com/b/african-male-doctor-happy-tablet-computer-34481166.jpg" },
  ],
  "Sunrise Clinic": [
    { name: "Dr. Christopher Lee", specialty: "Pediatrician", available: true, image: "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9jdG9yfGVufDB8fDB8fHww" },
    { name: "Dr. Linda Green", specialty: "Gynecologist", available: false , image: "https://thumbs.dreamstime.com/b/smiling-female-doctor-holding-medical-records-lab-coat-her-office-clipboard-looking-camera-56673035.jpg"},
  ],
  "Rise Hospital": [
    { name: "Dr. Patel Ram", specialty: "Nutritionist", available: true,image: "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=" },
  ],
};

const AvailableDoc = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hospitalName = new URLSearchParams(location.search).get("hospital");
  const doctors = doctorsByHospital[hospitalName] || [];

  return (
    <>
    <Navbar/>
    <div className="available-doctors-container">
      <h1>Doctors at {hospitalName}</h1>
      <div className="doctors-list">
        {doctors.length > 0 ? (
          doctors.map((doctor, index) => (
            <div key={index} className="doctor-card">
                <img
              src={doctor.image}
              alt={doctor.name}
              className="doctor-image"
            />
              <h3>{doctor.name}</h3>
              <p><strong>Specialty:</strong> {doctor.specialty}</p>
              <p className={`availability ${doctor.available ? "available" : "unavailable"}`}>
                {doctor.available ? "Available" : "Unavailable"}
              </p>
              <button
                className="book-appointment-button"
                disabled={!doctor.available}
                onClick={() => navigate(`/appointmentpage?doctor=${doctor.name}`)}
              >
                Book Appointment
              </button>
            </div>
          ))
        ) : (
          <p>No doctors available at this hospital.</p>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AvailableDoc;
