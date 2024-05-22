import React from 'react'
import './Relatedproduct.css'
import data_product from '../asserts/data'
import Items from '../items/Items'

const Relatedproduct = () => {
  return (
    <div className='Relatedproducts'>
        <h1>Related products</h1>
        <hr />
        <div className="Relatedproducts-item">
            {data_product.map((item,i)=>{
                return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}

        </div>

    </div>
  )
}

export default Relatedproduct