const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    title:  String,
    pics: [{ tile: String, url: String }],
    author: { username: String, user_id: Number },
    description:   String,
    comments: [{ body: String, date: Date, author: { username: String, user_id: Number}  }],
    date: { type: Date, default: Date.now },
    meta: {
      votes: Number
    }
});

module.exports = mongoose.model("Item", ItemSchema, "Items");