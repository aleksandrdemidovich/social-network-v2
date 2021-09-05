import React from 'react';
import s from './HeaderNavigation.module.css'
import { NavLink } from 'react-router-dom';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import BallotOutlinedIcon from '@material-ui/icons/BallotOutlined';


function HeaderNavigation() {
    return (
        <div className={s.headerNav}>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to="/profile">
                        <AccountCircleOutlinedIcon/>
                        Profile
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs">
                        <ChatBubbleOutlineOutlinedIcon/>
                        Messages
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/users">
                        <GroupAddOutlinedIcon/>
                        Users
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news">
                        <BallotOutlinedIcon/>
                        News
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music">
                        <LibraryMusicOutlinedIcon/>
                        Music
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings">
                        <SettingsOutlinedIcon/>
                        Settings
                    </NavLink>
                </div>
            </nav>
        </div>
    );
}

export default HeaderNavigation;