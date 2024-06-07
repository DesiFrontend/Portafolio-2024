import React from 'react';
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";


export const About = () => {
    return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>Sobre mí</h2>
        <div className={styles.content}>
            <img src={getImageUrl('about/aboutImage.png')} 
            alt="chica con laptop" 
            className={styles.aboutImage} />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/frontend.png')} alt="ícono de laptop" className={styles.img1}/>
                    <div className={styles.aboutItemText}>
                        <h3>Desarrolladora Frontend</h3>
                        <p>
                        Soy una desarrolladora frontend enfocada en la creación de sitios responsivos y optimizados.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/backend.png")} alt="ícono de servidor"  className={styles.img2}/>
                    <div className={styles.aboutItemText}>
                        <h3>Desarrolladora Backend</h3>
                        <p>
                        Tengo conocimiento utilizando APIs y desarrollando sistemas de bases de datos rápidos y optimizados.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uidesign.png")} alt="ícono de UI diseñador" className={styles.img3} />
                    <div className={styles.aboutItemText}>
                        <h3>Diseñadora UI</h3>
                        <p>
                        He diseñado aplicaciones implementando mis habilidades en el uso de UI y Ux como diseñadora .
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    )
}
