const Koa = require('koa');
const mongoose = require('mongoose');
const app = new Koa();
const WebSocket = require('ws');
const server = require('http').createServer(app.callback());
const wss = new WebSocket.Server({ server });
const bodyParser = require('koa-bodyparser');
const userRouter = require('./routers/user');
const roomRouter = require('./routers/room');
const config = require('config');
const mongoUrl = `mongodb://${config.get('database.username')}:${config.get('database.password')}@${config.get('database.host')}:27017/admin`;
mongoose.connect(mongoUrl);

app.use(bodyParser());
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());
app.use(roomRouter.routes());
app.use(roomRouter.allowedMethods());

// app.use(roomRouter.allowedMethods());
app.listen(3000, () => {
    console.log('服务启动了')
});


wss.on('connection', (ws) => {
    // 处理 WebSocket 连接
    // 收到客户端的消息
    ws.on('message', async (message) => {
        console.log(`Received message => ${message}`);
        // TODO:这里要拿到房间的信息和用户的id,去更新数据库
        // 回复客户端消息
        await ws.send(`Received your message => ${message}`);
    });
    // 断开连接
    ws.on('close', () => {
        console.log('WebSocket disconnected');
    });
});

server.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});