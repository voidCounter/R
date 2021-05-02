import React from 'react';
import Loader from '../Loader/Loader';
import styles from './Home.module.css';
import Navbar from './Navbar/Navbar';

const Home = () => {
    return (
        <div className={`${styles.home} home`}>
            <Navbar></Navbar>
        </div>
    );
};

export default Home;