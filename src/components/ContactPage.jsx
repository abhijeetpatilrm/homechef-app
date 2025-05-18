import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <Box
      sx={{
        backgroundImage: "url('src/assets/contact-bg.jpg')", // update path if needed
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        py: 10,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 3,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(3px)",
            color: "#333", // dark text color for Typography
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ color: "#222" }}>
            Contact Us
          </Typography>
          <Typography variant="body1" mb={3} sx={{ color: "#444" }}>
            Have a question or feedback? We'd love to hear from you!
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              InputLabelProps={{ style: { color: "#333" } }} // label color dark
              inputProps={{ style: { color: "#222" } }} // input text color dark
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              type="email"
              required
              InputLabelProps={{ style: { color: "#333" } }}
              inputProps={{ style: { color: "#222" } }}
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              required
              InputLabelProps={{ style: { color: "#333" } }}
              inputProps={{ style: { color: "#222" } }}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2, bgcolor: "primary.main" }}
            >
              Send Message
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
