/* eslint-disable prefer-const */
/* eslint-disable no-else-return */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import { ReactSession } from "react-client-session";
import { useNavigate, Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Material Kit 2 React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";

// Material Kit 2 React page layout routes
import routes from "routes";

// Images
import bgImage from "assets/images/hoteLogin.jpg";

function Login() {
  const [rememberMe, setRememberMe] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const navigate = useNavigate();

  let userType;

  useEffect(() => {
    ReactSession.setStoreType("memory");
    userType = ReactSession.get("loginType");
    console.log(userType);
    if (userType === null || userType === undefined) {
      navigate("/loginType");
    }
  });

  function onClickSignIn(e) {
    console.log(userType);
    e.preventDefault();
    if (userType === 1) {
      axios
        .get(`http://localhost:8070/login/check/${username}`)
        .then((res) => {
          if (res.data === true) {
            axios.get(`http://localhost:8070/login/get/${username}`).then((r) => {
              if (password !== r.data[0].Password) {
                alert("Check Password!");
              } else {
                ReactSession.set("loginData", r.data[0]);

                sessionStorage.setItem("username", username);
                navigate("/view-rooms");
                // Redirect to pages based on role.
              }
            });
          } else {
            alert("Check username!");
          }
        })
        .catch((er) => {
          console.log(er);
        });
    } else if (userType === 2) {
      axios
        .get(`http://localhost:8070/login/checkEmp/${username}`)
        .then((res) => {
          if (res.data === true) {
            axios.get(`http://localhost:8070/login/getEmp/${username}`).then((r) => {
              console.log(r.data.password);
            
              console.log(r.data);
              if (password !== r.data[0].password) {
                alert("Check Password!");
              } else {
                ReactSession.set("loginData", r.data[0]);
                navigate("/employee-home");
                // Redirect to pages based on role.
              }
            });
          } else {
            alert("Check username!");
          }
        })
        .catch((er) => {
          console.log(er);
        });
    } else {
      axios
        .get(`http://localhost:8070/login/getAdmin/${username}`)
        .then((res) => {
          if (res.data === true) {
            axios.get(`http://localhost:8070/login/getAdmin`).then((r) => {
              if (password !== r.data.password) {
                alert("Check Password!");
              } else {
                ReactSession.set("loginData", r.data);
                navigate("/admin-home");
              }
            });
          } else {
            alert("Check username!");
          }
        })
        .catch((er) => {
          console.log(er);
        });
    }


  }

  return (
    <>
      <DefaultNavbar routes={[]} transparent light />
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="sm"
                coloredShadow="info"
                mx={0}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Sign in
                </MKTypography>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                    <MKInput
                      type="text"
                      label="Username"
                      fullWidth
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      type="password"
                      label="Password"
                      fullWidth
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </MKBox>
                  <MKBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;Remember me
                    </MKTypography>
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton
                      variant="gradient"
                      color="info"
                      fullWidth
                      onClick={(event) => {
                        onClickSignIn(event);
                      }}
                    >
                      sign in
                    </MKButton>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      Don&apos;t have an account?{" "}
                      <MKTypography
                        component={Link}
                        to="/authentication/sign-up/cover"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Sign up
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
    </>
  );
}

export default Login;
