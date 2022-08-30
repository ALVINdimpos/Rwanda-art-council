import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Aboutus from "./components/Pages/Aboutus";
import Contactus from "./components/Pages/Contactus";
import Gallery from "./components/Pages/Gallery";
import Event from "./components/Pages/Events";
import Whatwedo from "./components/Pages/Whatwedo";
import Register from "./components/Pages/Register";
import Login from "./components/Pages/Login";
import { userInputs } from "./formSource";
import New from "./pages/new/New";
import List from "./pages/list/List";
import HomeDash from "./pages/home/HomeDash";
import Contactor from "./components/Pages/contactor/Contactor";
import Federation from "./pages/federation/Federation";
import View from "./pages/viewing/View";
import ViewID from "./pages/viewID/ViewID";
import ArtistTable from "./components/widgetcategory/artist/ArtistTable";
import FederationTable from "./components/widgetcategory/federation/FederationTable";
import CategoryTable from "./components/widgetcategory/category/CategoryTable";
import ArtsTable from "./components/widgetcategory/arts/ArtsTable";
import Eventing from "./components/myEvent/Eventing";
  import HomeFed from "./pages/federationDashboard/home/HomeFed";
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
        <Route path="logindash" element={<HomeDash />} >
        <Route path="vfed" element={<FederationTable />} />
        </Route>

        <Route path="addEvent" element={<Eventing />}/>
        <Route path="vartist" element={<ArtistTable />} />
          
          <Route path="vcat" element={<CategoryTable />} />
          <Route path="vart" element={<ArtsTable />} />


        <Route path="users">
          <Route index element={<List />} />
          <Route path=":usId" element={<ViewID />} />
          <Route
            path="new"
            element={<New inputs={userInputs} title="Add Federation" />}
          />
        </Route>

        <Route path="federation" element={<Federation />}>
          <Route path=":fedId" element={<View />} />
        </Route>

        <Route path="addnotify" element={<Contactor />} />
        <Route path="myFederation" element={<HomeFed/>}/>
      </Routes>
    </BrowserRouter>
  );
}
