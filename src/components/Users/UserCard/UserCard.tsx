import React, {useState} from 'react';
import s from './UserCard.module.css';


function UserCard() {

    const [unfollow, setFollow] = useState<boolean>(false)

    const checkFollow = (f: boolean) => {
        f ? setFollow(false) : setFollow(true)
    }
    const setButtonName = (status: boolean) => {
      return   status ? 'Unfollow' : 'Follow'
    }


    return (
        <div className={s.userCard}>
            <img src="https://pbs.twimg.com/profile_images/1049056561962917888/RAnSm7gM.jpg" alt="avatar"/>
            <div className={s.userName}>User Name</div>
            <div className={s.userInfo}>user status</div>
            <div className={s.userCountry}>user.location.country</div>
            <div className={s.userCity}>user.location.city</div>
            <button onClick={() => {checkFollow(unfollow)}} className={ unfollow ? s.unfollowButton : s.followButton }>{setButtonName(unfollow)}</button>
        </div>
    );
}

export default UserCard;
