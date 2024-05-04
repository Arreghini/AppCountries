import React from "react";
import { Link } from 'react-router-dom';
import FondoLanding from '../../assets/fondoPaises.jpg';

const Landing = ({ onSearch }) => {
  return (
    <div className="relative h-screen" style={{ backgroundImage: `url(${FondoLanding})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex flex-col justify-center items-center text-center">
        <h1 className="text-white text-4xl font-bold mb-4">¡Bienvenido a nuestra página!</h1>
        <div className="text-white text-lg mb-8 mx-4 max-w-[30rem]">
          <p className="text-justify">
          Explora la diversidad de cada país del mundo. Descubre sus características distintivas, 
          incluyendo detalles como su bandera, capital, población y mucho más. Investiga sobre las emocionantes 
          actividades turísticas y deportivas disponibles en cada destino y agrégalas. ¡Prepárate para ampliar tus horizontes 
          y planificar una emocionante aventura en cada rincón del mundo!"
          </p>
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
