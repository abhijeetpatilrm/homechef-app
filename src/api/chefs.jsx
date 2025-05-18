let menusDB = [
  /*{
    id: 1,
    chefId: 2,
    name: "Spaghetti Carbonara",
    description: "Classic Italian pasta",
    price: 12,
    quantity: 10,
    image:
      "https://images.unsplash.com/photo-1719250498103-bddaf077410a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFNwYWdoZXR0aSUyMENhcmJvbmFyYXxlbnwwfHwwfHx8MA%3D%3D",
  },*/
  /* {
    id: 2,
    chefId: 2,
    name: "Grilled Chicken",
    description: "Juicy grilled chicken breast",
    price: 15,
    quantity: 5,
    image:
      "https://plus.unsplash.com/premium_photo-1661419883163-bb4df1c10109?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R3JpbGxlZCUyMENoaWNrZW58ZW58MHx8MHx8fDA%3D",
  },*/
];

export function getNearbyMenus() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(menusDB), 1000);
  });
}

export function addMenuItem(menuItem) {
  return new Promise((resolve) => {
    menuItem.id = menusDB.length + 1;
    menusDB.push(menuItem);
    setTimeout(() => resolve(menuItem), 500);
  });
}
