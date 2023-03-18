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
import Federations from "./Pages/Federations";
import { Navigate } from "react-router-dom";

const ThemeRoutes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/Aboutus",
    element: <Aboutus />,
  },
  {
    path: "/Contactus",
    element: <Contactus />,
  },
  {
    path: "/Gallery",
    element: <Gallery />,
  },
  {
    path: "/Event",
    element: <Event />,
  },
  {
    path: "/EventRm",
    element: <EventRm />,
  },
  {
    path: "/Whatwedo",
    element: <Whatwedo />,
  },
  {
    path: "/Federation",
    element: <Federation />,
  },
  {
    path: "/Federations",
    element: <Federations />,
  },
  {
    path: "/becomeMember",
    element: <BecomeMember />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/ForgotPassward",
    element: <ForgotPassward />,
  },
  {
    path: "/PasswordResset",
    element: <PasswordResset />,
  },
];


export default ThemeRoutes;
