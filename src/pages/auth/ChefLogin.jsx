import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { loginApi } from "../../api/auth";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Box, TextField, Button, Typography, Alert } from "@mui/material";
import LoadingSpinner from "../../components/LoadingSpinner";

export default function ChefLogin() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const onSubmit = (data) => {
    setLoading(true);
    setError(null);
    loginApi({ ...data, role: "chef" })
      .then((userData) => {
        login(userData);
        navigate("/chef-dashboard");
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <Box maxWidth={400} mx="auto" mt={6} p={3} boxShadow={3} borderRadius={2}>
      <Typography variant="h5" mb={2}>
        Chef Login
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          {...register("email", { required: "Email is required" })}
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          {...register("password", { required: "Password is required" })}
          error={Boolean(errors.password)}
          helperText={errors.password?.message}
        />
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 3 }}
          disabled={loading}
        >
          {loading ? <LoadingSpinner /> : "Login"}
        </Button>
      </form>

      <Typography variant="body2" align="center" mt={2}>
        Don’t have an account?{" "}
        <Link
          to="/chef-register"
          style={{ color: "#FF5722", textDecoration: "none" }}
        >
          Register here
        </Link>
      </Typography>
    </Box>
  );
}
