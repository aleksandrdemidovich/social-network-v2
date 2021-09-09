import React from 'react';
import s from './UserMessageItem.module.css';
import {NavLink} from 'react-router-dom';
import {DialogType} from "../../../state/state";

function checkOneDigitNumbers(i: any) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

export function currentTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();

    // add a zero in front of numbers<10
    m = checkOneDigitNumbers(m);
    h = checkOneDigitNumbers(h);

    return `${h}:${m}`
}


function UserMessageItem(props: DialogType) {

    let path = '/dialogs/' + props.id

    return (
        <li className={s.liWrap}>
            <NavLink to={path} className={s.liWrap}>
                <div className={s.userMessageWrap}>
                    <div className={s.userMessImg}>
                        <img src="https://avatarfiles.alphacoders.com/169/169302.jpg" alt="userAvatar"/>
                    </div>
                    <div className={s.userMessInfo}>
                        <h3>{props.name}</h3>
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div className={s.userMessSendTime}>
                        <div className={s.postedTime}>{currentTime()}</div>
                        <div className={s.messNotif}>1</div>
                    </div>
                </div>
            </NavLink>
        </li>
    );
}

export default UserMessageItem;