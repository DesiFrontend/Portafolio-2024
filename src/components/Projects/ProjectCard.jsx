import React from "react";
import styles from '../Projects/ProjectCard.module.css';
import { getImageUrl } from "../../utils";


export const ProjectCard = ({
    project: { title, imageSrc, description, skills, demo, source, isPdf },
}) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/AppPequenosValientes.pdf'; // Ruta relativa a la carpeta public
        link.download = 'AppPequenosValientes.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

return (
    <div className={styles.container}>
        <img
            src={getImageUrl(imageSrc)}
            alt={`Image of ${title}`}
            className={styles.image}/>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
            {skills.map((skill, id) => (
                <li key={id} className={styles.skill}>
                    {skill}
                </li>
            ))}
        </ul>
        <div className={styles.links}>
            <a href={demo} className={styles.link}>
                Demo
            </a>
            {isPdf ? (
                <button onClick={handleDownload} className={styles.link}>
                    PDF
                </button>
            ) : (
                <a href={source} className={styles.link}>
                    Código
                </a>
            )}
        </div>
    </div>
    );
};