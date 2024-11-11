const connection = require('../config/database')
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../services/CRUDservice')

const getHomePage = async (req, res) => {
    let results = await getAllUsers()
    return res.render('home.ejs', { listUsers: results })
}

const getCreate = (req, res) => {
    res.render('create.ejs')
}

const getUpdate = async (req, res) => {
    const userId = req.params.id
    let user = await getUserById(userId)
    res.render('edit.ejs', { userEdit: user })
}

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    // console.log(email, name, city)
    let [results, fields] = await connection.query(
        `INSERT INTO Users(email, name, city) VALUES(?,?,?)`, [email, name, city],
    )
    res.redirect('/')
}
const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userId = req.body.id
    // console.log('email= ',email,'name= ',name,'city= ',city,'userId= ',userId) 

    await updateUserById(email, name, city, userId)

    res.redirect('/')
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id
    let user = await getUserById(userId)

    res.render('delete.ejs', { userDelete: user })
}

const postDestroyUser = async (req, res) => {
    const userId = req.body.id
    await deleteUserById(userId)
    
    res.redirect('/')
}
module.exports = {
    getHomePage, getCreate, getUpdate, 
    postCreateUser, postUpdateUser, postDeleteUser, postDestroyUser
}