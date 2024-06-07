import React, {useState} from 'react';
import styles from '../Navbar/Navbar.module.css';
import {getImageUrl} from '../../utils';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false); 

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href='/'>Portafolio</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} src={menuOpen ? getImageUrl('nav/close.png') : getImageUrl('nav/menu.png')} 
                alt="menu ícono" onClick={() => setMenuOpen(!menuOpen)}/>
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                    <li><a href="#projects">Proyectos</a></li>
                    <li><a href="#skills">Habilidades</a></li>
                    <li><a href="#about">Sobre mí</a></li>
                    <div className={styles.contactMe}>
                        <li><a href="#contact" className={styles.BtnContact}>Contáctame</a></li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}
