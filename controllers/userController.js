const User = require('../models/user');

module.exports = {
    //queries DB for all user data then displays in JSON format
    async getUsers(req, res) {
        try {
            const users = await User.find().populate('thoughts').populate('reactions');
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
            console.log(err);
        }
    },
    async getOneUser(req, res) {
        //cant get thoughts or reactions to populate.
        try {
            const user = await User.findOne({ _id: req.params.userId }).populate('thoughts').populate('reactions');
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
    async updateUser(req, res) {
        try {
            const updatedUser = await User.findOneAndUpdate({ _id: req.params.userId}, { $set: req.body }, { runValidators: true, new: true});
            res.json(updatedUser);
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
    },
    async addFriend(req, res) {
        try {
            const newFriend = await User.findOneAndUpdate({ _id: req.params.userId}, { $addToSet: })
        }
    }
} 