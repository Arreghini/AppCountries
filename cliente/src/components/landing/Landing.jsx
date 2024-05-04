import React from "react";
import { Link } from 'react-router-dom';
import FondoLanding from '../../assets/fondoPaises.jpg';

const Landing = ({ onSearch }) => {
  return (
    <div className="relative h-screen" style={{ backgroundImage: `url(${FondoLanding})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex flex-col justify-center items-center text-center">
        <h1 className="text-white text-4xl font-bold mb-4">¡Bienvenido a nuestra página!</h1>
        <div className="text-white text-lg mb-8 w-3/4 mx-auto mb-10">
          <div className="text-justify">
            <p>Aquí podrás encontrar información sobre cada país de la Tierra.</p>
            <p>Podrás conocer sus características generales, su bandera entre otras.</p>
            <p>También podrás encontrar qué actividades turísticas y deportivas podrás realizar en cada uno de ellos.</p>
            <p>Así podrás conocer más sobre cada país y planificar un viaje en busca de aventuras.</p>
          </div>
        </div>
        <div className="mt-4">
          <Link to='/home'>
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={onSearch}>
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
