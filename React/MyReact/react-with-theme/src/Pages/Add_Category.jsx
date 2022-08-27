import React, { useState } from 'react'
import Footer from '../Component/Footer'
import NavBar from '../Component/NavBar'

function Add_Category() {
    const[formvalue,setformvalue]=useState({
        id:new Date().getTime().toString(),
        categoryName:"",
        categoryDescription:"",
        categoryImage:""
    })

    const[alldata,setalldata]=useState([]);

    function ChangeHandle(e){
        setformvalue({...formvalue,[e.target.name]:[e.target.value], id:new Date().getTime().toString()});
        console.log(formvalue);
    }
    function submitHandle(e){
        e.preventDefault();
        setalldata([...alldata,formvalue]);
        setformvalue({categoryName:"",categoryDescription:"",categoryImage:""});
        console.log(alldata);
    }
    function deletedata(deleteid){
        const afterdelete = alldata.filter((item)=> item.id!= deleteid);
        setalldata(afterdelete);
    }
  return (
    <>
            <NavBar />
            <div id="page-wrapper">
                <div className="main-page">

                    <div className="panel-body widget-shadow">
                        <form method="post">
                            <div className="form-group">
                                <label>Category Name</label>
                                <input type="text" className="form-control"  id="name" name="categoryName" onChange={ChangeHandle} value={formvalue.categoryName} />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <input type="text" className="form-control" id="description" name="categoryDescription" onChange={ChangeHandle} value={formvalue.categoryDescription} />
                            </div>
                            <div className="form-group">
                                <label>Category Featured Image</label>
                                <input type="url" className="form-control" id="categoryimage" name="categoryImage" onChange={ChangeHandle} value={formvalue.categoryImage} />
                            </div>
                            
                            <button type="submit" className="btn btn-default" onClick={submitHandle}>Submit</button>
                        </form>
                    </div>

                    <div className="panel-body widget-shadow">

                        <div className="tables">
                            <h2 style={{ 'margin-bottom': '20px' }}>Cateories</h2>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Category Name</th>
                                        <th>Description</th>
                                        <th>Image</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                alldata.map((item,index)=>{
                                    return(
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.categoryName}</td>
                                        <td>{item.categoryDescription}</td>
                                        <td><img src={item.categoryImage} width="30px" alt={item.categoryName}/></td>
                                        <td><button onClick={()=>deletedata(item.id)}>X</button></td>
                                    </tr>
                                     )

                                    }) 
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
  )
}

export default Add_Category