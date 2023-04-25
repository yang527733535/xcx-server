const Room = require('../db/models/room');

async function createRoom(ctx) {
    const room = await Room.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = room;
}

async function getRoomById(ctx) {
    const room = await Room.findById(ctx.params.id).exec();
    if (!room) {
        ctx.status = 404;
        ctx.body = { message: 'Room not found' };
        return;
    }
    ctx.body = room;
}

async function updateRoomById(ctx) {

    const room = await Room.findByIdAndUpdate(ctx.params.id, ctx.request.body, { new: true }).exec();
    if (!room) {
        ctx.status = 404;
        ctx.body = { message: 'Room not found' };
        return;
    }
    ctx.body = room;
}

async function deleteRoomById(ctx) {
    const room = await Room.findByIdAndDelete(ctx.params.id).exec();
    if (!room) {
        ctx.status = 404;
        ctx.body = { message: 'Room not found' };
        return;
    }
    ctx.body = { message: 'Room deleted successfully' };
}

module.exports = {
    createRoom,
    getRoomById,
    updateRoomById,
    deleteRoomById,
};
