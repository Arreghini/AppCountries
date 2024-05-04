
const findAllActivitiesByDifficulty = require('../controllers/findActivitiesByDifficulty')

const getActivitiesByDifficulty = async (req,res) => {
    try {
    const activities = await findAllActivitiesByDifficulty()
    res.status(200).json(activities)
    }catch(error) {
    res.status(400).json({error: error.message})
    }
}
  
   module.exports = getActivitiesByDifficulty;