import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Federation = lazy(() => import("../views/federations.js"));
const RegisterFederation = lazy(() => import("../views/RegisterFederation"));
const Events = lazy(() => import("../views/Events"));
const Unions = lazy(() => import("../views/Unions"));
const Artists = lazy(() => import("../views/Artists"));
const RegisterUnion = lazy(() => import("../views/RegisterUnion"));
const Grid = lazy(() => import("../views/Grid"));
const Tables = lazy(() => import("../views/Tables"));
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
        path: "/federations/registerFederation",
        element: <RegisterFederation />,
      },
      { path: "/events", exact: true, element: <Events /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/union", exact: true, element: <Unions /> },
      { path: "/artists", exact: true, element: <Artists /> },
      { path: "/registerUnion", exact: true, element: <RegisterUnion /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
    ],
  },
];

export default ThemeRoutes;
