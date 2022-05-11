/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./css/registration.css"

function Registration() {
  return (
    <div className="signup-form">
    <form >
		<h2>Register</h2>
		<p className="hint-text">{`Create your account. It's free and only takes a minute.`}</p>
        <div className="form-group">
			<div className="row">
				<div className="col-xs-6"><input type="text" className="form-control" name="first_name" placeholder="Full Name" required="required"/></div>
			  </div>     	
        </div>
        
        <div className="form-group">
        	<input type="email" className="form-control" name="email" placeholder="Email" required="required"/>
        </div>     
        <div className="form-group">
        	<input type="email" className="form-control" name="email" placeholder="Email" required="required"/>
        </div>
        <div className="form-group">
        	<input type="email" className="form-control" name="MobileNo" placeholder="MobileNo" required="required"/>
        </div>
	    	<div className="form-group">
            <input type="password" className="form-control" name="password" placeholder="Password" required="required"/>
        </div>
        <div className="form-group">
            <input type="country" className="form-control" name="country" placeholder="country" required="required"/>
        </div>
        <div className="form-group">
            <input type="Nic" className="form-control" name="Nic" placeholder="Nic" required="required"/>
        </div>
		  <div className="form-group">
            <input type="password" className="form-control" name="Address" placeholder="Address" required="required"/>
        </div>        
        <div className="form-group">
          
			<label htmlFor="tag" className="checkbox-inline">
      
        <input id="tag" type="checkbox" required="required"/> I accept the <a  href="/#" onClick={(e) => e.preventDefault()}>Terms of Use</a> &amp; <a  href="/#" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
      
      </label>
		</div>
		<div className="form-group">
            <button type="submit" className="btn btn-success btn-lg btn-block">Register Now</button>
        </div>
    </form>
	{/* <div className="text-center">Already have an account? <a href="#" >Sign in</a></div> */}
</div>

    
  )
}

export default Registration