import {useEffect, useState} from 'react'
import axios from 'axios'
import './AllProducts.css'
import Card from './Card';
import { productAction } from '../Redux/actions/productsAction';
import { useDispatch, useSelector } from 'react-redux';
function AllProducts() {
    var  [allProducts,setAllProducts]=useState([]);
    var dispatch=useDispatch();
    var productsData=useSelector((storedata)=>{
        return storedata.products;
    });
    useEffect(()=>{
        if (productsData.length===0) {
            getProducts();
        }
    },[]);
    const getProducts =()=>{
          var promiseObject =  axios.get("https://fakestoreapi.com/products");
          promiseObject.then((res)=>{
            // setAllProducts(res.data);
           var action= productAction(res.data);
           dispatch(action);
          }).catch((error)=>{
            console.log(error);
          });
    }
    return (
    <div style={{ padding: "50px" }}>
       <h1 style={{ marginBottom: "20px" }}>AllProdcuts</h1>

        <div className="allProductsData">
            {
                productsData.map(function(element,index){
                    return (
                        <Card 
                        id={element.id}
                        image={element.image} 
                        title={element.title} 
                        price={element.price} />
                    );
                }) }
        </div>
    </div>
)}
export default AllProducts