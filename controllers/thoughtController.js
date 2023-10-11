const Thought = require('../models/thought');

module.exports = {
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find().populate('reactions');
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getOneThought(req, res) {
        try {
            const oneThought = await Thought.findOne({_id: req.params.thoughtId}).populate('reactions');
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
            console.log(err);
        }
    },
    async updateThought(req, res) {
        try {
            const updateThoughtData = await Thought.FindOneAndUpdate({_id: req.params.thoughtId}, {thoughtText: req.body})
            res.json(updateThoughtData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteThought(req, res) {
        try {
            const thoughtEraser = await Thought.FindOneAndDelete({_id: req.params.thoughtId})
            res.json(thoughtEraser);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createReaction(req, res) {
        try {
            const reactionBuilder = await Thought.FindOneAndUpdate({_id: req.params.thoughtId}).populate('reactions');
            res.json(reactionBuilder);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteReaction(req, res) {
        try {
            const reactionEraser = await reaction.FindOneAndDelete({_id: req.params.thoughtId});
            res.json(reactionEraser);
        } catch (err) {
            res.status(500).json(err);
        }
    },
}