import React, { useEffect, useRef } from 'react';
import styles from './Header.module.css';
import Rellax from "rellax";
import buttonStyles from '../../../components/button.module.css';
import { Fade, Slide } from 'react-reveal';

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
            <Fade delay={700}>
                <div className={styles.header}>
                    <div className={styles.nameContainer}>
                        <div style={{ paddingLeft: '3px' }}>Hi, My name is </div>
                        <Slide duration={500} delay={700} left cascade><div className={`${styles.name}`}>Rohit Roy</div></Slide>
                        <div className={`${styles.tagline}`}>I use MERN stack to unite logic and creativity</div>
                        <div className={buttonStyles.linkedElement} style={{ marginTop: '30px' }}>
                            <a className={`${buttonStyles.button}`} href="https://drive.google.com/uc?export=download&id=1XuiW2CWHRpVkRBkWnHbfSKh7V8qA1XbL" target="_blank" rel="noopener noreferrer">
                                Resume
                        </a>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Header;