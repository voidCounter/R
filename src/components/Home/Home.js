import React, { useEffect, useRef } from 'react';
import Loader from '../Loader/Loader';
import Social from '../Social/Social';
import Header from './Header/Header';
import styles from './Home.module.css';
import Navbar from './Navbar/Navbar';
import Rellax from "rellax";
import About from './About/About';
import Projects from './Projects/Projects';
import Blogs from './Blogs/Blogs';
const Home = () => {
    const mainSpeed = useRef(0);
    useEffect(() => {
        new Rellax(".mainScroll", { // <---- Via class name
            speed: -2,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });
    }, [])
    return (
        <div className={`${styles.home} home`}>
            <Navbar></Navbar>
            <div className={`${styles.main} main mainScroll`}>
                <Header></Header>
                <div className={styles.sectionTitle} id="aboutSection">
                    Who am I?
                </div>
                <About></About>
                <div className={styles.sectionTitle} id="aboutSection">
                    Projects
                </div>
                <Projects></Projects>
                <div className={styles.sectionTitle} id="aboutSection">
                    Some writings of me
                </div>
                <Blogs></Blogs>
            </div>
            <Social></Social>
        </div>
    );
};

export default Home;