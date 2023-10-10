const router = require('express').router();
const {
    getThoughts,
    getOneThought,
    newThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(newThought);

router.route('/').get(getOneThought)