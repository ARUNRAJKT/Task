import React from "react";
import { Container, Button, Grid, Typography } from '@mui/material';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <React.Fragment>
      {/* Header Section */}
      <Grid container style={{ backgroundColor: "#569DAA" }}>
        <Grid item sm={4}>
          <Container>
            <Typography style={{ marginTop: "2%", marginBottom: '2%', fontSize: "40px", fontFamily: 'cursive', color: '#2F4858' }}>
              PRODUCTS
            </Typography>
          </Container>
        </Grid>
        <Grid item sm={3}></Grid>
        <Grid item sm={5}>
          {/* Navigation Section */}
          <Container container style={{ marginTop: "2%", marginBottom: '2%' }}>
            <Link to='/'>
              <Button variant="text" style={buttonStyle}>LOGIN</Button>
            </Link>
            <Link to='/Search'>
              <Button variant="text" style={buttonStyle}>PRODUCT SEARCH</Button>
            </Link>
            <Link to='/Suggest'>
              <Button variant="text" style={buttonStyle}>PRODUCT SUGGEST</Button>
            </Link>
          </Container>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

// Button Style
const buttonStyle = {
  borderRadius: "49% 30% 40% 100% / 100% 78% 49% 0%",
  backgroundColor: "#577D86",
  width: '114px',
  height: "60px",
  marginLeft: '2%',
  color: '#2F4858'
};