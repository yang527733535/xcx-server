const mongoose = require('mongoose');
const { Schema } = mongoose;

const recordSchema = new Schema({
    fromUser: {
        type: String,
        required: true,
    },
    toUser: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
    time: {
        type: Date,
        required: true,
    },
});

const playerSchema = new Schema({
    nickName: {
        type: String,
        required: true,
    },
    avatarUrl: {
        type: String,
        required: true,
    },
    openId: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
        default: 0,
    },
    isLeave: {
        type: Boolean,
        required: true,
        default: false,
    },
});

const roomSchema = new Schema({
    roomName: {
        type: String,
        required: true,
    },
    roomStatus: {
        type: Number,
        required: true, // 0 1
    },
    players: {
        type: [playerSchema],
        default: [],
    },
    records: {
        type: [recordSchema],
        default: [],
    },
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
