import React, { useContext } from 'react';
import { Fade } from 'react-reveal';
import { menuContext } from '../../../../App';
import styles from './Menu.module.css';

const Menu = () => {
    return (
        <div className={` ${styles.menu} menu`}>
            <Fade bottom duration={500} >
                <div className={`${styles.menuItem} menuItem`}><span className={styles.optionText}>About</span></div></Fade>
            <Fade bottom duration={500} delay={100}>
                <div className={`${styles.menuItem} menuItem`}><span className={styles.optionText}>Projects</span></div></Fade>
            <Fade bottom duration={500} delay={200}>
                <div className={`${styles.menuItem} menuItem`}><span className={styles.optionText}>Blogs</span></div></Fade>
            <Fade bottom duration={500} delay={300}>
                <div className={`${styles.menuItem} menuItem`}><span className={styles.optionText}>Contact</span></div></Fade>
        </div>
    );
};

export default Menu;