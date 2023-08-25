import { useContext } from "react";
import NavButton from "../../../components/NavButton";
import { ProyectsContext } from "../../../contexts/ProyectsContext";

export default function NavProyects() {
  const { setAllProyects, setFilter, tags } = useContext(ProyectsContext);

  return (
    <nav>
      <ul className={`flex flex-wrap gap-2 text-gray-800 dark:text-gray-300 `}>
        <li className={`flex`}>
          <NavButton onClick={setAllProyects}>Todo</NavButton>
        </li>
        {tags?.map((tag) => (
          <li key={tag} className="flex" onClick={event => setFilter(tag)}>
            <NavButton>{tag}</NavButton>
          </li>
        ))}
      </ul>
    </nav>
  );
}
