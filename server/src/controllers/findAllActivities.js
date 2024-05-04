const { Activity } = require('../db')

const findAllActivitiesController = async () => {
    const activities = await Activity.findAll()

    return activities
};

        module.exports = findAllActivitiesController ;