import React from 'react';
import { Link } from 'react-router-dom';

const Homepage_task01 = React.forwardRef(({ data }, ref) => {
  return (
    <div>
      {/* <h3>Home page</h3> */}
      <div style={{ border: '1px solid black', height: "70px"}}>
        <table border={1}>
          <thead style={{ width:"60px",height:"30px"}}>
            <tr>
              <th>Name </th>
              <th>Subject</th>
              <th>Email</th>
              <th>Gender</th>
              <th>City</th>
              <th>
                <Link to="/user"> <button ref={ref}>+ Add New User</button> </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {data.map((e, i) => (
              <tr key={i}>
                <td >{e.name}</td>
                <td >{e.subject}</td>
                <td >{e.email}</td>
                <td >{e.gender}</td>
                <td >{e.city}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default Homepage_task01;
