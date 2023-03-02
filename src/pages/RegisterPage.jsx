import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import defaultValues from '../utils/defaultValues'
import './styles/registerPage.css'
import marca from '../../public/images/marca.png'

const RegisterPage = () => {

    const { register, handleSubmit, reset } = useForm()

    const submit = data => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
        axios.post(url, data)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        reset(defaultValues)
    }

    return (
        <div className='registerPage'>
            <div className='register_card'>
                <h1 className='title_register'>Sign up</h1>
                <form className='form_register' onSubmit={handleSubmit(submit)}>
                    <div className='item_register'>
                        <label htmlFor="firstName">First name</label>
                        <input {...register('firstName')} type="text" id='firstName' />
                    </div>
                    <div className='item_register'>
                        <label htmlFor="lasttName">Laset name</label>
                        <input  {...register('lastName')} type="text" id='lasttName' />
                    </div>
                    <div className='item_register'>
                        <label htmlFor="email">Email</label>
                        <input  {...register('email')} type="email" id='email' />
                    </div>
                    <div className='item_register'>
                        <label htmlFor="password">Password</label>
                        <input  {...register('password')} type="password" id='password' />
                    </div>
                    <div className='item_register'>
                        <label htmlFor="phone">Phone (10 characters)</label>
                        <input  {...register('phone')} type="number" id='phone' />
                    </div>
                    <button className='btn_register'>Sign up</button>
                </form>
            </div>

        </div>
    )
}

export default RegisterPage