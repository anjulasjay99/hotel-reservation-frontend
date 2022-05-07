import React, { useState } from "react";
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

import bgImage from "assets/images/illustrations/illustration-reset.jpg";

function ReserveRoom() {
  const [checked, setChecked] = useState(false);
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [telNo, settelNo] = useState("");
  const [country, setcountry] = useState("");
  const [checkInDate, setcheckInDate] = useState("");
  const [checkOutDate, setcheckOutDate] = useState("");
  const [noOfChildren, setnoOfChildren] = useState(0);
  const [noOfAdults, setnoOfAdults] = useState(0);

  const handleChecked = () => setChecked(!checked);

  const onSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log({
      fname,
      lname,
      email,
      telNo,
      country,
      checkInDate,
      checkOutDate,
      noOfChildren,
      noOfAdults,
    });
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
                sx={{ backgroundImage: `url(${bgImage})`, backgroundSize: "contain" }}
              />
            </Grid>
            <br />
            <Grid item xs={12} sm={9}>
              <MKTypography variant="h3" ml={2}>
                Room Name
              </MKTypography>
            </Grid>
            <Grid container alignItems="center" py={2}>
              <Grid item xs={12} sm={3}>
                <MKTypography
                  variant="button"
                  color="text"
                  fontWeight="bold"
                  textTransform="uppercase"
                  ml={2}
                >
                  Size
                </MKTypography>
              </Grid>

              <Grid item xs={12} sm={9}>
                <MKTypography variant="body2" color="text">
                  376 sq ft
                </MKTypography>
              </Grid>
              <Grid container alignItems="center">
                <Grid item xs={12} sm={3}>
                  <MKTypography
                    variant="button"
                    color="text"
                    fontWeight="bold"
                    textTransform="uppercase"
                    ml={2}
                  >
                    Capacity
                  </MKTypography>
                </Grid>

                <Grid item xs={12} sm={9}>
                  <MKTypography variant="body2" color="text">
                    4
                  </MKTypography>
                </Grid>
              </Grid>
              <Grid container alignItems="center">
                <Grid item xs={12} sm={3}>
                  <MKTypography
                    variant="button"
                    color="text"
                    fontWeight="bold"
                    textTransform="uppercase"
                    ml={2}
                  >
                    Beds
                  </MKTypography>
                </Grid>

                <Grid item xs={12} sm={9}>
                  <MKTypography variant="body2" color="text">
                    2
                  </MKTypography>
                </Grid>
              </Grid>
              <Grid container alignItems="center">
                <Grid item xs={12} sm={3}>
                  <MKTypography
                    variant="button"
                    color="text"
                    fontWeight="bold"
                    textTransform="uppercase"
                    ml={2}
                  >
                    Wi-Fi
                  </MKTypography>
                </Grid>

                <Grid item xs={12} sm={9}>
                  <MKTypography variant="body2" color="text">
                    Available
                  </MKTypography>
                </Grid>
              </Grid>
              <Grid container alignItems="center">
                <Grid item xs={12} sm={3}>
                  <MKTypography
                    variant="button"
                    color="text"
                    fontWeight="bold"
                    textTransform="uppercase"
                    ml={2}
                  >
                    Payment
                  </MKTypography>
                </Grid>

                <Grid item xs={12} sm={9}>
                  <MKTypography variant="body2" color="text">
                    Starting From $69
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
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MKInput
                        variant="standard"
                        label="Last Name"
                        fullWidth
                        value={lname}
                        onChange={(e) => setlname(e.target.value)}
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

export default ReserveRoom;
