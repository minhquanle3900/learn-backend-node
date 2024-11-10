const express = require('express')
const { getHomePage, getCreate, getUpdate, postCreateUser } = require('../controllers/homeController')
const router = express.Router()

router.get('/', getHomePage) 
router.get('/create', getCreate) 
router.get('/update/:id', getUpdate)

router.post('/create-user', postCreateUser)


module.exports = router //export default