import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {registerUser} = useAuth();
    console.log(loginData);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name);
        e.preventDefault();
    }
    return (
        <div>
             <div className="row">
                <div className="col-md-6 mt-5">
                <h2 className="fw-bold">Register Here</h2>
                     <form onSubmit={handleLoginSubmit}>
                         <input className="w-50 m-auto form-control" placeholder="Enter your name" type="text"  label="Your Name" name="name" onBlur={handleOnBlur}/>
                         <br />
                         <input className="w-50 m-auto form-control" placeholder="Enter your email" type="email"  label="Your Email" name="email" onBlur={handleOnBlur}/>
                         <br />
                         <input className="w-50 m-auto form-control" placeholder="Enter your password" type="password"  label="Your Password" name="password" onBlur={handleOnBlur}/>
                         <br />
                         <input className="w-50 m-auto form-control" placeholder="Re-enter your password" type="password"  label="Your Password" name="password2" onBlur={handleOnBlur}/>
                         <br />
                         <input type="submit" className="btn btn-danger" value="Submit" />
                     </form>
                     <Link to="/login" className="text-decoration-none">Already have an Account? Login</Link>
                </div>
                <div className="col-md-6">
                    <img className="w-75" src="https://previews.123rf.com/images/houbacze/houbacze1801/houbacze180100259/93081348-banner-register-now-illustration-design-.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;