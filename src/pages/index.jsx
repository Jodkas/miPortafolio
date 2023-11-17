import * as React from 'react';
import * as styles from '../styles/pages/index.module.css';
import nexa from '../assets/fonts/Nexa-Heavy.woff2';
import Me from '../components/Me';
import Proyect from '../components/Proyect';
import programs from '../db/programs.js';
import proyects from '../db/proyects.js';
import Knowledge from '../components/Knowledge.jsx';

const IndexPage = () => {
  const features = ['web developer', 'autodidacta', 'estudiante de ingeniería'];

  return (
    <>
      <main className={styles.main}>
        <div className={styles.containerText}>
          <h1>
            <p>Hi, i 'm &nbsp;</p>
            <div className={styles.containerUl}>
              <ul>
                {features.map((data, index) => (
                  <li key={index}>{data}</li>
                ))}
              </ul>
            </div>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
          <ul className={styles.links}>
            <li>
              <a href="#proyectos">Proyectos</a>
            </li>
            <li>
              <a href="#conocimiento">Conocimiento</a>
            </li>
            <li>
              <a href="">Estudios</a>
            </li>
          </ul>
        </div>
        <Me />
      </main>
      <article className={styles.articleProyects}>
        <div className={styles.square}></div>
        <div id="proyectos" className={styles.proyects}>
          <h2>PROYECTOS</h2>
          <ul>
            <li>
              <Proyect
                title="Web de Helados Italia"
                text="asdad as asd asd ads asd adasd ads asd asd asd asd asd as das dq d asdsa"
                img={proyects.heladosItalia}
                programs={[programs.html, programs.css, programs.javaScript]}
              />
            </li>
            <li>
              <Proyect
                title="Web de Bowling de Paso"
                text="asdad as asd asd ads asd adasd ads asd asd asd asd asd as das dq d asdsa"
                img={proyects.bowling}
                programs={[
                  programs.react,
                  programs.gatsby,
                  programs.css,
                  programs.jsx,
                ]}
              />
            </li>
            <li>
              <Proyect
                title="Simulación de calor"
                text="asdad as asd asd ads asd adasd ads asd asd asd asd asd as das dq d asdsa"
                img={proyects.simulacionCalor}
                programs={[programs.fortran, programs.gnuplot]}
              />
            </li>
          </ul>
        </div>
      </article>
      <article className={styles.articleKnowledge}>
        <h2 id="conocimiento">CONOCIMIENTO</h2>
        <ul>
          <li>
            <Knowledge
              title="Lenguaje de marcado y estilo"
              programs={[programs.html, programs.css]}
            />
          </li>
          <li>
            <Knowledge
              title="Lenguajes de programacion"
              programs={[
                programs.javaScript,
                programs.c,
                programs.fortran,
                programs.sql,
              ]}
            />
          </li>
          <li>
            <Knowledge
              title="Frameworks de JavaScript"
              programs={[programs.react, programs.gatsby]}
            />
          </li>
          <li>
            <Knowledge
              title="Entornos de ejecucion"
              programs={[programs.git, programs.node, programs.gnuplot]}
            />
          </li>
          <li>
            <Knowledge
              title="Hojas de cálculo"
              programs={[programs.excel, programs.sheets]}
            />
          </li>
          <li>
            <Knowledge title="Diseño gráfico" programs={[programs.photoshop]} />
          </li>
        </ul>
      </article>
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <html lang="es" />
    <title>Mi portafolio - Lucas Cardozo</title>
    <meta name="description" content="..." />
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1, minimum-scale=1"
    />
    <meta name="robots" content="index, follow" />
    <meta name="language" content="Spanish" />
    <meta name="author" content="Lucas Iván Cardozo" />
    <link rel="canonical" href="http://miportafolio.com" />
    <link rel="icon" href="/favicon.ico" type="image/ico"></link>
    <link
      rel="preload"
      href={nexa}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    ></link>
  </>
);
