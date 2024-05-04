import React from 'react';
import { Link } from 'react-router-dom';

const CardCountry = ({ countries }) => {
  return (
    <ul className="country-list">
      {countries && countries.map((country) => (
        <li className="country-card" key={country.id}>
          <Link to={`/detail/${country.id}`}>
            <div className="country-details">
              <img className="flag-image" src={country.flag_image} alt={country.name} />
              <p className="country-name">{country.name}</p>
              <p className="country-continent">{country.continent}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CardCountry;
