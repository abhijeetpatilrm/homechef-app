import React, { useEffect, useState, useContext } from "react";
import { getNearbyMenus } from "../../api/chefs";
import { CartContext } from "../../context/CartContext";
import LoadingSpinner from "../../components/LoadingSpinner";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export default function MealsList() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cartItems, addToCart, updateQuantity } = useContext(CartContext);

  const extraMeals = [
    {
      id: "m101",
      name: "Grilled Chicken Sandwich",
      description: "Juicy grilled chicken with fresh veggies.",
      price: 7.99,
      quantity: 10,
      image:
        "https://images.unsplash.com/photo-1642442928984-b18c2c86b9c2?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: "m102",
      name: "Veggie Pasta",
      description: "Pasta loaded with fresh seasonal vegetables.",
      price: 8.99,
      quantity: 15,
      image:
        "https://images.unsplash.com/photo-1576402187878-974f70c890a5?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: "m103",
      name: "Beef Burger",
      description: "Classic beef burger with cheese and pickles.",
      price: 9.99,
      quantity: 8,
      image:
        "https://images.unsplash.com/photo-1648221411022-247de74b3859?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: "m104",
      name: "Caesar Salad",
      description: "Crisp romaine lettuce with Caesar dressing.",
      price: 6.5,
      quantity: 20,
      image:
        "https://images.unsplash.com/photo-1580013759032-c96505e24c1f?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: "m105",
      name: "Fish Tacos",
      description: "Soft tacos filled with seasoned fish and salsa.",
      price: 8.5,
      quantity: 12,
      image:
        "https://plus.unsplash.com/premium_photo-1681406995032-c3ceeb24d7f9?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: "m106",
      name: "Margherita Pizza",
      description: "Classic pizza with fresh basil and mozzarella.",
      price: 10.99,
      quantity: 9,
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: "m107",
      name: "Chicken Biryani",
      description: "Aromatic rice with tender chicken pieces.",
      price: 11.99,
      quantity: 14,
      image:
        "https://images.unsplash.com/photo-1701579231349-d7459c40919d?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: "m108",
      name: "Chocolate Brownie",
      description: "Rich and gooey chocolate dessert.",
      price: 4.99,
      quantity: 30,
      image:
        "https://images.unsplash.com/photo-1612078960206-1709f1f0c969?w=600&auto=format&fit=crop&q=60",
    },
  ];

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const fetchedMeals = await getNearbyMenus();
        setMeals([...fetchedMeals, ...extraMeals]);
      } catch (error) {
        console.error("Error fetching meals:", error);
        setMeals(extraMeals); // fallback to dummy meals
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  // Get current quantity of a meal in cart
  const getQuantityInCart = (mealId) => {
    const item = cartItems.find((item) => item.meal.id === mealId);
    return item ? item.quantity : 0;
  };

  if (loading) return <LoadingSpinner />;

  if (meals.length === 0)
    return (
      <Typography variant="h6" align="center" mt={4}>
        No meals available nearby.
      </Typography>
    );

  return (
    <Box p={3}>
      <Typography variant="h4" mb={4} align="center">
        Meals Nearby
      </Typography>
      <Grid container spacing={3}>
        {meals.map((meal) => {
          const quantityInCart = getQuantityInCart(meal.id);

          return (
            <Grid key={meal.id} item xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="160"
                  image={meal.image}
                  alt={meal.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6">{meal.name}</Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {meal.description}
                  </Typography>
                  <Typography variant="subtitle1">
                    Price: ${meal.price}
                  </Typography>
                  <Typography variant="subtitle2" mb={1}>
                    Available: {meal.quantity}
                  </Typography>

                  {/* Show quantity controls if item in cart */}
                  {quantityInCart > 0 ? (
                    <Stack
                      direction="row"
                      spacing={1}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <IconButton
                        size="small"
                        color="primary"
                        onClick={() =>
                          updateQuantity(meal.id, quantityInCart - 1)
                        }
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography>{quantityInCart}</Typography>
                      <IconButton
                        size="small"
                        color="primary"
                        onClick={() => {
                          if (quantityInCart < meal.quantity) {
                            updateQuantity(meal.id, quantityInCart + 1);
                          }
                        }}
                      >
                        <AddIcon />
                      </IconButton>
                    </Stack>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      disabled={meal.quantity === 0}
                      onClick={() => addToCart(meal, 1)}
                    >
                      {meal.quantity === 0 ? "Out of Stock" : "Add to Cart"}
                    </Button>
                  )}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
