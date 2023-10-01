
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Main from './components/LandingPage/Main';
import Navbar from './components/Navbar';
import ScrollToTop from "react-scroll-to-top";
import Login from './components/Login';
import Signup from './components/Signup';
import Service from './components/LandingPage/Service';
import About from './components/LandingPage/About';
import Appoinment from './components/User/Appoinment';
import ContactUs from './components/LandingPage/ContactUs';
import AdminsHome from './components/Admin/AdminsHome';
import AddDoctorsHome from './components/Admin/AddDoctorsHome';
import DoctorListHome from './components/Admin/DoctorListHome';
import { ToastContainer } from 'react-toastify';
import DoctorlistUser from './components/User/DoctorlistUser';
import AppoinmentHome from './components/Admin/AppoinmentHome';

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <ToastContainer/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/services" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/appoinment" element={<Appoinment />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/doctorlist" element={<DoctorlistUser />} />

          <Route path="/admin" element={<AdminsHome />} />
          <Route path="/admin/add-doctors" element={<AddDoctorsHome/>} />
          <Route path="/admin/doctor-list" element={<DoctorListHome/>} />
          <Route path="/admin/appoinments" element={<AppoinmentHome/>} />




        </Routes>
        <ScrollToTop smooth />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
