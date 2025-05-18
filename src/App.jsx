import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MealsList from "./pages/meals/MealsList";
import Cart from "./pages/meals/Cart";
import Checkout from "./pages/meals/Checkout";
import OrderStatus from "./pages/meals/OrderStatus";
import Orders from "./pages/orders/Orders"; // Import Orders page
import ChefDashboard from "./pages/dashboard/ChefDashboard";
import AdminPanel from "./pages/dashboard/AdminPanel";
import UserLogin from "./pages/auth/UserLogin";
import UserRegister from "./pages/auth/UserRegister";
import ChefLogin from "./pages/auth/ChefLogin";
import ChefRegister from "./pages/auth/ChefRegister";
import AdminLogin from "./pages/auth/AdminLogin";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import ProtectedRoute from "./components/ProtectedRoute";
import RoleBasedRoute from "./components/RoleBasedRoute";
import AdminRegister from "./pages/auth/AdminRegister";
import ContactPage from "./components/ContactPage";
import About from "./components/About";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<MealsList />} />
          <Route path="/meals" element={<MealsList />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-status" element={<OrderStatus />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/user-register" element={<UserRegister />} />
          <Route path="/chef-login" element={<ChefLogin />} />
          <Route path="/chef-register" element={<ChefRegister />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-register" element={<AdminRegister />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/About" element={<About />} />
          {/* Protected route for chef dashboard */}
          <Route
            path="/chef-dashboard"
            element={
              <ProtectedRoute>
                <RoleBasedRoute allowedRoles={["chef"]}>
                  <ChefDashboard />
                </RoleBasedRoute>
              </ProtectedRoute>
            }
          />

          {/* Protected route for admin panel */}
          <Route
            path="/admin-panel"
            element={
              <ProtectedRoute>
                <RoleBasedRoute allowedRoles={["admin"]}>
                  <AdminPanel />
                </RoleBasedRoute>
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
