import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Button,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } =
    useContext(CartContext);
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <Typography variant="h6" align="center" mt={4}>
        Your cart is empty.
      </Typography>
    );
  }

  return (
    <Box p={3} maxWidth={600} mx="auto">
      <Typography variant="h4" mb={3}>
        Your Cart
      </Typography>
      <List>
        {cartItems.map(({ meal, quantity }) => (
          <ListItem
            key={meal.id}
            secondaryAction={
              <>
                <TextField
                  type="number"
                  inputProps={{ min: 1 }}
                  value={quantity}
                  onChange={(e) =>
                    updateQuantity(meal.id, Math.max(1, +e.target.value))
                  }
                  size="small"
                  sx={{ width: 70, mr: 1 }}
                />
                <IconButton edge="end" onClick={() => removeFromCart(meal.id)}>
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            <ListItemText
              primary={meal.name}
              secondary={`Price: $${meal.price}`}
            />
          </ListItem>
        ))}
      </List>

      <Typography variant="h6" mt={3}>
        Total: ${totalPrice.toFixed(2)}
      </Typography>

      <Box mt={3} display="flex" justifyContent="space-between">
        <Button variant="outlined" color="secondary" onClick={clearCart}>
          Clear Cart
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/checkout")}
        >
          Checkout
        </Button>
      </Box>
    </Box>
  );
}
