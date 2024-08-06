import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import App from "./App";

const Theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
