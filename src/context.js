import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });
  function openSidebar() {
    setShowSidebar(true);
  }
  function closeSidebar() {
    setShowSidebar(false);
  }

  function openSubmenu(text, coordinates) {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setShowSubmenu(true);
  }
  function closeSubmenu() {
    setShowSubmenu(false);
  }
  return (
    <AppContext.Provider
      value={{
        showSidebar,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        showSubmenu,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
