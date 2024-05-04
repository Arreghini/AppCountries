const { Country, Activity } = require('../db')

const findCountryByIdController = async (id, includeActivities = false) => {
 //   const options = includeActivities ? { include: { activities: {} } } : {};
    const countryID = await Country.findOne({
       where: {id: id}, 
       
});
   if(!countryID) throw new Error ('No hay país con ese id')
       return countryID
}
module.exports = findCountryByIdController ;