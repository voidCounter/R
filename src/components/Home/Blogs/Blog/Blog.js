import { faArrowAltCircleRight, faClock } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import animStyles from '../../../../components/clickAnim.module.css';
import buttonStyles from '../../../../components/button.module.css';
import Tags from '../../../Tags/Tags';
import menuStyles from '../../Navbar/Menu/Menu.module.css';
import defaultBlog from '../../../../images/blogs/defaultblog.jpg';
import styles from './Blog.module.css';

const Blog = (props) => {
    // setting default image for blogs for user exeperience
    const [defaultImage, setDefaultImage] = useState(defaultBlog);
    let subTitle = '';
    const { title, pubDate, link, thumbnail, description } = props?.blogData;
    console.log(thumbnail);
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
                <img src={defaultImage} onLoad={() => setDefaultImage(thumbnail)} alt="" srcset="" />
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
                <div className={`${styles.blogButton}`}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <div className={`${menuStyles.menuItem} menuItem ${animStyles.clickable}`} style={{ justifyContent: 'flex-start' }}><span className={menuStyles.optionText}>
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