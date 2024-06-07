import React from "react";
import styles from "../Contact/Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
    <footer id="contact" className={styles.container}>
            <img src={getImageUrl("contact/contactImage.png")} alt="imágen de contacto" className={styles.contact}/>
        <div className={styles.text}>
            <h2>Contáctame</h2>
            <p>¡Siéntete libre de escribirme!</p>
        </div>
        <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="ícono de correo" className={styles.img1}/>
            <a href="mailto:desireeat13@gmail.com">desireeat13@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img
            src={getImageUrl("contact/linkedinIcon.png")} alt="ícono de LinkedIn" className={styles.img2}/>
        <a href="https://www.linkedin.com/in/desir%C3%A9e-angulo-trejo-5813922ab/">linkedin.com/desiree-angulo-trejo</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="ícono de Github" className={styles.img3}/>
            <a href="https://github.com/DesiFrontend">github.com/DesiFrontend</a>
        </li>
        </ul>
    </footer>
    );
};