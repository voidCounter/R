import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './Blog.module.css';

const Blog = (props) => {
    // setting default image for blogs for user exeperience
    // const [defaultImage, setDefaultImage] = useState(defaultBlog);
    const { title, pubDate, link, thumbnail, description } = props?.blogData;
    // console.log(thumbnail);
    // console.log(props.blogData);
    let proTitle = title.substring(0, 60) + '...';
    // console.log(description);
    let proSubTitle = description.substring(0, 70) + '...';
    // const btnInfo = {
    //     link: link,
    //     btnText: "Read More"
    // }
    const blogImageStyle = {
        background: `url(${thumbnail})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return (
        <a href={link} className={styles.blog} target="_blank" rel="noopener noreferrer">
            {/* <div className={styles.blog}> */}
            <div className={`${styles.blogImage} blogImage`} style={blogImageStyle}>
                {/* {
                    (thumbnail === null) ?
                        <img src={defaultImage} alt="" srcset="" />
                        :
                        <img src={defaultImage} onLoad={() => setDefaultImage(thumbnail)} alt="" srcset="" />
                } */}
            </div>

            <div className={styles.blogDetails}>

                <div className={styles.blogTitle}>
                    {proTitle}
                </div>
                <div className={styles.blogEditInfo}>
                    <FontAwesomeIcon icon={faClock} style={{
                        marginRight: '5px',
                    }} />
                    {new Date(pubDate).toDateString('DD/MM/YYYY')}
                </div>
                <div className={styles.blogSubtitle}>
                    {proSubTitle}
                </div>
            </div>
            {/* </div > */}
        </a>
    );
};

export default Blog;