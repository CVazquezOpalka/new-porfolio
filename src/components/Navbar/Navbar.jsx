import React from "react";
/* Styles */
import { Header, Menu, Nav, MenuItems, Logo } from "./styles";
/* react-router-dom */
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <Header>
      <Logo>
        <span>
          <i>{"<V/>"}</i>
        </span>
        <h3>Cristian Vazquez Opalka</h3>
      </Logo>
      <Nav>
        <Menu>
          <MenuItems>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/home"
            >
              Inicio
            </NavLink>
          </MenuItems>
          <MenuItems>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/about"
            >
              Sobre Mi
            </NavLink>
          </MenuItems>
          <MenuItems>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/proyectos"
            >
              Proyectos
            </NavLink>
          </MenuItems>
          <MenuItems>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/servicios"
            >
              Servicios
            </NavLink>
          </MenuItems>
          <MenuItems>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/contacto"
            >
              Contacto
            </NavLink>
          </MenuItems>
        </Menu>
      </Nav>
    </Header>
  );
};
