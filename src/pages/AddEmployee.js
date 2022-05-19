/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

// Routes
import routes from "routes";
import axios from "axios";

function AddEmployee() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(true);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [telNo, settelNo] = useState("");
  const [nic, setnic] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [address, setaddress] = useState("");
  const [password, setpassword] = useState("");

  const handleChecked = () => setChecked(!checked);

  const onSubmit = () => {
    const employee = {
      firstName,
      lastName,
      email,
      telNo,
      nic,
      dateOfBirth,
      address,
      password,
    };
    axios
      .post("http://localhost:8280/employees/add", employee)
      .then(() => {
        alert("Added Successfully!");
      })
      .catch((err) => alert(err));
  };

  return (
    <>
      <DefaultNavbar routes={[]} sticky />
      <MKBox component="section" py={12}>
        <Container>
          <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
            <MKTypography variant="h3" mb={1}>
              Add Employee
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
                      value={firstName}
                      onChange={(e) => setfirstName(e.target.value)}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Last Name"
                      value={lastName}
                      onChange={(e) => setlastName(e.target.value)}
                      fullWidth
                      required
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="NIC"
                      value={nic}
                      onChange={(e) => setnic(e.target.value)}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      type="date"
                      label="Date of Birth"
                      fullWidth
                      value={dateOfBirth}
                      onChange={(e) => setdateOfBirth(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      required
                    />
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <MKInput
                      variant="standard"
                      type="text"
                      label="Address"
                      value={address}
                      onChange={(e) => setaddress(e.target.value)}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      type="text"
                      label="Telephone Number"
                      value={telNo}
                      onChange={(e) => settelNo(e.target.value)}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      type="email"
                      label="Email Address"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      type="password"
                      label="Password"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <br />
                <Grid container item justifyContent="center" xs={12} my={2}>
                  <MKButton
                    type="submit"
                    variant="gradient"
                    color="primary"
                    onClick={() => onSubmit()}
                    fullWidth
                  >
                    Add
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}

export default AddEmployee;
