import React from 'react'
import { useState } from 'react'

const Website = () => {
    const [Items, setItems] = useState([])


    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((datas)=>setItems(datas))
  return (
    <div className='main-container'>
    {
        Items.map((item)=>{
            const {id,title,price,description,category,image} = item
            return <div className='item-container'> <br/>
                <img className='images' src={image}/>
                <p className='p-one'>{title}</p>
                {/* <h5 className='h-five'>${price}</h5> */}
                <h4 className='h-four'>{category}</h4>
                <button className='btn'>${price}</button>
            </div>
        })
        
    }
    </div>
  )
}

export default Website