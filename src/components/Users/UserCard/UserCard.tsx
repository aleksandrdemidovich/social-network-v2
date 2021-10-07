import React from 'react';
import s from './UserCard.module.css';
import {UserType} from "../../../redux/users-reducer";



function UserCard(props: UserType) {

    return (
        <div className={s.userCard}>
            <img src={props.photoURl} alt="avatar"/>
            <div className={s.userName}>{props.fullName}</div>
            <div className={s.userInfo}>{props.status}</div>
            <div className={s.userCountry}>{props.location.country}</div>
            <div className={s.userCity}>{props.location.city}</div>
            {props.followed ? <button onClick={() => {}} >Unfollow</button> : <button onClick={() => {}}>Follow</button>}
            <button onClick={() => {}} className={ props.followed ? s.unfollowButton : s.followButton }>{props.followed ? 'Unfollow' : 'Follow'}</button>
        </div>
    );
}

export default UserCard;
