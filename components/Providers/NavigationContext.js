import { createContext, useContext, useState } from "react";

const NavigationContext = createContext();

export function useNavigation() {
  return useContext(NavigationContext);
}

export function NavigtionProvider({ children }) {
  const [isOpen, setIsOpen] = useState();

  const toggleMenu = () => {
    setIsOpen((prevToggle) => !prevToggle);
  };

  return (
    <NavigationContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </NavigationContext.Provider>
  );
}
