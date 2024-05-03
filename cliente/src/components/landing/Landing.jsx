import React from "react";
import { Link, useLocation } from 'react-router-dom';
import '../Landing/Landing.css';

const Landing = ({ onSearch }) => {
  const { pathname } = useLocation();

  return (
    <div className="land">
      <Link to='/home'>
        <button className="buttonGeneral" onClick={onSearch}>
            HOME PAGE
        </button>
      </Link>
    </div>
  );
};

export default Landing;