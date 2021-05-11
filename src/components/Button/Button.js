import React from 'react';
import btnStyles from './Button.module.css';

const Button = (props) => {
    const clickButton = (event) => {
        const elem = document.getElementsByClassName(btnStyles.button)[0];
        // elem.style.transform = "translateY(-10px)";
        setTimeout(function () {
            // window.location.href = link;
            if (link !== "none")
                window.open(link, '_blank');
        }, 1000);
        // elem.style.transform = "translateY(-10px)";
    }
    const { link, btnText } = props.btn;
    return (
        <div className={btnStyles.linkedElement} onClick={clickButton}>
            {/* <a href={link} className={btnStyles.button} target="_blank" rel="noopener noreferrer">{btnText}</a> */}
            <div className={btnStyles.button} >{btnText}</div>
        </div>
    );
};

export default Button;