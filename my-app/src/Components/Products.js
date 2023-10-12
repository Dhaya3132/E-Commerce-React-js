import React from 'react';
import logo1 from './product1.png';
import logo2 from './Product2.png';
import logo3 from './Product3.png';

import './Products.css';

export default function Products()
{
    return (

    <div className="outer-box">
      <div className="contain">
        <p className='Collections'>Our Collections</p>
        <div className="images">
            <img src={logo1} className='Card1' alt='logo1' />
            <img src={logo2} className='Card1' alt='logo2' />
            <img src={logo3} className='Card1' alt='logo2' />
        </div>
        <p className='text5'>WIDE VARIETY OF COLLECTION</p>
      </div>
    </div> 
    );
}
