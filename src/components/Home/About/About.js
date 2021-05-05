import React from 'react';
import userImage from '../../../images/userImage-removebg.png';
import aboutStyles from './About.module.css';
const About = () => {
    return (
        <div className={aboutStyles.aboutContainer}>
            <div className={aboutStyles.about}>
                <div className={aboutStyles.userImage}>
                    <img src={userImage} alt="Rohit Roy" />
                </div>
                <div className={aboutStyles.aboutDescription}>

                </div>
            </div>
        </div>
    );
};

export default About;