import React from 'react';
import s from './Users.module.css';
import UserCard from "./UserCard/UserCard";
import {UsersPropsType} from "./UsersContainer";
import {v1} from "uuid";


function Users(props: UsersPropsType) {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: v1(),
                photoURl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCQBY8CKewcbtUAnvzqmqXhnb8jXkkdhHyA&usqp=CAU',
                followed: true,
                fullName: 'Aleksandr Demidovich',
                status: 'i am boss',
                location: {city: 'Brest', country: 'Belarus'}
            },
            {
                id: v1(),
                photoURl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1DeyZNqRdLF9WiyJOo7YQW5HxbSp3F6tNQQ&usqp=CAU',
                followed: true,
                fullName: 'Dmitriy Demidovich',
                status: 'i am boss 2',
                location: {city: 'Kobrin', country: 'Belarus'}
            },
            {
                id: v1(),
                photoURl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPBURKqsrx0G1kxP3zaWxOOyDCRMdCssElFQ&usqp=CAU',
                followed: false,
                fullName: 'Fake User',
                status: 'default status',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: v1(),
                photoURl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjf9f4AWawRj9UcFq1sTTfxuzDezEGBGx7Kw&usqp=CAU',
                followed: true,
                fullName: 'Tony Stark',
                status: 'i am iron man',
                location: {city: 'LA', country: 'USA'}
            },
            {
                id: v1(),
                photoURl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBhDKgTzm5NfAXwR3jqbikEUa-uhkSXQaKlQ&usqp=CAU',
                followed: false,
                fullName: 'Admin Admin',
                status: 'i am ADMIN',
                location: {city: 'Ukraine', country: 'Kiev'}
            },
        ])
    }


    const follow = (userId: string) => {
        props.follow(userId)
    }

    const unfollow = (userId: string) => {
        props.unfollow(userId)
    }

    const usersElement = props.users.map(u => {
        return <div className={s.userCard}>
            <img src={u.photoURl} alt="avatar"/>
            <div className={s.userName}>{u.fullName}</div>
            <div className={s.userInfo}>{u.status}</div>
            <div className={s.userCountry}>{u.location.country}</div>
            <div className={s.userCity}>{u.location.city}</div>
            {u.followed ?
                <button className={s.unfollowButton} onClick={() => unfollow(u.id)}>Unfollow</button>
                : <button className={s.followButton} onClick={() => follow(u.id)}>Follow</button>}
        </div>
    })


    return (
        <div className={s.usersContainer}>
            <div className={s.usersTitle}>
                <div className={s.searchWrap}>
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
                {usersElement}
            </div>
        </div>
    );
}

export default Users;
