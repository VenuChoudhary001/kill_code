import React from 'react';
import FOOTER from './footer';

function Layout(props) {

  return (
    <>
      <div className="background" >
        <div className="bg-overlay"></div>
        <div className="content">{props.children}</div>
        <FOOTER/>
      </div>
    </>
  );
}

export default Layout;
