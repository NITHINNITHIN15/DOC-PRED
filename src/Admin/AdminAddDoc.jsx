import React, {useEffect , useState} from 'react'
import SecondaryNavbar from '../SecondaryNavbar'
import { collection } from 'firebase/firestore'
import { db,addDoc } from '../User/Firebase'
const AdminAddDoc = () => {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [image, setImage] = useState('');
  const [hospital, setHospital] = useState('');

  const doctorsCollection=collection(db,"doctors");
 

  const tableSubmit = async(e) => {
    e.preventDefault(); 
    if (!name || !specialty || !image || !hospital ) {
      alert("All fields are required!");
      return;
    }
    else{
       // console.log(user.email,patientdat,doctor,specialization,date,mobile,time);
    await addDoc(doctorsCollection, { name,specialty,image,hospital });
    
    }
  }

  return (
    <>
    <SecondaryNavbar/>
    
    <div className="appointment-container">
      
      <h1>Add a New Doctor to List.</h1>
     <br />
      <form >
        <div className="form-group">
          <label htmlFor="patientName">Doctor Name :</label>
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
          <label htmlFor="age">Specialization :</label>
          <input
            type="text"
            id="age"
            name="age"
            value={specialty}
            onChange={e=> setSpecialty(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Image :</label>
          <input
            type="text"
            id="image"
            name="imagedoc"
            value={image}
            placeholder="Enter Image URL"
            onChange={e=> setImage(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Hospital :</label>
          <input
            type="text"
            id="hospital"
            name="hospitalname"
            value={hospital}
            onChange={e=> setHospital(e.target.value)}
            required
          />
        </div>
        <br />
        <button type="submit" className="submit-button" onClick={tableSubmit}>
          Add
        </button>
      </form>
      <br />
      
    </div>
    

    </>
  )
}

export default AdminAddDoc
