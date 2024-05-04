const findAllCountriesController = require('../controllers/findAllCountries')

const getCountries = async (req,res) => {
    const  name = req.query.name;
    try{
    const countries = await findAllCountriesController()    
    res.status(200).json(countries)    
    }catch(error){
    res.status(500).json({error: error.message})
  }
}

module.exports = getCountries;