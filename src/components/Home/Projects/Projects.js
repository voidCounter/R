import React, { useEffect } from 'react';
import Rellax from "rellax";
import projectStyles from './Projects.module.css';
import aaron from '../../../images/projects/aaron-photos.jpg';
import aboutStyles from '../About/About.module.css';
import bookscaper from '../../../images/projects/bookscaper.jpg';
import projectsData from './ProjectsData';
import Tags from '../../Tags/Tags';
import { useState } from 'react';
import IconButton from '../../IconButton/IconButton';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        setProjects(projectsData);
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
                {
                    projects.map(project =>
                        <div className={projectStyles.soleProject}>
                            <div className={projectStyles.bulletMarker}>
                                <div className={projectStyles.bulletCircle}></div>
                            </div>
                            <div className={projectStyles.aboutProject}>
                                <div className={projectStyles.projectTitle}>
                                    {project.title}
                                </div>
                                <div className={projectStyles.projectLink}>
                                    <IconButton btn={{ link: project.github, btnText: "Github" }}></IconButton>
                                    <IconButton btn={{ link: project.website, btnText: "Website" }}></IconButton>
                                </div>
                                <div className={projectStyles.projectDetails}>
                                    <div className={projectStyles.technologiesUsed}>
                                        <span className={projectStyles.aboutTitle}>FrontEnd </span>
                                        <div className={aboutStyles.technologies}>
                                            {
                                                project.frontEnd.map(tech => <Tags tagName={tech}></Tags>)
                                            }
                                        </div>
                                    </div>
                                    <div className={projectStyles.technologiesUsed}>
                                        <span className={projectStyles.aboutTitle}>BackEnd</span>
                                        <div className={aboutStyles.technologies}>
                                            {
                                                project.backEnd.map(tech => <Tags tagName={tech}></Tags>)
                                            }
                                        </div>
                                    </div>

                                    <span className={projectStyles.aboutTitle} style={{ marginTop: '15px' }}>Features</span>
                                    <div className={projectStyles.projectFeatures}>
                                        <ul className={projectStyles.featureList}>
                                            {
                                                project.features.map(feature => <li>{feature}</li>)
                                            }
                                        </ul>

                                    </div>
                                </div>
                            </div>
                            <div className={projectStyles.imageContainer}>

                                <div className={`${projectStyles.projectImage} projectImage imageScroll`} >
                                    <img src={project.image} alt="aaron-project" srcset="" />
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Projects;