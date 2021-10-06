import React from 'react';
import s from './Profile.module.css';
import Suggestions from "./LeftColumn/Suggestions/Suggestions";
import Weather from "./RightColumn/Weather/Weather";
import UserInfo from "./MainColumn/UserInfo/UserInfo";
import ProfileInfo from "./LeftColumn/ProfileInfo/ProfileInfo";
import Portfolio from "./RightColumn/TopPosts/Portfolio";
import AddPostContainer from "./MainColumn/AddPost/AddPostContainer";
import PostsContainer from "./MainColumn/Posts/PostsContainer";




function App() {


    return (
        <div className={s.rowWrap}>
            <div className={s.leftRow}>
                <ProfileInfo/>
                <Suggestions/>
            </div>
            <div className={s.mainRow}>
                <UserInfo/>
                <AddPostContainer /*store={props.store}*//>
                <PostsContainer /*posts={props.store.getState().profilePage.posts*/ />
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
