import React, { useState } from "react";
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";

const initialSchedule = [
  { day: "Monday", subject: "Math", time: "9:00 AM - 10:30 AM", location: "Room A101" },
  { day: "Tuesday", subject: "Physics", time: "10:00 AM - 11:30 AM", location: "Room B202" },
  { day: "Wednesday", subject: "CS101", time: "2:00 PM - 3:30 PM", location: "Room C303" }
];

const ClassSchedule = () => {
  const [schedule, setSchedule] = useState(initialSchedule);

  return (
    <Card style={{ margin: "20px", padding: "10px" }}>
      <CardContent>
        <Typography variant="h5">📖 Class Schedule</Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>Day</b></TableCell>
                <TableCell><b>Subject</b></TableCell>
                <TableCell><b>Time</b></TableCell>
                <TableCell><b>Location</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {schedule.map((classItem, index) => (
                <TableRow key={index}>
                  <TableCell>{classItem.day}</TableCell>
                  <TableCell>{classItem.subject}</TableCell>
                  <TableCell>{classItem.time}</TableCell>
                  <TableCell>{classItem.location}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default ClassSchedule;
