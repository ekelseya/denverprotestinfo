const mongoose = require("mongoose");

const orgSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    contact: String,
    credible: Boolean,
    // comments: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Comment"
    //     }
    // ]
});

module.exports = mongoose.model("Organization", orgSchema);