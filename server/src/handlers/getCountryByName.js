const getCountryByNameController = require('../controllers/getCountryByName')

    const getCountryByName = async (req,res) => {
        const { name } = req.query ;
        try {
        const country = await getCountryByNameController(name)
        res.status(200).json(country)
    }catch(error){
        res.status(400).json({error: error.message})
    }
};

module.exports = getCountryByName;
