import React from 'react';
import s from './Users.module.css';


function Users() {
    return (
        <div className={s.usersContainer}>
            <div className={s.usersTitle}>
                <h3>Users</h3>
                <input/>
                <button>find</button>
                <select name="friend">
                    <option value="null">All</option>
                    <option value="true">Only followed</option>
                    <option value="false">Only unfollowed</option>
                </select>
            </div>
            <div className={s.UsersWrap}>
                <div className={s.userCard}>userCard1</div>
                <div className={s.userCard}>userCard2</div>
                <div className={s.userCard}>userCard3</div>
                <div className={s.userCard}>userCard4</div>
                <div className={s.userCard}>userCard5</div>
                <div className={s.userCard}>userCard6</div>
                <div className={s.userCard}>userCard7</div>
                <div className={s.userCard}>userCard7</div>
                <div className={s.userCard}>userCard7</div>
                <div className={s.userCard}>userCard7</div>
                <div className={s.userCard}>userCard7</div>
                <div className={s.userCard}>userCard7</div>
                <div className={s.userCard}>userCard7</div>
            </div>
        </div>
    );
}

export default Users;
