import React from 'react';
import s from './AddPost.module.css'
import {AddPostPropsType} from "./AddPostContainer";


function AddPost(props: AddPostPropsType) {

    const addPost = () => {
        props.addPost(props.newPostText!)
    }

    const onPostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.onPostChange(text)
    }

    const handleKeyDown = (e: any) =>{
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`;
    }

    return (
        <div className={s.addPost} >
            <div className={s.addPostWrap} >
                <div className={s.userImage}>
                    <img src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png"
                         alt="avatar"/>
                </div>
                <div className={s.inputPost}>
                    <textarea value={props.newPostText}
                              onChange={ onPostChange }
                              placeholder="What's new?"
                              onKeyDown={handleKeyDown} />
                </div>
            </div>
            <button onClick={ () => { addPost()} } className={s.addPostButton}>Post</button>
        </div>
    );
}

export default AddPost;
