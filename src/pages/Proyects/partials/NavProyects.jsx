import { useContext } from "react";
import NavButton from "../../../components/NavButton";
import { ProyectsContext } from "../../../contexts/ProyectsContext";

export default function NavProyects() {
  const { setAllProyects, setPersonalProyects, setExperimentalProyects } =
    useContext(ProyectsContext);

  return (
    <nav>
      <ul className={`flex flex-wrap gap-2 text-gray-800 dark:text-gray-300 `}>
        <li className={`flex`}>
          <NavButton onClick={setAllProyects}>Todo</NavButton>
        </li>
        <li
          className={`flex`}
          onClick={(event) => {
            setPersonalProyects();
          }}
        >
          <NavButton>Proyectos</NavButton>
        </li>
        <li className={`flex`}>
          <NavButton
            onClick={(event) => {
              setExperimentalProyects();
            }}
          >
            Experimentos
          </NavButton>
        </li>
        <li className={`flex`}>
          <NavButton>Recomendaciones</NavButton>
        </li>
      </ul>
    </nav>
  );
}
