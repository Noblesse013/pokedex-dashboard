import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const WaterReminder = () => {
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes (1800 seconds)
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  useEffect(() => {
    if (timeLeft === 0) {
      alert("🚰 Time to drink water! Stay hydrated!");
      setTimeLeft(1800); // Reset timer
    }
  }, [timeLeft]);

  return (
    <Card style={{ margin: "20px", padding: "10px" }}>
      <CardContent>
        <Typography variant="h5">💧 Water Reminder</Typography>
        <Typography variant="body1">
          Next reminder in: {Math.floor(timeLeft / 60)} minutes {timeLeft % 60} seconds
        </Typography>
        <Button variant="contained" color="primary" onClick={() => setTimeLeft(1800)} style={{ marginTop: "10px" }}>
          Reset Timer
        </Button>
      </CardContent>
    </Card>
  );
};

export default WaterReminder;
