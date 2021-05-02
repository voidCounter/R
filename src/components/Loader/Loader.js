import React from 'react';
import styles from './Loader.module.css';

const Loader = () => {
    return (
        <div className={styles.loaderContainer} >
            <div className={styles.loader}>
                <div className={styles.loaderText}>
                    R
            </div>
                <div className={styles.top}></div>
                <div className={styles.bottom}></div>
                <div className={styles.left}></div>
                <div className={styles.right}></div>
            </div>
        </div>
    );
};

export default Loader;