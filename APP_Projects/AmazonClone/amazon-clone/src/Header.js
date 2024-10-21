import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from './firebase';
//import SearchIcon from "@material-ui/icons"
//import { ShoppingBasket } from '@material-ui/icons'
function Header() {
    const [{basket, user}] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to="/">
            <img className='header_logo' src='./image/logo.png' alt='Logo' />
            </Link>
          

            <div className='header_search'>
                <input className='header_searchInput' type='text' />
               {/** <SearchIcon className='header_searchIcon'/> */} 
                
            </div>

            <div className='header_nav'>
           <Link to='/login'>
               <div onClick={handleAuthentication} className='header_option'>
                <span className='header_optionLineOne'>Hello {!user ? 'Guest' : user.email}</span>
               <span className='header_optionLineTwo'>{user ? 'Sign Out' :'Sign In'}</span>
              
               </div>
               </Link>
               <div className='header_option'>
               <span className='header_optionLineOne'>Returns</span>
               <span className='header_optionLineTwo'>& Orders</span>
               </div>
               <div className='header_option'>
               <span className='header_optionLineOne'>Your</span>
               <span className='header_optionLineTwo'>Prime</span>
               
               </div>
               <Link to='/checkout'>
               <div className='header_optionBasket'>
             
              <img className='header_basket' src='./image/basket.png' alt=''/>
              
                <span className='header_optionLineTwo header_basketCount'>
                    {basket?.length}
                    </span> 
               </div>
           
               </Link>
              


            </div>
        </div>
    )
}

export default Header
