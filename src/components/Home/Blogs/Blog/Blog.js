import { faArrowAltCircleRight, faClock } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Tags from '../../../Tags/Tags';
import menuStyles from '../../Navbar/Menu/Menu.module.css';
import defaultBlog from '../../../../images/blogs/defaultblog.jpg';
import styles from './Blog.module.css';
import Button from '../../../Button/Button';

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
    const btnInfo = {
        link: link,
        btnText: "Read More"
    }
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
                <div style={{ marginTop: '10px', marginBottom: '20px' }}>
                    <Button btn={btnInfo}></Button>
                </div>
            </div>
        </div >
    );
};

export default Blog;