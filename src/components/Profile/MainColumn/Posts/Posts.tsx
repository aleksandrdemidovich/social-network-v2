import React from 'react';
import s from './Posts.module.css'
import Post from "./Post/Post";
import {ProfilePageType} from "../../../../state/state";


function Posts(props: ProfilePageType) {

    let postsElement = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount}/> )

    return (
        <div className={s.posts}>
            {postsElement}
        </div>
    );
}

export default Posts;
