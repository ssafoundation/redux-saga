import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Breadcrumb from "../../Breadcrumb/Breadcrumb";
import "./dashboard.scss";
import Demo from "./DashboardCharts/Demo";
import RoundChart from "./DashboardCharts/RoundChart";
const Dashboard = () => {
  return (
    <div>
      <Breadcrumb
        leftTitle="Dashboard"
        rightTitle="Dashboard"
        pageTitle="Product List"
      />
      <div className="dashboard-body-top-content">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between text-center">
              <div>
                <p>Total Revenue</p>
                <h6>10,00,000000</h6>
              </div>
              <div>
                <p>Total Project</p>
                <h6>760</h6>
              </div>
              <div>
                <p>Total Connection</p>
                <h6>60</h6>
              </div>
              <div>
                <p>Total Demonstration</p>
                <h6>60</h6>
              </div>
              <div>
                <p>Total Acquisition</p>
                <h6>60</h6>
              </div>
              <div>
                <p>Total Info Collection</p>
                <h6>60</h6>
              </div>{" "}
              <div>
                <p>Total Areas</p>
                <h6>60</h6>
              </div>{" "}
              <div>
                <p>Total Territories</p>
                <h6>60</h6>
              </div>
              <div>
                <button className="yguhbjkgdfbnrytfvgbi">
                  <i className="bx bxs-cog align-middle me-1"></i> Setting
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-data-chart-area-wrap">
        <Container fluid>
          <Row>
            <Col lg={8}>
              <div className="single-chart-data">
                {/* <SurveyOverview /> */}
                <Demo />
              </div>
            </Col>
            <Col lg={4}>
              <RoundChart />
              <Demo />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
