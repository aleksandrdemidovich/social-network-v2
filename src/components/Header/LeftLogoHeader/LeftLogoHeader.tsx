import React from 'react';
import s from './LeftLogoHeader.module.css';
import logo from './moto-logo.svg'

function LeftLogoHeader() {
  return (
      <div className={s.leftLogo}>
          <img className={s.logo} src={logo} alt={'logo'}/>
          <img className={s.logoText}
               src="https://see.fontimg.com/api/renderfont4/vmgK9/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/QmlrZXJzIFdvcmxk/billion-dreams.png"
               alt="Cursive fonts"/>
      </div>
  );
}

export default LeftLogoHeader;
