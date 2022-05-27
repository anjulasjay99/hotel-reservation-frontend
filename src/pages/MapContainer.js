/* eslint-disable no-unused-vars */
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import React from 'react'
import Map from './Map'


function MapContainer(){
  return (
  <div>
    <MKBox component="section" py={7}>
        <Container>
            <center>
             <MKTypography variant="h2" mb={7}>
              Hotel Location
            </MKTypography>
           </center>
            <Grid container alignItems="center" py={3} >
              <Grid item xs={12} sm={3}>
                <MKTypography variant="button" color="blue" fontWeight="bold" textTransform="uppercase">
                  <h3>Tour Lanka</h3>
                  Address: 64 Lotus Rd, Colombo 00100
                  <br/>
                   Phone: 0112 544 544
                  <br/>
                  Visit us: http://www.TourLanka.lk/
                </MKTypography>
             </Grid>
              <Grid item xs={12} sm={9}>
                <Map/>
              </Grid>
           </Grid>  
        </Container>
    </MKBox>
  </div>
  )
}

export default MapContainer

