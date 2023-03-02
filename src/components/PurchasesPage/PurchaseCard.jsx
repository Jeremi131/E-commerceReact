import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/purchaseCard.css'


const PurchaseCard = ({ purchase }) => {

    const navigate = useNavigate()

    const handleClickPurchase = () => {
        navigate(`/product/${purchase.product.id}`)
    }

    return (
        <article onClick={handleClickPurchase} className='purchase_container'>
            <header className='header_purchase'>
                <img className='img_purchase' src={purchase.product.images[0].url} alt="" />
            </header>
            <h3 className='title_purchase_product'>{purchase.product.title}</h3>
            <div className='quantity_purchase_product'>{purchase.quantity}</div>
            <div className='price_purchase_product'>{purchase.product.price}/each</div>
        </article>
    )
}

export default PurchaseCard