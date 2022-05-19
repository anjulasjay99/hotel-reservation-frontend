/* eslint no-underscore-dangle: ["error", { "allow": ["_id", "_bar"] }] */
/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from "react";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ReactSession } from "react-client-session";

function ViewReservation() {
  const navigate = useNavigate();
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    ReactSession.setStoreType("memory");
    const userType = ReactSession.get("loginType");
    if (userType === null || userType !== 2) {
      navigate("/loginType");
    }
    axios
      .get("http://localhost:8280/reservation/viewreservation")
      .then((res) => {
        console.log(res);
        setReservations(res.data);
      })
      .catch((err) => {
        alert("Error");
        console.log(err);
      });
  });

  const getData = () => {
    axios.get(`http://localhost:8280/reservation/viewreservation`).then((res) => {
      setReservations(res.data);
    });
  };

  // delete a reservation
  const deleteReservation = (reservation) => {
    console.log(reservation);
    axios
      .delete(`http://localhost:8280/reservation/deletereservation/${reservation._id}`)
      .then((data) => {
        alert("Reservation deleted");
        getData();
      });
  };

  return (
    <MKBox component="section" py={12}>
      <div style={{ margin: "20px" }}>
        <h3 style={{ marginLeft: "40px" }}>Reservation Details</h3>
        <br />
        <br />
        <div style={{ marginLeft: "20px" }}>
          <table className="table table-striped text-nowrap">
            <thead>
              <th scope="col">#</th>

              <th scope="col" style = {{padding : "0px 15px"}}>First Name</th>
              <th scope="col" style = {{padding : "0px 15px"}}>Last Name</th>
              <th scope="col" style = {{padding : "0px 15px"}}>Email Address</th>
              <th scope="col" style = {{padding : "0px 15px"}}>Telephone Number</th>
              <th scope="col" style = {{padding : "0px 15px"}}>Country</th>
              <th scope="col" style = {{padding : "0px 15px"}}>Check In Date</th>
              <th scope="col" style = {{padding : "0px 15px"}}>Check Out Date</th>
              <th scope="col" style = {{padding : "0px 15px"}}>Room</th>
              <th scope="col" style = {{padding : "0px 15px"}}>Number of Children</th>
              <th scope="col" style = {{padding : "0px 15px"}}>Number of Adults</th>
              <th scope="col" style = {{padding : "0px 15px"}}>Payment</th>
              <th scope="col" style = {{padding : "0px 15px"}}>Actions</th>
            </thead>
            <tbody>
              {reservations.map((reservation) =>(
                              <tr>
                              <th scope="row">{reservations.indexOf(reservation) + 1}</th>
                              <td>{reservation.firstName}</td>
                              <td>{reservation.lastName}</td>
                              <td>{reservation.email}</td>
                              <td>{reservation.telNo}</td>
                              <td>{reservation.country}</td>
                              <td>{reservation.checkInDate}</td>
                              <td>{reservation.checkOutDate}</td>
                              <td>{reservation.room}</td>
                              <td style={{textAlign :"center"}}>{reservation.noOfChildren}</td>
                              <td style={{textAlign :"center"}}>{reservation.noOfAdults}</td>
                              <td>{reservation.totalPayment}</td>
                              <td>
                                <MKButton variant="gradient" color="info"
                                 onClick = {()=>{
                                   console.log(reservation._id)
                                   navigate(`/update-reservation/${reservation._id}`);
                                 }}>
                                Edit
                                </MKButton>
                                
                                <MKButton variant="gradient" color="error"
                                onClick = {()=>{
                                  deleteReservation(reservation)
                                }}>
                                  Delete
                                </MKButton>
                              </td>
                            </tr>
              ))}

                    <MKButton
                      variant="gradient"
                      color="error"
                      onClick={() => {
                        deleteReservation(reservation);
                      }}
                    >
                      Delete
                    </MKButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MKBox>
  );
}
export default ViewReservation;
