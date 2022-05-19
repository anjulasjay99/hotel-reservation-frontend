/* eslint-disable import/order */
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import { useEffect } from "react";
import { Card, CardImg, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { ReactSession } from "react-client-session";
import bgImage from "../assets/images/taxiheader.jpg";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

import Map from "./Map";
import taxi1 from "../assets/images/taxi.jpg";

function TaxiReservation() {
  const navigate = useNavigate();
  useEffect(() => {
    ReactSession.setStoreType("memory");
    const userType = ReactSession.get("loginType");
    if (userType === null) {
      navigate("/loginType");
    }
  });
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
      <MKBox component="section" py={12}>
        <h3 style={{ marginLeft: "490px", marginTop: "1px", fontWeight: "bold", fontSize: "40px" }}>
          TAXI RESERVATION
        </h3>

        <div className="container">
          <Card style={{ width: "20rem" }} className="Card">
            <CardImg top src={taxi1} alt="taxi Image" />
          </Card>
        </div>
        <Card style={{ marginLeft: "50px", marginTop: "20px", width: "60rem", float: "left" }}>
          <Map />
        </Card>
        <Card
          style={{
            marginLeft: "5px",
            marginTop: "120px",
            width: "30rem",
            float: "left",
            borderRadius: "5px",
          }}
        >
          <MKInput label="Enter your current location" style={{ margin: "5px" }} />
          <br />
          <MKInput label="Enter the destination" style={{ margin: "5px" }} />
          <Button color="primary">Request Now</Button>
        </Card>
        <br />
      </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default TaxiReservation;
