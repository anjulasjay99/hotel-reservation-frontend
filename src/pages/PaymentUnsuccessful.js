/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

// Material Kit 2 React components
import MKBox from "components/MKBox";

import bgImage from "assets/images/failed.png";

function PaymentUnsuccessful() {
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };
  return (
    <div style={style}>
      <MKBox
        display={{ xs: "none", lg: "flex" }}
        width="95px"
        height="80px"
        borderRadius="lg"
        ml={2}
        mt={2}
        sx={{ backgroundImage: `url(${bgImage})`, backgroundSize: "contain" }}
      />
      <h1>Payment Unsuccessful!</h1>
      <h5>Your reservation was cancelled!</h5>
      <Link to="/my-reservations">Go Back</Link>
    </div>
  );
}

export default PaymentUnsuccessful;
