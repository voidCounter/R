import React from 'react';
import styles from './StatusMessage.module.css';

const StatusMessage = (props) => {
    return (
        <div className={styles.status}>
            {props.messageText}
        </div>
    );
};

export default StatusMessage;