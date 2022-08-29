import React, { useEffect } from 'react'
import { useState } from 'react';
import swal from 'sweetalert';
import Footer from '../Component/Footer';
import NavBar from '../Component/NavBar';

function Manage_Product() {
    useEffect(()=>{
        fetchData();
    },[]);
    const[alldata, setalldata]= useState([]);
    function fetchData(){
        fetch('https://react-admin-f0817-default-rtdb.firebaseio.com/product.json')
            .then((response) => response.json())
            .then((data) =>{
                setalldata(data);
            });
        }
    function deletedata(deleteid){
        fetch(`https://react-admin-f0817-default-rtdb.firebaseio.com/product/${deleteid}.json`, {
        method: 'DELETE',
        })
        .then((response) => response.json())
        .then((json) => {
            swal({
                title: "Success!",
                text: "Customer Delete Success!",
                icon: "success",
                button: "Aww yiss!",
              });
              fetchData();
          });
    }
    const[formvalue,setformvalue]=useState({
        productName:"",
        productDesc:"",
        productImage:""
    })
    const [updateid, setupdateid] = useState("");
    function editdata(editid){
        fetch(`https://react-admin-f0817-default-rtdb.firebaseio.com/product/${editid}.json`)
        .then((response) => response.json())
        .then((data) => {
            setformvalue(data);
            setupdateid(editid);
        });
    }
    function ChangeHandle(e){
        setformvalue({...formvalue,[e.target.name]:e.target.value, id:new Date().getTime().toString()});
        console.log(formvalue);
    }
    function saveData(e){
        e.preventDefault();
        fetch(`https://react-admin-f0817-default-rtdb.firebaseio.com/product/${updateid}.json`, {
            method: 'PUT',
            body: JSON.stringify(formvalue),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((data) => {
                setformvalue({productName:"",productDesc:"",productImage:""})
                swal({
                    title:"Success",
                    text:"Data Updated Successfully",
                    icon:"Success",
                    button:"Yay!"
                });
                fetchData();
            });
            
    }
    
  return (
    <>
    <NavBar />
    <div id="page-wrapper">
        <div className="main-page">
        <div class="table-responsive bs-example widget-shadow">
						<h4>Database Table:</h4>
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
                                                <button class="btn btn-primary m-3" data-toggle="modal" data-target="#myModal" onClick={()=>editdata(item)}>Edit</button>
                                                <button class="btn btn-danger" onClick={()=>deletedata(item)}>Delete</button>
                                            </td>
                                            <td><button class="btn btn-secondary">Block</button></td>
                                        </tr>

                                        )
                                    })
                                }
                            </tbody>
                        </table> 
					</div>
        </div>
    </div>
    <div id="myModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Modal Header</h4>
                </div>
                    <div class="modal-body">
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
                            <button type="submit" className="btn btn-default" data-dismiss="modal" onClick={saveData}>Submit</button>
                        </form>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Manage_Product