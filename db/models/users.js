// db/models/user.js

const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    sex: { type: String, enum: ['男', '女'] },
    openId: { type: String, required: true, unique: true },
    avatarUrl: { type: String },
    city: { type: String },
    country: { type: String },
    province: { type: String },
    language: { type: String },
    phone: { type: String },
    totalNumber: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    roomHistory: { type: [String], default: [] },
});

module.exports = mongoose.model('User', UserSchema);
