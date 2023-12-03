import React from "react";
import  { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import myImage from "../assets/carpool_only_large.jpg";
import { FaRegDotCircle } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
 

function AddTrip() {
    const [startDate, setStartDate] = useState(new Date());
    const [passegers,setPassegers]=useState(0);
  return (
    <>
      <div className=" bg-blue-900 h-64 w-[100%] text flex justify-center text-3xl text-white font-bold text-center">
        <div className="m-8"> Your pick of rides at low prices</div>
      </div>

      <div className="inputfields border-black border-2 rounded-lg  h-60">
        <form action="">
          <div className="from flex m-2">
            <span className="mt-2 p-2">
              <FaRegDotCircle />
            </span>
            <input
              type="text"
              placeholder="Leaving from..."
              className="  p-1 h-12 w-[100%] "
            />
          </div>
          <div className="from flex m-2">
            <span className="mt-2 p-2">
              <SlLocationPin />
            </span>
            <input
              type="text"
              placeholder="Leaving from..."
              className="  p-1 h-12 w-[100%] "
            />
          </div>

          <div children="flex date passegers ">
            <div className="from flex m-2 ">
              <span className="mt-2 p-2">
                <MdOutlineDateRange />
              </span>
              <div className="">
        
          
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="  p-1 h-12 w-[100%] "/>
        
      </div>

              <div className="from flex ">
                <span className="mt-2 p-2">
                  <IoPersonOutline />
                </span>
               <div className=" passegers p-1 h-12 w-[100%]  space-x-5">
                  <span onClick={()=>passegers<=1?"":setPassegers(passegers-1)} className=" font-semibold text-2xl ">
                    -
                  </span>
                  <span className="font-semibold text-2xl"> {passegers}</span>
                 
                  <span onClick={()=>passegers>=4?"":setPassegers(passegers+1)} className=" font-semibold text-2xl">+</span>
           
               </div>
              </div>
            </div>

            <div className="button bg-blue-600 h-14 text-center  ">
              <button
                type="submit"
                className=" mt-2 text-2xl text-white font-medium"
              >
                Add Trip
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddTrip;
