import React, { useEffect } from 'react';
import styles from './Header.module.css';
import Rellax from "rellax";
import { Fade, Slide } from 'react-reveal';
import Button from '../../Button/Button';

const Header = () => {

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
    const btnInfo = {
        link: "https://drive.google.com/uc?export=download&id=1XuiW2CWHRpVkRBkWnHbfSKh7V8qA1XbL",
        btnText: "Resume"
    };
    return (
        <div className={`${styles.headerContainer} headerContainer`}>
            <Fade delay={700}>
                <div className={styles.header}>
                    <div className={styles.nameContainer}>
                        <div style={{ paddingLeft: '3px' }}>Hi, My name is </div>
                        <Slide duration={500} delay={700} left cascade><div className={`${styles.name}`}>Rohit Roy</div></Slide>
                        <div className={`${styles.tagline}`}>I use MERN stack to unite logic and creativity</div>
                        <div style={{ marginTop: '25px' }}>
                            <Button btn={btnInfo}></Button>
                        </div>
                    </div>
                </div>
            </Fade>
        </div >
    );
};

export default Header;