const router = require('express').router();
const userRoutes = require('./users');
const thoughtRoutes = require('./thoughts');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;