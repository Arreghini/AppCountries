import React from 'react';
import { Link } from 'react-router-dom';
import { GeneralStyle, ButtonGeneral } from '../styles';
 
function Navbar (){
    return (
        <GeneralStyle className='contenedor-nav'>
           <Link to='/'> 
            <ButtonGeneral type='radio' className='menuBar button-nav'>LANDING</ButtonGeneral>
           </Link> 
           <Link to='/home'>
            <ButtonGeneral className='menuBar button-nav'>HOME</ButtonGeneral>
           </Link> 
           <Link to='/form'>
            <ButtonGeneral type='radio' className='menuBar button-nav'>NEW ACTIVITY</ButtonGeneral>
           </Link>
        </GeneralStyle>
    )
};

export default Navbar;