import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { db,addDoc,deleteDoc,doc } from "./Firebase";
import { collection, getDocs } from "firebase/firestore";
import "./Appointment.css";
import Footer from "../Footer";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";
// import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Navbar from "../Navbar";


export default function BookAppointment() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const doctorName = params.get("doctor");
  
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [appointments,setAppointments] = useState([]);
  const [selectappointment,setselectAppointment] = useState('');

  const appointmentsCollection = collection(db,"appointments");
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (appointment) => {
    setselectAppointment(appointment)
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    fetchAppointments();
  },[]);

  // Fetch appointments from Firestore
  const fetchAppointments = async () => {
    const querySnapshot = await getDocs(appointmentsCollection);
    const appointmentData = querySnapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      // .filter((appt) => appt.patientdat === user.email); // Show only user's appointments
    setAppointments(appointmentData);
  };


 // Add appointments from Firestore
 const tableSubmit = async(e) => {
  e.preventDefault(); 
  if (!name || !age || !date || !phone || !time) {
    alert("All fields are required!");
    return;
  }
  else{
     // console.log(user.email,patientdat,doctor,specialization,date,mobile,time);
  await addDoc(appointmentsCollection, { name, age, date, phone, time });
  fetchAppointments();
  }
}

const handleDelete = async (id) => {
  try {
    setOpen(false);
    await deleteDoc(doc(db, "appointments", id));
    fetchAppointments(); // Update UI
    console.log("Deleted successfully");
  } catch (error) {
    console.error("Error deleting record:", error);
  }
};



  return (
    <div>
      <Navbar/>
<div className="appointment-container">
      
      <h1>Book Appointment</h1>
      <p>
        You are booking an appointment with <strong>{doctorName}</strong>.
      </p>
      <form >
        <div className="form-group">
          <label htmlFor="patientName">Patient Name:</label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            value={name}
            onChange={e=> setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={e=> setAge(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={e=> setPhone(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Choose Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={e=> setDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="timeSlot">Choose Time Slot:</label>
          <select
            id="timeSlot"
            name="timeSlot"
            value={time}
            onChange={e=> setTime(e.target.value)}
            required
          >
            <option value="" disabled>
              Select a time slot
            </option>
            <option value="9:00 AM">9:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="4:00 PM">4:00 PM</option>
          </select>
        </div>
        <br />
        <button type="submit" className="submit-button" onClick={tableSubmit}>
          Book Appointment
        </button>
      </form>
      <br />
      
    </div>
    <br />
    <br />

    <div style={{ padding: "20px", maxWidth: "90%", margin: "auto" }}>
      <TableContainer component={Paper} sx={{ mt: 3, borderRadius: 2, boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
              <TableCell align="center"><b>Patient Name</b></TableCell>
              <TableCell align="center"><b>Patient Age</b></TableCell>
              <TableCell align="center"><b>Mobile Number</b></TableCell>
              <TableCell align="center"><b>Date</b></TableCell>
              <TableCell align="center"><b>Appointment Time</b></TableCell>
              <TableCell align="center"><b>Action</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.id} hover>
                <TableCell align="center">{appointment.name}</TableCell>
                <TableCell align="center">{appointment.age}</TableCell>
                <TableCell align="center">{appointment.phone}</TableCell>
                <TableCell align="center">{appointment.date}</TableCell>
                <TableCell align="center">{appointment.time}</TableCell>
                <TableCell align="center">
                  <Button 
                    color="error" 
                    variant="contained" 
                    size="small" 
                    sx={{ borderRadius: "8px", minWidth: "80px" }} 
                    onClick={() => handleClickOpen(appointment)}
                  >
                    Cancel
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Cancel Dialog */}
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle sx={{ m: 0, p: 2 }}>
          Cancel Appointment
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "grey",
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Are you sure you want to cancel this appointment?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button 
            variant="contained" 
            color="success" 
            onClick={() => handleDelete(selectappointment?.id)}
          >
            Yes
          </Button>
          <Button variant="outlined" color="error" onClick={handleClose}>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    <Footer/>
    </div>
    
  );
}


