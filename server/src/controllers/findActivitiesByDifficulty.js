const { Sequelize } = require('sequelize');
const { Activity } = require('../db')
const { Op } = require('sequelize')

const findActivitiesByDifficulty = async () => {
    const activities = await Activity.findAll({
    where:{
    difficulty: {
        [Op.gte]: 3
    }
}
    });
    return activities
};

        module.exports = findActivitiesByDifficulty ;