import React from 'react';
import Loader from '../Loader/Loader';
import Social from '../Social/Social';
import Header from './Header/Header';
import styles from './Home.module.css';
import Navbar from './Navbar/Navbar';

const Home = () => {
    return (
        <div className={`${styles.home} home`}>
            <Navbar></Navbar>
            <div className={`${styles.main} main`}>
                <Header></Header>
                <Social></Social>
            </div>
        </div>
    );
};

export default Home;