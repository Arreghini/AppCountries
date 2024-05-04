const getCountryByIdController = require('../controllers/getCountryById')


const getCountryById = async (req,res) => {
        const { id } = req.params ;
        try {
        const country = await getCountryByIdController(id);
        res.status(200).json(country);
    }catch(error){
        res.status(404).json({error: error.message})
    }
};

module.exports = getCountryById;