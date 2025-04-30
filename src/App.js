

import { Route, Routes } from 'react-router-dom';
import Products from './Components/ecommerce/products/Products';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState } from 'react';
import HomePage from './Components/ecommerce/Home/HomePage';
import LoginPage from './Components/ecommerce/login/LoginPage';
import SignUpPage from './Components/ecommerce/SignUp/SignUpPage';
import NavBar from './Components/ecommerce/nav/NavBar';
import { useSelector } from 'react-redux';

function App() {
  var[showImage,setShowImage]=useState(true);
   let isLoggedIn= useSelector((storedata)=>{
    return storedata.loginReducer.isLoggedIn;
   });
  return (
    <div className="App">
     
{/* <Name/>
<Details/> */}
      {/* <ShoppingCart/> */}
    {/* <ToDoApp/> */}


{/* <Counter/> */}

     {/* <UseReducer/> */}
     
      {/* <Users/> */}
  {/* {showImage ? <Image /> : <Text />}
        
        <button
          onClick={() => {
            setShowImage(true);
          }}
        >
          Show Image Comp
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          onClick={() => {
            setShowImage(false);
          }}
        >
          Show Text Comp
        </button> */}
   {/* <Ref/> */}
    {/* <Timer/> */}

    {/* <Name/> */}
      {/* <A/> */}
      {/* <GithubHome/> */}
      {/* <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/products' element={<AllProducts/>}>
        <Route path='electronics' element={<Electronics/>}/>
        <Route path='jewelery' element={<Jewelery/>}/>
        <Route path='mens-clothing' element={<MensClothing/>}/>
        <Route path='womens-clothing' element={<WomensClothing/>}/>
        </Route>
        <Route path='/productdetails/:id' element={<ProductDetails/>}/>
        <Route path='/imgcomp' element={<ImageComp/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes> */}
      { isLoggedIn ?  <NavBar/> : null}
      <Routes>
        {
          isLoggedIn ?
          <Route path='/' element={<HomePage/>}/>
          :
          <Route path='/' element={<LoginPage/>}/>
        }
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}
export default App;
