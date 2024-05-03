import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../Detail/Detail.css';
import Navbar from '../Navbar/Navbar';
import { CardContainer, GeneralStyle } from '../styles';

const Detail = () => {
  const { id } = useParams();
  const countries = useSelector(state => state.allCountries);
  const country = countries.find(country => country.id === id);

  if (!country) {
    return <div>No se encontraron detalles para este país.</div>;
  }

  return (
    <>
    <GeneralStyle>
      <Navbar />
      <div className="home-container">
      <div className="detail-container">
          <h1 className="detalle">Detalles del país</h1>
          <ul>
            <CardContainer>
            <li key={country.id}>
              <p className="country-detail">{country.id}</p>
              <p>{country.name}</p>
              <img src={country.flag_image} alt={country.name} />
              <p>Continente: {country.continent}</p>
              <p>Capital: {country.capital}</p>
              <p>Región: {country.subregion}</p>
              <p>Area: {country.area} km²</p>
              <p>Población: {country.population} hab.</p>
              <h1 className="actividades">Actividades turísticas y deportivas:</h1>
              {country.Activities && country.Activities.length > 0 && (
                <ul>
                  {country.Activities.map(activity => (
                    <li key={activity.id}>
                      <p className='actividad-lista'>{activity.name}  --  {activity.season}</p>
                    </li>
                  ))}                
                </ul>
              )}
            </li>
            </CardContainer>
          </ul>
       </div>
      </div>
      </GeneralStyle>
    </>
  );
};

export default Detail;