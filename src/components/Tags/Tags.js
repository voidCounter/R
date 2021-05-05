import React from 'react';
import tagStyle from './Tags.module.css';
const Tags = (props) => {
    return (
        <div className={tagStyle.tag}>
            {props.tagName}
        </div>
    );
};

export default Tags;