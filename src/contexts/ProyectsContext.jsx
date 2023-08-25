import { createContext, useEffect, useState } from "react";
import { getAllRepos } from "../services/ReposService";
//import { proyects as proyectsJson } from "../data/proyects.json";

export const ProyectsContext = createContext(null);

export const ProyectsContainer = ({ children }) => {
  const [proyects, setProyects] = useState([]);
  const [proyectsTemp, setProyectsTemp] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    setAllProyects();
  }, []);

  const setAllProyects = () => {
    getAllRepos().then((res) => {
      const { data } = res;
      setProyects(data);
      setProyectsTemp(data);
      setLoading(false);
      const tags = data
        .map((proyect) => proyect.topics)
        .reduce((acum, topics) => acum.concat(topics), []);
      const unique = new Set(tags);
      setTags([...unique]);
    });
  };

  const setFilter = (languaje) => {
    const proyectsFiltered = proyectsTemp.filter(proyect => proyect.topics.includes(languaje)); 
    setLoading(true);
    setProyects(proyectsFiltered);
    setLoading(false);
  };

  return (
    <ProyectsContext.Provider
      value={{
        proyects,
        setAllProyects,
        setFilter,
        isLoading,
        tags
      }}
    >
      {children}
    </ProyectsContext.Provider>
  );
};
