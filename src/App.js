import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './User/Home';
import About from './User/About';
import Contact from './User/Contact';
import Doctors from './User/Doctors';
import Prediction from './User/Prediction';
import Login from './User/Login';
import Signup from './User/Signup';
// import Hospital from './User/Hospital';
import Appointment from './User/Appointment';
import AvailableDoc from './User/AvailableDoc';
import {ToastContainer} from 'react-toastify';
import Profile from './User/Profile';
import AdminDashboard from './Admin/AdminDashboard';
import AdminAppointment from './Admin/AdminAppointment';
import AdminAddDoc from './Admin/AdminAddDoc';
import AdminDocList from './Admin/AdminDocList';
import ADLogin from './Admin/ADLogin';


function AppContent() {

  return (
    <div className="App"> 
      <Routes>
        <Route path="/" element={<Prediction />} />
        <Route path="/user/home" element={<Home />} />
        <Route path="/user/about" element={<About />} />
        <Route path="/user/doctors" element={<Doctors />} />
        <Route path="/user/contact" element={<Contact />} />
        {/* <Route path="/user/allDiseases" element={<Diseases />} /> */}
        <Route path="/user/loginpage" element={<Login />} />
        <Route path="/user/signuppage" element={<Signup />} />
        {/* <Route path="/user/hospitals" element={<Hospital />} /> */}
        <Route path="/user/appointmentpage" element={<Appointment />} />
        <Route path="/user/availabledoctors" element={<AvailableDoc />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/admin/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/admin/AdminAppointment" element={<AdminAppointment />} />
        <Route path="/admin/AdminAddDoc" element={<AdminAddDoc />} />
        <Route path="/admin/AdminDocList" element={<AdminDocList />} />
        <Route path="/admin" element={<ADLogin />} />

      </Routes>
      <ToastContainer/>
      {/* {location.pathname !== "/" && location.pathname !== "/user/allDiseases" && location.pathname !== "/user/loginpage" &&
      location.pathname !== "/user/signuppage" && <Footer />} */}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
