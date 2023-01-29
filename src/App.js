import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./dashboard/redux/store";

//Landing website pages

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

// Dashboard Pages

import FullLayout from "./dashboard/layouts/FullLayout";
import ViewFederationTeam from "./dashboard/views/ViewFederationTeam";
import GalleryCategories from "./dashboard/views/GalleryCategories";
import EditFedTeamMember from "./dashboard/views/EditFedTeamMember";
import EditUnion from "./dashboard/views/EditUnion";
import ViewEvent from "./dashboard/views/ViewEvent";
import ViewUnion from "./dashboard/views/ViewUnion";
import AddToGallery from "./dashboard/views/AddToGallery";
import Testimonials from "./dashboard/views/Testimonials";
import DashboardGallery from "./dashboard/views/Gallery";
import TeamMember from "./dashboard/components/dashboard/TeamMember";
import RegisterFederation from "./dashboard/views/RegisterFederation";
import EditFederation from "./dashboard/views/EditFederation";
import EditEvent from "./dashboard/views/EditEvent";
import AddFedTeamMember from "./dashboard/views/AddFedTeamMember";
import Events from "./dashboard/views/Events";
import Unions from "./dashboard/views/Unions";
import Artists from "./dashboard/views/Artists";
import RegisterUnion from "./dashboard/views/RegisterUnion";
import RegisterEvent from "./dashboard/views/RegisterEvent";
import ViewFederation from "./dashboard/views/ViewFederation";
import Breadcrumbs from "./dashboard/views/Breadcrumbs";
import ViewArtist from "./dashboard/views/ViewArtist";
import FederationDashboard from "./dashboard/views/federations";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* Landing website routes */}
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
          {/* Dashboard Routes*/}
          <Route path="/dashboard" element={<FullLayout />}>
            <Route
              path="/dashboard"
              element={<Navigate to={"/dashboard/federations"} />}
            />
            <Route
              path="/dashboard/federations"
              element={<FederationDashboard />}
            />
            <Route
              path="/dashboard/viewFederation/:id"
              element={<ViewFederation />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
