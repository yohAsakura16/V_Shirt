import React from 'react';
import './profile.css';

function profile() {
  return (
    <section id='home' className='profile'>
      <div className='profile-content'>
        <h2 className='one_liner'>New Collection</h2>
        <h2>Fashion Sale</h2>
        <h5 className='text-light'>First 100 online order has 50% offer</h5>
        <a href='#' className='btn order-btn'>Order Now</a>
      </div>
      <div className='profile-div'>
        <img src={require(`../../assests/s-shirt-2.png`)} alt={`t-shirt`} className='t-shirt' />
        <img src={require(`../../assests/s-shirt-3.png`)} alt={`t-shirt`} className='t-shirt' />
        <img src={require(`../../assests/s-shirt-1.png`)} alt={`t-shirt`} className='t-shirt' />
      </div>
    </section>
  )
}

export default profile