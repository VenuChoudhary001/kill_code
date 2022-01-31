import React from 'react';

const BUTTON = ({lable,action,disable}) => {
  return <>
  <button className='btn' disabled={disable} onClick={action}>{lable}</button>
  </>;
};

export default BUTTON;
