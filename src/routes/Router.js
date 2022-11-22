import Aboutus from "../Pages/Aboutus";
import Contactus from "../Pages/Contactus";
import Gallery from "../Pages/Gallery";
import Event from "../Pages/Events";
import Whatwedo from "../Pages/Whatwedo";
import BecomeMember from "../Pages/BecomeMember";
import Login from "../Pages/Login";
import ForgotPassward from "../Pages/ForgotPassward";
import PasswordResset from "../Pages/PasswordResset";
import Federation from "../Pages/Federation";
import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Home = lazy(() => import("../Pages/Home"));
const ViewFederationTeam = lazy(() => import("../views/ViewFederationTeam.js"));
const GalleryCategories = lazy(() => import("../views/GalleryCategories.js"));
const EditFedTeamMember = lazy(() => import("../views/EditFedTeamMember.js"));
const EditUnion = lazy(() => import("../views/EditUnion.js"));
const ViewEvent = lazy(() => import("../views/ViewEvent.js"));
const ViewUnion = lazy(() => import("../views/ViewUnion.js"));
const AddToGallery = lazy(() => import("../views/AddToGallery.js"));
const Testimonials = lazy(() => import("../views/Testimonials.js"));
const DashboardGallery = lazy(() => import("../views/Gallery.js"));
const TeamMembers = lazy(() => import("../views/TeamMembers.js"));
const RegisterFederation = lazy(() => import("../views/RegisterFederation"));
const EditFederation = lazy(() => import("../views/EditFederation"));
const EditEvent = lazy(() => import("../views/EditEvent.js"));
const AddFedTeamMember = lazy(() => import("../views/AddFedTeamMember.js"));
const Events = lazy(() => import("../views/Events"));
const Unions = lazy(() => import("../views/Unions"));
const Artists = lazy(() => import("../views/Artists"));
const RegisterUnion = lazy(() => import("../views/RegisterUnion"));
const RegisterEvent = lazy(() => import("../views/RegisterEvent"));
const ViewFederation = lazy(() => import("../views/ViewFederation"));
const Breadcrumbs = lazy(() => import("../views/Breadcrumbs"));
const ViewArtist = lazy(() => import("../views/ViewArtist"));
const FederationDashboard = lazy(() => import("../views/federations.js"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/aboutus",
    element: <Aboutus />,
  },
  {
    path: "/contactus",
    element: <Contactus />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/event",
    element: <Event />,
  },
  {
    path: "/whatwedo",
    element: <Whatwedo />,
  },
  {
    path: "/becomemember",
    element: <BecomeMember />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgotpassward",
    element: <ForgotPassward />,
  },
  {
    path: "/passwordresset",
    element: <PasswordResset />,
  },
  {
    path: "/federation",
    element: <Federation />,
  },
  {
    path: "/dashboard",
    element: <FullLayout />,
    children: [
      {
        path: "/dashboard",
        exact: true,
        element: <Navigate to="/dashboard/federations" />,
      },
      {
        path: "/dashboard/federations",
        exact: true,
        element: <FederationDashboard />,
      },
      {
        path: "/dashboard/viewFederation/:id",
        exact: true,
        element: <ViewFederation />,
      },
      {
        path: "/dashboard/registerFederation",
        element: <RegisterFederation />,
      },
      {
        path: "/dashboard/editFederation/:id",
        element: <EditFederation />,
      },
      { path: "/dashboard/union", exact: true, element: <Unions /> },
      {
        path: "/dashboard/viewUnion/:id",
        exact: true,
        element: <ViewUnion />,
      },
      {
        path: "/dashboard/editUnion/:id",
        exact: true,
        element: <EditUnion />,
      },
      { path: "/dashboard/events", exact: true, element: <Events /> },
      { path: "/dashboard/viewEvent/:id", exact: true, element: <ViewEvent /> },
      { path: "/dashboard/editEvent/:id", exact: true, element: <EditEvent /> },
      { path: "/dashboard/artists", exact: true, element: <Artists /> },
      {
        path: "/dashboard/viewArtist/:id",
        exact: true,
        element: <ViewArtist />,
      },
      {
        path: "/dashboard/viewEvent/:id",
        exact: true,
        element: <ViewEvent />,
      },
      {
        path: "/dashboard/registerUnion",
        exact: true,
        element: <RegisterUnion />,
      },
      {
        path: "/dashboard/registerEvent",
        exact: true,
        element: <RegisterEvent />,
      },
      { path: "/dashboard/breadcrumbs", exact: true, element: <Breadcrumbs /> },
      {
        path: "/dashboard/testimonials",
        exact: true,
        element: <Testimonials />,
      },
      {
        path: "/dashboard/addFederationTeam",
        exact: true,
        element: <AddFedTeamMember />,
      },
      {
        path: "/dashboard/EditFedTeamMember/:id",
        exact: true,
        element: <EditFedTeamMember />,
      },
      {
        path: "/dashboard/viewFederationTeam/:id",
        exact: true,
        element: <ViewFederationTeam />,
      },
      {
        path: "/dashboard/teamMembers",
        exact: true,
        element: <TeamMembers />,
      },
      {
        path: "/dashboard/gallery",
        exact: true,
        element: <DashboardGallery />,
      },
      {
        path: "/dashboard/galleryCategories",
        exact: true,
        element: <GalleryCategories />,
      },
      {
        path: "/dashboard/addToGallery",
        exact: true,
        element: <AddToGallery />,
      },
    ],
  },
];

export default ThemeRoutes;
