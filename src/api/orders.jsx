let ordersDB = [];

export { ordersDB }; // ✅ Add this line

export function placeOrder(order) {
  return new Promise((resolve) => {
    order.id = ordersDB.length + 1;
    order.status = "Accepted";
    ordersDB.push(order);
    setTimeout(() => resolve(order), 1000);
  });
}

export function getOrderStatus(orderId) {
  return new Promise((resolve) => {
    const order = ordersDB.find((o) => o.id === +orderId);
    if (!order) {
      resolve({ status: "Unknown" });
      return;
    }

    const statusFlow = [
      "Accepted",
      "Preparing",
      "Out for Delivery",
      "Delivered",
    ];
    let currentIndex = statusFlow.indexOf(order.status);
    if (currentIndex < statusFlow.length - 1) {
      order.status = statusFlow[currentIndex + 1];
    }

    setTimeout(() => resolve({ status: order.status }), 1000);
  });
}
