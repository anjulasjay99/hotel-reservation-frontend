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
  const [totalPayment , setTotalPayment] = useState(0);
  const [priceA , setPriceA] = useState("");
  const [priceC , setPriceC] = useState(""); 
  
  const hotel = "Rivers Edge Nature Resorts";

  const rooms = [
    {
      id: "1",
      title: "Deluxe King Size",
      priceA: 25000,
      priceC: 10000
    },
    {
      id: "2",
      title: "King Size Sleigh Bed",
      priceA: 35000,
      priceC: 15000
    },
    {
      id: "3",
      title: "Compact Double",
      priceA: 45000,
      priceC: 20000
    },
    {
      id: "4",
      title: "Deluxe Twin/Large Double",
      priceA: 45000,
      priceC: 20000
    },
    {
      id: "5",
      title: "King Size Four Poster",
      priceA: 45000,
      priceC: 20000
    },
  ];


  function CalculatePayment (SelectedRoom){
    console.log("Payment");
    console.log(SelectedRoom);
      rooms.forEach((r) =>{
        
        if(r.title === SelectedRoom){
          setPriceA(r.priceA);
          setPriceC(r.priceC);
          console.log(r.title);
          console.log(r.priceA);
          console.log(r.priceC);
        }
        
          
      });
      console.log(noOfAdults );
      console.log(noOfChildren );
      let tot = priceA * noOfAdults + priceC * noOfChildren;
      console.log(tot);
      setTotalPayment(tot);
      console.log(totalPayment);
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

    axios.post("http://localhost:8070/reservation/save/" , newReservation ).then(()=>{
        alert("Reservation added");
      }).catch((err)=>{
          alert(err);
     });

  }
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
          <MKTypography variant="h3" mb={1}>
            Room Reservation
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
                    CalculatePayment(room);
                  }}                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" name = "ChildrenN" value = {noOfChildren} label="Number of Children" fullWidth 
                  onChange = {(e) =>{
                    setChidren(e.target.value);
                    CalculatePayment(room);
                  }}                  />
                  {/* <input type="number" min="1" max = "10" onChange = {(e) =>{
                    setChidren(e.target.value);
                    CalculatePayment(room);
                  }}/> */}
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" name = "AdultsN" value = {noOfAdults} label="Number of Adults" fullWidth 
                  onChange = {(e) =>{
                    setAdults(e.target.value);
                    CalculatePayment(room);
                  }}                  />
                {/* <input type="number" min="1" max = "10" onChange = {(e) =>{
                    setAdults(e.target.value);
                    CalculatePayment(room);
                  }}/> */}
                </Grid>
                <Grid item xs={12}>
                  <MKInput variant="standard" name = "TotalPayment" value = {totalPayment} label="Total Payment" fullWidth  disabled          />
                </Grid>
              </Grid>
              <Grid container item justifyContent="center" xs={12} my={2}>
                <MKButton type="submit" variant="gradient" color="dark" fullWidth onClick = {(event) =>{
                  AddReservationClick(event);
                }}>
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
