import React from 'react';
import s from './Post.module.css'
import AccessTimeOutlined from '@material-ui/icons/AccessTimeOutlined';
import {Favorite} from "@material-ui/icons";


function Post() {

    function checkOneDigitNumbers(i: any) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];


    function currentTime() {
        let today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let day = today.getDate()
        let month = monthNames[today.getMonth()]

        // add a zero in front of numbers<10
        m = checkOneDigitNumbers(m);
        h = checkOneDigitNumbers(h);
        

        return `${day} ${month} ${h}:${m}`
    }

    return (
        <div className={s.post}>
            <div className={s.postWrap}>
                <img src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png" alt="avatar"/>
                <div className={s.postInfo}>
                    <h3> Aleksandr Demidovich</h3>
                    <div className={s.addPostTime}><AccessTimeOutlined style={{width: '14px', paddingRight:'3px'}}/>{currentTime()}</div>
                </div>
                <div className={s.postMessage}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusamus aliquam architecto culpa deleniti dicta dolor doloribus ducimus eius explicabo id
                        illo,
                        laudantium maxime nulla quae quos ratione reiciendis, rem sequi? </p>
                </div>
                <div className={s.postLikes}>15<Favorite style={{width: '18px', color: 'red'}}/></div>
            </div>
        </div>
    );
}

export default Post;
