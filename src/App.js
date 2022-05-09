/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";

// Material Kit 2 React routes

import routes from "routes";
import ReserveRoom from "pages/ReserveRoom";
import MyReservations from "pages/MyReservations";
import CancelReservation from "pages/CancelReservation";
import Payment from "pages/Payment";
import ViewReservation from "pages/ViewReservationsHotel";
import AddReservationHotel from "pages/AddReservation";
import PaymentSuccess from "pages/PaymentSuccess";
import PaymentUnsuccessful from "pages/PaymentUnsuccessful";
import RoomsView from "pages/Rooms";
import MapContainer from "pages/MapContainer";
import UpdateReservation from "pages/updateReservation";

export default function App() {
  const { pathname } = useLocation();
  const [rsvInfo, setrsvInfo] = useState({});

  const setRsvInfo = (rsv) => {
    setrsvInfo(rsv);
    console.log(rsvInfo);
  };

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/presentation" element={<Presentation />} />
        <Route path="*" element={<Navigate to="/presentation" />} />
        <Route path="/reserve-room" element={<ReserveRoom />} />
        <Route path="/my-reservations" element={<MyReservations />} />
        <Route path="/cancel-reservation" element={<CancelReservation />} />
        <Route path="/payment" element={<Payment setRsvInfo={setRsvInfo} />} />
        <Route path="/add-reservation-hotel" element={<AddReservationHotel />} />
        <Route path="/view-reservation-hotel" element={<ViewReservation />} />
        <Route path="/payment-success" element={<PaymentSuccess rsvInfo={rsvInfo} />} />
        <Route path="/payment-unsuccessful" element={<PaymentUnsuccessful />} />
        <Route path="/view-rooms" element={<RoomsView />} />
        <Route path="/view-location" element={<MapContainer />} />
        <Route path="/update" element={<UpdateReservation />} />
      </Routes>
    </ThemeProvider>
  );
}
