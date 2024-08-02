import { Children, createContext, useState } from "react";

export const ModuleContext = createContext();

export const ModuleContextProvider = (props) => {
  const [currentmodel, setCurrentmodel] = useState(null);
  return (
    <ModuleContext.Provider value={{ currentmodel, setCurrentmodel }}>
      {props.children}
    </ModuleContext.Provider>
  );
};
