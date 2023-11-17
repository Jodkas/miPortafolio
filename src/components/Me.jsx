import * as React from 'react';
import * as styles from '../styles/components/me.module.css';
import me from '../assets/images/me.png';
import instagram from '../assets/images/logos/instagram.png';
import linkedin from '../assets/images/logos/linkedin.png';
import github from '../assets/images/logos/github.png';
import whatsapp from '../assets/images/logos/whatsapp.png';
import useIntersection from '../useIntersection';

export default function Me() {
  const [elementRef, isVisible] = useIntersection({
    treshold: 0,
  });
  const [elementRef2, isVisible2] = useIntersection({
    treshold: 0,
  });
  return (
    <div
      className={styles.container}
      ref={elementRef}
      isvisible={isVisible ? 'true' : 'false'}
    >
      <div
        className={styles.circle}
        ref={elementRef}
        isvisible={isVisible ? 'true' : 'false'}
      ></div>
      <ul>
        <li className={styles.instagram}>
          <img src={instagram} alt="" />
        </li>
        <li className={styles.linkedin}>
          <img src={linkedin} alt="" />
        </li>
        <li className={styles.whatsapp}>
          <img src={whatsapp} alt="" />
        </li>
        <li className={styles.github}>
          <img src={github} alt="" />
        </li>
      </ul>
      <img src={me} alt="Foto de Lucas Cardozo" />
    </div>
  );
}
