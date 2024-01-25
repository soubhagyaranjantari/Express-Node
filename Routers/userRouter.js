const express = require("express");
const router = express.Router();

const { handdleCreateNewUser,
    handdleGetAllUser,
    handdleGetUserById,
    handdleEditUser,
    handdleDeleteUser } = require('../controllers/userController');

router.route('/').get(handdleGetAllUser).post(handdleCreateNewUser);

router.route('/:id')
    .get(handdleGetUserById)
    .put(handdleEditUser)
    .delete(handdleDeleteUser);

module.exports = router;