import React from 'react';
import s from './Settings.module.css';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import CallMadeOutlinedIcon from '@material-ui/icons/CallMadeOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import AutorenewOutlinedIcon from '@material-ui/icons/AutorenewOutlined';
import SecurityOutlinedIcon from '@material-ui/icons/SecurityOutlined';
import FingerprintOutlinedIcon from '@material-ui/icons/FingerprintOutlined';
import BlockOutlinedIcon from '@material-ui/icons/BlockOutlined';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';


function Settings() {
    return (
        <div className={s.settingsWrap}>
            <div className={s.settingListMenu}>
                    <a href='#'> <SettingsOutlinedIcon style={{paddingRight: '10px'}}/> Account Setting</a>
                    <a href='#'> <CallMadeOutlinedIcon style={{paddingRight: '10px'}}/> Status</a>
                    <a href='#'> <LockOutlinedIcon style={{paddingRight: '10px'}}/> Change Password</a>
                    <a href='#'> <NotificationsActiveOutlinedIcon style={{paddingRight: '10px'}}/> Notifications</a>
                    <a href='#'> <AutorenewOutlinedIcon style={{paddingRight: '10px'}} /> Requests</a>
                    <a href='#'> <SecurityOutlinedIcon style={{paddingRight: '10px'}} />Security and Login</a>
                    <a href='#'> <FingerprintOutlinedIcon style={{paddingRight: '10px'}} />Privacy</a>
                    <a href='#'> <BlockOutlinedIcon style={{paddingRight: '10px'}} />Blocking</a>
                    <a href='#'> <HighlightOffOutlinedIcon style={{paddingRight: '10px'}} />Deactivate Account</a>
            </div>
            <div className={s.settingMenu}>Item Settings</div>
        </div>
    );
}

export default Settings;
