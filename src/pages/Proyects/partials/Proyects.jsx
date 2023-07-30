import { useContext } from "react";
import CardProyect from "../../../components/CardProyect";
import Grid from "../../../components/Grid";
import { ProyectsContext } from "../../../contexts/ProyectsContext";

const Proyects = () => {
  const { proyects } = useContext(ProyectsContext);

  if (proyects.length < 1) {
    return (
      <section className="w-full">
        <h1 className={`text-3xl text-center m-auto md:text-5xl mb-5 text-gray-800 dark:text-gray-300 `} >Nada por mostrar. 👻 </h1>
      </section>
    );
  }

  return (
    <Grid className={`grid-cols-1 md:grid-cols-3`}>
      {proyects.map((pro, index) => (
        <CardProyect key={index} {...pro} />
      ))}
    </Grid>
  );
};

export default Proyects;
