import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar-container bg-green-800 text-white py-4">
            <div className="max-w-screen-lg mx-auto flex justify-between font-bold px-4">
                <Link to='/'> 
                    <button className='menuBar button-nav'>LANDING</button>
                </Link> 
                <Link to='/home'>
                    <button className='menuBar button-nav'>HOME</button>
                </Link> 
                <Link to='/form'>
                    <button className='menuBar button-nav'>NEW ACTIVITY</button>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
