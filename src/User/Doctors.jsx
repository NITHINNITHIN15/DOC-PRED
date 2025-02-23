import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Doctors.css';
import { collection, getDocs } from "firebase/firestore";
import { db } from "./Firebase";
import Navbar from "../Navbar";
import Footer from "../Footer";

// const doctors = [
//   
//   { 
//     name: "Dr. Patel Ram", 
//     specialty: "Gynecologist", 
//     available: false, 
//     image: "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
//     hospital: "Global Women's Health Center"
//   },
// ];

const specialties = [
  "General physician",
  "Gynecologist",
  "Dermatologist",
  "Pediatrician",
  "Neurologist",
  "Gastroenterologist",
  "Nutritionists",
];

export default function DoctorList() {

  const [selectedSpecialty, setSelectedSpecialty] = useState(null);

  const [doctors, setDoctors] = useState([]);

  const navigate = useNavigate();

  const doctorsCollection = collection(db,"doctors");

   useEffect(()=>{
      fetchDoctors();
    },[]);

    const fetchDoctors = async () => {
        const querySnapshot = await getDocs(doctorsCollection);
        const doctorData = querySnapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          // .filter((appt) => appt.patientdat === user.email); // Show only user's appointments
        setDoctors(doctorData);
      };

  const filteredDoctors = selectedSpecialty
    ? doctors.filter((doctor) => doctor.specialty === selectedSpecialty)
    : doctors;

  return (
    <>
    <Navbar />
    <div className="doctor-list-container">
      
      <br />
      <div className="specialties">
        {specialties.map((specialty) => (
          <button
            key={specialty}
            className={`specialty-button ${
              selectedSpecialty === specialty ? "active" : ""
            }`}
            onClick={() =>
              setSelectedSpecialty(
                selectedSpecialty === specialty ? null : specialty
              )
            }
          >
            {specialty}
          </button>
        ))}
      </div>
      <br />
      <div className="doctors">
        {filteredDoctors.map((doctor) => (
          <div key={doctor.name} className="doctor-card">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="doctor-image"
            />
            <h3>{doctor.name}</h3>
            <p>{doctor.specialty}</p>
            <p className="hospital-name">{doctor.hospital}</p>
            <div className="availability">
              <span
                className={`status-dot ${
                  doctor.available ? "available" : "unavailable"
                }`}></span>
              {doctor.available ? "Available" : "Unavailable"}
            </div>
            <button 
              className="book-appointment-button"
              onClick={() => navigate(`/user/appointmentpage?doctor=${doctor.name}`)}
              disabled={!doctor.available}>
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}
