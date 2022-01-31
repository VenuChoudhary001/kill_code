import React from 'react';
import Navbar from '../Components/Navbar';
import FOOTER from './footer';

function Layout(props) {

  return (
    <>
      <div className="background" >
        <div className="bg-overlay"></div>
     
        <div className="content">
        <Navbar/>
          {props.children}
        <FOOTER/>
          </div>
      </div>
    </>
  );
}

export default Layout;
