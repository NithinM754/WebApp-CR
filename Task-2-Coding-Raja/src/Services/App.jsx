import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from "../Components/Navbar";
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import About from '../Pages/About';
import Contactus from '../Pages/Contactus';
import Dashboard from "../Pages/Dashboard";
import Attendance from "../Pages/Attendance";
import Marks from "../Pages/Marks";
import Subjects from "../Pages/Subjects";
import Student from "../Pages/Student";
import AddStudent from '../Pages/AddStudent';
import Fees from "../Pages/Fees";
import DateTimeDisplay from "../Pages/DateTimeDisplay";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import Terms from "../Pages/Terms";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import Sidebar from "../Components/Sidebar";
import Footer from '../Components/Footer';
import UserDashboard from '../Pages/UserDashboard';
import AdminDashBoard from '../Pages/adminDashboard';


const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<><NavBar/><DateTimeDisplay/><Home/><Footer/></>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/about" element={<><NavBar/><About/><Footer/></>} />
          <Route path="/contact" element={<><NavBar/><Contactus/><Footer/></>} />
          <Route path="/privacy" element={<><NavBar/><PrivacyPolicy/><Footer/></>} />
          <Route path="/terms" element={<><NavBar/><Terms/><Footer/></>} />
          {/* <Pages>
            <AnimatePresence exitBeforeEnter> */}
              <Route path="/dashboard" element={<><Dashboard/><DateTimeDisplay/></>} />
              <Route path="/userdashboard" element={<><UserDashboard/><DateTimeDisplay/></>} />
              <Route path="/admin/dashboard" element={<><Sidebar/><AdminDashBoard/><DateTimeDisplay/></>} />
              <Route path="/attendance" element={<><Sidebar/><Attendance/></>} />
              <Route path="/marks" element={<><Sidebar/><Marks/></>} />
              <Route path="/subjects" element={<><Sidebar/><Subjects/></>} />
              <Route path="/addStudent" element={<><Sidebar/><AddStudent/><Footer/></>} />
              <Route path="/student" element={<><Sidebar/><Student/><Footer/></>} />
              {/* <Route path="/addstudent" element={<><Sidebar/><AddStudent/></>} /> */}
              <Route path="/fees" element={<><Sidebar/><Fees/></>} />
            {/* </AnimatePresence>
          </Pages> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;