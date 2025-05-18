import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff5722", // vibrant orange
    },
    secondary: {
      main: "#4caf50", // fresh green
    },
    background: {
      default: "#121212", // deep dark background
      paper: "#1e1e1e", // card/modal background
    },
    text: {
      primary: "#ffffff",
      secondary: "#bbbbbb",
    },
  },
  typography: {
    fontFamily: "Poppins, Roboto, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "Poppins, Roboto, sans-serif",
          backgroundColor: "#121212",
          color: "#ffffff",
          margin: 0,
          padding: 0,
          lineHeight: 1.5,
          "-webkit-font-smoothing": "antialiased",
          "-moz-osx-font-smoothing": "grayscale",
        },
        "*": {
          boxSizing: "border-box",
        },
        a: {
          color: "#ff5722",
          textDecoration: "none",
          "&:hover": {
            color: "#e64a19",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          textTransform: "none",
          fontWeight: 600,
          padding: "10px 20px",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 4px 14px rgba(255, 87, 34, 0.5)",
          },
        },
        containedPrimary: {
          backgroundColor: "#ff5722",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#e64a19",
          },
        },
        outlined: {
          borderColor: "#ff5722",
          color: "#ff5722",
          "&:hover": {
            borderColor: "#e64a19",
            color: "#e64a19",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#1e1e1e",
          borderRadius: "16px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#1e1e1e",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#1c1c1c",
        },
      },
    },
  },
});

export default theme;
