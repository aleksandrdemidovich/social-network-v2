import React from 'react';
import s from './DropDownMenu.module.css';



function DropDownMenu() {
    return (
        <div className={s.userAccountSettings}>
                <h3>Setting</h3>
                <ul className={s.menuItem}>
                    <li><a href="#" title="">Account Setting</a></li>
                    <li><a href="#" title="">Privacy</a></li>
                    <li><a href="#" title="">Faqs</a></li>
                    <li><a href="#" title="">Terms &amp; Conditions</a></li>
                </ul>
                <h3 className={s.logOut}><a href="#" title="">Logout</a></h3>
            </div>
    );
}

export default DropDownMenu;




