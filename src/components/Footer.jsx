import * as React from 'react';
import * as styles from '../styles/components/footer.module.css';
export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.terms}>
        <p>©Todos los derechos reservados</p>
        <p>
          Creado por{' '}
          <b>
            <a
              href="https://www.linkedin.com/in/lucas-ivan-cardozo/"
              target="_blank"
              rel="noreferrer"
            >
              Lucas Cardozo
            </a>
          </b>{' '}
          con el framework{' '}
          <b>
            <a
              href="https://www.gatsbyjs.com/"
              target="_blank"
              rel="noreferrer"
            >
              Gatsby
            </a>
          </b>
        </p>
      </div>
    </div>
  );
}
