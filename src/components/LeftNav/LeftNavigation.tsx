import React from 'react';
import s from "./LeftNavigation.module.css";
import {NavLink} from "react-router-dom";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import GroupAddOutlinedIcon from "@material-ui/icons/GroupAddOutlined";
import BallotOutlinedIcon from "@material-ui/icons/BallotOutlined";
import LibraryMusicOutlinedIcon from "@material-ui/icons/LibraryMusicOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";


function LeftNavigation() {

    return (
        <div className={s.navWrap}>
            <nav className={s.nav}>
                <div className={s.item} data-title="Польский костел">
                    <NavLink to="/profile">
                        <AccountCircleOutlinedIcon/>
                        <span className={s.itemName}>Profile</span>
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs">
                        <ChatBubbleOutlineOutlinedIcon/>
                        <span className={s.itemName}>Messages</span>
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/users">
                        <GroupAddOutlinedIcon/>
                        <span className={s.itemName}>Users</span>
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news">
                        <BallotOutlinedIcon/>
                        <span className={s.itemName}>News</span>
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music">
                        <LibraryMusicOutlinedIcon/>
                        <span className={s.itemName}>Music</span>
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings">
                        <SettingsOutlinedIcon/>
                        <span className={s.itemName}>Settings</span>
                    </NavLink>
                </div>
            </nav>
        </div>
    );
}

export default LeftNavigation;
