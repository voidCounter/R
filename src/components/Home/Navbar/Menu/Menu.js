import React, { useContext } from 'react';
import { Fade } from 'react-reveal';
import { menuContext } from '../../../../App';
import styles from './Menu.module.css';

const Menu = (props) => {
    const goToAbout = () => {
        props?.toggle();
    }
    const goToContact = () => {
        props?.toggle();
    }
    const goToProjects = () => {
        props?.toggle();
    }
    const goToBlogs = () => {
        props?.toggle();
    }
    return (
        <div className={` ${styles.menu} menu`}>
            <Fade bottom duration={500} >
                <a href="#aboutSection" >
                    <div className={`${styles.menuItem} menuItem {}`} onClick={goToAbout}><span className={styles.optionText}>About</span></div></a></Fade>
            <Fade bottom duration={500} delay={100}>
                <a href="#projects">
                    <div className={`${styles.menuItem} menuItem`} onClick={goToProjects}><span className={styles.optionText}>Projects</span></div></a></Fade>
            <Fade bottom duration={500} delay={200}>
                <a href="#blogs">
                    <div className={`${styles.menuItem} menuItem`} onClick={goToBlogs}><span className={styles.optionText}>Blogs</span></div></a></Fade>
            <Fade bottom duration={500} delay={300}>
                <div className={`${styles.menuItem} menuItem`} onClick={goToContact}><span className={styles.optionText}>Contact</span></div></Fade>
        </div>
    );
};

export default Menu;