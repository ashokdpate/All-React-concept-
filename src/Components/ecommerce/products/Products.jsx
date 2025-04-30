import React from 'react'
import "./Products.css"
function Products() {
  return (
    <div className=''>
        <div className="option">
          <div>
            <input type="radio" name='products' checked/>
            <label>ALL</label>
          </div>
          <div>
            <input type="radio"name='products' />
            <label>Electronice</label>
          </div>
          <div>
            <input type="radio" name='products'/>
            <label>MensWear</label>
          </div>          
          <div>
            <input type="radio" name='products'/>
            <label>WomensWear</label>
      </div>        
        </div>
      <div className="products"></div>
    </div>
  )
}

export default Products