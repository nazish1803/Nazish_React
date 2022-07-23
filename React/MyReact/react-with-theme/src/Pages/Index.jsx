import React from 'react'

function Index() {
    return (
      <div style={{display: 'flex', minHeight: '100vh', overflow: 'auto', alignItems: 'center', padding: '50px 0'}}>
            <div className="main-page login-page ">
                <h2 className="title1">Login</h2>
                <div className="widget-shadow">
                    <div className="login-body">
                        <form action="#" method="post">
                            <input type="email" className="user" name="email" placeholder="Enter Your Email" required />
                            <input type="password" name="password" className="lock" placeholder="Password" required />
                            <div className="forgot-grid">
                                <label className="checkbox"><input type="checkbox" name="checkbox" defaultChecked /><i />Remember me</label>
                                <div className="forgot">
                                    <a href="#">forgot password?</a>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                            <input type="submit" name="Sign In" defaultValue="Sign In" />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Index