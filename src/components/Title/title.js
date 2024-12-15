import './title.css'

import React from 'react';

const Title = ({subTitle, title}) => {
  return (
    <div className='title'>
      <p>{subTitle ? subTitle : "Our Program"}</p>
      <h2>{title ? title : "What We Offer"}</h2>
    </div>
  );
}

export default Title;
