import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';



const Alldata = () => {
  const [alldata, setAlldata] = useState([]);

  useEffect(() => {
    // Fetch visitor data from your API (replace with your API URL)
    fetch("http://127.0.0.1:8000/Alldata")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // this is whenever getting error in the response
      })
      .then((data) => {
        console.log("Fetched data:", data);

        // const jsonData = (data.data);
        setAlldata(JSON.parse(data.data));
      })
      .catch((error) => {
        console.error("Error fetching visitor data:", error);
      });
  }, [])

  return (
    <div>
      <h1 className="text-center">Visitor List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Company Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Designation</th>
            <th>Purpose</th>
            <th>Report</th>
            <th>VisitingWhom</th>
            <th>VisitorLocation</th>
          </tr>
        </thead>
        <tbody>
          {alldata.map((visitor) => (
            <tr key={visitor.pk}>
              <td>{visitor.fields.name}</td>
              <td>{visitor.fields.companyname}</td>
              <td>{visitor.fields.email}</td>
              <td>{visitor.fields.address}</td>
              <td>{visitor.fields.phone}</td>
              <td>{visitor.fields.designation}</td>
              <td>{visitor.fields.purpose}</td>
              <td>{visitor.fields.report}</td>
              <td>{visitor.fields.visitingwhom}</td>
              <td>{visitor.fields.location}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Alldata;
