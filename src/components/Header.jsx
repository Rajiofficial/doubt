import React from 'react'
import { useState} from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'


const Header = () => {
const [Mobile,setMobile]=useState(false)

  return (
    <>
    <header>
    <div className='container'>
         <nav className='flexSB'>
          <div className='logo'>
            <img  src="./images/movie-removebg-preview.png" alt="" />
          </div>
       <ul className={Mobile ? "navMenu-list":'flexSB'} onClick={()=>setMobile(false)}>
    <Link to="/">home</Link>
    <Link to="/series">series</Link>
     <Link to="/movies">movies</Link>
    <Link to="/pages">pages</Link>
    <Link to="/pricing">pricing</Link>
    <Link to="/contact">contact</Link>
          </ul>
       
          <button className='toggle'  onClick={()=>setMobile(!Mobile)}>
            {Mobile ?<i className='fa fa-times'></i>: <i className='fa fa-bars'></i>}
          </button>
    
        <div className="account flexSB">
          <i className='fa fa-search'></i>
          <i className='fa fa-bell'></i>
          <i className='fa fa-user'></i>
          <button>subscribe</button>
        </div>
         </nav>

    </div>
    
    </header>
    </>
  )
}

export default Header