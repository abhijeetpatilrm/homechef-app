import React, { useEffect, useState } from "react";
import { getOrderStatus } from "../../api/orders";
import { Box, Typography, LinearProgress } from "@mui/material";
import { useParams } from "react-router-dom";

const steps = ["Accepted", "Preparing", "Out for Delivery", "Delivered"];

export default function OrderStatus() {
  const { orderId } = useParams();
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      getOrderStatus(orderId).then((data) => setStatus(data.status));
    }, 5000);

    return () => clearInterval(interval);
  }, [orderId]);

  const activeStep = steps.indexOf(status);

  return (
    <Box maxWidth={600} mx="auto" p={3}>
      <Typography variant="h4" mb={3}>
        Order Status
      </Typography>
      <Typography variant="h6" mb={2}>
        Order ID: {orderId}
      </Typography>
      <Typography variant="body1" mb={3}>
        Current Status: {status || "Loading..."}
      </Typography>

      <LinearProgress
        variant="determinate"
        value={((activeStep + 1) / steps.length) * 100}
      />

      <Box mt={3} display="flex" justifyContent="space-between">
        {steps.map((step, index) => (
          <Typography
            key={step}
            color={index === activeStep ? "primary" : "textSecondary"}
            fontWeight={index === activeStep ? "bold" : "normal"}
          >
            {step}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
