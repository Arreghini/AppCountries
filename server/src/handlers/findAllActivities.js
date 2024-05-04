
const findAllActivitiesController = require('../controllers/findAllActivities')

const getActivities = async (req,res) => {
    try {
    const activities = await findAllActivitiesController()
    res.status(200).json(activities)
    }catch(error) {
    res.status(400).json({error: error.message})
    }
}
  
   module.exports = getActivities;