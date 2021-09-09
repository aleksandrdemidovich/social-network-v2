import React from 'react';
import s from './ReceivedMessage.module.css';
import {currentTime} from "../../UserMessageItem/UserMessageItem";


function ReceivedMessage() {


    return (
        <div className={s.receivedMessWrap}>
            <img src="https://avatarfiles.alphacoders.com/169/169302.jpg" alt="userAvatar"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea illum, molestias quibusdam rem repellat sapiente? Amet consequatur corporis cum, et ipsam magni, nemo obcaecati quos saepe, sed sint tempora totam!
                <div>{currentTime()}</div>
            </p>
        </div>
    );
}

export default ReceivedMessage;