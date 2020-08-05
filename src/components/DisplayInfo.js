import React from 'react';

function DisplayInfo({ price, quantity, subtotal }) {
  return (
    <h3>
      <span className='price'>Price: ${price}</span> ×{' '}
      <span className='quantity'>Quantity: {quantity}</span> ={' '}
      <span className='subtotal'>Subtotal: ${subtotal}</span>
    </h3>
  );
}

export default DisplayInfo;
