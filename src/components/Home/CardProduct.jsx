import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCartThunk } from '../../store/slices/cart.slice'
import config from '../../utils/getConfig'
import './styles/cardProduct.css'

const CardProduct = ({ product }) => {

    const navigate = useNavigate()

    const dispatch =  useDispatch()

    const handleClick = () => {
        navigate(`/product/${product.id}`)
    }

    const handleBtnClick = e => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'

        const data = {
            quantity: 1,
            productId: product.id
        }

        axios.post(url, data, config)
            .then(res => {
                console.log(res.data)
                dispatch(getCartThunk())
            })
            .catch(err =>  console.log(err.response))
        e.stopPropagation()
    }

    return (
        <article className='article_product' onClick={handleClick}>
            <header className='header_cardProduct'>
                <img className='img_product' src={product.images[0].url} alt="" />
            </header>
            <section className='info_product'>
                <div className='title_product'>
                    <h3 className='brand'>{product.brand}</h3>
                    <h2 className='title'>{product.title}</h2>
                </div>
                <div className='price_product'>
                    <span className='title_price'>Price </span>
                    <span className='price'>{product.price}</span>
                </div>
                <button className='btn_cart' onClick={handleBtnClick}>
                    <i className='bx box_cart bx-cart'></i>
                </button>
            </section>
        </article>
    )
}

export default CardProduct