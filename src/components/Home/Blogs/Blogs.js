import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import blog1 from '../../../images/blogs/blog1.png';
import Blog from './Blog/Blog';
import styles from './Blogs.module.css';
const Blogs = () => {
    const [mediumBlogs, setMediumBlogs] = useState([]);
    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@rohitroyz')
            .then(res => res.json())
            .then(data => setMediumBlogs(data?.items));
    }, [])
    console.log(mediumBlogs);
    return (
        <div className={styles.blogContainer}>
            <div className={styles.blogs}>
                {
                    mediumBlogs.map(blog => <Blog blogData={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;