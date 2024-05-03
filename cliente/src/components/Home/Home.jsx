import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { placeCountries, filterCountries, orderCountries } from "../../redux/actions.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CardsCountries from "../cardsCountries/CardsCountries";

function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector(state => state.allCountries);
  const filteredCountries = useSelector(state => state.filteredCountries);
  const PageSize = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchCountry, setSearchCountry] = useState("");
  const [activities, setActivities] = useState([]);
  const navigate = useNavigate();

  // Cargar todos los países y actividades al montar el componente
  useEffect(() => {
    dispatch(placeCountries());
    loadAllActivities();
  }, [dispatch]);

  // Cargar actividades desde el servidor
  const loadAllActivities = async () => {
    try {
      const response = await axios.get('http://localhost:3001/activities');
      setActivities(response.data);
    } catch (error) {
      console.error("Error loading activities:", error);
    }
  };

  // Manejar cambios en el filtro de continente o actividad
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    dispatch(filterCountries({ [name]: value }));
    setCurrentPage(1); // Restablecer a la primera página cuando se aplica un nuevo filtro
  };

  // Manejar cambios en el orden de la lista
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
    dispatch(orderCountries({ type, order }));
  };

  // Manejar cambio de página
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calcular índices de inicio y fin para la paginación
  const startIndex = (currentPage - 1) * PageSize;
  const endIndex = Math.min(startIndex + PageSize, filteredCountries.length);

  // Obtener los países para la página actual
  const countriesForPage = filteredCountries.slice(startIndex, endIndex);
  
  // Manejar envío del formulario de búsqueda
  const handleSubmit = (event) => {
    event.preventDefault();
    // Tu lógica de búsqueda aquí...
  };

  // Manejar cambios en el campo de búsqueda
  const handleChange = (event) => {
    setSearchCountry(event.target.value);
  };

  return (
    <>
      {/* Tu JSX de la interfaz de usuario aquí... */}
    </>
  );
}

export default Home;
