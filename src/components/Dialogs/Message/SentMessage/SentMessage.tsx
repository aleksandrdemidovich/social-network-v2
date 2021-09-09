import React from 'react';
import s from './SentMessage.module.css';
import {currentTime} from "../../UserMessageItem/UserMessageItem";
import {MessageType} from "../../../../state/state";


function SentMessage(props:MessageType) {


    return (
        <div className={s.sendMessWrap}>
            <p>{props.message}
                <div>{currentTime()}</div>
            </p>
            <img src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png" alt="userAvatar"/>
        </div>
    );
}

export default SentMessage;