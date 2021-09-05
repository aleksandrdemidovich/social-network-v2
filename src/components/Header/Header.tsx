import React from 'react';
import s from './Header.module.css';
import LeftLogoHeader from "./LeftLogoHeader/LeftLogoHeader";
import HeaderNavigation from "./HeaderNavigation/HeaderNavigation";
import RightHeaderMenu from "./RightHeaderMenu/RightHeaderMenu";

function Header() {
  return (
    <div className="App">
      <header className={s.header}>
        <div className={s.headerContent}>
            <LeftLogoHeader/>
            <HeaderNavigation/>
            <RightHeaderMenu/>
        </div>
      </header>

    </div>
  );
}

export default Header;
