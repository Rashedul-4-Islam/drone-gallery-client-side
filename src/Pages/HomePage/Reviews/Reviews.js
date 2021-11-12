import React, { useEffect, useState} from 'react';
import {  Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import useAuth from '../../../hooks/useAuth';
import './Reviews.css'

const Reviews = () => {
    const [reviews,setReviews] = useState([]);
    const {user} = useAuth();

    useEffect(() =>{
        fetch('https://quiet-cove-48574.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => {
            setReviews(data)
        })
    },[]);

    const handleDelete = id => {
           const url = `https://quiet-cove-48574.herokuapp.com/reviews/${id}`;
           fetch(url, {
               method: 'DELETE',
               headers: {"content-type" : "application/json"},
           })
           .then(res => res.json())
           .then(data => {
            // console.log(data);
               if(data.deletedCount){
                alert("Are you delete Review?")
                const remaining = reviews.filter(review => review._id !== id);
                setReviews(remaining);
               }
             
              
         });
        }
              

    return (
        <div id="review" className="my-5">
            <h1 className="fw-bold">Total Reviews: {reviews.length}</h1>
            <div>
            <Row xs={1} md={3} className="g-5 mx-4 mt-3">
                {reviews.map(review => (
                    <Col key={review._id}>
                   <div className="card mb-3 cards">
                  <div className="row g-0">
                    <div className="col-md-4 py-2 ps-2">
                    <img src={review.img} className="reviewer rounded-pill pt-5" alt="..."/>
                    <div className="mt-3">
                        <Rating
                         initialRating={review.rating}
                          emptySymbol="far fa-star"
                          fullSymbol="fas fa-star"
                          readonly
                        ></Rating>
                    </div>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title fw-bold">{review.name}</h4>
                        <p className="card-text">Email: {review.email}</p>
                        <p className="card-text"> {review.comment}</p>
                        {
                            user.email === review.email &&  <button onClick={() => handleDelete(review._id)} className="btn btn-secondary w-25 m-auto"><span><i className="fas fa-trash-alt"></i></span></button> 
                        }
                    </div>
                    </div>
                </div>
                </div>
                    </Col>
                ))}
                </Row>
            </div>
        </div>
    );
};

export default Reviews;