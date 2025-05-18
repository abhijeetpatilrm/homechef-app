const usersDB = [
  { id: 1, email: "user@example.com", password: "pass123", role: "user" },
  { id: 2, email: "chef@example.com", password: "pass123", role: "chef" },
  { id: 3, email: "admin@example.com", password: "pass123", role: "admin" },
];

export function loginApi({ email, password, role }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = usersDB.find(
        (u) => u.email === email && u.password === password && u.role === role
      );
      if (user) resolve({ id: user.id, email: user.email, role: user.role });
      else reject(new Error("Invalid credentials"));
    }, 1000);
  });
}

// Register new user with role "user"
export function registerUserApi({ email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersDB.find((u) => u.email === email)) {
        reject(new Error("Email already registered"));
      } else {
        const newUser = {
          id: usersDB.length + 1,
          email,
          password,
          role: "user",
        };
        usersDB.push(newUser);
        resolve({ id: newUser.id, email: newUser.email, role: newUser.role });
      }
    }, 1000);
  });
}

// Register new chef with role "chef"
export function registerChefApi({ email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersDB.find((u) => u.email === email)) {
        reject(new Error("Email already registered"));
      } else {
        const newChef = {
          id: usersDB.length + 1,
          email,
          password,
          role: "chef",
        };
        usersDB.push(newChef);
        resolve({ id: newChef.id, email: newChef.email, role: newChef.role });
      }
    }, 1000);
  });
}
