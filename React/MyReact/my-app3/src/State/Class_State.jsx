import React, { Component } from 'react'
import Img from './Img';

export default class Class_State extends Component {
    constructor(){
        super();
        this.state={
            name:"Nazish", 
            Age:28,
            number:1,
            isImg:false
        }
    }
    plus=()=>{
        this.setState({number:this.state.number+1})
    }
    minus=()=>{
        this.setState({number:this.state.number-1})
    }
  render() {
    return (
      <div className='container mt-5'>
        <h1>My name is {this.state.name}. I'm {this.state.Age} years old.</h1>
        <button onClick={()=>this.setState({name:"Nazish Shaikh", Age:29})}>Set State</button>
        <hr/>
        <div className="flex align-items-center">
            <button className='btn btn-light' onClick={this.plus}>+</button>
            <span className='h4 p-3'>{this.state.number}</span>
            <button className='btn btn-light'  onClick={this.minus}>-</button>
        </div>
        <button className='btn btn-primary' onClick={()=>this.setState({isImg:true})}>Show</button>
        <button className='btn btn-primary' onClick={()=>this.setState({isImg:false})}>Hide</button>
        <button className='btn btn-primary' onClick={()=>this.setState({isImg:!this.state.isImg})}>Show/Hide</button>
        {this.state.isImg?<Img/>:null}
        
      </div>
    )
  }
}
