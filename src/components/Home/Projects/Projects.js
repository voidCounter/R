import React, { useEffect, useState } from 'react';
import projectStyles from './Projects.module.css';
import aaron from '../../../images/projects/aaron-header.png';

const Projects = () => {

    const [mouseScrollY, setMouseScroll] = useState(0);
    const [isFixed, setIsFixed] = useState({
        position: "relative"
    });
    // useEffect(() => {
    //     setTimeout(() => {
    //         window.onscroll = () => {
    //             setMouseScroll(window.pageYOffset);
    //             const projectImage = document.getElementsByClassName(projectStyles?.projectImage)[0];
    //             let pITop = projectImage.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
    //             console.log(`${pITop} ${mouseScrollY}`);
    //             if (pITop > 2200) {
    //                 if (isFixed?.position === "relative") {
    //                     const newFixed = { ...isFixed }
    //                     newFixed.position = "fixed";
    //                     setIsFixed(newFixed);
    //                 }
    //             }
    //             else {
    //                 if (isFixed?.position === "fixed") {
    //                     const newFixed = { ...isFixed }
    //                     newFixed.position = "relative";
    //                     setIsFixed(newFixed);
    //                 }
    //             }
    //         }
    //     });
    // })
    const proImg = {
        background: `url(${aaron})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }
    return (
        <div className={projectStyles.projectContainer}>
            <div className={projectStyles.projects}>
                <div className={projectStyles.soleProject}>
                    <div className={projectStyles.bulletMarker}>
                        <div className={projectStyles.bulletCircle}></div>
                    </div>
                    <div className={projectStyles.aboutProject}>
                        AAron-Stanley: A photographer portfolio
                    </div>
                </div>
                {/* project image */}
                <div className={`${projectStyles.projectImage} projectImage`} style={proImg
                }>
                </div>
                {/* project image */}
                <div className={projectStyles.soleProject}>
                    <div className={projectStyles.bulletMarker}>
                        <div className={projectStyles.bulletCircle}></div>
                    </div>
                    <div className={projectStyles.aboutProject}>
                        AAron-Stanley: A photographer portfolio
                    </div>
                </div>
                <div className={projectStyles.soleProject}>
                    <div className={projectStyles.bulletMarker}>
                        <div className={projectStyles.bulletCircle}></div>
                    </div>
                    <div className={projectStyles.aboutProject}>
                        AAron-Stanley: A photographer portfolio
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;