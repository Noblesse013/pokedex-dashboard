import React, { useState } from "react";
import { Card, CardContent, Typography, Button, TextField, List, ListItem, ListItemText } from "@mui/material";

const QuizReminder = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [quizTitle, setQuizTitle] = useState("");
  const [quizDate, setQuizDate] = useState("");

  const addQuiz = () => {
    if (!quizTitle || !quizDate) return;
    
    const newQuiz = { title: quizTitle, date: quizDate };
    setQuizzes([...quizzes, newQuiz]);

    // Clear inputs
    setQuizTitle("");
    setQuizDate("");
  };

  return (
    <Card style={{ margin: "20px", padding: "10px" }}>
      <CardContent>
        <Typography variant="h5">📅 Quiz Reminder</Typography>

        <TextField 
          label="Quiz Title" 
          value={quizTitle} 
          onChange={(e) => setQuizTitle(e.target.value)} 
          fullWidth 
          margin="dense"
        />
        <TextField 
          label="Quiz Date" 
          type="date" 
          value={quizDate} 
          onChange={(e) => setQuizDate(e.target.value)} 
          fullWidth 
          margin="dense"
          InputLabelProps={{ shrink: true }}
        />
        
        <Button variant="contained" color="primary" onClick={addQuiz} style={{ marginTop: "10px" }}>
          Add Quiz
        </Button>

        <List>
          {quizzes.map((quiz, index) => (
            <ListItem key={index}>
              <ListItemText 
                primary={quiz.title} 
                secondary={`📆 Due: ${quiz.date}`} 
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default QuizReminder;
