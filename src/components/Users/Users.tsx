import React from 'react';
import s from './Users.module.css';
import UserCard from "./UserCard/UserCard";


function Users() {


    return (
        <div className={s.usersContainer}>
            <div className={s.usersTitle}>
                {/*<h3>Users</h3>*/}
                <div className={s.searchWrap} >
                <input className={s.searchInput} type="text"/>
                <button className={s.searchButton}>Search</button>
                </div>
                <select className={s.select}>
                    <option value="null">All</option>
                    <option value="true">Only followed</option>
                    <option value="false">Only unfollowed</option>
                </select>
            </div>
            <div className={s.UsersWrap}>
               <UserCard/>
               <UserCard/>
               <UserCard/>
               <UserCard/>
               <UserCard/>
               <UserCard/>
               <UserCard/>
               <UserCard/>
               <UserCard/>
               <UserCard/>
               <UserCard/>
               <UserCard/>


            </div>
        </div>
    );
}

export default Users;
