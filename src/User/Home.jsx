import React from "react";
import "./Home.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import ListItemText from "@mui/material/ListItemText";
// import Select from "@mui/material/Select";
// import Checkbox from "@mui/material/Checkbox";
// import Chip from "@mui/material/Chip";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import { useNavigate } from "react-router-dom";

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

// const doctorMapping = {
//   Fever: [
//     { name: "Dr. Richard James", specialization: "General Physician" },
//     { name: "Dr. Susan White", specialization: "Internal Medicine" },
//   ],
//   Cough: [
//     { name: "Dr. Emily Larson", specialization: "General Physician" },
//     { name: "Dr. Daniel Smith", specialization: "Pulmonologist" },
//   ],
//   Headache: [
//     { name: "Dr. Michael Brown", specialization: "Neurologist" },
//     { name: "Dr. Sarah Adams", specialization: "General Physician" },
//   ],
//   Nausea: [
//     { name: "Dr. Christopher Lee", specialization: "Pediatrician" },
//     { name: "Dr. Angela Kim", specialization: "Gastroenterologist" },
//   ],
//   Fatigue: [
//     { name: "Dr. Linda Green", specialization: "Neurologist" },
//     { name: "Dr. Kevin Johnson", specialization: "General Physician" },
//   ],
//   Dizziness: [
//     { name: "Dr. Patel Ram", specialization: "General Physician" },
//     { name: "Dr. Olivia Brown", specialization: "Cardiologist" },
//   ],
// };

const HomePage = () => {
  // const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  // const [result, setResult] = useState(null);
  // const navigate = useNavigate();

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

  //   const relatedDoctors = [
  //     ...new Set(
  //       selectedSymptoms.flatMap((symptom) => doctorMapping[symptom] || [])
  //     ),
  //   ];

  //   setResult({ symptoms: selectedSymptoms, doctors: relatedDoctors });
  // };

//   return (
//     <div className="home-container">
//       <div className="cardz">
//         <br />
//         <h1>CHECK YOUR DISEASE</h1>
//         <p className="warning">
//           Select symptoms for predicting your disease !!!
//         </p>
//         <form onSubmit={handleSubmit}>
//           <FormControl sx={{ m: 1, width: 300 }}>
//             <InputLabel id="symptoms-label">Symptoms</InputLabel>
//             <Select
//               labelId="symptoms-label"
//               id="symptoms-select"
//               multiple
//               value={selectedSymptoms}
//               onChange={handleChange}
//               input={<OutlinedInput label="Symptoms" />}
//               MenuProps={MenuProps}
//               renderValue={() => null}
//             >
//               {symptomOptions.map((symptom) => (
//                 <MenuItem key={symptom} value={symptom}>
//                   <Checkbox checked={selectedSymptoms.includes(symptom)} />
//                   <ListItemText primary={symptom} />
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//           <br />
//           <br />
//           <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
//             {selectedSymptoms.map((symptom) => (
//               <Chip
//                 key={symptom}
//                 label={symptom}
//                 onDelete={() => handleDelete(symptom)}
//                 color="primary"
//               />
//             ))}
//           </Box>
//           <br />
//           <br />
//           <button type="submit" className="submit-button">
//             CHECK AND SHOW RESULT
//           </button>
//         </form>
//         {result && (
//           <div className="result-section">
//             <h2>Result</h2>
//             <p>
//               <strong>Selected Symptoms:</strong> {result.symptoms.join(", ")}
//             </p>

//             {/* Doctors List */}
//             <h2>Related Doctors</h2>
//             <div className="doctor-list">
//               {result.doctors.map((doctor, index) => (
//                 <Card key={index} sx={{ minWidth: 275, margin: 1 }}>
//                   <CardContent>
//                     <Typography variant="h6" component="div">
//                       {doctor.name}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       {doctor.specialization}
//                     </Typography>
//                     <Button
//                       className="book-appointment-button"
//                       onClick={() =>
//                         navigate(`/user/appointmentpage?doctor=${doctor.name}`)
//                       }
//                     >
//                       Book Appointment
//                     </Button>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };


return (
  <>
  <Navbar />
  <div className="homepage">
    <br /><br />
    <header className="header">
      <h1>Book Your Doctor Appointment Online</h1>
      <p>Get the best healthcare from the comfort of your home.</p>
    </header>
    </div>
    <Footer/>
    </>
);
};

export default HomePage;
