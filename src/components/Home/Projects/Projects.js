import React, { useEffect, useState, useRef } from 'react';
import Rellax from "rellax";
import projectStyles from './Projects.module.css';
import aaron from '../../../images/projects/aaron-photos.png';
import bookscaper from '../../../images/projects/bookscaper.png';

const Projects = () => {
    const mainSpeed = useRef(0);
    useEffect(() => {
        new Rellax(".imageScroll", { // <---- Via class name
            speed: +2,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });
    }, [])
    const [mouseScrollY, setMouseScroll] = useState(0);
    const [isChanged, setIsChanged] = useState(false);
    function isInViewport(element) {
        const rect = element?.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    const projectOnScroll = () => {
        const firstProject = document.getElementsByClassName(projectStyles.soleProject)[0];
        const secondProject = document.getElementsByClassName(projectStyles.soleProject)[1];
        if (isInViewport(firstProject) && currImage?.background !== `url(${aaron})`) {
            const newImage = { ...currImage };
            newImage.background = `url(${aaron})`;
            setCurrImage(newImage);
        }
        else if (isInViewport(secondProject) && currImage?.background !== `url(${bookscaper})`) {
            const newImage = { ...currImage };
            newImage.background = `url(${bookscaper})`;
            setCurrImage(newImage);
        }
    }
    const [currImage, setCurrImage] = useState({
        background: `url(${aaron})`,
    });
    return (
        <div className={projectStyles.projectContainer} onWheel={projectOnScroll}>
            <div className={projectStyles.projects} id="projects">

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

                                <span className={projectStyles.aboutTitle}>FrontEnd : </span>
                                 React.js, HTML5, CSS3, Bootstrap
                                <br />
                                <span className={projectStyles.aboutTitle}>BackEnd : </span>
                                MongoDB, Firebase, Express.js
                            </div>
                            <div className={projectStyles.projectFeatures}>
                                <span className={projectStyles.aboutTitle}>Features</span>
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

                    <div className={`${projectStyles.projectImage} projectImage imageScroll`} style={currImage
                    }>
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

                                <span className={projectStyles.aboutTitle}>FrontEnd : </span>
                                 React.js, HTML5, CSS3, Bootstrap
                                <br />
                                <span className={projectStyles.aboutTitle}>BackEnd : </span>
                                MongoDB, Firebase, Express.js
                            </div>
                            <div className={projectStyles.projectFeatures}>
                                <span className={projectStyles.aboutTitle}>Features</span>
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
                </div>

            </div>
        </div>
    );
};

export default Projects;