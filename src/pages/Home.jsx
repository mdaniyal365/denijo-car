import React from "react";
import { useState } from "react";
import myImage from "../assets/carpool_only_large.jpg";
import { FaRegDotCircle } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Home() {
  const [startDate, setStartDate] = useState(new Date());
  const [passegers,setPassegers]=useState(1);
  return (
    <>
    home
    </>
  );
}

export default Home;
