import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

export default function About() {
  return (
    <Box bgcolor="#000" py={8} fontFamily="Montserrat, sans-serif">
      <Container maxWidth="lg">
        {/* Title & Subtitle */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom color="#fff">
            About HomeChef
          </Typography>
          <Typography variant="subtitle1" color="#ccc">
            Connecting food lovers with talented chefs for unforgettable
            culinary experiences
          </Typography>
        </Box>

        {/* Our Mission Section */}
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Left Text Side */}
          <Grid item xs={12} md={6}>
            <Box maxWidth="480px">
              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
                color="#fff"
              >
                Our Mission
              </Typography>
              <Typography variant="body1" color="#ddd" lineHeight={1.7}>
                At HomeChef, we aim to bring the warmth of homemade meals to
                every doorstep. Our mission is to empower local home chefs by
                connecting them with nearby food lovers craving fresh, healthy,
                and authentic home-cooked dishes. We’re redefining food delivery
                with a hyperlocal, heart-made experience—served with love and
                delivered in real time.
              </Typography>
            </Box>
          </Grid>

          {/* Right Image Side */}
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src="https://img.freepik.com/premium-vector/chef-is-cooking-food-kitchen_905719-6862.jpg?ga=GA1.1.1024841623.1747501129&semt=ais_hybrid&w=740"
              alt="Chef cooking"
              sx={{
                width: "100%",
                maxWidth: "260px", // Keep image compact
                borderRadius: 2,
                boxShadow: 3,
                objectFit: "cover",
                ml: "auto",
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* New Section: Meet the Mind Behind HomeChef */}
      <Box mt={10} textAlign="center" px={3}>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="#fff"
          gutterBottom
          sx={{
            fontFamily: "'Playfair Display', serif",
            letterSpacing: 1.2,
          }}
        >
          Meet the Mind Behind HomeChef
        </Typography>

        <Container maxWidth="md">
          <Typography
            variant="body1"
            color="#ccc"
            lineHeight={1.8}
            sx={{
              fontSize: "1.1rem",
              fontFamily: "'Montserrat', sans-serif",
              mt: 2,
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            I'm Abhijeet Patil — the developer, designer, and visionary behind
            HomeChef. This platform is a one-person creation driven by a passion
            for connecting local kitchens with nearby food lovers through fresh,
            homemade meals and seamless technology.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
