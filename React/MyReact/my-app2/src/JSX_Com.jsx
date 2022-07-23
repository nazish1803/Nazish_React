import React from 'react'
import './mystyle.css'
import mytag from './headertag.module.css'
function JSX_Com() {
    let name = "Nazish";
    const myh1 = {color:'white',backgroundColor:'red'};
  return (
    <div>
        <h1 style={{color:'white',backgroundColor:'black'}}>{name}</h1>
    <h1 style={myh1}>Hello</h1>
    <h2 className='myh1'>My h2 Style</h2>
    <h2 className={mytag.myh1}>My h2 Style</h2>
    </div>
  )
}
export default JSX_Com;