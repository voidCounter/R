import { faArrowAltCircleRight, faClock } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import buttonStyles from '../../../../components/button.module.css';
import Tags from '../../../Tags/Tags';
import menuStyles from '../../Navbar/Menu/Menu.module.css';
import styles from './Blog.module.css';

const Blog = (props) => {
    let subTitle = '';
    const { title, pubDate, link, thumbnail, description } = props?.blogData;
    const categories = props?.blogData?.categories;
    const getSubTitle = () => {
        const firstIndexfp = description.indexOf('<p>');
        const firstIndexlp = description.indexOf('</p>');
        const secondIndexfp = description.indexOf('<p>', (firstIndexfp + 1));
        const secondIndexlp = description.indexOf('</p>', (firstIndexlp + 1));
        subTitle = description.substring(secondIndexfp + 3, secondIndexlp);
        console.log(secondIndexfp, secondIndexlp);
    }
    getSubTitle();
    let proTitle = title.substring(0, 60) + '...';
    console.log(description);
    let proSubTitle = subTitle.substring(0, 90) + '...';
    return (
        <div className={styles.blog}>
            <div className={styles.blogImage}>
                <img src={thumbnail} alt="" srcset="" />
            </div>

            <div className={styles.blogDetails}>

                <div className={styles.blogTitle}>
                    {proTitle}
                </div>
                <div className={styles.blogEditInfo}>
                    <FontAwesomeIcon icon={faClock} style={{
                        marginRight: '5px',
                    }} />
                    {pubDate}
                </div>
                <div className={styles.blogBreak}></div>
                <div className={styles.blogSubtitle}>
                    {proSubTitle}
                </div>
                <div className={styles.blogButton}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <div className={`${menuStyles.menuItem} menuItem`} style={{ justifyContent: 'flex-start' }}><span className={menuStyles.optionText}>
                            <FontAwesomeIcon icon={faArrowRight} style={{ marginRight: '5px' }} />
                        Read More</span>
                        </div>
                    </a>
                </div>
            </div>
        </div >
    );
};

export default Blog;