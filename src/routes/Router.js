import Home from "../Pages/Home";
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

const ViewFederationTeam = lazy(() => import("../views/ViewFederationTeam.js"));
const GalleryCategories = lazy(() => import("../views/GalleryCategories.js"));
const EditFedTeamMember = lazy(() => import("../views/EditFedTeamMember.js"));
const EditUnion = lazy(() => import("../views/EditUnion.js"));
const ViewEvent = lazy(() => import("../views/ViewEvent.js"));
const ViewUnion = lazy(() => import("../views/ViewUnion.js"));
const AddToGallery = lazy(() => import("../views/AddToGallery.js"));
const Federation = lazy(() => import("../views/federations.js"));
const Testimonials = lazy(() => import("../views/Testimonials.js"));
const Gallery = lazy(() => import("../views/Gallery.js"));
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
const About = lazy(() => import("../views/About.js"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));

/*****Routes******/

const ThemeRoutes = [
  // {
  //   path: "/",
  //   element: <FullLayout />,
  //   children: [
  //     { path: "/", element: <Navigate to="/federations" /> },
  //     {
  //       path: "/federations",
  //       exact: true,
  //       element: <Federation />,
  //     },
  //     {
  //       path: "/viewFederation/:id",
  //       exact: true,
  //       element: <ViewFederation />,
  //     },
  //     {
  //       path: "/federations/registerFederation",
  //       element: <RegisterFederation />,
  //     },
  //     {
  //       path: "/editFederation/:id",
  //       element: <EditFederation />,
  //     },
  //     { path: "/union", exact: true, element: <Unions /> },
  //     {
  //       path: "/viewUnion/:id",
  //       exact: true,
  //       element: <ViewUnion />,
  //     },
  //     {
  //       path: "/editUnion/:id",
  //       exact: true,
  //       element: <EditUnion />,
  //     },
  //     { path: "/events", exact: true, element: <Events /> },
  //     { path: "/viewEvent/:id", exact: true, element: <ViewEvent /> },
  //     { path: "/editEvent/:id", exact: true, element: <EditEvent /> },
  //     { path: "/artists", exact: true, element: <Artists /> },
  //     {
  //       path: "/viewArtist/:id",
  //       exact: true,
  //       element: <ViewArtist />,
  //     },
  //     {
  //       path: "/viewEvent/:id",
  //       exact: true,
  //       element: <ViewEvent />,
  //     },
  //     { path: "/registerUnion", exact: true, element: <RegisterUnion /> },
  //     { path: "/registerEvent", exact: true, element: <RegisterEvent /> },
  //     { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
  //     {
  //       path: "/testimonials",
  //       exact: true,
  //       element: <Testimonials />,
  //     },
  //     {
  //       path: "/addFederationTeam",
  //       exact: true,
  //       element: <AddFedTeamMember />,
  //     },
  //     {
  //       path: "/EditFedTeamMember/:id",
  //       exact: true,
  //       element: <EditFedTeamMember />,
  //     },
  //     {
  //       path: "/viewFederationTeam/:id",
  //       exact: true,
  //       element: <ViewFederationTeam />,
  //     },
  //     {
  //       path: "/teamMembers",
  //       exact: true,
  //       element: <TeamMembers />,
  //     },
  //     {
  //       path: "/gallery",
  //       exact: true,
  //       element: <Gallery />,
  //     },
  //     {
  //       path: "/galleryCategories",
  //       exact: true,
  //       element: <GalleryCategories />,
  //     },
  //     {
  //       path: "/addToGallery",
  //       exact: true,
  //       element: <AddToGallery />,
  //     },
  //   element: <Navigate to="/home" />,
  // },
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
      { path: "/dashboard/", element: <Navigate to="/federations" /> },
      {
        path: "/dashboard/federations",
        exact: true,
        element: <FederationDashboard />,
      },
      { path: "/dashboard/registerFederation", element: <Forms /> },
      { path: "/dashboard/about", exact: true, element: <About /> },
      { path: "/dashboard/alerts", exact: true, element: <Alerts /> },
      { path: "/dashboard/badges", exact: true, element: <Badges /> },
      { path: "/dashboard/buttons", exact: true, element: <Buttons /> },
      { path: "/dashboard/cards", exact: true, element: <Cards /> },
      { path: "/dashboard/grid", exact: true, element: <Grid /> },
      { path: "/dashboard/table", exact: true, element: <Tables /> },
      { path: "/dashboard/breadcrumbs", exact: true, element: <Breadcrumbs /> },
    ],
  },
];

export default ThemeRoutes;
