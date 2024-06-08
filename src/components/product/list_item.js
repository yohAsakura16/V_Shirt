import React, { useState } from 'react';
import { PiStarLight } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";
import { PiStarHalfFill } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const List_item = ({product , changeOrderItem}) => {
  const starCount = Number(product.rate)/2;
  const integerPart = Math.floor(starCount);
  const decimalPart = starCount - integerPart;
  const star = [];
  if (integerPart != '') {
    for (var i=0;i<=Number(integerPart);i++) {
      star.push(<FaStar/>);
    }
  }
  if (decimalPart != '') {
    if (decimalPart < 0.5) {
      star.push(<PiStarLight/>);
    } else if (decimalPart == 0.5) {
      star.push(<FaStarHalf/>);
    } else if (decimalPart > 0.5) {
      star.push(<PiStarHalfFill/>);
    }
  }
  return (
    <div className='item-container'>
      <div className='item-img'>
        <span className='like-icon'>{product.like === 0 ? <FaRegHeart/> : <FaHeart/>}</span>
        <img src={require(`../../assests/${product.image}`)} alt={`${product.name}`}/>
      </div>
      <div className='item-description'>
        <h3 className='item-name'>{product.name}</h3>
        <div className='item-price'>
            <span className='price'>price : $ {product.price}</span>
            <button className='btn btn-primany' onClick={() => changeOrderItem(product.id)}>Add Card</button>
        </div>
        <div className='item-rateing'>{star}</div>
      </div>
    </div>
  )
}

export default List_item;