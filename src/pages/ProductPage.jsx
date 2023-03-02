import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductInfo from '../components/productsPage/ProductInfo'
import SimilarProducts from '../components/productsPage/SimilarProducts'
import SliderImg from '../components/productsPage/SliderImg'
import './styles/productPage.css'

const ProductPage = () => {

    const { id } = useParams()

    const [product, setProduct] = useState()

    useEffect(() => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`
        axios.get(url)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [id])

    return (
        <div className='productPage'>
             <div className='actual_page_product'>
                        <Link className='text_previous' to='/'>Home</Link> 
                        <div className='circle'></div> 
                        <span>{product?.title}</span>  
                </div>
            <div className='productPage_info'>
                <SliderImg 
            product={product}
            />


            <ProductInfo
                product={product}
            />
            </div>
            

            <SimilarProducts
                category={product?.category}
                productId={product?.id}
            />
        </div>
    )
}

export default ProductPage