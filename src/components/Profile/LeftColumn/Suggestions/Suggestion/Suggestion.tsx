import React from 'react';
import s from './Suggestion.module.css';
import AddIcon from '@material-ui/icons/Add';


function Suggestion() {
    return (
        <div className={s.suggUserWrap}>
            <img src="https://gambolthemes.net/workwise-new/images/resources/s1.png" alt="avatar"/>
            <div className={s.suggInfoWrap}>
                <div className={s.suggInfo}>
                    <h4>User Name</h4>
                    <span>Graphic Designer</span>
                </div>
                <div className={s.addSuggButton}><button><AddIcon/></button></div>
            </div>
        </div>
    );
}

export default Suggestion;
