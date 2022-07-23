import React from 'react'
// import React, { Component } from 'react'
// function Card(props) { 
    function Card({img,name,desc,alt}){
  return (
    <div className="col-md-4 p-3">
      <div className="card" style={{ width: '100%' }}>
          <img className="card-img-top" src={img} alt={alt} />
          <div className="card-body">
              <h4 className="card-title">{name}</h4>
              <p className="card-text">{desc}</p>
              <a href="#" className="btn btn-primary">See Profile</a>
          </div>
      </div>
      </div>
  )

}

// class Card extends Component {
//     constructor(props){
//         super(props)
//     }
//   render(props) {
//     return (
//         <div className="col-md-4 p-2">
//            <div className="card" style={{ width: '100%' }}>
//                <img className="card-img-top" src={this.props.img} alt={this.props.alt} />
//                <div className="card-body">
//                    <h4 className="card-title">{this.props.name}</h4>
//                    <p className="card-text">{this.props.desc}</p>
//                    <a href="#" className="btn btn-primary">See Profile</a>
//                </div>
//            </div>
//         </div>
//     )
//   }
// }

export default Card