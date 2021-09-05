import React, {useState} from 'react';
import s from './AddPost.module.css'


function AddPost() {

    const [button, setButton] = useState(false)

    function checkToggle(t: boolean) {
        if(!t){
            setButton(true)
        } else {
            setButton(false)
        }
    }

    const handleKeyDown = (e: any) =>{
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`;
    }


    return (
        <div className={s.addPost}>
            <div className={s.addPostWrap}>
                <div className={s.userImage}>
                    <img src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png"
                         alt="avatar"/>
                </div>
                <div className={s.inputPost}>
                    <textarea  placeholder="What's new?" onClick={() => checkToggle(button)} onKeyDown={handleKeyDown} onBlur={() => {setButton(false)}} />
                </div>
            </div>
            {button && <button className={s.addPostButton}>Post</button>}
        </div>
    );
}

export default AddPost;
