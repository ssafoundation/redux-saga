import React from "react";
import { NavLink } from "react-router-dom";
import icon1 from "./icon/dashboard.svg";

const NavbarMainLink = () => {
  return (
    <div className="navbar-item-main-wrap-nav-items">
      <h3>Menu</h3>
      <ul>
        <li>
          <NavLink exact activeClassName="nav-link-selected" to="/dashboard">
            <img src={icon1} alt="" />
            <span>Dashboard</span>
          </NavLink>
        </li>{" "}
        {/* <li>
          <NavLink exact activeClassName="nav-link-selected" to="/users">
            <img src={icon2} alt="" />
            <span>Users</span>
          </NavLink>
        </li>{" "}
        <li>
          <NavLink exact activeClassName="nav-link-selected" to="/projects">
            <img src={icon3} alt="" />
            <span>Projects</span>
          </NavLink>
        </li>{" "}
        <li>
          <NavLink exact activeClassName="nav-link-selected" to="/product">
            <img src={icon4} alt="" />
            <span>Product</span>
          </NavLink>
        </li>{" "}
        <li>
          <NavLink
            exact
            activeClassName="nav-link-selected"
            to="/geo-information"
          >
            <img src={icon5} alt="" />
            <span>Geo Information</span>
          </NavLink>
        </li>{" "}
        <li>
          <NavLink exact activeClassName="nav-link-selected" to="/route">
            <img src={icon6} alt="" />
            <span>Route</span>
          </NavLink>
        </li>{" "}
        <li>
          <NavLink exact activeClassName="nav-link-selected" to="/office">
            <img src={icon7} alt="" />
            <span>Office</span>
          </NavLink>
        </li>{" "}
        <li>
          <NavLink exact activeClassName="nav-link-selected" to="/target-set">
            <img src={icon8} alt="" />
            <span>Target Set</span>
          </NavLink>
        </li>{" "}
        <li>
          <NavLink exact activeClassName="nav-link-selected" to="/PJP">
            <img src={icon9} alt="" />
            <span>PJP</span>
          </NavLink>
        </li>{" "}
        <li>
          <NavLink exact activeClassName="nav-link-selected" to="/attendence">
            <img src={icon10} alt="" />
            <span>Attendence</span>
          </NavLink>
        </li> */}
      </ul>
    </div>
  );
};

export default NavbarMainLink;
