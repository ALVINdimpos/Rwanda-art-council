import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Aboutus  from "./Pages/Aboutus";
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
import Federations from "./Pages/Federations";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/event" element={<Event />} />
        <Route path="/eventRm" element={<EventRm />} />
        <Route path="/whatwedo" element={<Whatwedo />} />
        <Route path="/federation" element={<Federation />} />
        <Route path="/federations" element={<Federations />} />
        <Route path="/becomeMember" element={<BecomeMember />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassward" element={<ForgotPassward />} />
        <Route path="/passwordResset" element={<PasswordResset />} />
      </Routes>
    </BrowserRouter>
  );
}
