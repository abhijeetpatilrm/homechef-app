import React from "react";
import {
  Box,
  Typography,
  Link as MUILink,
  Container,
  Grid,
  Stack,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <Box
      bgcolor="primary.main"
      color="white"
      py={6}
      mt={8}
      fontFamily="Montserrat, sans-serif"
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              About HomeChef
            </Typography>
            <Typography variant="body2">
              HomeChef connects food lovers with talented local chefs. Whether
              you're craving a homely meal or a gourmet experience, we've got
              you covered — fresh, fast, and flavorful.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <MUILink href="/" color="inherit" underline="hover">
                Home
              </MUILink>
              <MUILink href="/meals" color="inherit" underline="hover">
                Meals
              </MUILink>
              <MUILink href="/contact" color="inherit" underline="hover">
                Contact Us
              </MUILink>
              <MUILink href="/about" color="inherit" underline="hover">
                About Us
              </MUILink>
            </Stack>
          </Grid>

          {/* Contact & Social */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Connect with Us
            </Typography>
            <Typography variant="body2">Email: support@homechef.com</Typography>
            <Typography variant="body2" mb={1}>
              Phone: +91 98765 43210
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton href="#" color="inherit" size="small">
                <FacebookIcon />
              </IconButton>
              <IconButton href="#" color="inherit" size="small">
                <TwitterIcon />
              </IconButton>
              <IconButton href="#" color="inherit" size="small">
                <InstagramIcon />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom Footer */}
        <Box textAlign="center" pt={5}>
          <Typography variant="body2" color="white">
            © {new Date().getFullYear()} HomeChef Delivery. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
