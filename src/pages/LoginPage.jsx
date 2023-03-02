import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import defaultValues from '../utils/defaultValues'
import './styles/loginPage.css'

const LoginPage = () => {

    const [token, setToken] = useState()

    const { register, handleSubmit, reset } = useForm()

    const submit = (data) => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
        axios.post(url, data)
            .then(res => {
                console.log(res.data)
                setToken(res.data.token)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('name', `${res.data.user.firstName} ${res.data.user.lastName}`)
            })
            .catch(err => {
                console.log(err)
                localStorage.clear()
            })
        reset(defaultValues)
    }

    const handleClick = () => {
        localStorage.clear()
        setToken(null)
    }

    if (localStorage.getItem('name')) {
        return (
            <div className='loggedIn'>
                <div className='card_loggedIn'>
                    <h1 className='text_welcome'>WELCOME</h1>
                    <i class='bx icon_loggedIn bxs-user-pin'></i>
                    <h2 className='userLogged'>{localStorage.getItem('name')}</h2>
                    <button className='btn_logout' onClick={handleClick}>Log out</button>
                </div>
            </div>
        )
    } else {

        return (
            <div className='login_page'>
                <div className='card_login'>
                    <h1 className='text_login'>LOGIN</h1>
                    <form className='form_login' onSubmit={handleSubmit(submit)}>
                    <h2 className='welcome_login'>Welcome! Enter your email and password to continue</h2>
                        <div className='email item'>
                            <label htmlFor="email">Email</label>
                            <input {...register('email')} type="email" id='email' />
                        </div>
                        <div className='password item'>
                            <label htmlFor="password">password</label>
                            <input {...register('password')} type="password" id='password' />
                        </div>
                        <button className='btn_login'>Login</button>
                    </form>
                    <Link to='/user/register' className='text_register' >Don't have an account? <span>Sign up</span> </Link>
                </div>

            </div>
        )
    }
}


export default LoginPage