const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: string, unique: true, required: true, trim: true},
    email: {type: string, unique: true, required: true, 
        //borrowed from https://gist.github.com/rupeshtiwari/acf770bfc85f3fe1f62a80b461abfc13
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],},
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'thought'}],
    friends: [{ type: Schema.Types.ObjectId, ref: 'user'}]
});

const user = mongoose.model('User', userSchema);

module.exports = user;