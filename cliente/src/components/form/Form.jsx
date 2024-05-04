import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import validate from '../Utils/validate.js';
import { placeCountries } from '../../redux/actions.js';
import actividadPaises from '../../assets/actividadesPaises.jpg';

const Form = () => {
  
  const allCountries = useSelector(state => state.allCountries);
  const [selectedCountries, setSelectedCountries] = useState([]); // Estado para almacenar los países seleccionados
  const [searchText, setSearchText] = useState(""); // Estado para almacenar el valor de búsqueda

  const [activity, setActivity] = useState({
    name: "",
    difficulty: "", 
    duration: "",
    season: "",   
  });
  const [errors, setErrors] = useState({
    name: "",
    difficulty: "", 
    duration: "",
    season: "",
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(placeCountries()); // Carga todos los países cuando el componente se monta
  }, [dispatch]);

  const createActivity = async () => {
    try {
      const response = await axios.post('http://localhost:3001/activities', { ...activity, countryIds: selectedCountries });
      return response.data; 
    } catch (error) {
      throw error; 
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    // Manejar el cambio en la lista desplegable de países
    if (name === 'country') {
      const countryId = value;
      if (!selectedCountries.includes(countryId)) {     // siempre que al país no halla ya sido seleccionado
        setSelectedCountries([...selectedCountries, countryId]); // agrego el id del país seleccionado al estado
      }
    } else {
      setActivity({ ...activity, [name]: value });
    }
    // Validar el formulario y actualizar los errores
    const newErrors = validate({ ...activity, [name]: value });
    setErrors(newErrors);
  };

  const handleRemoveCountry = (countryId) => {
    setSelectedCountries(selectedCountries.filter(id => id !== countryId));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validateError = validate(activity);
    if (!hasErrors(validateError)) {
      try {
        // Crear la actividad enviando los detalles al servidor
        await createActivity();
        alert("Actividad creada exitosamente");
      } catch (error) {
        alert("Ocurrió un error al crear la actividad: " + error.message);
      }
    } else {
      // Actualizar el estado errors con los mensajes de error de validación
      setErrors(validateError);
    }
  };

  const hasErrors = (validateError) => {
    const errorsExist = Object.values(validateError).some(error => error !== '') || activity.name === '' || activity.difficulty === '' || activity.duration === '' || activity.season === '' || selectedCountries.length === 0;
    return errorsExist;
  }

  return (
    <>
      <div className="bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center" style={{ backgroundImage: `url(${actividadPaises})`, backgroundAttachment: 'fixed' }}>
        <div className="bg-green-200 p-8 rounded-lg w-96 min-h-60 overflow-y-auto" style={{ position: 'relative', minHeight: '60vh' }}>
          <h1 className="text-3xl font-bold mb-8">Crear actividad</h1>
          <form onSubmit={handleSubmit}>
            <div className="search-container bg-green-100 mb-4">
              {/* Usar el estado searchText para mostrar el valor de búsqueda */}
              <input type="text" className="search-pais bg-green-100" placeholder="Buscar país" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
              <select name="country" onChange={handleChange} value="">
                <option value="" disabled>Selecciona un país</option>
                {/* Filtrar la lista de países según el valor de searchText */}
                {allCountries
                  .filter(country => country.name.toLowerCase().includes(searchText.toLowerCase()))
                  .map(country => (
                    <option key={country.id} value={country.id}>{country.name}</option>
                  ))
                }
              </select>
            </div>
            <div>
              {selectedCountries.map(countryId => (
                <span key={countryId} className="selected-country">
                  {allCountries.find(country => country.id === countryId)?.name}
                  <button type="button" onClick={() => handleRemoveCountry(countryId)}>X</button>
                </span> 
              ))}
            </div>
            <label>
              <span>Nombre:</span>
              <input type='text' name='name' value={activity.name} onChange={handleChange} className="bg-green-100 mb-4" />
            </label>
            {(errors && errors.name && errors.name !== '') ? <p>{errors.name}</p> : null}
          
            <label>
              <span>Dificultad:</span>
              <input name='difficulty' value={activity.difficulty} onChange={handleChange} className="bg-green-100 mb-4" />
            </label>
            {(errors && errors.difficulty && errors.difficulty !== '') ? (<p>{errors.difficulty}</p>) : null}
          
            <label>
              <span>Duración:</span>
              <input type='text' name='duration' value={activity.duration} onChange={handleChange} className="bg-green-100 mb-4" />
            </label>
            {(errors && errors.duration && errors.duration !== '') ? <p>{errors.duration}</p> : null}
          
            <label>
              <span>Temporada:</span>
              <input type='text' name='season' value={activity.season} onChange={handleChange} className="bg-green-100 mb-4" />
            </label>
            {(errors && errors.season && errors.season !== '') ? <p>{errors.season}</p> : null}
          
            <button type='submit' disabled={hasErrors(errors)} className="bg-green-500 text-white px-4 py-2 font-bold rounded hover:bg-green-600">Crear actividad</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
