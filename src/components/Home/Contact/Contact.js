import React, { useState } from 'react';
import Button from '../../Button/Button';
import contactStyles from './Contact.module.css';
import emailjs from 'emailjs-com';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
// require('dotenv').config();
const Contact = () => {
    const [pointerEvent, setPointerEvent] = useState({
        pointerEvents: 'none'
    })

    const [countLetters, setcountLetters] = useState(0);
    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [checkEmail, setCheckEmail] = useState({
        border: '1px solid transparent'
    })
    const displayWords = (event) => {
        const message = event.target.value;
        setcountLetters(event.target.value.length);
    }
    const btnInfo = {
        link: "none",
        btnText: "Send"
    }
    const sendEmail = () => {
        // event.preventDefault();
        const formData = document.getElementsByClassName(contactStyles.contactForm)[0];
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formData, process.env.REACT_APP_USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })

    }
    const handleEmail = (event) => {
        let regx = /\S+@\S+\.\S+/;
        const newCheckEmail = { ...checkEmail }
        const newEvent = { ...pointerEvent }
        if (event.target.value !== '' && !regx.test(event.target.value)) {
            newCheckEmail.border = "2px solid rgba(145, 27, 29, 0.7)";
            newEvent.pointerEvents = 'none';
        }
        else {
            newCheckEmail.border = "2px solid transparent";
            newEvent.pointerEvents = 'auto';
        }
        setCheckEmail(newCheckEmail);
        setPointerEvent(newEvent);
    }
    const handleBlur = (event) => {
        const inputName = event.target.name;
        const newContactInfo = { ...contactInfo };
        newContactInfo[inputName] = event.target.value;
        setContactInfo(newContactInfo);
    }
    return (
        <div className={contactStyles.contactContainer}>
            <div className={contactStyles.contact}>
                <form action="" className={contactStyles.contactForm}>
                    <div className={contactStyles.inputbox}>
                        <input type="text" onBlur={handleBlur} placeholder="Name" name="name" required id={contactStyles.userName} />
                    </div>
                    <div className={contactStyles.inputbox}>
                        <input style={checkEmail} onChange={handleEmail} onBlur={handleBlur} type="text" placeholder="email" name="email" required id={contactStyles.userEmail} />
                    </div>
                    <div className={contactStyles.inputbox}>
                        <textarea name="message" id={contactStyles.messageArea} onBlur={handleBlur} placeholder="Message" onChange={displayWords} rows="10"></textarea>
                    </div>
                    <div className={contactStyles.submitGrp}>
                        <div className={`${contactStyles.inputbox}`}>
                            <input type="text" value={countLetters} className={contactStyles.wordCount} readOnly />
                        </div>
                        <div style={pointerEvent} onClick={sendEmail}>
                            <Button btn={btnInfo}></Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;