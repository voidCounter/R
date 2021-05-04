import React, { useEffect, useRef } from 'react';
import styles from './Header.module.css';
import Rellax from "rellax";
import buttonStyles from '../../../components/button.module.css';

const Header = () => {
    const speed = useRef(0);

    useEffect(() => {
        new Rellax(".animate", { // <---- Via class name
            speed: -3,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });

        // new Rellax(speed.current, { // <---- Via useRef element
        //     speed: -10,
        //     center: false,
        //     wrapper: null,
        //     round: true,
        //     vertical: true,
        //     horizontal: false
        // });
    }, []);
    return (
        <div className={`${styles.headerContainer} headerContainer`}>
            <div className={styles.header}>
                <div className={styles.nameContainer}>
                    <div style={{ paddingLeft: '3px' }}>Hi, My name is </div>
                    <div className={`${styles.name}`}>Rohit Roy</div>
                    <div className={`${styles.tagline}`}>I use MERN stack to unite logic and creativity</div>
                    <div className={`${buttonStyles.button}`} style={{ marginTop: '30px' }}>
                        Resume
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;