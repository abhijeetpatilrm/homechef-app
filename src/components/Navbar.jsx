import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/chef-logo.png";

const AVATAR_URL =
  "https://img.freepik.com/premium-photo/cartoon-chef-with-mustache-red-background_670382-388432.jpg?semt=ais_hybrid&w=740";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const commonLinks = user ? (
    <>
      {user.role === "user" && (
        <>
          <Button color="inherit" component={Link} to="/meals">
            Meals
          </Button>
          <Button color="inherit" component={Link} to="/cart">
            Cart
          </Button>
          <Button color="inherit" component={Link} to="/orders">
            Orders
          </Button>
        </>
      )}
      {user.role === "chef" && (
        <Button color="inherit" component={Link} to="/chef-dashboard">
          Dashboard
        </Button>
      )}
      {user.role === "admin" && (
        <Button color="inherit" component={Link} to="/admin-panel">
          Admin
        </Button>
      )}
      <Button color="inherit" onClick={handleLogout}>
        Logout
      </Button>
    </>
  ) : (
    <>
      <Button color="inherit" component={Link} to="/user-login">
        User Login
      </Button>
      <Button color="inherit" component={Link} to="/chef-login">
        Chef Login
      </Button>
      <Button color="inherit" component={Link} to="/admin-login">
        Admin Login
      </Button>
    </>
  );

  const mobileMenuItems = user
    ? [
        ...(user.role === "user"
          ? [
              { label: "Meals", to: "/meals" },
              { label: "Cart", to: "/cart" },
              { label: "Orders", to: "/orders" },
            ]
          : []),
        ...(user.role === "chef"
          ? [{ label: "Dashboard", to: "/chef-dashboard" }]
          : []),
        ...(user.role === "admin"
          ? [{ label: "Admin", to: "/admin-panel" }]
          : []),
        { label: "Logout", action: handleLogout },
      ]
    : [
        { label: "User Login", to: "/user-login" },
        { label: "Chef Login", to: "/chef-login" },
        { label: "Admin Login", to: "/admin-login" },
      ];

  return (
    <AppBar position="sticky" elevation={4}>
      <Toolbar>
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
            flexGrow: 1,
          }}
        >
          <Typography variant="h6" sx={{ mr: 1 }}>
            HomeChef
          </Typography>
          <img
            src={logo}
            alt="HomeChef Logo"
            style={{ height: 32, width: "auto" }}
          />
        </Box>

        {/* Desktop menu */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 2,
            alignItems: "center",
          }}
        >
          {commonLinks}
          {user && (
            <Avatar
              alt="User Avatar"
              src={AVATAR_URL}
              sx={{ width: 36, height: 36, ml: 2 }}
            />
          )}
        </Box>

        {/* Mobile menu */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleMenuOpen}
            aria-label="menu"
            aria-controls="mobile-menu"
            aria-haspopup="true"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="mobile-menu"
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={handleMenuClose}
            keepMounted
          >
            {user && (
              <Box sx={{ px: 2, pt: 1, pb: 1 }}>
                <Avatar
                  alt="User Avatar"
                  src={AVATAR_URL}
                  sx={{ width: 48, height: 48, mx: "auto", mb: 1 }}
                />
              </Box>
            )}
            {user && <Divider />}
            {mobileMenuItems.map(({ label, to, action }) => (
              <MenuItem
                key={label}
                component={to ? Link : "button"}
                to={to}
                onClick={() => {
                  handleMenuClose();
                  if (action) action();
                }}
              >
                {label}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
