/* eslint-disable prefer-const */
/* eslint-disable no-else-return */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { ReactSession } from "react-client-session";
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

import axios from 'axios';

function AddReservationHotel() {
  const navigate = useNavigate();
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
  // const [priceA , setPriceA] = useState("");
  // const [priceC , setPriceC] = useState(""); 
  const [rid , setId] = useState(1);
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

  useEffect(() =>{
    ReactSession.setStoreType("memory");
    const userType = ReactSession.get("loginType");
    if(userType === null || userType !== 2) {
      navigate("/loginType");
    }
  });
  function CalculatePayment (SelectedRoom){

    console.log(SelectedRoom);
    rooms.forEach((r) =>{
      if(r.title === SelectedRoom){
        setId(r.id);
      }
      // else{
      //   alert("Room not found!");
      // }
      console.log(rid);
    })
    const booking = {
      roomId : parseInt(rid , 10) ,
      nAdults : parseInt(noOfAdults , 10),
      nChildren : parseInt(noOfChildren , 10)
    }
    axios.post("http://localhost:8070/payments/CalculatePayment" , booking ).then((response)=>{
      console.log("Hi");
        console.log(response.json());
        setTotalPayment(response.json());
      }).catch((err)=>{
          alert(err);
     });


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
                  <MKInput variant="standard" name = "Fname" value = {firstName} label="First Name" fullWidth required
                  onChange = {(e) =>{
                    setFname(e.target.value);
                  }} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" name = "Lname" value = {lastName} label="Last Name" fullWidth required
                  onChange = {(e) =>{
                    setLname(e.target.value);
                  }}                  />
                </Grid>
                <Grid item xs={12}>
                  <MKInput variant="standard" type="email" name = "email" value = {email} label="Email Address" fullWidth required
                  onChange = {(e) =>{
                    setEmail(e.target.value);
                  }}                  />
                </Grid>
                <Grid item xs={12}>
                  <MKInput variant="standard" name = "telNo" value = {telNo} label="Telephone Number" fullWidth required
                  onChange = {(e) =>{
                    setTelno(e.target.value);
                  }}                  />
                </Grid>
                <Grid item xs={12}>
                  <MKInput variant="standard" name = "country" value = {country} label="Country" fullWidth required
                  onChange = {(e) =>{
                    setCountry(e.target.value);
                  }}                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput type="date" variant="standard" name = "CheckIn" value = {checkInDate} label="Check in Date" fullWidth InputLabelProps={{ shrink: true }} required
                  onChange = {(e) =>{
                    setCheckIn(e.target.value);
                  }}                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput type="date" variant="standard" name = "CheckOut" value = {checkOutDate} label="Check out Date" fullWidth InputLabelProps={{ shrink: true }} required
                  onChange = {(e) =>{
                    setCheckOut(e.target.value);
                  }}                  />
                </Grid>
                <Grid item xs={12}>
                  <MKInput variant="standard"  name = "Room" value = {room} label="Room" fullWidth required 
                  onChange = {(e) =>{
                    setRoom(e.target.value);
                   
                  }}                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" type = "number" name = "ChildrenN" value = {noOfChildren} label="Number of Children" fullWidth min = "0"  required 
                  onChange = {(e) =>{
                    setChidren(e.target.value);
                   
                  }}                  />
                  {/* <input type="number" min="1" max = "10" onChange = {(e) =>{
                    setChidren(e.target.value);
                    CalculatePayment(room);
                  }}/> */}
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" type = "number" name = "AdultsN" value = {noOfAdults} label="Number of Adults" fullWidth min = "0"  required
                  onChange = {(e) =>{
                    setAdults(e.target.value);
                  
                  }}                  />

                
                {/* <input type="number" min="1" max = "10" onChange = {(e) =>{
                    setAdults(e.target.value);
                    CalculatePayment(room);
                  }}/> */}
                </Grid>
                <Grid item xs={12} md={12}>
                  <MKButton variant="gradient" color="info" fullWidth onClick = {() =>{
                    CalculatePayment(room);
                  }} >Get Payment</MKButton>
                </Grid>
                
                <Grid item xs={12}>
                  <MKInput variant="standard" name = "TotalPayment" value = {totalPayment} label="Total Payment" fullWidth  disabled          />
                </Grid>
              </Grid> <br/>
              <Grid container item justifyContent="center" xs={12} my={2}>
                <MKButton type="submit" variant="gradient" color="info"  fullWidth circular onClick = {(event) =>{
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
