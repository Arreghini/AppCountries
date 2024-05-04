const { Router } = require("express");
const router = Router();

const findAllCountries = require('../handlers/findAllCountries')
const getCountryById = require('../handlers/getCountryById')
const getCountryByName = require('../handlers/getCountryByName')
const createActivity = require('../handlers/createActivity')
const findAllActivities = require('../handlers/findAllActivities')
const findActivitiesByDifficulty = require('../handlers/findActivitiesByDifficulty')

router.get('/countries', findAllCountries)
router.get('/countries/name', getCountryByName)
router.get('/countries/:id', getCountryById)
router.post('/activities', createActivity)
router.get('/activities', findAllActivities)
router.get('/activities/:difficulty', findActivitiesByDifficulty)


module.exports = router;
