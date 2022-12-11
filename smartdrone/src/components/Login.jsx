import React from 'react'
import loginImg from '../assets/right-content-image.jpg'

export default function Login(){
    return(
        <div className='grid grid-cols-1 sm:grid-cols-2'>
            <img src={loginImg} alt="" />
        </div>
    )
}