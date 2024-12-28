"use client";

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <AuthContext.Provider
      value={{
        isOpen,
        setIsOpen,
        destination,
        setDestination,
        origin,
        setOrigin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
const useAuth = () => useContext(AuthContext);

export default AuthProvider;
export { useAuth };
