import React, { useContext } from 'react';
import { menuContext } from '../../../../App';
import styles from './Menu.module.css';
import Slide from 'react-reveal/Slide';

const Menu = () => {
    return (
        <div className={` ${styles.menu} menu`}>
            <Slide top><div className={`${styles.menuItem} menuItem`}>About</div></Slide>
            <Slide top><div className={`${styles.menuItem} menuItem`}>Projects</div></Slide>
            <Slide top><div className={`${styles.menuItem} menuItem`}>Blogs</div></Slide>
            <Slide top><div className={`${styles.menuItem} menuItem`}>Contact</div></Slide>
            <div className={`${styles.marker} marker`}></div>
        </div>
    );
};

export default Menu;