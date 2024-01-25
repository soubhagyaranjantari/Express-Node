const User = require('../models/userModel')


const handdleGetAllUser = async (req, res) => {
    const allDbUser = await User.find({})
    res.json(allDbUser)
}

const handdleCreateNewUser = async (req, res) => {
    const body = req.body;
    console.log(body);
    const createdUser = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_description
    })
    console.log(createdUser);
    res.status(201).json({ msg: "User Created", createdId: User._id })
}

const handdleGetUserById = async (req, res) => {
    const singleUser = await User.findById(req.params.id)
    if (!singleUser) return res.status(404).json({ msg: "User Not Found" })
    console.log(singleUser);
    return res.json(singleUser)
}

const handdleEditUser = async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, { email: req.body.email })
    res.json({ msg: "Updated" })
}

const handdleDeleteUser = async (req, res) => {
    console.log(req.params.id);
    await User.findByIdAndDelete(req.params.id)
    res.json({ msg: "Deleted" })
}
module.exports = {
    handdleGetAllUser,
    handdleCreateNewUser,
    handdleGetUserById,
    handdleEditUser,
    handdleDeleteUser,
}