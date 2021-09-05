import React from 'react';
import Suggestion from './Suggestion/Suggestion';
import s from './Suggestions.module.css';


function Suggestions() {
    return (
        <div className={s.suggestions}>
            <h3>Suggestions</h3>
            <div className={s.suggWrap}>
                <Suggestion/>
                <Suggestion/>
                <Suggestion/>
                <Suggestion/>
                <Suggestion/>
                <Suggestion/>
                
                <button className={s.suggBottomButton}>view more</button>
            </div>
            
        </div>
    );
}

export default Suggestions;
