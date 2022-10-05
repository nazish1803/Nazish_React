import React, { useState }  from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import Footer from '../Component/Footer'
// import NavBar from '../Component/NavBar'

function Login() {


    //AIzaSyBcOY9FqPYhmJgibwpIWXKSHwAGPdL91x0

    const redirect=useNavigate(); 

    const[formvalue,setformvalue]=useState({
        email:"",
        password:"",
        returnSecureToken:""
    })

    function ChangeHandle(e){
        setformvalue({...formvalue,[e.target.name]:e.target.value,returnSecureToken:true});
        console.log(formvalue);
    }
    function submitHandle(e){
        e.preventDefault();
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBcOY9FqPYhmJgibwpIWXKSHwAGPdL91x0', {
            method: 'POST',
            body: JSON.stringify(formvalue),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((data) => {
                //console.log(data);
                if(data.registered)
                {
                  //  alert('Login Successfull');
                    localStorage.setItem('localId', data.localId);
                    localStorage.setItem('email', data.email);
                    localStorage.setItem('idToken', data.idToken);
                    redirect('/dashboard');
                }
                else{
                    alert('Login Failed due to Wrong Creadential');
                }
            });
    }



    return (
        <div>
            {/* <NavBar /> */}
            <div id="">
                <div className="main-page login-page">
                    <h2 className="title1">Login</h2>
                    <div className="widget-shadow">
                        <div className="login-body">
                            <form action="" method="post">
                                <input type="email" className="user" name="email" value={formvalue.email} onChange={ChangeHandle}  placeholder="Enter Your Email" required />
                                <input type="password" name="password"  value={formvalue.password} onChange={ChangeHandle} className="lock" placeholder="Password" required />
                                <div className="forgot-grid">
                                    <label className="checkbox"><input type="checkbox" name="checkbox" defaultChecked /><i />Remember me</label>
                                    <div className="forgot">
                                        <a href="#">forgot password?</a>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                                <input type="submit" onClick={submitHandle}  name="Sign In" defaultValue="Sign In" />
                                
                                <div className="registration">
                                    Don't have an account ?
                                    <a href="/signup">
                                        Create an account
                                    </a>
                                </div>
    
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </div>
    )
}

export default Login