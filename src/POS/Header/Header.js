import React from 'react'
import './header.css'


const Header = () => {
  return (
    <div className='nav'>
        <div className='d-flex nav1'> 
            <div className='nav-t'> POS</div>
            <div className='nav-t'>Date</div>
        </div>
        <div className='d-flex nav2 '>
            <div className='nav-t'> Dashboard</div>
            <div className='nav-t'>STR08</div>
        </div>
    </div>
  )
}

export default Header