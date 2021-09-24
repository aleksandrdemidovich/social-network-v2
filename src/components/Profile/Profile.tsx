import React from 'react';
import s from './Profile.module.css';
import Suggestions from "./LeftColumn/Suggestions/Suggestions";
import Weather from "./RightColumn/Weather/Weather";
import UserInfo from "./MainColumn/UserInfo/UserInfo";
import Posts from "./MainColumn/Posts/Posts";
import ProfileInfo from "./LeftColumn/ProfileInfo/ProfileInfo";
import Portfolio from "./RightColumn/TopPosts/Portfolio";
import AddPost from "./MainColumn/AddPost/AddPost";
import {ActionsType, ProfilePageType,} from "../../state/state";

type addPostPropsType = {
    newPostText: string
    dispatch: (action:ActionsType) => void
}


function App(props:ProfilePageType & addPostPropsType) {


    return (
        <div className={s.rowWrap}>
            <div className={s.leftRow}>
                <ProfileInfo/>
                <Suggestions/>
            </div>
            <div className={s.mainRow}>
                <UserInfo/>
                <AddPost dispatch={props.dispatch.bind(props.posts)}
                         newPostText={props.newPostText}
                />
                <Posts posts={props.posts} />
                <div className={s.rightRowToBottom}>
                    <Weather/>
                    <Portfolio/>
                </div>
            </div>
            <div className={s.rightRow}>
                <Weather/>
                <Portfolio/>
            </div>
        </div>
    );
}

export default App;
