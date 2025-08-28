import React from "react";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import PNRForm from "../components/PNRForm";

function Home() {
  const isMobile = useMediaQuery('(max-width:660px)');
  const smallMobile = useMediaQuery('(max-width:545px)');
  return (
    <Container
      sx={{
        boxShadow: "0px 0px 5px black",
        py: 5,
        borderRadius: 3,
        bgcolor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 600, fontFamily: "Montserrat, sans-serif" }}
      >
        {smallMobile?"PNR Enquiry":"Indian Railways PNR Enquiry"}
      </Typography>
      <Typography
        gutterBottom
        variant="body1"
        sx={{
          width: isMobile?'90%':"60%",
          textAlign: "center",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
      {smallMobile?"Get real-time updates on your train booking.":`Get real-time updates on your train booking. Enter your PNR to know seat
        availability, chart status, and journey details.`}
       
      </Typography>
      <PNRForm />
    </Container>
  );
}

export default Home;
