import { useContext } from "react";
import CardProyect from "../../../components/CardProyect";
import Grid from "../../../components/Grid";
import { ProyectsContext } from "../../../contexts/ProyectsContext";

const Proyects = () => {
  const { proyects, isLoading } = useContext(ProyectsContext);

  if (isLoading) {
    return (
      <section className="w-full">
        <h2
          className={`text-2xl text-center m-auto md:text-5xl mb-5 text-gray-800 dark:text-gray-300 `}
        >
          Cargando...
        </h2>
      </section>
    );
  }

  if (proyects.length < 1) {
    return (
      <section className="w-full">
        <h1
          className={`text-3xl text-center m-auto md:text-5xl mb-5 text-gray-800 dark:text-gray-300 `}
        >
          Nada por mostrar. 👻
        </h1>
      </section>
    );
  }

  return (
    <Grid
      className={`grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-[auto]`}
    >
      {proyects.map((pro, index) => (
        <CardProyect
          key={index}
          title={pro.name}
          description={pro.description}
          to={pro.html_url}
          tags={pro.topics}
        />
      ))}
    </Grid>
  );
};

export default Proyects;
