import React from 'react';
import Banner from '../Banner/Banner';
import DemoProduct from '../DemoProduct/DemoProduct';
import Instruction from '../Instruction/Instruction';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DemoProduct></DemoProduct>
            <Instruction></Instruction>
        </div>
    );
};

export default Home;