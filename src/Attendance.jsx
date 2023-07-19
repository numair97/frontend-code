import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Attendance = () => {
  const [attendances, setAttendances] = useState([]);

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const response = await axios.get('http://localhost/api/employees/1/attendances'); 
          setAttendances(response.data.attendance);
      } catch (error) {
        console.error('Error fetching attendance data:', error);
      }
    };

    fetchAttendanceData();
  }, []);

  return (
    <div>
      <h1>Attendance Information</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Total Working Hours</th>
          </tr>
        </thead>
        <tbody>
          {attendances.map((attendance) => (
            <tr key={attendance.id}>
              <td>{attendance.employee.name}</td>
              <td>{attendance.check_in || 'N/A'}</td>
              <td>{attendance.check_out || 'N/A'}</td>
              <td>{attendance.total_hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
