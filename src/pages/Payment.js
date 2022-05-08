/* eslint-disable react/prop-types */
import React from "react";

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
import { useLocation } from "react-router-dom";

function Payment() {
  const location = useLocation();

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const style = {
    display: "flex",
    flexDirection: "row",
  };

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
                    {`${location.state.reservation.hotel} , ${location.state.reservation.room}`}
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
                      location.state.reservation.noOfAdults +
                      location.state.reservation.noOfChildren
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
                    USD 14.40
                  </MKTypography>
                </Grid>
              </Grid>

              <Grid container item justifyContent="center" display="flex" xs={12} mt={5} mb={2}>
                <MKButton
                  type="submit"
                  variant="gradient"
                  color="primary"
                  onClick={(event) => onSubmit(event)}
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
