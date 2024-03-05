import { createContext, useState } from "react";
import { router } from "expo-router";
import axios from "axios";

export const UserContext = createContext();

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  async function login(username) {
    try {
      const { data } = await axios.post(`${apiUrl}/users/login`, {
        username,
      });
      setUser(data);
      console.log(data);
    } catch (error) {
      if (error.response?.status === 404) {
        alert("User not found");
      } else alert("Server Error 😵");
      console.log(error);
    }
  }

  function logout() {
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
