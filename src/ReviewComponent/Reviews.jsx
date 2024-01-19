import React, { useState } from 'react';
import { Data } from './ReviewData';
import './Review.css'

const Reviews = () => {
  const [currentIndex,setCurrentIndex]=useState(0);
  const previousbtn=()=>{
    if(currentIndex==0){
      setCurrentIndex(Data.length-1)
    }else setCurrentIndex(currentIndex-1)
  }
  const nextbtn=()=>{
    if(currentIndex==Data.length-1){
      setCurrentIndex(0)
    }else setCurrentIndex(currentIndex+1)
  }
  
  const surpriseBtn=()=>{
      let randomIndex;
     do{
      randomIndex=Math.floor(Math.random()*Data.length);
     }while(currentIndex===randomIndex)

      setCurrentIndex(randomIndex)
  }
  const {id,name,job,image,text}=Data[currentIndex]
  return (
    <div id= "review-heading">
      <h1>Our Reviews</h1>
        <div className='review'>
          <button onClick={previousbtn} className='prev-btn'><ion-icon name="arrow-back"></ion-icon></button>
          <figure>
            <img src={image} alt="reviewer image" />
          </figure>
          <div className='content'>
            <div className={`author-${id}`}>
              <h2>{name}</h2>
              <p>{job}</p>
            </div>
            <div className='text'>
              <p>{text}</p>
            </div>
          </div>
          <button onClick={nextbtn} className='nxt-btn'><ion-icon name="arrow-forward"></ion-icon></button>
        </div>
        <button onClick={surpriseBtn} className='surprise-btn'>Surpise Me</button>
    </div>
  )
}

export default Reviews