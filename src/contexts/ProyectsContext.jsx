import { createContext, useState } from "react";
import { proyects as proyectsJson } from "../data/proyects.json";

export const ProyectsContext = createContext(null);

export const ProyectsContainer = ({ children }) => {
  const [proyects, setProyects] = useState(proyectsJson);

  const setAllProyects = () => {
    setProyects(proyectsJson);
  };

  const setPersonalProyects = () => {
    setProyects((old) => {
      return proyectsJson.filter((proyect) => {
        return proyect.keysWords.includes("proyects");
      });
    });
  };

  const setExperimentalProyects = () => {
    setProyects([]);
  };

  return (
    <ProyectsContext.Provider
      value={{
        proyects,
        setAllProyects,
        setPersonalProyects,
        setExperimentalProyects,
      }}
    >
      {children}
    </ProyectsContext.Provider>
  );
};
