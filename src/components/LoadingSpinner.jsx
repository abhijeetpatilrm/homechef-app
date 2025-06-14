import React from "react";
import { CircularProgress, Box } from "@mui/material";

export default function LoadingSpinner() {
  return (
    <Box display="flex" justifyContent="center" my={4}>
      <CircularProgress />
    </Box>
  );
}
