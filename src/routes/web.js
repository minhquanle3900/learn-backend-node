const express = require('express')
const { getHomePage, getCreate, getUpdate,
    postCreateUser, postUpdateUser, postDeleteUser, postDestroyUser } = require('../controllers/homeController')
const router = express.Router()

router.get('/', getHomePage)
router.get('/create', getCreate)
router.get('/update/:id', getUpdate)

router.post('/create-user', postCreateUser)
router.post('/update-user', postUpdateUser)
router.post('/delete-user/:id', postDeleteUser)
router.post('/delete-user', postDestroyUser)



module.exports = router //export default