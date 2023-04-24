import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [username, setUsername] = useState(null);
  const [id, setId] = useState(null);
  useEffect(() => {
    const getProfile = async () => {
      try {
        response = await axios.get(`${import.meta.env.VITE_API_URI}/profile`);
        setId(response.data._id);
        setUsername(response.data.username);
      } catch (error) {
        console.log("error:", error);
      }
    };
    getProfile();
  }, []);

  return (
    <UserContext.Provider value={{ username, setUsername, id, setId }}>
      {children}
    </UserContext.Provider>
  );
};
