import React, { useState } from 'react'
import Footer from '../Component/Footer'
import NavBar from '../Component/NavBar'

function Add_Customer() {
    const[formvalue,setformvalue]=useState({
        id:new Date().getTime().toString(),
        name:"",
        username:"",
        password:"",
        mobile:""
    })

    function ChangeHandle(e){
        setformvalue({...formvalue,[e.target.name]:e.target.value, id:new Date().getTime().toString()});
        console.log(formvalue);
    }
    function submitHandle(e){
        e.preventDefault();
        fetch('https://react-admin-f0817-default-rtdb.firebaseio.com/customer.json', {
            method: 'POST',
            body: JSON.stringify(formvalue),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setformvalue({name:"",username:"",password:"",mobile:""})
                alert("Data added successfully");
            });
    }
  return (
    <>
            <NavBar />
            <div id="page-wrapper">
                <div className="main-page">
                    <div className="panel-body widget-shadow form-three">
                        <form method="post">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control"  id="name" name="name" onChange={ChangeHandle} value={formvalue.name} />
                            </div>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" className="form-control" id="username" name="username" onChange={ChangeHandle} value={formvalue.username} />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" id="password" name="password" onChange={ChangeHandle} value={formvalue.password} />
                            </div>
                            <div className="form-group">
                                <label>Mobile</label>
                                <input type="tel" className="form-control" id="mobile" name="mobile" onChange={ChangeHandle} value={formvalue.mobile} />
                            </div>
                            <button type="submit" className="btn btn-default" onClick={submitHandle}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
  )
}

export default Add_Customer