import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import OurDoctors from "./pages/OurDoctors.jsx";
import Contact from "./pages/Contact.jsx";
import GeneralConsultation from "./pages/services/GeneralConsultation.jsx";
import ChildCare from "./pages/services/ChildCare.jsx";
import PhysiotherapyRehabilitation from "./pages/services/Physiotherapy&Rehabilitation.jsx";
import GeneralLaparoscopicSurgery from "./pages/services/General&LaparoscopicSurgery.jsx";
import RadiologyDiagnostics from "./pages/services/Radiology&Diagnostics.jsx";
import PathologyLaboratoryTests from "./pages/services/Pathology&LaboratoryTests.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/our-doctors",
        element: <OurDoctors />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/services/general-consultation",
        element: <GeneralConsultation />,
      },
      {
        path: "/services/child-care",
        element: <ChildCare />,
      },
      {
        path: "/services/physiotherapy-rehabilitation",
        element: <PhysiotherapyRehabilitation />,
      },
      {
        path: "/services/general-laparoscopic-surgery",
        element: <GeneralLaparoscopicSurgery />,
      },
      {
        path: "/services/radiology-diagnostics",
        element: <RadiologyDiagnostics />,
      },
      {
        path: "/services/pathology-Laboratory-tests",
        element: <PathologyLaboratoryTests />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
