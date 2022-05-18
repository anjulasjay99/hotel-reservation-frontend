/* eslint-disable spaced-comment */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactSession } from "react-client-session";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

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

function MyReservations() {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [reservations, setreservations] = useState([
    {
      id: "12345",
      hotel: "WonderLanka",
      room: "Room 1",
      noOfChildren: 0,
      noOfAdults: 2,
      checkInDate: "7/5/2022",
      checkOutDate: "12/5/2022",
    },
  ]);

  const getReservations = async () => {
    await fetch(`http://localhost:8070/reservation/getAll/${sessionStorage.getItem("username")}`)
      .then((res) => res.json())
      .then((res) => {
        setreservations(res);
      })
      .catch((err) => {
        console.log(err);
        alert("Error fecthing data!");
      });
  };

  useEffect(() => {
    if (sessionStorage.getItem("username")) {
      setusername(sessionStorage.getItem("username"));
      getReservations();
    } else {
      navigate("/loginType");
    }
  }, []);

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
            My Reservations
          </MKTypography>
        </Grid>
      </Container>
      {reservations.map((rsv) => (
        <MKBox component="section">
          <Container>
            <Grid py={2}>
              <MKBox
                bgColor="white"
                borderRadius="xl"
                shadow="lg"
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                mx={3}
              >
                <Grid>
                  <Grid>
                    <MKTypography variant="body1" color="text" ml={2} mr={5} mt={2}>
                      {`${rsv.room} , ${rsv.hotel}`}
                    </MKTypography>
                  </Grid>
                  <Grid>
                    <MKTypography variant="body2" color="text" ml={2} mr={5}>
                      <i>{`${rsv.noOfAdults + rsv.noOfChildren} guest(s)`}</i>
                    </MKTypography>
                  </Grid>
                  <Grid>
                    <MKTypography variant="body2" color="text" ml={2} mr={5} mb={2}>
                      <i>
                        From {rsv.checkInDate} to {rsv.checkOutDate}
                      </i>
                    </MKTypography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  my={2}
                  mr={2}
                >
                  <MKButton
                    type="submit"
                    variant="gradient"
                    color="primary"
                    fullWidth
                    onClick={() => navigate("/cancel-reservation", { state: { reservation: rsv } })}
                  >
                    Cancel Reservation
                  </MKButton>
                </Grid>
              </MKBox>
            </Grid>
          </Container>
        </MKBox>
      ))}
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

export default MyReservations;
