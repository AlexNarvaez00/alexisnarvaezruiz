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
            <div
              className={`flex items-center gap-2 md:gap-3 md:gap-5 mb-2 md:mb-5`}
            >
              <ul className="flex gap-2 text-lg">
                <li className="flex">
                  <Link
                    to={`/`}
                    className={`hover:font-bold text-gray-800 dark:text-gray-300 md:px-2 md:p-3`}
                  >
                    <i className="bi bi-house-door-fill mr-2"></i>
                    Home
                  </Link>
                </li>
                <li className="text-gray-800 dark:text-gray-300 md:py-3">
                  <i className="bi bi-slash-lg"></i>
                </li>
                <li className="flex">
                  <p className="hover:font-bold text-gray-800 dark:text-gray-300  md:px-2 md:p-3">
                    Proyectos
                  </p>
                </li>
              </ul>
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
