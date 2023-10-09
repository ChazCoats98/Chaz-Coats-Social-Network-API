const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thoughtText: {type: string, required: true, min: 1, max: 280},
    createdAt: {},
    username: {type: string, required: true},
    reactions: {}
});

const reactionSchema = new mongoose.Schema({
    reactionId: {type: Schema.Types.ObjectId, default: ObjectId()},
    reactionBody: {type: string, required: true, max: 280},
    username: {type: string, required: true},
    createdAt: {type: Date, default: Date.now()},
});