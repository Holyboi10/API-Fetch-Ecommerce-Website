import React from 'react'

const Navbar = () => {
  return (
    <div className='Navbar'>
            <div className='Nav-content'>
                <h3>WOODLOT</h3>     
            <ol>
                <li><select><option>Shop</option></select></li>
                <li><select><option>About</option></select></li>
            </ol>
            <p>Account</p>
            <p>Stocklist</p>
            <p>Blog</p>

            </div>
        
    </div>
  )
}

export default Navbar