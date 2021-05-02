import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={`${styles.headerContainer} headerContainer`}>
            <div className={styles.header}>
                <div className={styles.nameContainer}>
                    <h5>Hi, My name is </h5>
                    <h1>Rohit Roy</h1>
                </div>
            </div>
        </div>
    );
};

export default Header;