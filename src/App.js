import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Aboutus from "./components/Pages/Aboutus";
import Contactus from "./components/Pages/Contactus";
import Gallery from "./components/Pages/Gallery";
import Event from "./components/Pages/Events";
import Whatwedo from "./components/Pages/Whatwedo";
import Register from'./components/Pages/Register'
import Login from './components/Pages/Login'
import PasswordResset from "./components/Pages/PasswordResset";
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
        <Route path="Register" element={<Register />} />
        <Route path="Login" element={<Login />} />
        <Route path="PasswordResset" element={< PasswordResset />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
