import React,{ useState } from 'react';
import './product.css';
import List_item from './list_item';
import ViewItem from './viewItem';

const Product = () => {
  const [products,setProduct] = useState([
    {
      id: 1,
      image: 's-shirt1.jpg',
      name: 'Green Grapes',
      rate: '9.8',
      like: 1,
      price: 100
    },
    {
      id: 2,
      image: 's-shirt2.jpg',
      name: 'Pomegranate',
      rate: '8.4',
      like: 0,
      price: 200
    },
    {
      id: 3,
      image: 's-shirt3.jpg',
      name: 'Black Grapes',
      rate: '8',
      like: 1,
      price: 250
    },
    {
      id: 4,
      image: 's-shirt4.jpg',
      name: 'Grape Fruit',
      rate: '6.8',
      like: 1,
      price: 300
    },
    {
      id: 5,
      image: 's-shirt5.jpg',
      name: 'Berry',
      rate: '9',
      like: 0,
      price: 250
    },
    {
      id: 6,
      image: 's-shirt6.jpg',
      name: 'lemon',
      rate: '7.8',
      like: 0,
      price: 15
    },
    {
      id: 7,
      image: 's-shirt7.jpg',
      name: 'lemon',
      rate: '9.8',
      like: 1,
      price: 15
    },
    {
      id: 8,
      image: 's-shirt8.jpg',
      name: 'lemon',
      rate: '8',
      like: 0,
      price: 15
    }
  ])
  const [openOrderItem,setOpenOrderItem] = useState(false)
  const [selectedItem,setSelectedItem] = useState()

  const changeOrderItem = (id) => {
    const index = products.findIndex(item => item.id === id);
    if (index !== -1) {
      setSelectedItem(index);
      setOpenOrderItem(true);
    } else {
      console.error('Item not found');
    }
  };
  const closeOrderItem = () => {
    setOpenOrderItem(false)
  };

  return (
    <section id='products' className='container products-container'>
      <h2 className='page-title'>Trending collection</h2>
      <h5 className='page-sub-title'>summer collection are 50% offer</h5>
      <div className='product-container'>
        {
          products.map((product) => {
                  return <List_item key={product.id} product={product} changeOrderItem={changeOrderItem}/>
          })
        }
        {openOrderItem && (<ViewItem products={products} selectedItem={selectedItem} changeOrderItem={changeOrderItem} closeOrderItem={closeOrderItem}/>)}
      </div>
    </section>
  )
}

export default Product