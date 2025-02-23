import React from "react";
import "./Diseases.css";

const Diseases = () => {
  const diseases = [
    "Fungal infection",
    "Allergy",
    "Diabetes",
    "Asthma",
    "Hypertension",
    "Drugs",
  ];

  return (
    <div className="disease-grid-container">
      <h1 className="title">ALL AVAILABLE DISEASES</h1>
      <div className="grid">
        {diseases.map((disease, index) => (
          <div key={index} className="grid-item">
            {disease}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diseases;
