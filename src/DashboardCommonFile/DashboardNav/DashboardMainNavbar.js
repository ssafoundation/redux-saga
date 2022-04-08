import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardBodyRoute from "../DashboardBodyRoute/DashboardBodyRoute";
import "../dashboardNavbar.scss";
import logo from "../img/logo.svg";
import HeaderTopBar from "./HeaderTopBar";
import "./navbar.scss";
import NavbarMainLink from "./NavbarMainLink";
const DashboardMainNavbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={
        toggle
          ? "dashboard-sidebar-nav-area showNavbar"
          : "dashboard-sidebar-nav-area"
      }
    >
      <div className="main-dashboard">
        {/* dashboard topbar  */}
        <div
          className={
            toggle
              ? "dashboard-topbar-wrap showNavbar"
              : "dashboard-topbar-wrap"
          }
        >
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <HeaderTopBar />
        </div>
        {/* dashboard topbar  */}

        <div className="main-navbar-body-area">
          <div
            className={
              toggle
                ? "dashboard-left-navbar-wrap showNavbar"
                : "dashboard-left-navbar-wrap"
            }
          >
            {/* navbar-toggle icon wrap */}
            <div className="toggle-main-button-area-wrap">
              <button
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
            {/* navbar-toggle icon wrap */}
            <div
              className={
                toggle
                  ? "navbar-link-dashboard-page-components-wrap showNavbar"
                  : "navbar-link-dashboard-page-components-wrap"
              }
            >
              <NavbarMainLink />
            </div>
          </div>
          {/* dashboardb main body  */}
          <div className="dashboard-main-body-wrap">
            <DashboardBodyRoute />
          </div>
          {/* dashboardb main body  */}
        </div>
      </div>
    </div>
  );
};

export default DashboardMainNavbar;
