import React from 'react';
import { useState } from 'react';
import userImage from '../../../images/userImage-removebg.jpg';
import { Fade } from 'react-reveal';
import Tags from '../../Tags/Tags';
import aboutStyles from './About.module.css';
const About = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <div className={aboutStyles.aboutContainer}>
            <Fade duration={1000} cascade>
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

                    <div className={`${aboutStyles.aboutDescription} aboutDescription`} >
                        Bonjour! My name is Rohit Roy. I prefer to build creative and practical things for the cloud. In 2018, for the first time, I met HTML, CSS and get acquainted with 'websites' that are interlinked with one another. Though that was an amateurish debut, I have found myself creating an institutional website of 5 pages for a class project using just these two.<br />
                    Fast forward <span className={aboutStyles.dots}>....</span>
                        <br />
                     These days I am developing user-friendly applications using modern web technologies. During building or designing any web products, I put simplicity and users at the top the list.
                     <br />
                     Here are some of the techonologies I have been implementaing for quite a few months --
                     <div className={aboutStyles.technologies}>
                            <Tags tagName="JavaScript(ES6)"></Tags>
                            <Tags tagName="React"></Tags>
                            <Tags tagName="Nodejs"></Tags>
                            <Tags tagName="MongoDB"></Tags>
                            <Tags tagName="CSS3"></Tags>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default About;