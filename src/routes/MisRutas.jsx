import React from "react";
/* Styles */
import { Section } from "./style";
/* React-router-dom */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
/* Pages */
import {
  Home,
  About,
  Contacto,
  Servicios,
  Curriculum,
  Proyectos,
} from "../pages/index";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer";

const MyRoutes = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Section>
          <Routes>
            {/* Secciones */}
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </Section>

        <Footer />
      </Router>
    </>
  );
};

export default MyRoutes;
