import React, { useState } from 'react'
import { useContext } from 'react'
import { Fulldata } from '../../App'

export const HomeCard = (props) => {

  let item=useContext(Fulldata)


  
   let a=item.map((ss)=>{
    return ss
   })
   console.log(a)

  return (
<>
<div className='box'>
  <div className="id">
    {/* {a.id} */}
  </div>
<div className='coverImage'>
{/* <img src={movie.cover} alt="" /> */}
</div>
<div className='content_flex'>
{/* <h1>{m
  ovie.name}</h1> */}
</div>

<div className="rating_flex">
  <i className='fa fa-start'></i>
  <i className='fa fa-start'></i>
  <i className='fa fa-start'></i>
  <i className='fa fa-start'></i>
  <i className='fa fa-start'></i>
</div>
{/* <label >{rating}</label> */}
<span>gb</span>
{/* <lable>{time}</lable> */}
</div>
{/* <p>{desc}</p> */}
<div className="cast">
  <h4>
    <span>starring</span>
    {/* {starring} */}
  </h4>
  <h4>
    <span>Genres</span>
    {/* {genres} */}
  </h4>
  <h4>
    <span>Tags</span>
    {/* {tags} */}
  </h4>
  <button className='primary-btn'>
        <i className='fas fa-play'></i>PLAY NOW
  </button>
</div>

</>
  )
}
