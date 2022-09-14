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
import RequireAuth from "./components/log-requirement/RequireAuth";
import { userInputs } from "./formSource";
import { AuthProvider } from "./components/authenticate/Auths";
import UnionPage from "./pages/union-page/UnionPage";
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
import RegisterArt from "./pages/federationDashboard/regist/RegisterArt";
import ViewArtist from "./pages/viewartist/ViewArtist";
import UnionView from "./pages/federationDashboard/unionView/UnionView";
import RegFedContainer from "./pages/regfederaton-page-dash/RegFedContainer";
export default function App() {
  return (
    <AuthProvider>
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
          <Route path="admunions" element={<UnionPage />} />
          <Route path="federation" element={<Federation />}>
            <Route path=":fedId" element={<View />} />
          </Route>
          <Route
            path="homefederation"
            element={
              <RequireAuth>
                <HomeFed />{" "}
              </RequireAuth>
            }
          />
          <Route path="unios" element={<UnionView />} />
          <Route path="addEvent" element={<Eventing />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
