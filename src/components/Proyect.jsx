import * as React from 'react';
import * as styles from '../styles/components/proyect.module.css';
import useIntersection from '../useIntersection';

export default function Proyect({ title, text, img, programs }) {
  const [elementRef, isVisible] = useIntersection({
    treshold: 0,
  });
  return (
    <section className={styles.container}>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className={styles.containerImg}>
        <img src={img} alt="" />
      </div>
      <ul className={styles.programs}>
        {programs.map((data, index) => (
          <li key={index}>
            <img src={data} alt="" />
          </li>
        ))}
      </ul>
    </section>
  );
}
