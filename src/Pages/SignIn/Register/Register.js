import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const Register = () => {
    const [loginData,setLoginData] = useState({})
    // console.log(loginData);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        setLoginData(data)
        console.log(loginData)
        if(loginData?.password !== loginData?.password2){
            alert('password did not match')
            return
        }
    };
    
    // console.log(watch("example"));
    return (
        <div>
            <div className="row">
                <div className="col-md-6 mt-5">
                <h2 className="fw-bold">Register Here</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input className="form-control w-50 m-auto" {...register("name")} placeholder="Enter your name" />
                <br />
                {/* include validation with required or other standard HTML validation rules */}
                <input className="form-control w-50 m-auto" type="email" {...register("email", { required: true })} placeholder="Enter your email" />
                <br />
                <input className="form-control w-50 m-auto" type="password" {...register("password", { required: true })} placeholder="Enter your password" />
                <br />
                <input className="form-control w-50 m-auto" type="password" {...register("password2", { required: true })} placeholder=" Re-enter your password" />
                <br />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                
                <input type="submit" />
                </form>
                </div>
                <div className="col-md-6">
                    <img className="w-75" src="https://previews.123rf.com/images/houbacze/houbacze1801/houbacze180100259/93081348-banner-register-now-illustration-design-.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;