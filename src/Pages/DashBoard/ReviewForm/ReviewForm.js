import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth'
// import './AddProducts.css'

const ReviewForm = () => {
    const {user} = useAuth();
    console.log(user);
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);
        fetch(`http://localhost:5000/reviews`, {
            method: "POST",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((result) => {
            // console.log(typeof(result));
            if(typeof(result) == "string"){
                alert('Review Submitted Successfully')
                reset();
            }
        })
    };
    return (
        <div className="bg-dark text-light my-5 py-3 add-tour m-auto">
            <h2 className="mt-5">Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input className="p-2 m-2 form-control w-50 m-auto" defaultValue={user.displayName} {...register("name")}  />
                <br />
                <input className="p-2 m-2 form-control w-50 m-auto"defaultValue={user.email}{...register("email", { required: true })} />
                <br />
                <input className="p-2 m-2 form-control w-50 m-auto" type= "url"  {...register("img")} placeholder="enter your photo" />
                <br />
                <input className="p-2 m-2 form-control w-50 m-auto" {...register("comment", { required: true })} placeholder="review type here" />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <br />
                <input className="btn btn-danger mt-4" type="submit" value="send" />
            </form>
        </div>
    );
};

export default ReviewForm;