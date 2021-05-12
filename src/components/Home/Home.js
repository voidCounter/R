import React, { useEffect } from 'react';
import Social from '../Social/Social';
import Header from './Header/Header';
import styles from './Home.module.css';
import Navbar from './Navbar/Navbar';
import Rellax from "rellax";
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from '../Home/Contact/Contact';
import Blogs from './Blogs/Blogs';
import Footer from './Footer/Footer';
const Home = () => {
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
        <main className={`${styles.home}`}>
            <Navbar></Navbar>
            <div className={`${styles.main} main mainScroll`}>
                <Header></Header>
                <div className={styles.sectionTitle} id="aboutSection">
                    Who am I?
                </div>
                <About></About>
                <div className={styles.sectionTitle} id="projects">
                    Several things I have built
                </div>
                <Projects></Projects>
                <div className={styles.sectionTitle} id="blogs">
                    Some of my writings!
                </div>
                <Blogs></Blogs>
                <div className={styles.sectionTitle} id="contact">
                    Get in touch!
                </div>
                <Contact></Contact>
            </div>
            <Social></Social>
            <Footer></Footer>
        </main>
    );
};

export default Home;