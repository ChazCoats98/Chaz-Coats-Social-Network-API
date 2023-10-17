const { Schema, model, } = require('mongoose');

const userSchema = new Schema(
    {
    username: {type: String, unique: true, required: true, trim: true},
    email: {type: String, unique: true, required: true, 
    //borrowed from https://gist.github.com/rupeshtiwari/acf770bfc85f3fe1f62a80b461abfc13
    match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],},
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'thought'}],
    friends: [{ type: Schema.Types.ObjectId, ref: 'user'}]
},
{
    toJSON: {
        virtuals: true
    },
    id: false
}
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const user = model('user', userSchema);

module.exports = user;