import React from 'react';
import './Instruction.css'

const Instruction = () => {
    return (
        <div className="instruction my-3 container-fluid">
            <h1 className="fw-bold mt-5 w-25 m-auto text-center"> <span className="fs-5 font-style text-danger">You will love it</span> <br /> How It Works</h1>
            <div className="row mt-5">
                <div className="col-md-4">
                    <div className="ps-4">
                    <div className="text-start">
                        <h2 className="fw-bold">How To Use Controller</h2>
                        <p>First, download your drones app onto your mobile phone.Turn on your drone.Connect your mobile device to the drone. Either via WIFI or by connecting the mobile phone to the controller.Open the app to establish the connection.</p>
                    </div>
                    <div className="text-start">
                        <h2 className="fw-bold">How To Fly Drone</h2>
                        <p>First, bring your drone to a hover.Push the right stick forward to fly it a couple of feet forward.Pull the right stick back to bring it back to its original position.Now, move it further backwards a couple of feet, and return it to its original position.</p>
                    </div>
                    <div className="text-start">
                        <h2 className="fw-bold">How To Use Controller</h2>
                        <p>First, download your drones app onto your mobile phone.Turn on your drone.Connect your mobile device to the drone. Either via WIFI or by connecting the mobile phone to the controller.Open the app to establish the connection.</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <img className=" mt-5 animation-image" src="./images/banner/banner2.png" alt="" />
                </div>
                <div className="col-md-4">
                   <div className="px-3">
                   <div className="text-start">
                        <h2 className="fw-bold">How To Use Battery</h2>
                        <p>The intelligent flight batteries with the highest power level will be charged first. During the charging the status LED will blink green slowly. When the status LED indicator is solid green all the batteries are fully charged. Remove the batteries from the charging hub and the charging is complete.</p>
                    </div>
                    <div className="text-start">
                        <h2 className="fw-bold">How To Play Video</h2>
                        <p>On your Android phone or tablet, open the Google Drive app. At the top, tap Search Drive. In the list, tap Videos. To play your video, tap the one you want to watch.</p>
                    </div>
                    <div className="text-start">
                        <h2 className="fw-bold">How To Control Camera</h2>
                        <p>First, download your drones app onto your mobile phone.Turn on your drone.Connect your mobile device to the drone. Either via WIFI or by connecting the mobile phone to the controller.Open the app to establish the connection.</p>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Instruction;