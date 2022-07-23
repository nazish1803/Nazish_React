// import React, { Component } from 'react'

// export class Img extends Component {
//     componentWillUnmount(){
//         console.log("Component Deleted");
//     }
//   render() {
//     return (
//       <div>
//          <img src='https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg'/>
//       </div>
//     )
//   }
// }

// export default Img


import React, {useEffect} from 'react'

function Img() {
    useEffect(()=>{
        console.log("img Component Created"); 
         return()=>{console.log("Deleted");}
    })
  return (
    <div><img src='https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg'/></div>
  )
}

export default Img