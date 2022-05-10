/* eslint-disable prefer-const */
/* eslint-disable no-else-return */
/* eslint-disable no-unused-vars */
import { useState } from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

import axios from 'axios';

function AddReservationHotel() {
  const [checked, setChecked] = useState(true);
  const [firstName , setFname] = useState("");
  const [lastName , setLname] = useState("");
  const [email , setEmail] = useState("");
  const [telNo , setTelno] = useState("");
  const [country , setCountry] = useState("");
  const [checkInDate , setCheckIn] = useState("");
  const [checkOutDate , setCheckOut] = useState("");
  const [room , setRoom] = useState("");
  const [noOfChildren , setChidren] = useState(0);
  const [noOfAdults , setAdults] = useState(0);
  const [totalPayment , setTotalPayment] = useState("");
  const [priceA , setPriceA] = useState("");
  const [priceC , setPriceC] = useState(""); 
  
  const hotel = "Rivers Edge Nature Resorts";

  const rooms = [
    {
      id: "1",
      title: "Deluxe King Size",
      priceA: "25,000",
      priceC: "10,000"
    },
    {
      id: "2",
      title: "King Size Sleigh Bed",
      priceA: "35,000",
      priceC: "15,000"
    },
    {
      id: "3",
      title: "Compact Double",
      priceA: "45,000",
      priceC: "20,000"
    },
    {
      id: "4",
      title: "Deluxe Twin/Large Double",
      priceA: "45,000",
      priceC: "20,000"
    },
    {
      id: "5",
      title: "King Size Four Poster",
      priceA: "45,000",
      priceC: "20,000"
    },
  ];
  const handleChecked = () => setChecked(!checked);

  function CalculatePayment (SelectedRoom){
      rooms.forEach((r) =>{
        if(r.title === SelectedRoom){
          setPriceA(r.priceA);
          setPriceC(r.priceC);
        }
        
          
      });
      setTotalPayment(priceA * noOfAdults + priceC * noOfChildren)
  }

  function AddReservationClick(e) {
    e.preventDefault();

    const newReservation = {
      firstName,
      lastName,
      email,
      telNo,
      country,
      checkInDate,
      checkOutDate,
      noOfChildren,
      noOfAdults,
      room,
      hotel,
      totalPayment
    }

    axios.post("http://localhost:8070/reservation/save" , newReservation ).then(()=>{
        e.target.reset();
      }).catch((err)=>{
          alert(err);
     });

  }
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
          <MKTypography variant="h3" mb={1}>
            Contact Us
          </MKTypography>
        </Grid>
        <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
          <MKBox width="100%" component="form" method="post" autocomplete="off">
            <MKBox p={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" name = "Fname" value = {firstName} label="First Name" fullWidth
                  onChange = {(e) =>{
                    setFname(e.target.value);
                  }} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" name = "Lname" value = {lastName} label="Last Name" fullWidth 
                  onChange = {(e) =>{
                    setLname(e.target.value);
                  }}                  />
                </Grid>
                <Grid item xs={12}>
                  <MKInput variant="standard" type="email" name = "email" value = {email} label="Email Address" fullWidth 
                  onChange = {(e) =>{
                    setEmail(e.target.value);
                  }}                  />
                </Grid>
                <Grid item xs={12}>
                  <MKInput variant="standard" name = "telNo" value = {telNo} label="Telephone Number" fullWidth 
                  onChange = {(e) =>{
                    setTelno(e.target.value);
                  }}                  />
                </Grid>
                <Grid item xs={12}>
                  <MKInput variant="standard" name = "country" value = {country} label="Country" fullWidth 
                  onChange = {(e) =>{
                    setCountry(e.target.value);
                  }}                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput type="date" variant="standard" name = "CheckIn" value = {checkInDate} label="Check in Date" fullWidth 
                  onChange = {(e) =>{
                    setCheckIn(e.target.value);
                  }}                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput type="date" variant="standard" name = "CheckOut" value = {checkOutDate} label="Check out Date" fullWidth 
                  onChange = {(e) =>{
                    setCheckOut(e.target.value);
                  }}                  />
                </Grid>
                <Grid item xs={12}>
                  <MKInput variant="standard" name = "Room" value = {room} label="Room" fullWidth 
                  onChange = {(e) =>{
                    setRoom(e.target.value);
                  }}                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" name = "ChildrenN" value = {noOfChildren} label="Number of Children" fullWidth 
                  onChange = {(e) =>{
                    setChidren(e.target.value);
                  }}                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" name = "AdultsN" value = {noOfAdults} label="Number of Adults" fullWidth 
                  onChange = {(e) =>{
                    setAdults(e.target.value);
                  }}                  />
                </Grid>
                <Grid item xs={12}>
                  <MKInput variant="standard" name = "TotalPayment" value = {totalPayment} label="Total Payment" fullWidth 
                  onClick = {(e) =>{
                    CalculatePayment({room});
                  }}  disabled          />
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
                    color="dark"
                  >
                    Terms and Conditions
                  </MKTypography>
                </Grid>
              </Grid>
              <Grid container item justifyContent="center" xs={12} my={2}>
                <MKButton type="submit" variant="gradient" color="dark" fullWidth>
                  Add Reservation
                </MKButton>
              </Grid>
            </MKBox>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AddReservationHotel;
