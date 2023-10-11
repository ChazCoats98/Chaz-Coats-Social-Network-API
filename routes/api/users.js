const router = require('express').router();
const {
    getUsers,
    getOneUser,
    newUser
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(newUser);

router.route('/:userId').get(getOneUser);