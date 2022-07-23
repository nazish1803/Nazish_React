import React from 'react'
import Footer from '../Component/Footer'
import NavBar from '../Component/NavBar'

function Validation() {
    return (
        <>
            <NavBar/>
                <div id="page-wrapper">
                    <div className="main-page">
                        <div className="forms validation ">
                            <h2 className="title1">Validation Forms :</h2>
                            <div className="form-three widget-shadow mb20">
                                <div data-example-id="form-validation-states">
                                    <form> <div className="form-group has-success"> <label className="control-label" htmlFor="inputSuccess1">Input with success</label> <input type="text" className="form-control" id="inputSuccess1" aria-describedby="helpBlock2" /> <span id="helpBlock2" className="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span> </div> <div className="form-group has-warning"> <label className="control-label" htmlFor="inputWarning1">Input with warning</label> <input type="text" className="form-control" id="inputWarning1" /> </div> <div className="form-group has-error"> <label className="control-label" htmlFor="inputError1">Input with error</label> <input type="text" className="form-control" id="inputError1" /> </div> <div className="has-success"> <div className="checkbox"> <label> <input type="checkbox" id="checkboxSuccess" defaultValue="option1" /> Checkbox with success </label> </div> </div> <div className="has-warning"> <div className="checkbox"> <label> <input type="checkbox" id="checkboxWarning" defaultValue="option1" /> Checkbox with warning </label> </div> </div> <div className="has-error"> <div className="checkbox"> <label> <input type="checkbox" id="checkboxError" defaultValue="option1" /> Checkbox with error </label> </div> </div> </form>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 validation-grids widget-shadow" data-example-id="basic-forms">
                                    <div className="form-title">
                                        <h4>Register Form :</h4>
                                    </div>
                                    <div className="form-body">
                                        <form data-toggle="validator">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="inputName" placeholder="Username" required />
                                            </div>
                                            <div className="form-group has-feedback">
                                                <input type="email" className="form-control" id="inputEmail" placeholder="Email" data-error="Bruh, that email address is invalid" required />
                                                <span className="glyphicon form-control-feedback" aria-hidden="true" />
                                                <span className="help-block with-errors">Please enter a valid email address</span>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" data-toggle="validator" data-minlength={6} className="form-control" id="inputPassword" placeholder="Password" required />
                                                <span className="help-block">Minimum of 6 characters</span>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" id="inputPasswordConfirm" data-match="#inputPassword" data-match-error="Whoops, these don't match" placeholder="Confirm password" required />
                                                <div className="help-block with-errors" />
                                            </div>
                                            <div className="form-group">
                                                <div className="radio">
                                                    <label>
                                                        <input type="radio" name="gender" required />
                                                        Female
                                                    </label>
                                                </div>
                                                <div className="radio">
                                                    <label>
                                                        <input type="radio" name="gender" required />
                                                        Male
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" id="terms" data-error="Before you wreck yourself" required />
                                                        I have read and accept terms of use.
                                                    </label>
                                                    <div className="help-block with-errors" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-primary disabled">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-6 validation-grids validation-grids-right">
                                    <div className="widget-shadow" data-example-id="basic-forms">
                                        <div className="form-title">
                                            <h4>Login form :</h4>
                                        </div>
                                        <div className="form-body">
                                            <form data-toggle="validator">
                                                <div className="form-group has-feedback">
                                                    <input type="email" className="form-control" id="inputEmail" placeholder="Enter Your Email" data-error="Bruh, that email address is invalid" required />
                                                    <span className="glyphicon form-control-feedback" aria-hidden="true" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" data-toggle="validator" data-minlength={6} className="form-control" id="inputPassword" placeholder="Password" required />
                                                </div>
                                                <div className="bottom">
                                                    <div className="form-group">
                                                        <div className="checkbox">
                                                            <label>
                                                                <input type="checkbox" id="terms" data-error="Before you wreck yourself" required />
                                                                Remember me
                                                            </label>
                                                            <div className="help-block with-errors" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <button type="submit" className="btn btn-primary disabled">Login</button>
                                                    </div>
                                                    <div className="clearfix"> </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="inline-form widget-shadow">
                                        <div className="form-title">
                                            <h4>Recover form :</h4>
                                        </div>
                                        <div className="form-body">
                                            <form data-toggle="validator">
                                                <div className="form-group has-feedback">
                                                    <input type="email" className="form-control" id="inputEmail" placeholder="Email" data-error="Bruh, that email address is invalid" required />
                                                    <span className="glyphicon form-control-feedback" aria-hidden="true" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" data-toggle="validator" data-minlength={6} className="form-control" id="inputPassword" placeholder="Enter your phone number" required />
                                                </div>
                                                <div className="bottom">
                                                    <div className="form-group">
                                                        <button type="submit" className="btn btn-primary disabled">Login</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </>
    )
}

export default Validation