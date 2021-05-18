import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './IconButton.module.css';

const IconButton = (props) => {
    const { link, btnText } = props.btn;
    const clickButton = (event) => {
        // const elem = document.getElementsByClassName(btnStyles.button)[0];
        // elem.style.transform = "translateY(-10px)";
        setTimeout(function () {
            // window.location.href = link;
            if (link !== "none")
                window.open(link, '_blank');
        }, 1000);
        // elem.style.transform = "translateY(-10px)";
    }
    return (
        <div className={styles.iconButton} onClick={clickButton}>
            <span className={styles.icon}>
                {
                    btnText === "Github" ?
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> :
                        <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                }
            </span>
            <span>{btnText}</span>
        </div>
    );
};

export default IconButton;