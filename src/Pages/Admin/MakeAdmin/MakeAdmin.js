import React, { useState } from 'react';

const MakeAdmin = () => {
     const [email,setEmail] = useState('');
     const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
     const handleAdminSubmit = e =>{
         const user = {email};
         fetch('http://localhost:5000/users/admin',{
             method: 'PUT',
             headers: {
                 'content-type' : 'application/json'
             },
             body: JSON.stringify(user)
         })
         .then(res => res.json())
         .then(data => {
            if (data.modifiedCount) {
                console.log(data);
                setSuccess(true);
            }
         })
         e.preventDefault()
     }

    return (
        <div>
            <h2>Make An Admin</h2>
            <form onSubmit={handleAdminSubmit}>
            <input type="email" label="Email" onBlur={handleOnBlur} class="form-control w-25 m-auto" placeholder="Enter email"/>
             <button type="submit" className="btn btn-primary mt-3">Make Admin</button>
            </form>
            {success && alert('Make admin Succcessfully')
            }
        </div>
    );
};

export default MakeAdmin;