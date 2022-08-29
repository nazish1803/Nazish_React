import React, { useEffect, useState } from 'react'
import Footer from '../Component/Footer'
import NavBar from '../Component/NavBar'

function Add_Product() {
    const[formvalue,setformvalue]=useState({
        id:new Date().getTime().toString(),
        productName:"",
        productDesc:"",
        productImage:""
    })

    const[alldata,setalldata]=useState([]);

    function ChangeHandle(e){
        setformvalue({...formvalue,[e.target.name]:e.target.value, id:new Date().getTime().toString()});
        console.log(formvalue);
    }
    function submitHandle(e){
        e.preventDefault();
        fetch('https://react-admin-f0817-default-rtdb.firebaseio.com/product.json', {
            method: 'POST',
            body: JSON.stringify(formvalue),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((data) => {
                setformvalue({productName:"",productDesc:"",productImage:""})
                alert("Data added successfully");
            });
    }
    function deletedata(deleteid){
        const afterdelete = alldata.filter((item)=> item.id!= deleteid);
        setalldata(afterdelete);
    }
    useEffect(()=>{
        fetchData();
    },[]);
    function fetchData(){
    fetch('https://react-admin-f0817-default-rtdb.firebaseio.com/product.json')
        .then((response) => response.json())
        .then((data) =>{
            setalldata(data);
        });
    }
  return (
    <>
            <NavBar />
            <div id="page-wrapper">
                <div className="main-page">

                    <div className="panel-body widget-shadow">
                        <form method="post">
                            <div className="form-group">
                                <label>Product Name</label>
                                <input type="text" className="form-control"  id="name" name="productName" onChange={ChangeHandle} value={formvalue.productName} />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea className="form-control" id="description" name="productDesc" onChange={ChangeHandle} value={formvalue.productDesc} />
                            </div>
                            <div className="form-group">
                                <label>Product Image</label>
                                <input type="url" className="form-control" id="productimage" name="productImage" onChange={ChangeHandle} value={formvalue.productImage} />
                            </div>
                            
                            <button type="submit" className="btn btn-default" onClick={submitHandle}>Submit</button>
                        </form>
                    </div>

                </div>

                <div class="table-responsive bs-example widget-shadow">
                    <h4 style={{"padding":"20px"}}>Database Table:</h4>
						<table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Product Id</th>
                                    <th>Product Name</th>
                                    <th>Description</th>
                                    <th>Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                Object.keys(alldata).map((item,index)=>{
                                    const{productName,productDesc,productImage,id} =alldata[item];
                                    return(
                                        <tr key={index}>
                                            <id>{id}</id>
                                            <td>{productName}</td>
                                            <td style={{"width":"30%"}}>{productDesc}</td>
                                            <td><img src={productImage} width="70px" alt={productName}/></td>
                                            <td>
                                                <button class="btn btn-danger" onClick={()=>deletedata(item)}>Delete</button>
                                            </td>
                                        </tr>

                                        )
                                    })
                                }
                            </tbody>
                        </table> 
			        </div>
            </div>
            <Footer />
        </>
  )
}

export default Add_Product