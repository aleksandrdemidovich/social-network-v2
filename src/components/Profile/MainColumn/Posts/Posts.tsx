import React from 'react';
import s from './Posts.module.css'
import Post from "./Post/Post";
import {PostsPropsType} from "./PostsContainer";


function Posts(props: PostsPropsType) {

    const postsElement = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount}/> )

    return (
        <div className={s.posts}>
            {postsElement}
        </div>
    );
}

export default Posts







