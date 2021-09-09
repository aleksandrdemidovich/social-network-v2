import React, {useState} from 'react';
import s from './RightHeaderMenu.module.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DropDownMenu from "./DropDownMenu/DropDownMenu";



function RightHeaderMenu() {

    const [open, setOpen] = useState<boolean>(false)
    const checkToggle = (t: boolean) => {
        if (!t) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }

    return (
        <div className={s.rightHeaderMenu}>
            <button onBlur={() => {setOpen(false)}} onClick={() => {checkToggle(open)}} className={s.rightMenuButton}>
                <img src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png" alt='user-avatar'/>
                <a>User Name</a><ArrowDropDownIcon/>
                </button>
            {open && <DropDownMenu />}
        </div>

    );
}

export default RightHeaderMenu;




