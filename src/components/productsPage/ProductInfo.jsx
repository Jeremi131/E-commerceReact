import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCartThunk } from '../../store/slices/cart.slice'
import config from '../../utils/getConfig'
import './styles/productInfo.css'

const ProductInfo = ({ product }) => {

    const [counter, setCounter] = useState(1)

    const dispatch = useDispatch()

    const handleAdd = () => {
        setCounter(counter + 1)
    }

    const handleMinus = () => {
        if (counter - 1 >= 1) {
            setCounter(counter - 1)
        }
    }

    const handleAddCart = () => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'

        const data = {
            quantity: counter,
            productId: product.id
        }

        axios.post(url, data, config)
            .then(res => {
                console.log(res.data)
                dispatch(getCartThunk())
                setCounter(1)
            })
            .catch(err => console.log(err.response))
    }

    return (
        <article className='productInfo'>
            <div className='info_product'>
                <h3 className='brand_info'>{product?.brand}</h3>
                <h2 className='title_info'>{product?.title}</h2>
                <p className='description'>{product?.description}</p>
                <footer className='section_price_quantity'>
                    <section  className='section_price'>
                        <h4 className='price_infoTitle'>Price</h4>
                        <span className='price_info'>{product?.price}</span>
                    </section>
                    <section className='section_quantity'>
                        <h4 className='quantity_title'>Quantity</h4>
                        <div className='counter'>
                            <button className='counterMinus' onClick={handleMinus}>-</button>
                            <div className='counterResult'>{counter}</div>
                            <button className='counterAdd' onClick={handleAdd}>+</button>
                        </div>
                    </section>
                </footer>
                <button className='btn_addCart' onClick={handleAddCart}>Add to cart<i className='bx bx-cart'></i></button>
            </div>
        </article>
    )
}

export default ProductInfo