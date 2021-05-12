import React, { useEffect } from 'react';
import Rellax from "rellax";
import projectStyles from './Projects.module.css';
import aaron from '../../../images/projects/aaron-photos.jpg';
import aboutStyles from '../About/About.module.css';
import bookscaper from '../../../images/projects/bookscaper.jpg';
import Tags from '../../Tags/Tags';

const Projects = () => {
    useEffect(() => {
        new Rellax(".imageScroll", { // <---- Via class name
            speed: 0,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });
    }, [])
    return (
        <div className={projectStyles.projectContainer} >
            <div className={projectStyles.projects}>

                <div className={projectStyles.soleProject}>
                    <div className={projectStyles.bulletMarker}>
                        <div className={projectStyles.bulletCircle}></div>
                    </div>
                    <div className={projectStyles.aboutProject}>
                        <div className={projectStyles.projectTitle}>
                            AAron-Stanley: A photographer portfolio
                        </div>
                        <div className={projectStyles.projectDetails}>
                            <div className={projectStyles.technologiesUsed}>
                                <span className={projectStyles.aboutTitle}>FrontEnd </span>
                                <div className={aboutStyles.technologies}>
                                    <Tags tagName="React.js"></Tags>
                                    <Tags tagName="HTML5"></Tags>
                                    <Tags tagName="CSS3"></Tags>
                                    <Tags tagName="BootStrap"></Tags>
                                </div>
                            </div>
                            <div className={projectStyles.technologiesUsed}>
                                <span className={projectStyles.aboutTitle}>BackEnd</span>
                                <div className={aboutStyles.technologies}>
                                    <Tags tagName="MongoDB"></Tags>
                                    <Tags tagName="Firebase"></Tags>
                                    <Tags tagName="Express.js"></Tags>
                                </div>
                            </div>

                            <span className={projectStyles.aboutTitle} style={{ marginTop: '15px' }}>Features</span>
                            <div className={projectStyles.projectFeatures}>
                                <ul className={projectStyles.featureList}>
                                    <li>Built React application for photographers
to maintain clients with ease.</li>
                                    <li>Implemented a firebase authentication
system.</li>
                                    <li>Implemented admin dashboard to regulate
                                    clients’ bookings and stripe payment
method.</li>
                                    <li>Used React, CSS3, JavaScript, Material UI
for creating radiant front-end design.</li>
                                    <li>Used Express, MongoDB for back-end
development.</li>
                                    <li>Deployed to firebase and Heroku is
functioning at the backend.</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
                {/* project image */}
                <div className={projectStyles.imageContainer}>

                    <div className={`${projectStyles.projectImage} projectImage imageScroll`} >
                        <img src={aaron} alt="aaron-project" srcset="" />
                    </div>
                </div>
                {/* project image */}
                <div className={projectStyles.soleProject}>
                    <div className={projectStyles.bulletMarker}>
                        <div className={projectStyles.bulletCircle}></div>
                    </div>
                    <div className={projectStyles.aboutProject}>
                        <div className={projectStyles.projectTitle}>
                            BookScaper: An online bookstore
                        </div>
                        <div className={projectStyles.projectDetails}>
                            <div className={projectStyles.technologiesUsed}>
                                <span className={projectStyles.aboutTitle}>FrontEnd </span>
                                <div className={aboutStyles.technologies}>
                                    <Tags tagName="React.js"></Tags>
                                    <Tags tagName="HTML5"></Tags>
                                    <Tags tagName="CSS3"></Tags>
                                    <Tags tagName="BootStrap"></Tags>
                                </div>
                            </div>
                            <div className={projectStyles.technologiesUsed}>
                                <span className={projectStyles.aboutTitle}>BackEnd</span>
                                <div className={aboutStyles.technologies}>
                                    <Tags tagName="MongoDB"></Tags>
                                    <Tags tagName="Firebase"></Tags>
                                    <Tags tagName="Express.js"></Tags>
                                </div>
                            </div>

                            <span className={projectStyles.aboutTitle} style={{ marginTop: '15px' }}>Features</span>
                            <div className={projectStyles.projectFeatures}>
                                <ul className={projectStyles.featureList}>
                                    <li>An online bookstore built with React and
Express.</li>
                                    <li>Implemented a firebase authentication
system to deal with customers’ orders.</li>
                                    <li>Implemented admin dashboard to
manage available books in the store.</li>
                                    <li>Used React, CSS3 for designing the
website.</li>
                                    <li>Deployed to firebase and Heroku is
operating at the back-end.</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    {/* project image */}
                    <div className={projectStyles.imageContainer}>

                        <div className={`${projectStyles.projectImage} projectImage imageScroll`}>
                            <img src={bookscaper} alt="bookscaper-project" srcset="" />
                        </div>
                    </div>
                    {/* project image */}
                </div>

            </div>
        </div >
    );
};

export default Projects;