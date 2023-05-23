import React from 'react'
import "./navBar.scss"
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function NavBar() {
  return (
    <div className='navBar'>
        <div className='leftSide'>
            <p>About</p>
            <p>Store</p>
        </div>
        <div className='rightSide'>
            <p>Gmail</p>
            <p>Images</p>
            <AppsIcon fontSize='medium'/>
            <AccountCircleIcon fontSize='large'/>
        </div>
    </div>
  )
}

export default NavBar