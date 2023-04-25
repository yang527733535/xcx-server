const Router = require('koa-router');
const room = require('../controllers/room');

const router = new Router({ prefix: '/rooms' });


router.get('/:id', room.getRoomById);
router.post('/', room.createRoom);
router.put('/:id', room.updateRoomById);
router.delete('/:id', room.deleteRoomById);

module.exports = router;
