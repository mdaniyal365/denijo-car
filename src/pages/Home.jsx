import React from "react";
import myImage from "../assets/carpool_only_large.jpg";

function Home() {
  return (
    <>
      <div>
        <div className="img ">
        <img src={myImage} alt="" className="" />
        </div>
        
        <div className="tex flex justify-center -m-64 text-5xl font-bold  text-white">

        Your pick of rides at low prices
        </div>
      </div>
    </>
  );
}

export default Home;
