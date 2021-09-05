import React from 'react';
import s from './ProfileInfo.module.css';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

import FacebookIcon from '@material-ui/icons/Facebook';
import LanguageIcon from '@material-ui/icons/Language';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';


function ProfileInfo() {
    return (
        <div className={s.userInfo}>
            <div className={s.imageWrap}>
                <button className={s.editButton}><EditOutlinedIcon/></button>
                <div className={s.topColorPadding}>
                </div>
                <div className={s.avatarImage}>
                    <img src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png"
                         alt="avatar"/>
                </div>
            </div>
            <h3>Hello samurai</h3>
            <div className={s.userSocialLinks}>
                <ul>
                        <li><a href="#"> <FacebookIcon style={{paddingRight: '10px', color:'#4267B2'}}/> Facebook</a></li>
                        <li><a href="#"> <LanguageIcon style={{paddingRight: '10px'}}/> Website</a></li>
                        <li><a href="#">
                            <i>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/2/21/VK.com-logo.svg' style={{height: '20px', width: '20px', paddingRight: '15px'}}/>
                            </i> VK</a>
                        </li>
                        <li><a href="#"> <TwitterIcon style={{paddingRight: '10px', color:'#1DA1F2'}}/> Twitter</a></li>
                        <li><a href="#"> <InstagramIcon style={{paddingRight: '10px', color:'#8a3ab9'}}/> Instagram</a></li>
                        <li><a href="#"> <YouTubeIcon style={{paddingRight: '10px', color:'#FF0000'}}/> YouTube</a></li>
                        <li><a href="#"> <GitHubIcon style={{paddingRight: '10px', color:'#4078c0'}}/> Github</a></li>
                        <li><a href="#"> <LinkedInIcon style={{paddingRight: '10px', color:'#0077b5'}}/> LinkedIn</a></li>
                </ul>
            </div>
        </div>
    );
}

export default ProfileInfo;
