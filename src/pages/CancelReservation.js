/* eslint-disable react/prop-types */
import React, { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
import { useLocation } from "react-router-dom";

function CancelReservation() {
  const location = useLocation();
  const [reason, setreason] = useState("");
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
          <Grid py={2} mx={3}>
            <MKTypography variant="h3" mb={5}>
              Cancel Reservation
            </MKTypography>
          </Grid>
        </Container>
        <Container style={style}>
          <div style={{ width: "50%" }}>
            <Container>
              <Grid container alginItems="center" xs={12} mb={5}>
                <Grid item xs={12} sm={6}>
                  <MKTypography
                    variant="button"
                    color="text"
                    fontWeight="bold"
                    textTransform="uppercase"
                  >
                    Hotel & Room
                  </MKTypography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <MKTypography variant="body2" color="text">
                    {`${location.state.reservation.hotel} , ${location.state.reservation.room}`}
                  </MKTypography>
                </Grid>
              </Grid>
              <Grid container alignItems="center" py={0} mb={5}>
                <Grid item xs={12} sm={6}>
                  <MKTypography
                    variant="button"
                    color="text"
                    fontWeight="bold"
                    textTransform="uppercase"
                  >
                    Booked For
                  </MKTypography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <MKTypography variant="body2" color="text">
                    <i>{`${
                      location.state.reservation.noOfAdults +
                      location.state.reservation.noOfChildren
                    } guest(s)`}</i>
                  </MKTypography>
                </Grid>
              </Grid>
              <Grid container alignItems="center" py={0} mb={5}>
                <Grid item xs={12} sm={6}>
                  <MKTypography
                    variant="button"
                    color="text"
                    fontWeight="bold"
                    textTransform="uppercase"
                  >
                    Check-In
                  </MKTypography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <MKTypography variant="body2" color="text">
                    {location.state.reservation.checkInDate}
                  </MKTypography>
                </Grid>
              </Grid>
              <Grid container alignItems="center" py={0} mb={5}>
                <Grid item xs={12} sm={6}>
                  <MKTypography
                    variant="button"
                    color="text"
                    fontWeight="bold"
                    textTransform="uppercase"
                  >
                    Check-Out
                  </MKTypography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <MKTypography variant="body2" color="text">
                    {location.state.reservation.checkOutDate}
                  </MKTypography>
                </Grid>
              </Grid>
              <Grid container alignItems="center" py={0} mb={5}>
                <Grid item xs={12} sm={6}>
                  <MKTypography
                    variant="button"
                    color="text"
                    fontWeight="bold"
                    textTransform="uppercase"
                  >
                    Cancellation Cost
                  </MKTypography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <MKTypography variant="body2" color="text">
                    USD 14.40
                  </MKTypography>
                </Grid>
              </Grid>
            </Container>
          </div>
          <div style={{ width: "50%" }}>
            <Grid item xs={12}>
              <MKInput
                variant="standard"
                label="Reason for cancellation"
                placeholder="Describe your problem in at least 250 characters"
                InputLabelProps={{ shrink: true }}
                value={reason}
                onChange={(e) => setreason(e.target.value)}
                multiline
                fullWidth
                rows={8}
              />
            </Grid>
            <Grid>
              <MKTypography variant="body2" color="text" mb={3} mt={3}>
                <span style={{ color: "#ef5350" }}>Note : This action cannot be reverted.</span>
              </MKTypography>
            </Grid>

            <Grid container item justifyContent="flex-end" xs={12} mt={5} mb={2}>
              <MKButton
                type="submit"
                variant="gradient"
                color="primary"
                onClick={(event) => onSubmit(event)}
              >
                Confirm Cancellation
              </MKButton>
            </Grid>
          </div>
        </Container>
      </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default CancelReservation;
