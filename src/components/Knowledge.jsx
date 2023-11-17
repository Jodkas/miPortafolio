import * as React from 'react';
import * as styles from '../styles/components/knowledge.module.css';
import useIntersection from '../useIntersection';

export default function Knowledge({ title, programs }) {
  const [elementRef, isVisible] = useIntersection({
    treshold: 0,
  });
  return (
    <section className={styles.container}>
      <h3>{title}</h3>
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
