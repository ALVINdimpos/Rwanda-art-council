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
const AboutUs = lazy(() => import("../views/AboutUs.js"));
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
const About = lazy(() => import("../views/About.js"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/federations" /> },
      {
        path: "/federations",
        exact: true,
        element: <Federation />,
      },
      {
        path: "/viewFederation/:id",
        exact: true,
        element: <ViewFederation />,
      },
      {
        path: "/federations/registerFederation",
        element: <RegisterFederation />,
      },
      {
        path: "/editFederation/:id",
        element: <EditFederation />,
      },
      { path: "/union", exact: true, element: <Unions /> },
      {
        path: "/viewUnion/:id",
        exact: true,
        element: <ViewUnion />,
      },
      {
        path: "/editUnion/:id",
        exact: true,
        element: <EditUnion />,
      },
      { path: "/events", exact: true, element: <Events /> },
      { path: "/viewEvent/:id", exact: true, element: <ViewEvent /> },
      { path: "/editEvent/:id", exact: true, element: <EditEvent /> },
      { path: "/artists", exact: true, element: <Artists /> },
      { path: "/registerUnion", exact: true, element: <RegisterUnion /> },
      { path: "/registerEvent", exact: true, element: <RegisterEvent /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
      {
        path: "/testimonials",
        exact: true,
        element: <Testimonials />,
      },
      {
        path: "/addFederationTeam",
        exact: true,
        element: <AddFedTeamMember />,
      },
      {
        path: "/EditFedTeamMember/:id",
        exact: true,
        element: <EditFedTeamMember />,
      },
      {
        path: "/viewFederationTeam/:id",
        exact: true,
        element: <ViewFederationTeam />,
      },
      {
        path: "/aboutUs",
        exact: true,
        element: <AboutUs />,
      },
      {
        path: "/gallery",
        exact: true,
        element: <Gallery />,
      },
      {
        path: "/galleryCategories",
        exact: true,
        element: <GalleryCategories />,
      },
      {
        path: "/addToGallery",
        exact: true,
        element: <AddToGallery />,
      },
    ],
  },
];

export default ThemeRoutes;
