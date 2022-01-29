import React, { useEffect, useState } from 'react';
import CountDown from './CountDown';
import Timer from './Timer';

const SubNav = ({round}) => {

  return <>
  <main className="sub-nav">
    <div className="round-number">ROUND I</div>
    <div className="line"></div>
    <div className="time">
  <CountDown/>
    </div>
  </main>
  </>;
};

export default SubNav;
