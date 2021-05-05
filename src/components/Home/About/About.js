import React from 'react';
import { useState } from 'react';
import userImage from '../../../images/userImage-removebg.jpg';
import aboutStyles from './About.module.css';
const About = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <div className={aboutStyles.aboutContainer}>
            <div className={`${aboutStyles.about} about`}>

                <div className={`${aboutStyles.userImageContainer} userImageContainer`}>
                    {isLoaded ? null : (
                        <div
                            style={{
                                backgroundColor: 'var(--text-gray)',
                                height: '100%',
                                width: '100%'
                            }}
                        />
                    )}
                    <div className={aboutStyles.userImage}>
                        <img style={isLoaded ? {} : { display: 'none' }} onLoad={() => setIsLoaded(true)} src={userImage} alt="Rohit Roy" /></div>
                </div>

                <div className={`${aboutStyles.aboutDescription} aboutDescription`}>
                    Bonjour! My name is Rohit Roy. At the time of reading 10th standard, I came to know about the existance of some technologies used to create this internet.
                </div>
            </div>
        </div>
    );
};

export default About;