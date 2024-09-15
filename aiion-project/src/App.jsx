import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import History from "./Components/History/History";
import NotFound from "./Components/NotFound/NotFound";
import SingleInput from "./Components/SingleInput/SingleInput";
import MultiInputs from "./Components/MultiInputs/MultiInputs";
import Contact from "./Components/Contact/Contact";
import LearnMore from "./Components/LearnMore/LearnMore";
import Origin from "./Components/Origin/Origin";
import { GlobalProvider } from "./Components/Context/GlobalContext";



let x = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "learnmore", element: <LearnMore /> },
      { path: "origin", element: <Origin /> },
      { path: "history", element: <History /> },
      { path: "single", element: <SingleInput /> },
      { path: "multi", element: <MultiInputs /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <GlobalProvider>
    <RouterProvider router={x}></RouterProvider>
  </GlobalProvider>
}

export default App;
