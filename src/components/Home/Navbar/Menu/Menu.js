import React, { useContext } from 'react';
import { menuContext } from '../../../../App';
import styles from './Menu.module.css';

const Menu = () => {
    return (
        <div className={` ${styles.menu} menu`}>
            <div className={`${styles.menuItem} menuItem`}>About</div>
            <div className={`${styles.menuItem} menuItem`}>Projects</div>
            <div className={`${styles.menuItem} menuItem`}>Blogs</div>
            <div className={`${styles.menuItem} menuItem`}>Contact</div>
            <div className={`${styles.marker} marker`}></div>
        </div>
    );
};

export default Menu;