import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import SingleInput from "./Components/SingleInput/SingleInput";
import MultiInputs from "./Components/MultiInputs/MultiInputs";
import Contact from "./Components/Contact/Contact";
import LearnMore from "./Components/LearnMore/LearnMore";
import Origin from "./Components/Origin/Origin";
import { GlobalProvider } from "./Components/Context/GlobalContext";
import FAQs from "./Components/FAQs/FAQs";
import DeveloperBio from "./Components/DeveloperBio/DeveloperBio";
import Publications from './Components/Publications/Publications';

let routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "FAQs", element: <FAQs /> },
      { path: "developerbio", element: <DeveloperBio /> },
      { path: "learnmore", element: <LearnMore /> },
      { path: "origin", element: <Origin /> },
      { path: "publications", element: <Publications /> },
      { path: "single", element: <SingleInput /> },
      { path: "multi", element: <MultiInputs /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <GlobalProvider>
      <RouterProvider router={routes}></RouterProvider>
    </GlobalProvider>
  );
}

export default App;
