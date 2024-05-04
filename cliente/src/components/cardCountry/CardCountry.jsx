import React from 'react';
import { Link } from 'react-router-dom';

const CardCountry = ({ country }) => {
  return (
    <div className="bg-green-100 p-4 mb-4">
      <div className="country-card-wrapper rounded-lg overflow-hidden border border-gray-300 p-4">
        <div className="country-details">
          <h1 className="text-2xl font-semibold mb-4 text-center">{country.name}</h1>
          <img className="w-full" src={country.flag_image} alt={country.name} />
          <p className="text-black text-xl font-semibold mb-4 text-center">Continente: {country.continent}</p>
        </div>
        <div className="population-activities-container mt-4">
          <div className="bg-white shadow-md p-4 rounded-md">
            <p>Área: {country.area} km²</p>
            <p>Población: {country.population} hab.</p>
            <h1 className="text-xl font-semibold mb-4 text-center">Actividades turísticas y deportivas:</h1>
            {country.Activities && country.Activities.length > 0 && (
              <ul>
                {country.Activities.map(activity => (
                  <li key={activity.id}>
                    <p className='text-sm'>{activity.name} - {activity.season}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCountry;
