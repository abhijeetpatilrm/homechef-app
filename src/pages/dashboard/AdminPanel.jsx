import React, { useEffect, useState } from "react";
import { getAllOrders, updateOrderStatus, cancelOrder } from "../../api/admin";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
  Select,
  MenuItem,
} from "@mui/material";

export default function AdminPanel() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = React.useState(true);

  const fetchOrders = () => {
    setLoading(true);
    getAllOrders()
      .then((data) => setOrders(data))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleStatusChange = (orderId, status) => {
    updateOrderStatus(orderId, status).then(fetchOrders);
  };

  const handleCancelOrder = (orderId) => {
    cancelOrder(orderId).then(fetchOrders);
  };

  if (loading) return <Typography>Loading orders...</Typography>;

  return (
    <Box p={3}>
      <Typography variant="h4" mb={3}>
        Admin Panel - Orders Management
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Items</TableCell>
              <TableCell>Total ($)</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.userEmail}</TableCell>
                <TableCell>
                  {order.items.map((i) => i.mealName).join(", ")}
                </TableCell>
                <TableCell>{order.total.toFixed(2)}</TableCell>
                <TableCell>
                  <Select
                    value={order.status}
                    onChange={(e) =>
                      handleStatusChange(order.id, e.target.value)
                    }
                  >
                    <MenuItem value="Accepted">Accepted</MenuItem>
                    <MenuItem value="Preparing">Preparing</MenuItem>
                    <MenuItem value="Out for Delivery">
                      Out for Delivery
                    </MenuItem>
                    <MenuItem value="Delivered">Delivered</MenuItem>
                    <MenuItem value="Cancelled">Cancelled</MenuItem>
                  </Select>
                </TableCell>
                <TableCell>
                  <Button
                    color="error"
                    onClick={() => handleCancelOrder(order.id)}
                  >
                    Cancel
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
