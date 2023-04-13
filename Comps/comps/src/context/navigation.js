import { createContext, useState, useEffect } from "react";
const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    //this is used to cause a rerender each time they navigate.
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);
    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);
  //this is to programmatically navigate path, update path, to cause a rerender app but updating state.
  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    //sharing navigate and currentPath functions with context to any other component.
    <NavigationContext.Provider value={{navigate, currentPath}}>

      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
