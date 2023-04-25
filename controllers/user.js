const User = require('../db/models/users');

async function getUsers(ctx) {
    const users = await User.find();
    ctx.body = users;
}

async function getUserById(ctx) {
    const user = await User.findById(ctx.params.id);
    if (!user) {
        ctx.throw(404, 'User not found');

    }
    ctx.body = user;
}

async function createUser(ctx) {
    const user = await User.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = user;
}

async function updateUser(ctx) {
    console.log(' ctx.request.body', ctx.request.body)
    const user = await User.findByIdAndUpdate(ctx.params.id, ctx.request.body, {
        new: true,
        runValidators: true,
    });
    console.log('s', user)
    if (!user) {
        ctx.throw(404, 'User not found');
    }
    ctx.body = user;
}

async function deleteUser(ctx) {
    const user = await User.findByIdAndRemove(ctx.params.id);
    if (!user) {
        ctx.throw(404, 'User not found');
    }
    ctx.status = 204;
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
