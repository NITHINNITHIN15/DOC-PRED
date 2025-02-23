import React from "react";
import "./Prediction.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import ListItemText from "@mui/material/ListItemText";
// import Select from "@mui/material/Select";
// import Checkbox from "@mui/material/Checkbox";
// import Chip from "@mui/material/Chip";
// import Box from "@mui/material/Box";


// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// const symptomOptions = ["Fever", "Cough", "Headache", "Nausea", "Fatigue", "Dizziness"];

const Prediction = () => {
  const predicitons = [
    "Diabetes Prediciton",
    "Heart Disease Prediciton",
    "Lung Cancer Prediciton",
  ];

  // const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  // const [result, setResult] = useState(null);
  const navigate = useNavigate();

  // const handleChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setSelectedSymptoms(typeof value === "string" ? value.split(",") : value);
  // };

  // const handleDelete = (symptomToDelete) => {
  //   setSelectedSymptoms((prev) => prev.filter((symptom) => symptom !== symptomToDelete));
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (selectedSymptoms.length === 0) {
  //     alert("Please select at least one symptom.");
  //     return;
  //   }
  //   const randomMessage = "These symptoms might indicate {  }. Consult a doctor if it worsens.";
  //   setResult({ symptoms: selectedSymptoms, message: randomMessage });
  // };

  const handleAppointmentClick = () => {
    const confirmCreateAccount = window.confirm(
      "Create an account to take an appointment. Do you want to create an account?"
    );
    if (confirmCreateAccount) {
      alert("Redirecting to the account creation page...");
      navigate("/user/loginpage");
    } else {
      alert("Appointment cancelled");
      navigate("/");
    }
  };

  return (
    <>
    <Navbar />
    <div className="cardz">
      
      <br />
      {/* <h1>CHECK YOUR DISEASE</h1>
      <p className="warning">Select symptoms for predicting your disease !!!</p>
      <form onSubmit={handleSubmit}>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="symptoms-label">Symptoms</InputLabel>
          <Select
            labelId="symptoms-label"
            id="symptoms-select"
            multiple
            value={selectedSymptoms}
            onChange={handleChange}
            input={<OutlinedInput label="Symptoms" />}
            MenuProps={MenuProps}
            renderValue={() => null} // Prevent selected items from displaying in input field
          >
            {symptomOptions.map((symptom) => (
              <MenuItem key={symptom} value={symptom}>
                <Checkbox checked={selectedSymptoms.includes(symptom)} />
                <ListItemText primary={symptom} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br /><br />
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1,}}>
          {selectedSymptoms.map((symptom) => (
            <Chip key={symptom} label={symptom} onDelete={() => handleDelete(symptom)} color="primary" />
          ))}
        </Box>
        <br /><br />
        <button type="submit" className="submit-button">CHECK AND SHOW RESULT</button>
      </form>
      {result && (
        <div className="result-section">
          <h2>Result</h2>
          <p><strong>Selected Symptoms:</strong> {result.symptoms.join(", ")}</p>
          <p><strong>Prediction:</strong> {result.message}</p>
          <button className="appointment-button" onClick={handleAppointmentClick}>
            Take An Appointment
          </button>
        </div>
      )} */}
      
      <div className="diabetes-card">
        <h2>AVAILABLE PREDICTIONS</h2>
      </div>
      
      <div className="disease-grid-container">
      
      <div className="grid" onClick={handleAppointmentClick} >
        {predicitons.map((disease, index) => (
          <div key={index} className="grid-item">
            {disease}
          </div>
        ))}
      </div>
    </div>
      </div>
      </>
  );
}

export default Prediction;
