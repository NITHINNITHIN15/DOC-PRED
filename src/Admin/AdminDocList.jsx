import React, { useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db,addDoc,deleteDoc,doc } from "../User/Firebase";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SecondaryNavbar from '../SecondaryNavbar';
import { Button } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';


const AdminDocList = () => {

  const [doctors, setDoctors] = useState([]);
  const doctorsCollection = collection(db,"doctors");
  const [selectdoctor,setselectDoctor] = useState('');
  const [open, setOpen] = React.useState(false);

  useEffect(()=>{
    fetchDoctors();
  },[]);
  
  const handleOpen = (doctors) => {
    setselectDoctor(doctors)
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

    
  
      const fetchDoctors = async () => {
          const querySnapshot = await getDocs(doctorsCollection);
          const doctorData = querySnapshot.docs
            .map((doc) => ({ id: doc.id, ...doc.data() }))
            // .filter((appt) => appt.patientdat === user.email); // Show only user's appointments
          setDoctors(doctorData);
        };

        const handleDelete = async (id) => {
          try {
            setOpen(false);
            await deleteDoc(doc(db, "doctors", id));
            fetchDoctors(); // Update UI
            console.log("Deleted successfully");
          } catch (error) {
            console.error("Error deleting record:", error);
          }
        };
  return (
    <>
    <SecondaryNavbar/>
      
      <div style={{ padding: "20px", maxWidth: "90%", margin: "auto" }}>
      <TableContainer component={Paper} sx={{ mt: 3, borderRadius: 2, boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
              <TableCell align="center"><b>Doctor Name</b></TableCell>
              <TableCell align="center"><b>Specialization</b></TableCell>
              <TableCell align="center"><b>Hospital Name</b></TableCell>
              <TableCell align="center"><b>Action</b></TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {doctors.map((doctor) => (
              <TableRow key={doctor.id} hover>
                <TableCell align="center">{doctor.name}</TableCell>
                <TableCell align="center">{doctor.specialty}</TableCell>
                <TableCell align="center">{doctor.hospital}</TableCell>
                <TableCell align="center">
                  <Button 
                    color="error" 
                    variant="contained" 
                    size="small" 
                    sx={{ borderRadius: "8px", minWidth: "80px" }} 
                    onClick={() => handleOpen(doctor)}
                  >
                    Delete
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
          Delete Doctor Field
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
            Are you sure you want to delete the Doctor from the List?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button 
            variant="contained" 
            color="success" 
            onClick={() => handleDelete(selectdoctor.id)}
          >
            Yes
          </Button>
          <Button variant="outlined" color="error" onClick={handleClose}>
            No
          </Button>
        </DialogActions>
      </Dialog>

    </div>
    </>
  )
}

export default AdminDocList
