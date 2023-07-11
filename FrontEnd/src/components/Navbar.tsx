import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Gestion des Employees
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className={"nav-link"} to={"/"}>
              Employees
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={"nav-link"} to={"/enregistrements"}>
              Enregistrements
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className={"nav-link"} to={"/services"}>
              Services
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
