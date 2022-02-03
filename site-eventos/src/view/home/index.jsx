import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/index'
import { useSelector } from 'react-redux'

const Home = () => {
    return (
        <>
            <Navbar />
            {useSelector(state => state.usuarioEmail)}
        </>
    )
}

export default Home
