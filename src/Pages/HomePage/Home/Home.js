import React from 'react';
import Banner from '../Banner/Banner';
import DemoProduct from '../DemoProduct/DemoProduct';
import Instruction from '../Instruction/Instruction';
import Reviews from '../Reviews/Reviews'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DemoProduct></DemoProduct>
            <Instruction></Instruction>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;