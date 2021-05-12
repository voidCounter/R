import React from 'react';
import styles from './Footer.module.css';
import socialStyles from '../../../components/Social/Social.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faQuora, faTwitter } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footer}>
                <div className={`${styles.socialMenu} socialMenu`}>
                    <a href="https://github.com/rohittz" target="_blank" rel="noopener noreferrer">
                        <div className={socialStyles.socialIcon}>
                            <FontAwesomeIcon icon={faGithub} />
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/rohitzz/" target="_blank" rel="noopener noreferrer">
                        <div className={socialStyles.socialIcon}>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </div>
                    </a>

                    <a href="https://twitter.com/_rohit0" target="_blank" rel="noopener noreferrer">
                        <div className={socialStyles.socialIcon}>
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                    </a>

                    <a href="https://bn.quora.com/profile/Rohit-4" target="_blank" rel="noopener noreferrer">
                        <div className={socialStyles.socialIcon}>
                            <FontAwesomeIcon icon={faQuora} />
                        </div>
                    </a>
                </div>
                <div className={`${styles.footerText}`}>
                    Designed and Built by Rohit Roy
                </div>
            </div>
        </div>
    );
};

export default Footer;