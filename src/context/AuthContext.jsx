import React, { createContext, useState, useCallback } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

// Initialize user from localStorage
const initializeUser = () => {
  const savedUser = localStorage.getItem("user");
  if (savedUser) {
    try {
      return JSON.parse(savedUser);
    } catch (error) {
      console.error("Failed to load user:", error);
      return null;
    }
  }
  return null;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(initializeUser);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = useCallback(async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock validation
      if (email && password) {
        const mockUser = {
          id: Math.random().toString(36).substr(2, 9),
          email,
          name: email.split("@")[0],
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
        };
        setUser(mockUser);
        localStorage.setItem("user", JSON.stringify(mockUser));
        return mockUser;
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (err) {
      setError(err.message || "Login failed");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const register = useCallback(async (email, password, name) => {
    setLoading(true);
    setError(null);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1200));

      if (email && password && name) {
        const mockUser = {
          id: Math.random().toString(36).substr(2, 9),
          email,
          name,
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
        };
        setUser(mockUser);
        localStorage.setItem("user", JSON.stringify(mockUser));
        return mockUser;
      } else {
        throw new Error("All fields are required");
      }
    } catch (err) {
      setError(err.message || "Registration failed");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const loginWithGoogle = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Simulate Google OAuth
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const mockUser = {
        id: Math.random().toString(36).substr(2, 9),
        email: `user${Math.random().toString(36).substr(2, 9)}@gmail.com`,
        name: "Google User",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=google",
        provider: "google",
      };
      setUser(mockUser);
      localStorage.setItem("user", JSON.stringify(mockUser));
      return mockUser;
    } catch (err) {
      setError(err.message || "Google login failed");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("user");
  }, []);

  const value = {
    user,
    loading,
    error,
    login,
    register,
    loginWithGoogle,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
