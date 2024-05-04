const { Country, Activity } = require('../../src/db');

const findAllCountriesController = async () => {
    try {
        const countries = await Country.findAll({
            include: [
                {
                    model: Activity,
                    attributes: ["id", "name", "difficulty", "season"],
                    through: {
                        attributes: [],
                    },
                }
            ]
        });
        return countries;
    } catch (error) {
        console.error("Error en findAllCountriesController:", error);
        throw error;
    }
};

module.exports = findAllCountriesController;