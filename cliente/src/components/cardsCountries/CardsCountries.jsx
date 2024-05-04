import React from 'react';
import { Link, useParams } from 'react-router-dom';
import earthPattern from '../../assets/imagenTierra1.jpg'; 

const CardsCountry = ({ countriesForPage }) => {
  const { id } = useParams();
  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: `url(${earthPattern})` }}>
      <div className="flex justify-center text-yellow-100 text-center items-center h-screen">
           <div className="grid grid-cols-3 gap-6 max-w-screen-lg mt-0">
          {countriesForPage.map((country) => (
            <Link to={`/detail/${country.id}`} key={country.id}>  
              <div className="border border-gray-300 rounded-2xl overflow-hidden w-full h-full">
                <img className="w-full h-32 object-cover" src={country.flag_image} alt={country.name} />
                <div className="px-4 py-2">
                  <p className="font-semibold">{country.name}</p>
                  <p className="text-sm text-yellow-100 text-center">{country.continent}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsCountry;