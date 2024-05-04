import React from 'react';
import { Link } from 'react-router-dom';

const CardCountry = ({ country }) => {
  return (
    <div className="country-card-wrapper border border-gray-300 rounded p-4 mb-4">
      <div className="country-details">
        <img className="flag-image" src={country.flag_image} alt={country.name} />
        <p className="country-name">{country.name}</p>
        <p className="country-continent">{country.continent}</p>
      </div>
      <div className="country-info">
        <p>Capital: {country.capital}</p>
        <p>Población: {country.population}</p>
        <p>Área: {country.area}</p>
      </div>
      <Link to={`/detail/${country.id}`} className="text-blue-500 hover:underline">
        Ver detalles
      </Link>
    </div>
  );
};

export default CardCountry;
