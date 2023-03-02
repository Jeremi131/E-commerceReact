import React from 'react'
import './styles/loading.css'

const Loading = () => {
    return (
        <div className='loadingScreen'>
            <i class='bx box_load bx-loader-alt'></i>
            <h2>Loading...</h2>
        </div>
    )
}

export default Loading