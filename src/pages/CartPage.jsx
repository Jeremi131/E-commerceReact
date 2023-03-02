import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardItem from '../components/CartPages/CardItem'
import { getCartThunk } from '../store/slices/cart.slice'
import config from '../utils/getConfig'
import '../components/CartPages/styles/cardItem.css'
import { Link } from 'react-router-dom'

const CartPage = () => {

    const { cart } = useSelector(state => state)

    const [totalPrice, setTotalPrice] = useState(0)

    const dispatch = useDispatch()

    useEffect(() => {
        const result = cart?.reduce((acc, cv) => acc + cv.quantity * Number(cv.product.price), 0)
        setTotalPrice(result)
    }, [cart])


    const handlePurchase = () => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
        axios.post(url, {}, config)
            .then(res => {
                console.log(res.data)
                dispatch(getCartThunk())
            })
            .catch(err => console.log(err.response))
    }

    return (
        <div className='cartPage'>
            <div className='actual_page_cart'>
                <Link className='text_previous' to='/'>Home</Link>
                <div className='circle'></div>
                <span>Cart</span>
            </div>
            <h1 className='title_cartShop'>Cart</h1>
            <div className='cartItem'>
                {
                    cart?.map(prodInfo => {
                        return <CardItem
                            key={prodInfo.id}
                            prodInfo={prodInfo}
                        />
                    })
                }
            </div>
            <footer className='total_container'>
                <h2><span>Total: </span><span>{totalPrice}</span></h2>
                <button onClick={handlePurchase}>Buy this cart</button>
            </footer>
        </div>
    )
}

export default CartPage