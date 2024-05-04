import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { placeCountries, filterCountries, orderCountries } from "../../redux/actions.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CardsCountries from "../cardsCountries/CardsCountries.jsx";

function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector(state => state.allCountries);
  const filteredCountries = useSelector(state => state.filteredCountries);
  const PageSize = 9; // acá definimos el tamaño de cuantas cards queremos visualizar en cada página
  const [currentPage, setCurrentPage] = useState(1); // página actual
  const [searchCountry, setSearchCountry] = useState(""); // Agregamos el estado para la barra de búsqueda
  const [activities, setActivities] = useState([]); // Estado para almacenar las actividades
  const navigate = useNavigate();

   console.log('muestro filteredCountries',filteredCountries)
   useEffect(() => {
 //   console.log(filteredCountries)
     dispatch(placeCountries()); // Carga todos los países cuando el componente se monta
     allActivities();
   }, [dispatch]); 

  const allActivities = async () => {
    try {
      const response = await axios.get('http://localhost:3001/activities');
      setActivities(response.data); // Actualiza el estado con los datos de las actividades
    } catch (error) {
      throw error;
    }
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    dispatch(filterCountries({ [name]: value }));
    setCurrentPage(1);
  };

  const handleOrderChange = (event) => {
    const { name, value } = event.target;
    let type, order;
    if (name === "alphabetically") {
      type = "name";
    } else if (name === "byPopulation") {
      type = "population";
    }
    if (value === "A") {
      order = 'A';
    } else if (value === "D") {
      order = 'D';
    }
    // Envio tipo y orden al action creator
    dispatch(orderCountries({ type, order }));
  };

  //esto define el manejo de cambio de página
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const totalPages = Math.ceil(filteredCountries.length / PageSize);

  // Calcular el índice inicial y final para la paginación
  const startIndex = (currentPage - 1) * PageSize;
  const endIndex = Math.min(startIndex + PageSize, filteredCountries.length);

  // Filtrar y ordenar los países para la página actual
  const countriesForPage = filteredCountries.slice(startIndex, endIndex);
  const getCurrentPageNumber = () => {
    return currentPage;
  };
//console.log(countriesForPage)
const handleSubmit = (event) => {
  event.preventDefault();
  if (allCountries) {
    const countryExists = allCountries.find(country => country.name.toLowerCase() === searchCountry.toLowerCase());
    if (countryExists) {
      navigate(`/detail/${countryExists.id}`);
    } else {
      alert('El país ingresado no existe en la base de datos.');
    }
  } else {
    alert('Aún se están cargando los datos de los países. Por favor, inténtalo de nuevo más tarde.');
  }
};
  const handleChange = (event) => {
    setSearchCountry(event.target.value);
  };

  return (
    <>
      <div className="bg-green-100 py-2">
        <form onSubmit={handleSubmit} className="flex justify-center">
          <input type="text" className="border-2 border-black rounded-md px-2 py-1 mr-2 bg-yellow-50" value={searchCountry} onChange={handleChange} />
          <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold px-4  py-2 rounded-md">
            <span>Search:</span><br />
            <span>Nombre del país</span>
          </button>
        </form>
      </div>
      <div className="flex bg-green-100 justify-center">
        <div className="my-4 mx-2">
          <select name="continent" className="border-2 border-black rounded-md px-2 py-1 bg-yellow-50" onChange={handleFilterChange}>
            <option value="">Todos los continentes</option>
            <option value="South America">South America</option>
            <option value="North America">North America</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
            <option value="Africa">Africa</option>
          </select>
        </div>
        <div className="my-4 mx-2">
          <select name="activity" className="border-2 border-black rounded-md px-2 py-1 bg-yellow-50" onChange={handleFilterChange}>
            <option value="">Todas las actividades</option>
            {Array.from(new Set(activities.map(activity => activity.name))).map((activityName, index) => (
              <option key={index} value={activityName}>{activityName}</option>
            ))}
          </select>
        </div>
        <div className="my-4 mx-2">
          <select name="alphabetically" className="border-2 border-black rounded-md px-2 py-1 bg-yellow-50" onChange={handleOrderChange}>
            <option value="">Nombre</option>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
          </select>
        </div>
        <div className="my-4 mx-2">
          <select name="byPopulation" className="border-2 border-black rounded-md px-2 py-1 bg-yellow-50" onChange={handleOrderChange}>
            <option value="">Población</option>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
          </select>
        </div>
      </div>
      <div className="pagination-container flex justify-center bg-green-100 mt-1 mb-1">
        <div className="pagination-buttons">
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="bg-yellow-300 hover:bg-yellow-400 text-black px-4 py-1 rounded-md">{'<<'}</button>
          <button className="bg-yellow-300 text-black px-4 py-1 rounded-md">{getCurrentPageNumber()}</button>
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={endIndex >= filteredCountries.length} className="bg-yellow-300 hover:bg-yellow-400 text-black px-4 py-1 rounded-md">{'>>'}</button>
        </div>
      </div>
      <div className="countries-column">
        <CardsCountries countriesForPage={countriesForPage} />
      </div>
    </>
  );
}

export default Home;