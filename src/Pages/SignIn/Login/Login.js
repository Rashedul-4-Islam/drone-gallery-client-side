import React, { useState } from 'react';
import { Link ,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Button from 'react-bootstrap/Button'

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {loginUser,signInWithGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    console.log(loginData);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password,location,history);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <div>
             <div className="row">
                <div className="col-md-6 mt-5">
                <h2 className="fw-bold">Log In Here</h2>
                     <form onSubmit={handleLoginSubmit}>
                         <input className="w-50 m-auto form-control" placeholder="Enter your email" type="email"  label="Your Email" name="email" onBlur={handleOnBlur}/>
                         <br />
                         <input className="w-50 m-auto form-control" placeholder="Enter your password" type="password"  label="Your Password" name="password" onBlur={handleOnBlur}/>
                         <br />
                         <input type="submit" className="btn btn-danger" value="Log In" />
                     </form>
                     <Link to="/register" className="text-decoration-none">You Have no Account? Register Now</Link>
                     <br />
                     <Button onClick={handleGoogleSignIn} className="btn btn-warning fw-bold mt-2">Log In With Google</Button>
                </div>
                <div className="col-md-6">
                <img className="w-50 mt-3" src="https://png.pngtree.com/png-vector/20190121/ourlarge/pngtree-log-in-login-interface-computer-computer-login-png-image_508196.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;