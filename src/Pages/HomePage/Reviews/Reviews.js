import React, { useEffect, useState} from 'react';
import {  Carousel, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
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
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire(
                        'Deleted!',
                        'Your Review has been deleted.',
                        'success'
                      )
                    }
                  })
                const remaining = reviews.filter(review => review._id !== id);
                setReviews(remaining);
               }
             
              
         });
        }
              

    return (
        <div className="my-5 review">
            <h1 className="fw-bold">Total Reviews: {reviews.length}</h1>
            <div>
            <Carousel>
            <Carousel.Item interval={3000}>
            <Row xs={1} md={3} className="g-5 mx-4 mt-3">
                {reviews.slice(0,3).map(review => (
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
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <Row xs={1} md={3} className="g-5 mx-4 mt-3">
                {reviews.slice(3,6).map(review => (
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
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <Row xs={1} md={3} className="g-5 mx-4 mt-3">
                {reviews.slice(6,15).map(review => (
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
            </Carousel.Item>
            </Carousel>
            </div>
        </div>
    );
};

export default Reviews;