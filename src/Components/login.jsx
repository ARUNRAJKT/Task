import React, { useState } from 'react';
import { Paper, Button, TextField, Container } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export default function Login() {
  // Navigation setup
  const navGate = useNavigate();

  // State for form inputs
  const [input, setInput] = useState({});

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4004/login/log', input)
      .then(function (res) {
        // Successful response handling
        console.log('Success', res);
        localStorage.setItem('loginName', res.data.details.username);
        console.log(input);
        navGate('/Search');
      })
      .catch(function (error) {
        // Error response handling
        const message = error.response.data.message;
        console.log(message);
      });
  };

  return (
    <center>
      <ToastContainer />
      {/* Styled Paper for the login form */}
      <Paper
        shadows
        elevation={0}
        style={{
          width: "75%",
          backgroundColor: "#87CBB9",
          marginTop: "5%",
          borderRadius: "40px",
          boxShadow: "0px 0px 29px 6px rgba(0,0,0,0.75)"
        }}
      >
        <Container>
          <div style={{ marginTop: "-3%" }}>
            <br />
            <h3>USER LOGIN</h3>
            {/* Login Form */}
            <form onSubmit={handleSubmit}>
              {/* Input fields for the login form */}
              <TextField id="outlined-basic" onChange={handleInputChange} label="Customer name" variant="outlined" style={{ width: "60%", backgroundColor: "#B9EDDD", color: '#2F4858' }} name="customerName" /><br /><br />
              <TextField id="outlined-basic" onChange={handleInputChange} label="Username" variant="outlined" style={{ width: "60%", backgroundColor: "#B9EDDD", color: '#2F4858' }} name="username" /><br /><br />
              <TextField id="outlined-basic" onChange={handleInputChange} label="Password" variant="outlined" style={{ width: "60%", backgroundColor: "#B9EDDD", color: '#2F4858' }} name="password" /><br /><br />
              <TextField id="outlined-basic" onChange={handleInputChange} label="Gender" variant="outlined" style={{ width: "60%", backgroundColor: "#B9EDDD", color: '#2F4858' }} name="gender" /><br /><br />
              <TextField id="outlined-basic" onChange={handleInputChange} label="Preferred category" variant="outlined" style={{ width: "60%", backgroundColor: "#B9EDDD", color: '#2F4858' }} name="preferredCategory" /><br />
              <br />
              {/* Submit button */}
              <Button
                type='Submit'
                variant="contained"
                style={{
                  borderRadius: "49% 30% 40% 100% / 100% 78% 49% 0%  ",
                  backgroundColor: "#577D86",
                  width: '114px',
                  height: "60px",
                  marginBottom: "20px",
                  color: "#2F4858"
                }}
              >
                LOGIN
              </Button>
            </form>
          </div>
        </Container>
      </Paper>
    </center>
  );
}
