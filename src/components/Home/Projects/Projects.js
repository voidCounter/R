import React from 'react';
import projectStyles from './Projects.module.css';
import aaron from '../../../images/projects/aaron-header.png';

const Projects = () => {
    const projectImageShow = function () {
        const projectImage = document.getElementsByClassName(projectStyles.projectImage)[0];
        let pITop = projectImage.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
        console.log(pITop);
    }();
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
                <div className={projectStyles.projectImage}>
                    <img src={aaron} alt="aaron" />
                </div>
            </div>
        </div>
    );
};

export default Projects;