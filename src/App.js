import Navbar2 from "./components/Navbar2";
import About from "./components/About";
import Home from "./components/Home";
import "./App.css";
import Navbar3 from "./components/Navbar3";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
const router = createBrowserRouter([
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);
function App() {
  return (
    <>
      <div className="main">
        <Navbar3 />
        <Navbar2 />

        <RouterProvider router={router} />
        <Footer />
      </div>
    </>
  );
}

export default App;
