import React,{useState} from 'react'
import {FaQuoteLeft,FaChevronRight,FaChevronLeft} from "react-icons/fa";
import { UserData } from './StaticData/UserData';


const Reviews = () => {

    const [index,setIndex] = useState(0);
    const {name,job,text,image} = UserData[index];

    const checkNumber =(Number) =>{
        if (Number > UserData.length -1){
            return 0;
        } 
        if (Number < 0 ){
           return UserData.length -1;
        }
        return Number;
    };
    const nextperson = () => {
        setIndex(index => checkNumber(index+1));
    };
    const pervperson = () => {
        setIndex(index => checkNumber(index -1));
    };
  return (

    <article className='review'>
      <div className='img-container'>
        <img src={image} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteLeft />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={pervperson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextperson}>
          <FaChevronRight />
        </button>
      </div>
      
    </article>


    
  )
}

export default Reviews
