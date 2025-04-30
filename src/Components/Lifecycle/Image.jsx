import React, { useState,useEffect } from 'react'

function Image(props) {
  let [img,setImg]=useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5JUWxhme21VhVQO3FbWenJbsR8wyqf5FXQ&s")

  useEffect(()=>{
    document.title="Image mount"
    localStorage.setItem('name',"ashok");
    return()=>{
      localStorage.removeItem('name');
    }
  },[])
  

  return (
    <div className='container' style={{padding:"100px"}}><h2>Image component</h2>
    <img src={img}  width="300" height="300" alt="" />
    <button className='btn btn-primary mt-5' onClick={()=>{
        setImg("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png")
    }}>change image</button>
    </div>
  )
}

export default Image