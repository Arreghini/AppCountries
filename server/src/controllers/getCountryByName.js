const { Country } = require('../db')
const { Op } = require('sequelize')

const findCountryByNameController = async(name) => {
const country = await Country.findOne({
    where:{ 
    name: {
    [Op.iLike]: `%${name}%`,           
          }
        }
    });

return country
}
module.exports = findCountryByNameController ;
