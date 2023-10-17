const User = require('../models/user');

module.exports = {
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
            console.log(err);
        }
    },
    async getOneUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId }).select('-__v').populate('thoughts').populate('friends');
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
            console.log(err);
        }
    },
    async newUser(req, res) {
        try {
            const userData = await User.create(req.body);
            res.json(userData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteUser(req, res) {
        try {
            const userEraser = await User.FindOneAndDelete({ _id: req.params.userId });
            res.json(userEraser);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}