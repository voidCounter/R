import { faGithub, faGoogle, faLinkedin, faQuora, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Slide } from 'react-reveal';
import styles from './Social.module.css';

const Social = () => {
    return (
        <Slide bottom>
            <div className={styles.socialIcons}>
                <a href="https://github.com/rohittz" target="_blank" rel="noopener noreferrer">
                    <div className={styles.socialIcon}>
                        <FontAwesomeIcon icon={faGithub} />
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/rohitzz/" target="_blank" rel="noopener noreferrer">
                    <div className={styles.socialIcon}>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                </a>

                <a href="https://twitter.com/_rohit0" target="_blank" rel="noopener noreferrer">
                    <div className={styles.socialIcon}>
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                </a>

                <a href="https://bn.quora.com/profile/Rohit-4" target="_blank" rel="noopener noreferrer">
                    <div className={styles.socialIcon}>
                        <FontAwesomeIcon icon={faQuora} />
                    </div>
                </a>

            </div>
        </Slide>
    )

};

export default Social;