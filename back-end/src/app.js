const Koa = require('koa');
const bodyParser = require('koa-body');
const router = require('./router');
const cors = require('@koa/cors');
const { setupMongodb } = require('./database');
const vehiclesRouter = require('./vehicle/vehicle.routes');

const app = new Koa();

setupMongodb();
app.use(bodyParser());
app.use(cors())
app.use(router.routes());
app.use(vehiclesRouter.routes());

module.exports = app;
