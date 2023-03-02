import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PurchaseCard from '../components/PurchasesPage/PurchaseCard'
import config from '../utils/getConfig'
import '../components/PurchasesPage/styles/purchaseCard.css'
import { Link } from 'react-router-dom'

const PurchasesPage = () => {

    const [purchases, setPurchases] = useState()

    useEffect(() => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
        axios.get(url, config)
            .then(res => setPurchases(res.data))
            .catch(err => console.log(err.response))
    }, [])


    return (
        <div className='purchasePage'>
            <div className='actual_page'>
                        <Link className='text_previous' to='/'>Home</Link> 
                        <div className='circle'></div> 
                        <span>Purchases</span>  
                </div>
                <h1 className='title_purchase'>My Purchases</h1>
            <div className='purchaseCard'>
                
                {
                    purchases?.map(purchase => (
                        <PurchaseCard
                            key={purchase.id}
                            purchase={purchase}
                        />
                    ))
                }
            </div>
        </div>

    )
}

export default PurchasesPage