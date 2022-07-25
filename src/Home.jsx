import React from 'react';
import axios from 'axios';
import './Home.css';
import {useState} from 'react';




const Home=()=>{
  const [item,setItem]=useState([]);

  const getDatas=()=>{
  axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=15c799d62561e0ef7e84cd0e9ca0fccb").then((response)=>{
    console.log(response.data.results);
    setItem(response.data.results);
  }).catch((err)=>{
    console.log(err);
  })
  }

  const img_path="https://image.tmdb.org/t/p/w500"
    
  return(
    <>
      <button onClick={getDatas}>get data</button>

      <div className='container'>
            
      {
        item.map((ele)=>{
          return (  
            <div className='card card1'>
           <div>
            <img className='img2' src={img_path+ele.poster_path}/>
             </div>
      <div className='content'>
        <h3 className='title'>{ele.original_title}</h3>
        <p>{ele.overview}</p>
        <div>d</div>
        <p>e</p>
      </div>
     </div>
             
            )

          
        })
      

      }
        </div>
     

      
    </>
  )
}

export default Home;