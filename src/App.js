import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
import Contactus from "./Pages/Contactus";
import Gallery from "./Pages/Gallery";
import Event from "./Pages/Events";
import Whatwedo from "./Pages/Whatwedo";
import EventRm from "./Pages/Event";
import BecomeMember from "./Pages/BecomeMember";
import Login from "./Pages/Login";
import ForgotPassward from "./Pages/ForgotPassward";
import PasswordResset from "./Pages/PasswordResset";
import Federation from "./Pages/Federation";
import Fiderations from "./Pages/Fiderations"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}  />
        <Route path="Aboutus" element={<Aboutus />} />
        <Route path="Contactus" element={<Contactus />} />
        <Route path="Gallery" element={<Gallery />} />
        <Route path="Event" element={<Event />} />
        <Route path="EventRm" element={<EventRm />} />
        <Route path="Whatwedo" element={<Whatwedo />} />
        <Route path="Federation" element={<Federation />} />
        <Route path="Fiderations" element={<Fiderations />} />
        <Route path="becomeMember" element={<BecomeMember />} />
        <Route path="Login" element={<Login />} />
        <Route path="Home" element={<Home />} />
        <Route path="ForgotPassward" element={<ForgotPassward />} />
        <Route path="PasswordResset" element={<PasswordResset />} />
      </Routes>
    </BrowserRouter>
  );
}
