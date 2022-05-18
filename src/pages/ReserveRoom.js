/* eslint-disable import/order */
/* eslint-disable prefer-const */
/* eslint-disable no-else-return */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

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
import { ReactSession } from "react-client-session";

import bgImage from "assets/images/illustrations/illustration-reset.jpg";
import room1 from "./images/room1.jpg";
import room2 from "./images/room2.jpg";
import room3 from "./images/room3.jpg";
import room4 from "./images/room4.jpg";
import room5 from "./images/room5.jpg";

import axios from "axios";

function ReserveRoom() {
  const navigate = useNavigate();
  const location = useLocation();
  const [checked, setChecked] = useState(false);
  const [userName, setuserName] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [telNo, settelNo] = useState("");
  const [country, setcountry] = useState("");
  const [checkInDate, setcheckInDate] = useState("");
  const [checkOutDate, setcheckOutDate] = useState("");
  const [noOfChildren, setnoOfChildren] = useState(0);
  const [noOfAdults, setnoOfAdults] = useState(0);
  const [first, setfirst] = useState("");
  const [roomInfo, setroomInfo] = useState({
    id: "",
    title: "",
    priceA: 0,
    priceC: 0,
    image: "",
    description: "",
    hotelName: "",
  });
  const [totalPayment, settotalPayment] = useState(0);

  const handleChecked = () => setChecked(!checked);

  const getTotalPayment = async () => {
    await axios
      .post("http://localhost:8070/payments/calculate", {
        roomId: parseInt(location.state.room.id, 10),
        noOfChildren,
        noOfAdults,
      })
      .then((res) => {
        settotalPayment(res.data);
      })
      .catch((err) => alert(err));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    getTotalPayment();
    if (
      fname !== "" &&
      lname !== "" &&
      email !== "" &&
      telNo !== "" &&
      country !== "" &&
      checkInDate !== "" &&
      checkOutDate !== "" &&
      noOfAdults > 0 &&
      checked === true
    ) {
      const reservation = {
        firstName: fname,
        lastName: lname,
        email,
        telNo,
        hotel: location.state.room.hotelName,
        room: location.state.room.title,
        roomId: location.state.room.id,
        country,
        checkInDate,
        checkOutDate,
        noOfChildren,
        noOfAdults,
        totalPayment,
        userName,
      };
      navigate("/payment", { state: { reservation } });
    } else {
      // eslint-disable-next-line no-alert
      alert("Please fill all the fields");
    }
  };

  const style = {
    display: "flex",
    flexDirection: "row",
  };

  useEffect(() => {
    ReactSession.setStoreType("memory");
    if (sessionStorage.getItem("username")) {
      setuserName(sessionStorage.getItem("username"));
    } else {
      navigate("/loginType");
    }
  }, []);
  if (!location.state) {
    navigate("/view-rooms");
    return null;
  } else {
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
          <Container style={style}>
            <div style={{ width: "40%" }}>
              <Grid>
                <MKBox
                  display={{ xs: "none", lg: "flex" }}
                  width="calc(100%)"
                  height="calc(200px)"
                  borderRadius="lg"
                  ml={2}
                  mt={2}
                  sx={{
                    backgroundImage: `url(${location.state.room.image})`,
                    backgroundSize: "contain",
                  }}
                />
              </Grid>
              <br />
              <Grid item xs={12} sm={9}>
                <MKTypography variant="h3" ml={2}>
                  {location.state.room.title}
                </MKTypography>
              </Grid>
              <Grid item xs={12} sm={9}>
                <MKTypography variant="h6" ml={2}>
                  {location.state.room.hotelName}
                </MKTypography>
              </Grid>
              <Grid item xs={12} sm={9}>
                <MKTypography variant="body2" ml={2}>
                  {location.state.room.description}
                </MKTypography>
              </Grid>
              <Grid container alignItems="center" py={2}>
                <Grid item xs={12} sm={6}>
                  <MKTypography
                    variant="button"
                    color="text"
                    fontWeight="bold"
                    textTransform="uppercase"
                    ml={2}
                  >
                    Price for Child
                  </MKTypography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <MKTypography variant="body2" color="text">
                    {location.state.room.priceC}
                  </MKTypography>
                </Grid>
                <Grid container alignItems="center">
                  <Grid item xs={12} sm={6}>
                    <MKTypography
                      variant="button"
                      color="text"
                      fontWeight="bold"
                      textTransform="uppercase"
                      ml={2}
                    >
                      Price for adult
                    </MKTypography>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <MKTypography variant="body2" color="text">
                      {location.state.room.priceA}
                    </MKTypography>
                  </Grid>
                </Grid>
              </Grid>
            </div>
            <div style={{ width: "60%" }}>
              <Grid
                container
                item
                justifyContent="center"
                xs={10}
                lg={7}
                mx="auto"
                textAlign="center"
              >
                <MKTypography variant="h3" mb={1}>
                  Reserve Room
                </MKTypography>
              </Grid>
              <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
                <MKBox width="100%" component="form" method="post" autocomplete="off">
                  <MKBox p={3}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <MKInput
                          variant="standard"
                          label="First Name"
                          fullWidth
                          value={fname}
                          onChange={(e) => setfname(e.target.value)}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <MKInput
                          variant="standard"
                          label="Last Name"
                          fullWidth
                          value={lname}
                          onChange={(e) => setlname(e.target.value)}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <MKInput
                          variant="standard"
                          type="email"
                          label="Email Address"
                          fullWidth
                          value={email}
                          onChange={(e) => setemail(e.target.value)}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <MKInput
                          variant="standard"
                          type="text"
                          label="Telephone Number"
                          fullWidth
                          value={telNo}
                          onChange={(e) => settelNo(e.target.value)}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <MKInput
                          variant="standard"
                          type="text"
                          label="Country"
                          fullWidth
                          value={country}
                          onChange={(e) => setcountry(e.target.value)}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <MKInput
                          variant="standard"
                          type="date"
                          label="Check-in Date"
                          fullWidth
                          value={checkInDate}
                          InputLabelProps={{ shrink: true }}
                          onChange={(e) => setcheckInDate(e.target.value)}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <MKInput
                          variant="standard"
                          type="date"
                          label="Check-out Date"
                          fullWidth
                          value={checkOutDate}
                          InputLabelProps={{ shrink: true }}
                          onChange={(e) => setcheckOutDate(e.target.value)}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <MKInput
                          variant="standard"
                          type="number"
                          label="No. of Children"
                          fullWidth
                          value={noOfChildren}
                          onChange={(e) => setnoOfChildren(e.target.value)}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <MKInput
                          variant="standard"
                          type="number"
                          label="No. of Adults"
                          fullWidth
                          value={noOfAdults}
                          onChange={(e) => setnoOfAdults(e.target.value)}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} alignItems="center" ml={-1}>
                        <Switch checked={checked} onChange={handleChecked} />
                        <MKTypography
                          variant="button"
                          fontWeight="regular"
                          color="text"
                          ml={-1}
                          sx={{ cursor: "pointer", userSelect: "none" }}
                          onClick={handleChecked}
                        >
                          &nbsp;&nbsp;I agree the&nbsp;
                        </MKTypography>
                        <MKTypography
                          component="a"
                          href="#"
                          variant="button"
                          fontWeight="regular"
                          color="primary"
                        >
                          Terms and Conditions
                        </MKTypography>
                      </Grid>
                    </Grid>
                    <Grid container item justifyContent="center" xs={12} my={2}>
                      <MKButton
                        type="submit"
                        variant="gradient"
                        color="primary"
                        fullWidth
                        onClick={(event) => onSubmit(event)}
                      >
                        Proceed
                      </MKButton>
                    </Grid>
                  </MKBox>
                </MKBox>
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
}

export default ReserveRoom;
