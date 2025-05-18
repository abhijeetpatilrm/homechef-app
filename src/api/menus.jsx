// src/api/menus.jsx

const MENU_STORAGE_KEY = "dummyMenuData";

const loadMenus = () => {
  const data = localStorage.getItem(MENU_STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

const saveMenus = (meals) => {
  localStorage.setItem(MENU_STORAGE_KEY, JSON.stringify(meals));
};

export const addMenuItem = async (meal) => {
  const newMeal = {
    ...meal,
    id: Date.now(),
  };
  const meals = loadMenus();
  meals.push(newMeal);
  saveMenus(meals);
  return newMeal;
};

export const getNearbyMenus = async () => {
  return loadMenus();
};
