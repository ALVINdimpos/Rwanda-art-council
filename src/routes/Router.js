import { lazy } from "react";
import { Navigate } from "react-router-dom";
import EditUnion from "../views/EditUnion.js";
import ViewEvent from "../views/ViewEvent.js";
import ViewUnion from "../views/ViewUnion.js";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Federation = lazy(() => import("../views/federations.js"));
const RegisterFederation = lazy(() => import("../views/RegisterFederation"));
const EditFederation = lazy(() => import("../views/EditFederation"));
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
      { path: "/artists", exact: true, element: <Artists /> },
      { path: "/registerUnion", exact: true, element: <RegisterUnion /> },
      { path: "/registerEvent", exact: true, element: <RegisterEvent /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
    ],
  },
];

export default ThemeRoutes;
