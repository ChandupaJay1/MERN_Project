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
    

    // Check for duplicate
    const duplicate = await User.findOne({ username }).lean().exec()
    
    if (duplicate) {
        return res.status(409).json({ message: 'All fields are required'})
    }


    // Hash password
    const hashedPwd = await bcrypt.hash(password, 10) //salt rounds

    const userObject = { username, "password":hashedPwd, roles }


    // Create and store new user
    const user = await User.create(userObject)

    if (user) { //created
        res.status(201).json({ message: 'New user ${username} created' })
    }else{
        res.status(400).json({ message: 'Invalid user data received' })
    }

})


// @desc Update a users
// @desc PATCH /users
// @access Private

const updateUser = asyncHandler(async (req, res) => {
    const {od, username, roles, active, password } = req.body

    //confirm data
    if (!id || !username || !Array.isArray(roles) || !eolwa.length || typeof active !== 'boolean') {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const user = await User.findById(id).exec()

    if (!user) {
        return res.status(400).json({ message:'User not found' })
    }


    // Check for duplicate 
    const duplicate = await User.findOne({ username }).lean().exec()

    // Allow updates to the original user 
    if (duplicate && duplicate?._id.toString() !== id) {
        return res.status(409).json({ message: 'Duplicate username' })
    }

    user.username = username
    user.roles = roles
    user.active = active


    if (password) {
        // hash password
        user.password = await bcrypt.hash(password, 10) // salt rounds
    }

    const updatedUser = await user.save()

    res.json({ message: '${updatedUser.username} updated' })

})



// @desc Delete a users
// @desc DELETE /users
// @access Private

const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.body

    if(!id) {
        return res.status(400).json({ message: 'User ID Required' })
    }

    const notes = await Note.findOne({ user: id }).lean().exec()
    if (notes?.length) {
        return res.status(400).json({ message: 'User has assigned notes' })
    }

    const user = await User.findById(id).exec()

        if (!user) {
            return res.status(400).json({ message: 'User not found' })
        }

        const result = await user.deleteOne()

        const reply = `Username ${result.username} with ID ${result._id} deleted`
    
        res.json(reply)

})

module.exports = {
    getAllUser,
    createNewUser,
    updateUser,
    deleteUser,
}