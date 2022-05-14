/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/self-closing-comp */
/* eslint-disable spaced-comment */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Card, CardTitle, Button, CardText, Row, Col, Table } from "reactstrap";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/header.jpg";
import { MdPersonAddAlt, MdOutlineGroups } from "react-icons/md";
import "./css/admin.css";
import axios from "axios";

function ViewEmployees() {
  const navigate = useNavigate();
  const [employees, setemployees] = useState([]);

  const fetchEmployees = async () => {
    await axios
      .get("http://localhost:8070/employees")
      .then((res) => {
        setemployees(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        sticky
      />
      <MKBox
        minHeight="75vh"
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

      <Container>
        <Grid py={2} mx={3}>
          <MKTypography variant="h3">Employees</MKTypography>
        </Grid>
      </Container>

      <Container>
        <Row>
          <Col>
            <Table size="sm" style={{ background: "white" }}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>NIC</th>
                  <th>Date of Birth</th>
                  <th>Email</th>
                  <th>Telephone No.</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp) => {
                  return (
                    <tr>
                      <td>{employees.indexOf(emp) + 1}</td>
                      <td>{emp.firstName}</td>
                      <td>{emp.lastName}</td>
                      <td>{emp.nic}</td>
                      <td>{emp.dateOfBirth}</td>
                      <td>{emp.email}</td>
                      <td>{emp.telNo}</td>
                      <td>{emp.address}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ViewEmployees;
