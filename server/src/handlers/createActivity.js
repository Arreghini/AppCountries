const createActivityController = require('../controllers/createActivity');

const createActivity = async (req, res) => {
    try {
        const { countryIds, name, difficulty, duration, season } = req.body;
    
        if (!countryIds || !name || !difficulty || !season) {
            throw new Error("Se requieren todos los campos para crear una actividad");
        }

        const newActivity = await createActivityController(countryIds, name, difficulty, duration, season);
        res.status(201).json(newActivity);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = createActivity;

   