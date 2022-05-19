/* eslint-disable import/order */
import React, { useState, useEffect } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Row, Col, Table } from "reactstrap";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "../assets/images/taxiheader.jpg";
import "./css/admin.css";
import axios from "axios";

function ViewTaxiBookings() {
  const [bookings, setbookings] = useState([]);

  const fetchBookings = async () => {
    await axios
      .get("https://api.lyko.tech/v2/reservations")
      .then((res) => {
        setbookings(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "Profile",
          color: "info",
        }}
        sticky
      />
      <MKBox
        minHeight="80vh"
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
          <MKTypography variant="h3">Taxi Reservations</MKTypography>
        </Grid>
      </Container>

      <Container>
        <Row>
          <Col>
            <Table size="sm" style={{ background: "white" }}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>User ID</th>
                  <th>Booked Time</th>
                  <th>Journey</th>
                  <th>Journey Cost</th>
                  <th>Journey Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((journey) => (
                  <tr>
                    <td>{bookings.indexOf(journey) + 1}</td>
                    <td>{journey.userId}</td>
                    <td>{journey.createdAt}</td>
                    <td>{journey.journey}</td>
                    <td>{journey.costs}</td>
                    <td>{journey.status}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ViewTaxiBookings;
