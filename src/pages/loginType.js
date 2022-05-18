/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/self-closing-comp */
/* eslint-disable spaced-comment */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactSession } from "react-client-session";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Card, CardTitle, Button, CardText, Row, Col } from "reactstrap";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/header.jpg";
import { MdOutlinePerson, MdOutlinePersonalInjury } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import "./css/admin.css";

function LoginType() {
  ReactSession.setStoreType("memory");
  const navigate = useNavigate();
  let loginType;

  const adminClick = () => {
    loginType = 3;
    ReactSession.set("loginType", loginType);
    navigate("/login");
  };
  const employeeClick = () => {
    loginType = 2;
    ReactSession.set("loginType", loginType);
    navigate("/login");
  };
  const travellerClick = () => {
    loginType = 1;
    ReactSession.set("loginType", loginType);
    navigate("/login");
  };

  useEffect(() => {}, []);

  return (
    <>
      <DefaultNavbar routes={[]} sticky />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      />
      <Container>
        <Grid py={2} mx={3}>
          <MKTypography variant="h3" ml={2}>
            Login
          </MKTypography>
        </Grid>
      </Container>
      <Container>
        <Row>
          <Col>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  width: "80%",
                }}
              >
                <div className="home-card-div" onClick={() => travellerClick()}>
                  <div>
                    <MdOutlinePerson className="home-card-icon" />
                  </div>
                  <div>
                    <h4>Traveller</h4>
                  </div>
                </div>

                <div className="home-card-div" onClick={() => employeeClick()}>
                  <div>
                    <MdOutlinePersonalInjury className="home-card-icon" />
                  </div>
                  <div>
                    <h4>Employee</h4>
                  </div>
                </div>

                <div className="home-card-div" onClick={() => adminClick()}>
                  <div>
                    <GrUserAdmin className="home-card-icon" />
                  </div>
                  <div>
                    <h4>Admin</h4>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <MKBox pt={6} px={1} mt={6} style={{ background: "white" }}>
        <Container>
          <div>
            <h5>Hotel Reservation System</h5>
            <br />
          </div>
        </Container>
      </MKBox>
    </>
  );
}

export default LoginType;
