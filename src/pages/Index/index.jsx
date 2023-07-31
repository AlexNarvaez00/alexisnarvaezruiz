import Grid from "../../components/Grid";
import Card from "../../components/Card";
import CardLink from "../../components/CardLink";
import ButtonDark from "../../components/ButtonDark";
import MiniInfo from "../../components/MiniInfo";
import Skills from "../../components/Skills";

const Index = ({ children }) => {
  return (
    <main className="main-container">
      <section className="container mx-auto px-5 md:px-20">
        <Grid className={`grid-cols-2 md:grid-cols-5 `}>
          <Card
            className={`col-span-2 md:col-span-3 md:row-span-2 bg-zinc-300 dark:bg-zinc-800`}
          >
            <section className={`p-5`}>
              <h1 className={`text-3xl md:text-5xl mb-5 text-gray-800 dark:text-gray-300 `}>
                ¡Hola! Soy <strong>Alexis Narvaez</strong>
              </h1>
              <p className={`text-lg md:text-2xl text-gray-800 dark:text-gray-200`}>
                Soy <strong>Desarrollador Front-End</strong> con{" "}
                <strong>React</strong>, además de eso cuento con experiencia en
                tecnologias de <strong>Back-End</strong> como{" "}
                <strong>PHP, Java y Python.</strong>
              </p>
              <p className={`text-lg md:text-2xl text-gray-800 dark:text-gray-200`}>
                Me considero alguien centrado, constante y reflexivo en las
                cosas que hago, lo cual me ha beneficiado para llegar al final
                de mis objetivos, esto me ha permitido desarrollar la capacidad
                de pensar en mejores soluciones.
              </p>
            </section>
          </Card>
          <CardLink
            className={`col-span-1 bg-white shadow-lg flex py-10 md:p-0`}
            to="https://github.com/AlexNarvaez00"
            target="_blank"
          >
            <i className="bi bi-github m-auto text-6xl"></i>
          </CardLink>
          <CardLink
            className={`col-span-1 bg-indigo-300 dark:bg-indigo-500 dark:shadow-lg dark:shadow-indigo-600/60 flex text-white`}
            to="https://www.linkedin.com/in/alexis-narvaez-ruiz"
            target="_blank"
          >
            <i className="bi bi-linkedin m-auto text-6xl"></i>
          </CardLink>
          <Card
            className={`col-span-1 md:col-span-2 bg-violet-300 flex dark:bg-violet-500 dark:shadow-lg dark:shadow-violet-600/60 `}
          >
            <ButtonDark className="m-auto" />
          </Card>
          <Card
            className={`flex bg-amber-300  p-5 dark:bg-amber-500 dark:shadow-lg dark:shadow-amber-600/60 `}
          >
            <MiniInfo
              className={`m-auto`}
              header={`Edad`}
              body={23}
              footer={`Años`}
            />
          </Card>
          <Card
            className={`flex bg-purple-300 p-2 md:p-5 dark:bg-purple-500 dark:shadow-lg dark:shadow-purple-600/60 `}
          >
            <MiniInfo
              className={`m-auto`}
              header={`Nivel de Ingles`}
              body={`B1`}
              footer={`2019-2021`}
            />
          </Card>
          <CardLink
            className={`col-span-2 md:col-span-3 bg-[url('/code.jpg')] text-white dark:text-gray-200 dark:shadow-lg dark:shadow-black/60`}
            toRouter={true}
            to="/proyects"
          >
            <div className="p-5 bg-white/20 w-full h-full dark:bg-black/20">
              <h3 className={`text-xl md:text-3xl mb-5`}>
                Proyectos y <strong>Experiencias</strong>
              </h3>
              <p className={`text-lg md:text-2xl`}>
                Aquí puedes ver mis proyectos, experiencia, práctricas y más.
              </p>
            </div>
          </CardLink>
          <Card
            className={`col-span-2 bg-fuchsia-300 p-5 dark:bg-fuchsia-500 dark:shadow-lg dark:shadow-fuchsia-600/60 `}
          >
            <Skills />
          </Card>
          <CardLink
            className={`col-span-1 bg-sky-300 dark:bg-teal-500 py-10 md:p-0 dark:shadow-lg dark:shadow-teal-600/60 flex text-white`}
            to="mailto:ruiznarvaezalexis@gmail.com"
          >
            <i className="bi bi-envelope-fill m-auto text-6xl"></i>
          </CardLink>
          <CardLink
            className={`col-span-1 bg-blue-300 dark:bg-blue-500 dark:shadow-lg dark:shadow-blue-600/60 flex text-white`}
          >
            <i className="bi bi-twitter m-auto text-6xl"></i>
          </CardLink>
        </Grid>
      </section>
    </main>
  );
};

export default Index;
