import React from "react";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";

function ViewReservation() {
  const number = 1;
  return (
    <MKBox component="section" py={12}>
      <div style={{ margin: "20px" }}>
        <h3 style={{ marginLeft: "40px" }}>Reservation Details</h3>
        <br />
        <br />
        <div style={{ marginLeft: "20px" }}>
          <table className="table table-striped">
            <thead>
              <th scope="col">#</th>
              <th scope="col">Reservation ID</th>
              <th scope="col">Reservation Date</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email Address</th>
              <th scope="col">Telephone Number</th>
              <th scope="col">Country</th>
              <th scope="col">Check In Date</th>
              <th scope="col">Check Out Date</th>
              <th scope="col">Room</th>
              <th scope="col">Number of Children</th>
              <th scope="col">Number of Adults</th>
              <th scope="col">Payment</th>
              <th scope="col">Actions</th>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{number + 1}</th>
                <td>ID</td>
                <td>Date</td>
                <td>FName</td>
                <td>LName</td>
                <td>Mail</td>
                <td>Tel</td>
                <td>Country</td>
                <td>CINDATE</td>
                <td>COUTDATE</td>
                <td>ROOM</td>
                <td>NC</td>
                <td>NA</td>
                <td>Payment</td>
                <td>
                  <MKButton variant="gradient" color="info">
                    Edit
                  </MKButton>
                  <MKButton variant="gradient" color="error">
                    Delete
                  </MKButton>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </MKBox>
  );
}
export default ViewReservation;
