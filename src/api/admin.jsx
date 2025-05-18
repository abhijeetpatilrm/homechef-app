import { ordersDB } from "./orders";

export function getAllOrders() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(ordersDB), 1000);
  });
}

export function updateOrderStatus(orderId, status) {
  return new Promise((resolve) => {
    const order = ordersDB.find((o) => o.id === orderId);
    if (order) order.status = status;
    setTimeout(() => resolve(order), 500);
  });
}

export function cancelOrder(orderId) {
  return updateOrderStatus(orderId, "Cancelled");
}
