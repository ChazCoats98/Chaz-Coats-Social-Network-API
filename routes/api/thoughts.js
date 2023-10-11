const router = require('express').router();
const {
    getThoughts,
    getOneThought,
    newThought,
    updateThought,
    deleteThought,
    createReaction, 
    deleteReaction,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(newThought);

router.route('/:id').get(getOneThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').post(createReaction).delete(deleteReaction);