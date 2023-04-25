const Router = require('koa-router');
const user = require('../controllers/user');

const router = new Router({ prefix: '/users' });

router.get('/', user.getUsers);
router.get('/:id', user.getUserById);
router.post('/', user.createUser);
router.put('/:id', user.updateUser);
router.delete('/:id', user.deleteUser);

module.exports = router;
