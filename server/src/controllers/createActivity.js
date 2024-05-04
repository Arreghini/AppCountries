const { Country, Activity } = require('../db')
const { Op } = require('sequelize');

const createActivityController = async (countryIds, name, difficulty, duration, season) => {

    try {
        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season,
        });

        let countriesSelect = [];

        if (countryIds && countryIds.length > 0) {
            countriesSelect = await Country.findAll({
                where: {
                    id: {
                        [Op.in]: countryIds,
                    },
                },
            });
        }

        await newActivity.addCountries(countriesSelect);

        return newActivity;
    } catch (error) {
        console.error("Error en el handler createActivityHandler:", error);
        throw error;
    }
};

module.exports = createActivityController;