import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'
import Loading from '../components/Home/Loading'
import Filters from '../components/productsPage/Filters'
import { getProductsByName } from '../store/slices/products.slices'
import './styles/home.css'


const Home = () => {

    const { products } = useSelector(state => state)

    const [isOpen, setIsOpen] = useState(false)
    const [fromTo, setFromTo] = useState({
        from: 0,
        to: Infinity
    })

    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        const input = (e.target.inputSearch.value.trim().toLowerCase())
        dispatch(getProductsByName(input, false))
    }


    const handleOpen = () => setIsOpen(true)

    const handleClose = () => setIsOpen(false)

    const handleSubmitPrice = e => {
        e.preventDefault()
        const from = Number(e.target.from.value.trim())
        const to = Number(e.target.to.value.trim())

        if (from && to) {
            setFromTo({ from, to })

        } else if (from && !to) {
            setFromTo({ from, to: Infinity })

        } else if (!from && to) {
            setFromTo({ from: 0, to })

        } else {
            setFromTo({ from: 0, to: Infinity })
        }
    }

    const filterProduct = product => +product.price >= fromTo.from && product.price <= fromTo.to

    const [isLoading, setIsLoading] = useState(true)


    const loading = setTimeout(() => setIsLoading(false), 5000)


    return (
        isLoading ?
            <Loading />
            :
            <div className='home'>
                <Filters
                    handleSubmitPrice={handleSubmitPrice}
                    handleClose={handleClose}
                    isOpen={isOpen}
                />

                <div className='container_products'>
                    <form className='form_home' onSubmit={handleSubmit}>
                        <input type="text" id='inputSearch' />
                        <button>
                            <i className='bx home_icon bx-search'></i>
                        </button>
                    </form>

                    <div className='filter_button'>
                        <p onClick={handleOpen} className='text_filter'>Filters</p>
                        <i onClick={handleOpen} className='bx icon_filter bx-filter'></i>
                    </div>

                    <div className='card_product'>
                        {
                            products?.length === 0 || products === null ?
                                <h1>😵 THIS PRODUCT DOESN'T EXIST 😵</h1>
                                :
                                products?.filter(filterProduct).map(product => (
                                    <CardProduct
                                        key={product.id}
                                        product={product}
                                    />
                                ))
                        }
                    </div>
                </div>
            </div>
    )
}

export default Home