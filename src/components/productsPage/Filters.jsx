import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProductsThunk, getProductsByName } from '../../store/slices/products.slices'
import './styles/filters.css'


const Filters = ({ handleClose, handleSubmitPrice, isOpen }) => {

    const dispatch = useDispatch()

    const [categories, setCategories] = useState()

    useEffect(() => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories'
        axios.get(url)
            .then(res => setCategories(res.data))
            .catch(err => console.log(err.response))
    }, [])

    const handleClickCategory = id => {
        dispatch(getProductsByName(id, true))
    }


  return (
    <div>
        <div className='container_categories'>
                <div className='fixed'>
                    <article className='categories_card'>
                        <header className='header_category'>
                            <h3 className='title_category'>Price</h3>
                            <i className='bx icon_category bx-chevron-down'></i>
                        </header>
                        <form className='form_price' onSubmit={handleSubmitPrice}>
                            <div className='item_from'>
                                <label htmlFor="from">From</label>
                                <input type="number" id='from' />
                            </div>

                            <div className='item_to'>
                                <label htmlFor="to">To</label>
                                <input type="number" id='to' />
                            </div>
                            <button>Filter Price</button>
                        </form>
                    </article>

                    <article className='categories_card'>
                        <header className='header_category'>
                            <h3 className='title_category'>Category</h3>
                            <i className='bx icon_category bx-chevron-down'></i>
                        </header>
                        <ul className='categories'>
                            <li className='category' onClick={() => dispatch(getAllProductsThunk())}>All Products</li>
                            {
                                categories?.map(category => (
                                    <li className='category' key={category.id} onClick={() => handleClickCategory(category.id)}>{category.name}</li>
                                ))
                            }
                        </ul>
                    </article>
                </div>

            </div>


            <div className={`modal_categories ${isOpen && 'modal_categories-visible'}`}>
                <i onClick={handleClose} className='bx icon_closed bx-x'></i>
                <article className='modal_card'>
                    <header className='modal_header'>
                        <h3 className='title_category'>Price</h3>
                        <i className='bx icon_category bx-chevron-down'></i>
                    </header>
                    <form className='form_price' onSubmit={handleSubmitPrice}>
                        <div className='item_from'>
                            <label htmlFor="from">From</label>
                            <input type="number" id='from' />
                        </div>

                        <div className='item_to'>
                            <label htmlFor="to">To</label>
                            <input type="number" id='to' />
                        </div>
                        <button>Filter Price</button>
                    </form>
                </article>

                <article className='modal_card'>
                    <header className='modal_header'>
                        <h3 className='title_category'>Category</h3>
                        <i className='bx icon_category bx-chevron-down'></i>
                    </header>
                    <ul className='categories'>
                        <li className='category' onClick={() => dispatch(getAllProductsThunk())}>All Products</li>
                        {
                            categories?.map(category => (
                                <li className='category' key={category.id} onClick={() => handleClickCategory(category.id)}>{category.name}</li>
                            ))
                        }
                    </ul>
                </article>
            </div>

    </div>
  )
}

export default Filters