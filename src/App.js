import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Aboutus from "./components/Pages/Aboutus";
import Contactus from "./components/Pages/Contactus";
import Gallery from "./components/Pages/Gallery";
import Event from "./components/Pages/Events";
import Whatwedo from "./components/Pages/Whatwedo";
import BecomeMember from'./components/Pages/BecomeMember'
import Login from './components/Pages/Login'
import ForgotPassward from "./components/Pages/ForgotPassward";
import PasswordResset from "./components/Pages/PasswordResset";
import Fideration from "./components/Pages/Fideration";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Aboutus" element={<Aboutus />} />
        <Route path="Contactus" element={<Contactus />} />
        <Route path="Gallery" element={<Gallery />} />
        <Route path="Event" element={<Event />} />
        <Route path="Whatwedo" element={<Whatwedo />} />
        <Route path="Fideration" element={<Fideration/>} />
        <Route path="becomeMember" element={<BecomeMember />} />
        <Route path="Login" element={<Login />} />
        <Route path="ForgotPassward" element={<ForgotPassward />} />
        <Route path="PasswordResset" element={<PasswordResset />} />
      </Routes>
    </BrowserRouter>
  );
}



