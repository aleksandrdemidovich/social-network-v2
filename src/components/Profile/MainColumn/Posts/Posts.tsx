import React from 'react';
import s from './Posts.module.css'
import Post from "./Post/Post";
import {ProfilePageType} from "../../../../redux/store";
import StoreContext from "../../../../StoreContext";
import {addPostActionCreator, UpdateNewPostTextCreator} from "../../../../redux/profile-reducer";
import AddPost from "../AddPost/AddPost";


function Posts(/*props: ProfilePageType*/) {


    return (
        <StoreContext.Consumer >
            {(store) => {
                const state = store.getState().profilePage
                const postsElement = state.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount}/> )

                return <div className={s.posts}>
                    {postsElement}
                </div>
            }}

        </StoreContext.Consumer>
    );
}

export default Posts;


