import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Card,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { addMenuItem, getNearbyMenus } from "../../api/menus.jsx"; // Adjust path if needed

const ChefDashboard = () => {
  const loggedInChefId = parseInt(localStorage.getItem("chefId")); // Assume saved during login
  const [meals, setMeals] = useState([]);

  const [meal, setMeal] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    image: "",
    chefId: loggedInChefId,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setMeal({ ...meal, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (isEditing) {
      // Handle update logic
      const updatedMeals = meals.map((m) =>
        m.id === editId ? { ...m, ...meal } : m
      );
      setMeals(updatedMeals);
      setIsEditing(false);
      setEditId(null);
    } else {
      const newMeal = await addMenuItem(meal);
      setMeals([...meals, newMeal]);
    }

    setMeal({
      name: "",
      description: "",
      price: "",
      quantity: "",
      image: "",
      chefId: loggedInChefId,
    });
  };

  const handleEdit = (mealToEdit) => {
    setMeal(mealToEdit);
    setIsEditing(true);
    setEditId(mealToEdit.id);
  };

  const handleDelete = (id) => {
    const updatedMeals = meals.filter((m) => m.id !== id);
    setMeals(updatedMeals);
  };

  useEffect(() => {
    getNearbyMenus().then((data) => {
      const chefMeals = data.filter((m) => m.chefId === loggedInChefId);
      setMeals(chefMeals);
    });
  }, [loggedInChefId]);
  console.log("Logged in Chef ID:", loggedInChefId);
  console.log("Current meal state:", meal);

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        Chef Dashboard
      </Typography>

      <Typography variant="h6">Add or Edit Meal</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={meal.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Image URL"
            name="image"
            value={meal.image}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={meal.description}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            fullWidth
            label="Price"
            name="price"
            value={meal.price}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            fullWidth
            label="Quantity"
            name="quantity"
            value={meal.quantity}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleSubmit}>
            {isEditing ? "Update Meal" : "Add Meal"}
          </Button>
        </Grid>
      </Grid>

      <Typography variant="h6" style={{ marginTop: 30 }}>
        Your Meals
      </Typography>

      <Grid container spacing={2}>
        {meals.map((meal) => (
          <Grid item xs={12} sm={6} md={4} key={meal.id}>
            <Card style={{ padding: 10, position: "relative" }}>
              <img
                src={meal.image}
                alt={meal.name}
                style={{ width: "100%", height: 150, objectFit: "cover" }}
              />
              <Typography variant="h6">{meal.name}</Typography>
              <Typography>{meal.description}</Typography>
              <Typography>₹{meal.price}</Typography>
              <Typography>Qty: {meal.quantity}</Typography>
              <div style={{ position: "absolute", top: 10, right: 10 }}>
                <IconButton onClick={() => handleEdit(meal)} color="primary">
                  <Edit />
                </IconButton>
                <IconButton onClick={() => handleDelete(meal.id)} color="error">
                  <Delete />
                </IconButton>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ChefDashboard;
