import React, {useState} from 'react';
import s from './Header.module.css';
import LeftLogoHeader from "./LeftLogoHeader/LeftLogoHeader";
import HeaderNavigation from "./HeaderNavigation/HeaderNavigation";
import RightHeaderMenu from "./RightHeaderMenu/RightHeaderMenu";
import MenuIcon from '@material-ui/icons/Menu';
import LeftNavigation from "../LeftNav/LeftNavigation";

function Header() {

    const [open, setOpen] = useState<boolean>(false)

    const checkToggle = (t: boolean) => {
        return t ? setOpen(false) : setOpen(true)
    }

    return (
        <div className="App">
            <header className={s.header}>
                <div className={s.headerContent}>
                    <LeftLogoHeader/>
                    <HeaderNavigation/>
                    <div className={s.leftNav}>{open && <LeftNavigation/>}</div>
                    <RightHeaderMenu/>
                    <div className={s.burgerButton}><MenuIcon onClick={() => {
                        checkToggle(open)
                    }}/></div>
                </div>
            </header>

        </div>
    );
}

export default Header;
