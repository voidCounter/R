import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Blog from './Blog/Blog';
import styles from './Blogs.module.css';
const Blogs = () => {
    let allBlogs = [];
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@rohitroyz')
            .then(res => res.json())
            .then(data => processMedium(data.items));
        fetch('https://dev.to/api/articles?username=rohittz')
            .then(res => res.json())
            .then(data => processDevTo(data));
    }, []);
    const processDevTo = (data) => {
        // title, pubDate, link, thumbnail, description
        // console.log(data);
        data.forEach(blog => {
            allBlogs.push({
                title: blog.title,
                pubDate: blog.edited_at,
                link: blog.url,
                thumbnail: blog.cover_image,
                description: blog.description
            })
        });
        // all done now, let's set it to blogs
        setBlogs(allBlogs);
    }
    const getSubTitle = (description) => {
        const firstIndexfp = description.indexOf('<p>');
        const firstIndexlp = description.indexOf('</p>');
        const secondIndexfp = description.indexOf('<p>', (firstIndexfp + 1));
        const secondIndexlp = description.indexOf('</p>', (firstIndexlp + 1));
        return description.substring(secondIndexfp + 3, secondIndexlp);
    }
    const processMedium = (data) => {
        // console.log(data);
        data.forEach(blog => {
            allBlogs.push({
                title: blog.title,
                pubDate: blog.pubDate,
                link: blog.link,
                thumbnail: blog.thumbnail,
                description: getSubTitle(blog.description)
            })
        })
    }
    return (
        <div className={styles.blogContainer}>
            <div className={`${styles.blogs} blogs`}>
                {
                    blogs.map(blog => <Blog blogData={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;