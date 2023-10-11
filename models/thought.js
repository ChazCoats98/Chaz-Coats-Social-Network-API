const { Schema, Types, model } = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thoughtText: {type: string, required: true, min: 1, max: 280},
    createdAt: {type: Date, default: Date.now, get: createdTime => moment(createdTime).format('mmm dd, yyy hh:mm')},
    username: {type: string, required: true},
    reactions: [reactionSchema]
});

thoughtSchema.virtual('reactionCount').get(() => {
    return this.reactions.length;
})

const reactionSchema = new mongoose.Schema({
    reactionId: {type: Schema.Types.ObjectId, default: ObjectId()},
    reactionBody: {type: string, required: true, max: 280},
    username: {type: string, required: true},
    createdAt: {type: Date, default: Date.now},
});

const thoughts = mongoose.model('thoughts', thoughtSchema);

module.exports = thoughts;