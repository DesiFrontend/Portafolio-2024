import React from 'react';
import styles from '../Hero/Hero.module.css';
import { getImageUrl } from "../../utils";
import DownloadCVButton from '../Hero/DownloadCVButton';

export const Hero = () => {

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hola, soy Desy</h1>
        <p className={styles.description}>Soy una diseñadora gráfica y desarrolladora web especializada en el Front-end,
          específicamente en React.</p>
        <DownloadCVButton/>
        <div className={styles.socialmedia}>
        <a href="https://www.linkedin.com/in/desir%C3%A9e-angulo-trejo-5813922ab/"><img src={getImageUrl('hero/linkedin.png')} alt="cuenta de linkedin" 
        className={styles.links}/></a>
        <a href="https://github.com/DesiFrontend"><img src={getImageUrl('hero/github.png')} alt="cuenta de github" 
        className={styles.links}/></a>
      </div>
      </div>
      
      <img src={getImageUrl('hero/heroImage.png')} alt="Imagen principal del sitio" className={styles.heroImg}/>
      
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}

