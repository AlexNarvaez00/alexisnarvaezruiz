import { Link } from "react-router-dom";
import NavProyects from "./partials/NavProyects";
import ProyectsGrid from "./partials/Proyects";
import "../../App.css";
import { ProyectsContainer } from "../../contexts/ProyectsContext";

const Proyects = ({ ...props }) => {
  return (
    <ProyectsContainer>

    <main className="main-container">
      <section className="container mx-auto px-5 md:px-20 mb-5 md:mb-9">
        <header>
          <div className={`flex items-center gap-2 md:gap-3 md:gap-5 mb-2 md:mb-5`}>
            <Link to={`/`} className={`hover:font-bold text-gray-800 dark:text-gray-300`}>
              <i className="bi bi-chevron-left"></i>
            </Link>
            <h2 className={`text-2xl md:text-4xl mb-5 text-gray-800 dark:text-gray-300 `}>
              Proyectos
            </h2>
          </div>
          <NavProyects />
        </header>
      </section>
      <section className="container mx-auto px-5 md:px-20">
        <ProyectsGrid />
      </section>
    </main>
    </ProyectsContainer>
  );
};

export default Proyects;
