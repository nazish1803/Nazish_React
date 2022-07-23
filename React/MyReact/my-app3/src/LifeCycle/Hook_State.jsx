import React, { useEffect, useState } from 'react'
import Img from './Img';

function Hooks_State() {
    const [name,setName] = useState("Nazish");
    const [Age,setAge] = useState(28);
    const [number,setNumber] = useState(1);
    const [isImg,setisImg] = useState(false);
    useEffect(()=>{console.log("Component Created/Updated");},[number,isImg])
        
  return (
    <div className='container mt-5'>
        <h1>My name is {name}. I'm {Age} years old.</h1>
        <button onClick={()=>{setName("Nazish Shaikh"); setAge(45)}}>Set State</button>
        <hr/>
        <div className="flex align-items-center">
          <button className='btn btn-light'  onClick={()=>setNumber(number-1)}>-</button>
          <span className='h4 p-3'>{number}</span>
          <button className='btn btn-light' onClick={()=>setNumber(number+1)}>+</button>
        </div>
        <button className='btn btn-primary' onClick={()=>setisImg(true)}>Show</button>
        <button className='btn btn-primary' onClick={()=>setisImg(false)}>Hide</button>
        <button className='btn btn-primary' onClick={()=>setisImg(!isImg)}>Show/Hide</button>
        {isImg?<Img/>:null}
        
      </div>
  )
}

export default Hooks_State