const user = require('../models/User')
const Note = require('../models/Note')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const User = require('../models/User')


// @desc Get all users
// @desc GET /users
// @access Private

const getAllUser = asyncHandler(async (req, res) => {

    const users = await User.find().select('-password').lean()
        if(!user) {
            return res.status(400).json({ message: 'No users found'})
        }

        res.json(users)

})

// @desc Create new users
// @desc POST /users
// @access Private

const createNewUser = asyncHandler(async (req, res) => {

    const {username, paassword, roles} = req.body

    //Confirm data
    if (!username || !password || !Array.isArray(roles) || !roles.length ) {
        return res.status(400).json({ message: 'All fields are required'})
    }

    //

})


// @desc Update a users
// @desc PATCH /users
// @access Private

const updateUser = asyncHandler(async (req, res) => {

})



// @desc Delete a users
// @desc DELETE /users
// @access Private

const deleteUser = asyncHandler(async (req, res) => {

})

module.exports = {
    getAllUser,
    createNewUser,
    updateUser,
    deleteUser,
}