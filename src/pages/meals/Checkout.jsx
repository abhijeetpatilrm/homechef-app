import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import { placeOrder } from "../../api/orders";
import { Box, Typography, Button, TextField, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cartItems, clearCart, totalPrice } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <Typography variant="h6" align="center" mt={4}>
        Your cart is empty.
      </Typography>
    );
  }

  const handlePlaceOrder = () => {
    if (!address.trim()) {
      setError("Delivery address is required");
      return;
    }
    setError(null);
    setLoading(true);

    placeOrder({
      userId: user.id,
      items: cartItems,
      total: totalPrice,
      deliveryAddress: address,
      orderDate: new Date().toISOString(),
    })
      .then((order) => {
        clearCart();
        setLoading(false);
        navigate(`/orders/${order.id}`);
      })
      .catch(() => {
        setError("Failed to place order. Try again.");
        setLoading(false);
      });
  };

  return (
    <Box maxWidth={600} mx="auto" p={3}>
      <Typography variant="h4" mb={3}>
        Checkout
      </Typography>
      <Typography variant="h6">
        Total Amount: ${totalPrice.toFixed(2)}
      </Typography>

      <TextField
        label="Delivery Address"
        fullWidth
        multiline
        minRows={3}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        sx={{ mt: 3 }}
      />

      {/* Mock payment options */}
      <Typography variant="h6" mt={4}>
        Payment Method
      </Typography>
      <Typography variant="body2" color="textSecondary">
        * This is a mock payment interface.
      </Typography>
      <Box mt={1}>
        <Button variant="outlined" disabled sx={{ mr: 2 }}>
          Credit/Debit Card
        </Button>
        <Button variant="outlined" disabled>
          UPI
        </Button>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mt: 3 }}>
          {error}
        </Alert>
      )}

      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 4 }}
        onClick={handlePlaceOrder}
        disabled={loading}
      >
        {loading ? "Placing Order..." : "Place Order"}
      </Button>
    </Box>
  );
}
