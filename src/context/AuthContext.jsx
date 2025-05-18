import React, { createContext, useState, useEffect } from "react";

// User roles: 'user', 'chef', 'admin'
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // {id, name, role, token, location}

  useEffect(() => {
    // Simulate persistent login from localStorage
    const storedUser = localStorage.getItem("foodapp_user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("foodapp_user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("foodapp_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
