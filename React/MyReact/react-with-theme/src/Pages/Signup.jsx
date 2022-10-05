import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {

    const[formvalue,setformvalue] = useState({
        id:new Date().getTime().toString(),
        name:"",
        email:"",
        password:"",
        mobile:""
    });
    const redirect=useNavigate();

    function ChangeHandle(e){
        setformvalue({...formvalue,[e.target.name]:e.target.value,id:new Date().getTime().toString()});
        console.log(formvalue);
    }
    
    function submitHandle(e){
        e.preventDefault();
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBcOY9FqPYhmJgibwpIWXKSHwAGPdL91x0', {
            method: 'POST',
            body: JSON.stringify(formvalue),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            })
            .then((response) => response.json())
            .then((data) => {
                if(data.localId){
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
                        console.log("Data added successfully");
                        redirect("/");
                        setformvalue({name:"",email:"",password:"",mobile:""})

                    });    
                }   
             });
     }
  return (
    <div>
    
        <div id="">
            <div className="main-page signup-page">
                <h2 className="title1">Signup</h2>
                <div className="sign-up-row widget-shadow">
                    <form method="post">
                            <div className="sign-u">
                                <label>Name</label>
                                <input type="text" className="form-control"  id="name" name="name" onChange={ChangeHandle} value={formvalue.name} />
                                <div className="clearfix"> </div>
                            </div>
                            <div className="sign-u">
                                <label>Username</label>
                                <input type="text" className="form-control" id="email" name="email" onChange={ChangeHandle} value={formvalue.email} />
                                <div className="clearfix"> </div>
                            </div>
                            <div className="sign-u">
                                <label>Password</label>
                                <input type="password" className="form-control" id="password" name="password" onChange={ChangeHandle} value={formvalue.password} />
                                <div className="clearfix"> </div>
                            </div>
                            <div className="sign-u">
                                <label>Mobile</label>
                                <input type="tel" className="form-control" id="mobile" name="mobile" onChange={ChangeHandle} value={formvalue.mobile} />
                                <div className="clearfix"> </div>
                            </div>
                            <br/    >
                            <button type="submit" className="btn btn-default" onClick={submitHandle}>Submit</button>

                            <div className="registration">
                                Already Registered.
                                <a href='/'>Login</a>
                            </div>
                    </form>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Signup