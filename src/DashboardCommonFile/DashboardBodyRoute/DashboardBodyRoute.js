import React from "react";
import { Route, Switch } from "react-router-dom";
import Attendence from "../../Components/Attendence/Attendence";
import Dashboard from "../../Components/Dashboard/Dashboard";
import GeoInformation from "../../Components/GeoInformation/GeoInformation";
import Office from "../../Components/Office/Office";
import PJP from "../../Components/PJP/PJP";
import Product from "../../Components/Product/Product";
import Projects from "../../Components/Projects/Projects";
import RouteNav from "../../Components/RouteNav/RouteNav";
import TargetSet from "../../Components/TargetSet/TargetSet";
import Users from "../../Components/Users/Users";

const DashboardBodyRoute = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          {/* <Dashboard /> */}
        </Route>{" "}
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>{" "}
        <Route exact path="/users">
          <Users />
        </Route>{" "}
        <Route exact path="/projects">
          <Projects />
        </Route>{" "}
        <Route exact path="/product">
          <Product />
        </Route>
        <Route exact path="/geo-information">
          <GeoInformation />
        </Route>{" "}
        <Route exact path="/route">
          <RouteNav />
        </Route>{" "}
        <Route exact path="/office">
          <Office />
        </Route>{" "}
        <Route exact path="/target-set">
          <TargetSet />
        </Route>{" "}
        <Route exact path="/PJP">
          <PJP />
        </Route>
        <Route exact path="/attendence">
          <Attendence />
        </Route>
      </Switch>
    </div>
  );
};

export default DashboardBodyRoute;
