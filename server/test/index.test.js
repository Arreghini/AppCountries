const app = require('../app');
const session = require('supertest');
const agent = session(app);

describe('Test de RUTAS', () => {

describe('GET /countries/:id', () => {
    
    it('Responde con status: 200', async () =>  await agent.get('/countries/ARG').expect(200));
    it('Responde un objeto con las propiedades: "id", "name", "flag_image", "continent", "capital", "subregion", "area", y "population"', async () => {
        const response = await agent.get('/countries/ARG');  
        const { body } = response;
        const expectedProperties = ["id", "name", "flag_image", "continent", "capital", "subregion", "area", "population"];  
        expectedProperties.forEach(property => {
          expect(body).toHaveProperty(property);
        });
    })
     it('Si hay un error responde con status: 404', async () =>  await agent.get('/countries/BBBA').expect(404));
    });

describe('POST /activities', () => {
      it('Devuelve la actividad creada para un país', async () => {
        const activity1 = {
          countryIds: ["ITA"],
          name: 'Canotaje',
          difficulty: 2,
          duration: 3,
          season: "Verano",
        }
        const { body } = await agent.post('/activities').send(activity1);
        delete body.id; // Elimino la propiedad 'id' del objeto recibido
        delete activity1.countryIds; //Elimino la propiedad countryIds de activity1 antes de recibir la respuesta 
        expect(body).toEqual(expect.objectContaining(activity1));
      });
    });

describe('Activity model', () => {
      it('Devuelve error si el valor del campo "difficulty" está fuera del rango: un entero de 1 a 5', async () => {
        const wrongActivity = {
          countryIds: ["ITA","PER"],
          name: 'Trekking',
          difficulty: 20,
          duration: 4,
          season: "Otoño",
        }
    // Realiza la solicitud para crear la actividad con IDs de países inválidos
    const response = await agent.post('/activities').send(wrongActivity);
    // Verifica que se reciba un código de estado 400 (BadRequest) en respuesta
    expect(response.status).toBe(400);
      });

    it('Devuelve error si el valor del campo "duration" está fuera del rango: un entero de 1 a 24', async () => {
      const wrongActivity = {
        countryIds: ["ITA","PER"],
        name: 'Trekking',
        difficulty: 2,
        duration: 40,
        season: "Otoño",
      }
  // Realiza la solicitud para crear la actividad con IDs de países inválidos
  const response = await agent.post('/activities').send(wrongActivity);
  // Verifica que se reciba un código de estado 400 (BadRequest) en respuesta
  expect(response.status).toBe(400);
    });

    it('Devuelve error si el valor del campo "season" no ("Verano", "Primaver","Otoño","Invierno")', async () => {
      const wrongActivity = {
        countryIds: ["ITA","PER"],
        name: 'Trekking',
        difficulty: 2,
        duration: 4,
        season: "Otoños",
      }
  // Realiza la solicitud para crear la actividad con IDs de países inválidos
  const response = await agent.post('/activities').send(wrongActivity);
  // Verifica que se reciba un código de estado 400 (BadRequest) en respuesta
  expect(response.status).toBe(400);
    });
  });
})
