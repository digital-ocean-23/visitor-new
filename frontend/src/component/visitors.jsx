import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { useHistory } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component/visitors.css';


const UserRegistrationForm = () => {
  // State to store form data
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    companyname: "",
    email: "",
    address: "",
    phone: "",
    designation: "",
    purpose: "",
    report: "", // Added 'report' field
    visitingwhom:"", //added column visiting whom
    location:"",// visitor location
  });

  // Function to handle input changes and update the form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission here (e.g., send data to the server)
    console.log("Form data submitted:", formData);
    // Call your registerVisitor function here if needed
    registerVisitor();

  };

  // Function to send form data to the server
  const registerVisitor = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/register_visitor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }),
      });
      if (response.status === 200) {
        const data = await response.json();
        console.log("Success: ", data);
        history.push('/Alldata');

      } else {
        console.log("Failed to register visitor.");
      }
    } catch (error) {
      console.error("Error: ", error);
    }

  };

  return (
    <Container fluid className="bg-blue p-0 m-0 d-flex flex-column justify-content-center"  style={{ minheight: "100vh" }}>
      <h3 className="text-center mt-3 mb-0">VISITOR'S FORM</h3>
      <Row className="mt-3 mb-5">
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="currentColor"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
        </div>
      </Row>

      <Form onSubmit={registerVisitor}>
        <Row className="mb-3">
          <Col md={5} className="mx-5">
            <Form.Group controlId="name">
              <Form.Label>Visitor's Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter Visitor Name"
                required
              />
            </Form.Group>
          </Col>

          <Col md={5} className="mx-4">
            <Form.Group controlId="companyname">
              <Form.Label>Visitor's Company Name</Form.Label>
              <Form.Control
                type="text"
                name="companyname"
                value={formData.companyname}
                onChange={handleInputChange}
                placeholder="Enter Visitor's Company Name"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={5} className="mx-5">
            <Form.Group controlId="email">
              <Form.Label>Visitor's Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter Visitor's Email"
              />
            </Form.Group>
          </Col>

          <Col md={5} className="mx-4">
            <Form.Group controlId="address">
              <Form.Label>Visitor's Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                placeholder="Enter Visitor's Address"
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={5} className="mx-5">
            <Form.Group controlId="phone">
              <Form.Label>Visitor's Phone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter Visitor's Phone"
                required
              />
            </Form.Group>
          </Col>

          <Col md={5} className="mx-4">
            <Form.Group controlId="designation">
              <Form.Label>Visitor's Designation</Form.Label>
              <Form.Control
                type="text"
                name="designation"
                value={formData.designation}
                placeholder="Enter Designation"
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
        <Col md={5} className="mx-5">
          <Form.Group controlId="purpose">
            <Form.Label>Visitor's Purpose</Form.Label>
            <Form.Control
              type="text"
              name="purpose"
              value={formData.purpose}
              onChange={handleInputChange}
              placeholder="Enter Purpose"
              required
            />
          </Form.Group>
        </Col>


        <Col md={5} className="mx-4">
          <Form.Group controlId="report">
            <Form.Label>Visitor's Report</Form.Label>
            <Form.Control
              type="text"
              name="report"
              value={formData.report}
              onChange={handleInputChange}
              placeholder="Enter Report"
              required
            />
          </Form.Group>
        </Col>
        </Row>

        <Row className="mb-3">
        <Col md={5} className="mx-5">
          <Form.Group controlId="visitingwhom">
            <Form.Label>VisitingWhom</Form.Label>
            <Form.Control
              type="text"
              name="visitingwhom"
              value={formData.visitingwhom}
              onChange={handleInputChange}
              placeholder="Enter Whomvisiting"
              required
            />
          </Form.Group>
        </Col>

        <Col md={5} className="mx-4">
          <Form.Group controlId="location">
            <Form.Label>VisitorLocation </Form.Label>
            <Form.Control
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Enter VisitorLocation"
              required
            />
          </Form.Group>
        </Col>
        </Row>
        <Row className="mt-5">
          <Col md={9}className="mx-5 ">
            <Form.Group controlId="termsCheckbox">
              <Form.Check
                type="checkbox"
                label="I agree to terms & conditions. I understand all payments to Passion are non-refundable and non-transferrable. 
                I further acknowledge that I have been advised to purchase travel insurance to protect my investment."
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-4 mb-5">
          <div className="text-center ">
            <Button type="submit" className="w-25" variant="dark" >
              Register
            </Button>
          </div>
        </Row>
      </Form>
    </Container>
  );
};

export default UserRegistrationForm;
