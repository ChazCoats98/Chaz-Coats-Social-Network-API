const Thought = require('../models/thought');
const user = require('../models/user');

module.exports = {
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getOneThought(req, res) {
        try {
            const oneThought = await Thought.findOne({_id: req.params.id});
            res.json(oneThought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async newThought(req, res) {
        try{
            const thoughtData = await Thought.create(req.body);
            res.json(thoughtData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async updateThought(req, res) {
        try {
            const updateThought = await Thought.FindOneAndUpdate({_id: req.params.id}, {thoughtText: req.body})
        } catch (err) {
            res.status(500).json(err);
        }
    },
}