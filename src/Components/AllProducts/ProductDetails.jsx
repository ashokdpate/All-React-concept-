import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
function ProductDetails() {
//  let parameter=useParams(); //parameters ={id:20} one object store.  
//              OR
      let{id}=useParams();
      let data=useSelector((storedata)=>{
          return storedata.products.find((product)=>product.id==id);
      });    
  return (
    <div>
      {/* <h1>ProductDetails:{parameter.id}</h1> */}
          <h2>ProductDetails:{id}</h2>
          <img src={data.image} width="300px" height="300px" alt="" />
          <p>{data.title}</p>
          <p>{data.price}</p>     
    </div>
  )
}
export default ProductDetails