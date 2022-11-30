import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../img/logo.png";

const Navbar = () => {
  return (
    
    <div className='navbar'>
        <div className='container'>
            <div className='logo'>
                <img src={Logo}  alt=""/>

            </div>
            <div className='links'>
                <Link className='link' to="/?cat=art">
                    <h6>ART</h6>
                </Link>
                <Link className='link' to="/?cat=technology">
                    <h6>Technology</h6>
                </Link>
                <Link className='link' to="/?cat=science">
                    <h6>Science</h6>
                </Link>
                <Link className='link' to="/?cat=food">
                    <h6>Food</h6>
                </Link>
               <span>Mixture</span>
               <span>Logout</span>
               <span className='write'>
                <Link to="/write">Write</Link>

               </span>

            </div>

        </div>

    </div>
  )
}

export default Navbar;