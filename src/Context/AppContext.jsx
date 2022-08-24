import { createContext, useState } from 'react';

export const AuthContext = createContext();

function AppContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleIsLoggedIn = () => {
    setIsLoggedIn((prev) => !prev);
  };

  const value = { isLoggedIn, handleIsLoggedIn };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AppContextProvider };