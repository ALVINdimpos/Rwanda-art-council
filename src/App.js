import ReactDOM from "react-dom/client";
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Aboutus from "./components/Pages/Aboutus";
import Contactus from "./components/Pages/Contactus";
import Gallery from "./components/Pages/Gallery";
import Event from "./components/Pages/Events";
import Whatwedo from "./components/Pages/Whatwedo";
import Register from'./components/Pages/Register';
import Login from './components/Pages/Login'
import {productInputs,userInputs} from './formSource'
import New  from './pages/new/New'
import Single from './pages/single/Single'
import List from './pages/list/List'
import HomeDash from './pages/home/HomeDash'
import Navbar from "./components/nav/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Contactor from "./components/Pages/contactor/Contactor";
import Federation from './pages/federation/Federation'


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
   <Route path="logindash" element={<HomeDash />} />
   <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}/>
            </Route>
            
              <Route
                path="federation"
                element={<Federation />} />
    <Route path="addnotify" element={<Contactor />} />            
   </Routes>
 </BrowserRouter>
  );
} 


