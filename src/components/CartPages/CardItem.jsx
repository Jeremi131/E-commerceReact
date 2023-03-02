import axios from 'axios'
import React from 'react'
import config from '../../utils/getConfig'
import { getCartThunk } from '../../store/slices/cart.slice'
import { useDispatch } from 'react-redux'
import './styles/cardItem.css'

const CardItem = ({ prodInfo }) => {

  const dispatch = useDispatch()

  const handleDelete = () => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${prodInfo.id}`
    axios.delete(url, config)
      .then(res => {
        console.log(res.data)
        dispatch(getCartThunk())
      })
      .catch(err => console.log(err.response))
  }

  return (
    <article className='container_cartItem'>
      <header className='header_cart'>
        <img className='img_cart' src={prodInfo.product.images[0].url} alt="" />
      </header>
      <div className='info_cart'>
        <div>
        </div>

        <ul className='priceQuantity'>
          <li className='container_quantity'>
          <h3 className='title_cart'>{prodInfo.product.title}</h3>
          <div>
             <span className='quantityCart_title'>Quantity </span>
            <span className='quantityCart_info'>{prodInfo.quantity}</span>
          </div>
           
          </li>
          <li className='container_price'>
            <span className='priceCart_title'>Unit Price </span>
            <span className='priceCart_info'>{prodInfo.product.price}</span>
          </li>
        </ul>
      </div>
      <button onClick={handleDelete}><i className='bx icon_trash bx-trash'></i></button>
    </article>
  )
}

export default CardItem