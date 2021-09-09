import React, {useState} from 'react';
import s from './AddPost.module.css'

type addPostPropsType = {
    addPostCallback: (postMess: string) => void
}

function AddPost(props: addPostPropsType) {


    const addPost = (mess: string) => {
        props.addPostCallback(mess)
        setInputValue('')
    }
    const [inputValue, setInputValue] = useState('')

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
                    <textarea value={inputValue} onChange={ (e) => {setInputValue(e.currentTarget.value)}} placeholder="What's new?" onKeyDown={handleKeyDown} />
                </div>
            </div>
            <button onClick={ () => { addPost(inputValue)} } className={s.addPostButton}>Post</button>
        </div>
    );
}

export default AddPost;
