import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Purchase = () => {
    const {user} = useAuth();
    // console.log(user);
    let {id} = useParams();
    const [details,setDetails] = useState([]);
    useEffect(() =>{
        fetch("https://quiet-cove-48574.herokuapp.com/products")
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])
    const ExactItem = details.filter(td => td._id === id)
    // console.log(ExactItem);

    const handlebooking = ExactItem =>{
          const data = ExactItem;
          data.email = `${user.email}`;
          data.status = "pending";
        //   console.log(data);
          fetch("https://quiet-cove-48574.herokuapp.com/myorders", {
            method: "POST",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(data), 
        })
        
    }
    return (
         <div className="row">
             <div className="col-12 col-md-6 ">
                 <div className="pt-5">
                 {
                     user.email && <div style={{background:'#3d0923'}} className="mt-5 py-5 mx-3">
                         <h2 className="text-light"> USER INFO</h2>
                         <img className="w-25 rounded-pill" src={user.photoURL} alt="" />
                         <input type="text" className='form-control w-50 m-auto' placeholder={user.displayName}/>
                         <input type="text" className='form-control w-50 m-auto mt-2' placeholder={user.email}/>
                         <input type="text" className='form-control w-50 m-auto mt-2' placeholder='phone number'/>
                         <input type="text" className='form-control w-50 m-auto mt-2' placeholder='address'/>
                         {/* <h3>Name : {user.displayName}</h3>
                         <p>Email : {user.email}</p> */}
                     </div>
                 }
                 </div>
             </div>
             <div className="col-12 col-md-6">
              
                    <div className="d-flex justify-content-center">
                    <div className="single-card my-5 py-5">
                    <img className="w-50 rounded-pill" src={ExactItem[0]?.img} alt="" />
                    <h3>{ExactItem[0]?.name}</h3>
                    <p className="w-75 m-auto">{ExactItem[0]?.description}</p>
                    <p className="mt-3 fw-bold">Price:$ {ExactItem[0]?.price}</p>
                    <Link onClick={() => handlebooking(ExactItem[0])} className="btn btn-danger mt-3 mx-3" to="/dashboard/myorders"  ><span><i className="fas fa-hand-pointer"></i></span> PlaceOrder</Link>
                    <Link to="/home" className="btn btn-danger mt-3"><span><i className="fas fa-home"></i></span></Link>
                    </div>
                    </div>
             </div>
         </div>
    );
};

export default Purchase;