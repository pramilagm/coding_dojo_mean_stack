const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    quote: {
        type: String,
        required: true,
        minlength: 6
    }
}, {
    timestamps: true
});

const User = mongoose.model("User", UserSchema)