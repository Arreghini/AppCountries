import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'; 
import CardCountry from '../cardCountry/CardCountry.jsx';
import Planisferio from '../../assets/mapamundi.jpg';

const Detail = ({ onSearch }) => {
  const { id } = useParams(); 
  const countries = useSelector(state => state.allCountries);
  const country = countries.find(country => country.id === id);

  if (!country) {
    return <div>No se encontraron detalles para este país.</div>;
  }

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 z-10 w-full flex justify-center">
        <Link to='/home'>
          <button className="bg-yellow-300 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded mt-4" onClick={onSearch}>
            {'<<'}
          </button>
        </Link>
      </div>
      <div className="bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center" style={{ backgroundImage: `url(${Planisferio})` }}>
        <div className="flex flex-col items-center justify-center">
          <CardCountry country={country} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
