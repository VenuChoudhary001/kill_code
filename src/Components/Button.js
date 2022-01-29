import React from 'react';

const BUTTON = ({lable,action}) => {
  return <>
  <button className='btn' onClick={action}>{lable}</button>
  </>;
};

export default BUTTON;
