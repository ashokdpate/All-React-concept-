import React, { useEffect, useReducer, useState } from 'react'
import ShoppingCartReducer from "./ShoppingCartReducer"
function ShoppingCart() {
    const getItemFromCart=()=>{
        const cartData=localStorage.getItem('cart');
        return cartData ? JSON.parse(cartData) :[];
    };
    let [itemName,setItemName]=useState('');
    const [cart,dispatch]=useReducer(ShoppingCartReducer,[],getItemFromCart);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
      }, [cart]);


    const addItem=(e)=>{
            e.preventDefault();
            if (itemName.trim()!=='') {
                dispatch({type:"ADD_TO_CART",payload:itemName});
                setItemName('');
            }
    };

    const increaseItem=(id)=>{
        dispatch({type:"INCREASE_QUANTITY",payload:id});
    }
    const decreaseItem=(id)=>{
        dispatch({type:"DECREASE_QUANTITY",payload:id});
    }
    const removeItem=(id)=>{
        dispatch({type:"REMOVE_FROM_CART",payload:id});
    }
    const clearAll=()=>{
        dispatch({type:"CLEAR_CART"});
    }

    const totalItems= cart.reduce((total,item)=>
        total+item.quantity,0);
  return (
    <div style={{padding:"50px",textAlign:"center"}}>
        <h1>🛒 Shopping cart App</h1>
        <form onSubmit={addItem}>
            <input type="text" name="name" placeholder='Enter text' value={itemName} onChange={(e)=>setItemName(e.target.value)} />
            <button type='submit' className='btn btn-primary'>Add Item</button>
            <button type='button' className='btn btn-danger m-2' onClick={clearAll}>Clear cart</button>
        </form>
        <h2>Total items: {totalItems}</h2>

        <ul>
            {
                cart.length===0 ? (
                    <p>Your cart is empty</p>
                ) :(
                    cart.map((item)=>
                    <li key={item.id}>
                        <span>{item.name}  (x{item.quantity})</span>
                        <button className='btn btn-warning m-2' onClick={()=>increaseItem(item.id)}>➕</button>
                        <button className='btn btn-warning m-2' onClick={()=>decreaseItem(item.id)}>➖</button>
                        <button className='btn btn-danger m-2' onClick={()=>removeItem(item.id)}>Remove</button>
                    </li>
                    )
                )
            }
        </ul>
    </div>
  )
}

export default ShoppingCart