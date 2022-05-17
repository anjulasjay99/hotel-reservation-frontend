/* eslint-disable spaced-comment */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import { ReactSession } from "react-client-session";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
import { useLocation, useNavigate } from "react-router-dom";

function Payment({ setRsvInfo }) {
  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const style = {
    display: "flex",
    flexDirection: "row",
  };

  const updateState = (reservation) => {
    setRsvInfo(reservation);
  };

  const proceed = (event) => {
    event.preventDefault();
    localStorage.setItem("reservationDetails", JSON.stringify(location.state.reservation));

    fetch("http://localhost:8070/payments", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        roomId: parseInt(location.state.reservation.roomId, 10),
        noOfAdults: parseInt(location.state.reservation.noOfAdults, 10),
        noOfChildren: parseInt(location.state.reservation.noOfChildren, 10),
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        window.location.replace(response.url);
      })
      .catch((err) => {
        alert("Error!");
        console.log(err);
      });
  };

  useEffect(() => {
    if (!sessionStorage.getItem("username")) {
      navigate("/loginType");
    }
  }, []);

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        sticky
      />

      <MKBox component="section" py={15}>
        <Container>
          <Grid container justifyContent="center" display="flex" py={2} mx={3}>
            <MKTypography variant="h3" mb={5}>
              Payment
            </MKTypography>
          </Grid>
        </Container>
        <Container style={style}>
          <div
            style={{
              width: "100%",
              background: "white",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <Container>
              <Grid container alginItems="center" xs={12} mb={5}>
                <Grid item justifyContent="center" display="flex" xs={12} sm={6}>
                  <MKTypography
                    variant="button"
                    color="text"
                    fontWeight="bold"
                    textTransform="uppercase"
                  >
                    Hotel & Room
                  </MKTypography>
                </Grid>

                <Grid item justifyContent="center" display="flex" xs={12} sm={6}>
                  <MKTypography variant="body2" color="text">
                    {`${location.state.reservation.room} , ${location.state.reservation.hotel}`}
                  </MKTypography>
                </Grid>
              </Grid>
              <hr />
              <Grid container alignItems="center" py={0} mb={5}>
                <Grid item justifyContent="center" display="flex" xs={12} sm={6}>
                  <MKTypography
                    variant="button"
                    color="text"
                    fontWeight="bold"
                    textTransform="uppercase"
                  >
                    Booked For
                  </MKTypography>
                </Grid>

                <Grid item justifyContent="center" display="flex" xs={12} sm={6}>
                  <MKTypography variant="body2" color="text">
                    <i>{`${
                      parseInt(location.state.reservation.noOfAdults, 10) +
                      parseInt(location.state.reservation.noOfChildren, 10)
                    } guest(s)`}</i>
                  </MKTypography>
                </Grid>
              </Grid>
              <hr />
              <Grid container alignItems="center" py={0} mb={5}>
                <Grid item justifyContent="center" display="flex" xs={12} sm={6}>
                  <MKTypography
                    variant="button"
                    color="text"
                    fontWeight="bold"
                    textTransform="uppercase"
                  >
                    Check-In
                  </MKTypography>
                </Grid>

                <Grid item justifyContent="center" display="flex" xs={12} sm={6}>
                  <MKTypography variant="body2" color="text">
                    {location.state.reservation.checkInDate}
                  </MKTypography>
                </Grid>
              </Grid>
              <hr />
              <Grid container alignItems="center" py={0} mb={5}>
                <Grid item justifyContent="center" display="flex" xs={12} sm={6}>
                  <MKTypography
                    variant="button"
                    color="text"
                    fontWeight="bold"
                    textTransform="uppercase"
                  >
                    Check-Out
                  </MKTypography>
                </Grid>

                <Grid item justifyContent="center" display="flex" xs={12} sm={6}>
                  <MKTypography variant="body2" color="text">
                    {location.state.reservation.checkOutDate}
                  </MKTypography>
                </Grid>
              </Grid>
              <hr />
              <Grid container alignItems="center" py={0} mb={5}>
                <Grid item justifyContent="center" display="flex" xs={12} sm={6}>
                  <MKTypography
                    variant="button"
                    color="text"
                    fontWeight="bold"
                    textTransform="uppercase"
                  >
                    Total Payment
                  </MKTypography>
                </Grid>

                <Grid item justifyContent="center" display="flex" xs={12} sm={6}>
                  <MKTypography variant="body2" color="text">
                    {`LKR ${location.state.reservation.totalPayment}`}
                  </MKTypography>
                </Grid>
              </Grid>

              <Grid container item justifyContent="center" display="flex" xs={12} mt={5} mb={2}>
                <MKButton
                  type="submit"
                  variant="gradient"
                  color="primary"
                  onClick={(event) => proceed(event)}
                >
                  Confirm & Proceed
                </MKButton>
              </Grid>
            </Container>
          </div>
        </Container>
      </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Payment;
