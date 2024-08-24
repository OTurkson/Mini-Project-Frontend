import "./App.css";
import "rsuite/dist/rsuite.min.css";
import { DoctorsDash } from "./pages/DoctorsDashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Patients } from "./pages/patients";
import { SideNav } from "./components/SideNavBar";
import { Appointments } from "./pages/Appointments";
import { Profile } from "./pages/Profile";
import Login from "./pages/Login";
import BookAppointment from "./pages/BookAppointment";

function App() {
  return (
    <Router>
      <div>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<DoctorsDash />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/book-appointment" element={<BookAppointment />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
