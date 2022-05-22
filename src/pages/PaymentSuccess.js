/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactSession } from "react-client-session";

// Material Kit 2 React components
import MKBox from "components/MKBox";

import bgImage from "assets/images/success.png";

function PaymentSuccess({ rsvInfo }) {
  const navigate = useNavigate();
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const saveReservation = async (reservation) => {
    await fetch(`http://localhost:8280/reservation/addreservation`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(reservation),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Added successfully!");
        localStorage.setItem("reservationDetails", "");
      })
      .catch((err) => {
        console.log("Error!");
      });
  };

  useEffect(() => {
    if (!sessionStorage.getItem("username")) {
      navigate("/loginType");
    } else {
      const reservation = localStorage.getItem("reservationDetails");
      if (reservation !== "" || reservation !== undefined) {
        saveReservation(JSON.parse(reservation));
      }
    }
  }, []);

  return (
    <div style={style}>
      <MKBox
        display={{ xs: "none", lg: "flex" }}
        width="95px"
        height="100px"
        borderRadius="lg"
        ml={2}
        mt={2}
        sx={{ backgroundImage: `url(${bgImage})`, backgroundSize: "contain" }}
      />
      <h1>Payment Successful!</h1>
      <h6>{rsvInfo.totalPayment}</h6>
      <Link to="/my-reservations">See your reservations</Link>
    </div>
  );
}

export default PaymentSuccess;
