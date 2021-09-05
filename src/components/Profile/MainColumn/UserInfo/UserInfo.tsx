import React from 'react';
import s from './UserInfo.module.css'
import EditRoundedIcon from '@material-ui/icons/EditRounded';


function UserInfo() {
    return (
        <div className={s.userInfo}>
            <div className={s.infoWrap}>
                <div className={s.info}>
                    <button className={s.editButton}><EditRoundedIcon/></button>
                    <h3>Aleksandr Demidovich</h3>
                    <span className={s.userPosition}>Frontend developer</span>
                    <span className={s.searchJobItem}>Open to work</span>
                </div>
                <div className={s.profSkill}>
                    <div className={s.skillsWrap}>
                        <div className={s.skill}>HTML</div>
                        <div className={s.skill}>CSS</div>
                        <div className={s.skill}>JS</div>
                        <div className={s.skill}>ReactJS</div>
                        <div className={s.skill}>TypeScript</div>
                        <div className={s.skill}>Redux</div>
                        <div className={s.skill}>Git</div>
                        <div className={s.skill}>Yarn</div>
                        <div className={s.skill}>Webpack</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default UserInfo;

