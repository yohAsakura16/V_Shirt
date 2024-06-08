import React from 'react';
import { FaXmark } from "react-icons/fa6";
import { MdOutlineAdd } from "react-icons/md";
import { GoDash } from "react-icons/go";


const ViewItem = ({ products , selectedItem , changeOrderItem , closeOrderItem}) => {
  const imgElements = [];
  var lengthItem = selectedItem;
  for (let i = 1; i <= 4; i++) {
    if (lengthItem >= products.length-1) {lengthItem = -1;}
    lengthItem = lengthItem + 1;
    if (lengthItem < products.length) {
        const id = products[lengthItem].id;
        imgElements.push(
        <img
          src={require(`../../assests/${products[lengthItem].image}`)}
          alt={`${products[lengthItem].name}`}
          onClick={() => changeOrderItem(id)}
        />
      );
    }
  }
  return (
    <div className='viewcard-bg'>
      <div className='add-card-item'>
        <a className='close-icon' onClick={() => closeOrderItem()}><FaXmark/></a>
        <div className='item-img'>
          <div className='img-ls'>
            <img src={require(`../../assests/${products[selectedItem].image}`)} alt={`${products[selectedItem].name}`}/>
          </div>
          <div className='img-sm'>
            {imgElements}
          </div>
        </div>
        <div className='item-content'>
          <div className='item-info'>
            <span className='item-name'>{products[selectedItem].name}</span>
            <span className='item-price'>price : $ {products[selectedItem].price}</span>
          </div>
          <div className='description'>Stay cool and stylish all summer long with our breezy, lightweight shirt featuring vibrant patterns and relaxed fit - the perfect blend of comfort and fashion for those sun-soaked days.</div>
          <div className='add-order'>
            <div className='select-size'>
              <span><input type='radio' autoComplete='off' name='size' className='size-radio'/> S</span>
              <span><input type='radio' autoComplete='off' name='size' className='size-radio'/> M</span>
              <span><input type='radio' autoComplete='off' name='size' className='size-radio'/> L</span>
              <span><input type='radio' autoComplete='off' name='size' className='size-radio'/> XL</span>
              <span><input type='radio' autoComplete='off' name='size' className='size-radio'/> XXL</span>
            </div>
            <div className='btn-group'>
              <a className='btn btn-add'><MdOutlineAdd/></a>
              <input type='number' autoComplete='off' value={1} name='count' className='input-felid-sm' readOnly/>
              <a className='btn btn-add'><GoDash/></a>
            </div>
            <div className='add-btn'>
              <button type='button' className='btn btn-primary'>Add Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewItem;
