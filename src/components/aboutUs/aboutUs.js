import React from 'react';
import './aboutUs.css';

function aboutUs() {
  return (
    <section id='aboutUs' className='aboutUs_container'>
        <h2 className='page-title'>About Us</h2>
        <h5 className='page-sub-title'>Know As</h5>
        <div className='aboutUs_content'>
            <div className='about-info'>
                <div className='img-div'>
                    <img src={require(`../../assests/man3.jpg`)} alt='Found'/>
                </div>
                <div className='info-content'>
                    <span className='info-name'><h3>Shiva</h3></span>
                    <span className='info-title'><h4>Founder</h4></span>
                </div>
            </div>
            <div className='about-info'>
                <div className='img-div'>
                    <img src={require(`../../assests/man2.jpg`)} alt='Co Founder'/>
                </div>
                <div className='info-content'>
                    <span className='info-name'><h3>Mani</h3></span>
                    <span className='info-title'><h4>Co Founder</h4></span>
                </div>
            </div>
            <div className='about-info'>
                <div className='img-div'>
                    <img src={require(`../../assests/man1.jpg`)} alt='Managing Director'/>
                </div>
                <div className='info-content'>
                    <span className='info-name'><h3>Raj</h3></span>
                    <span className='info-title'><h4>Managing Director</h4></span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default aboutUs