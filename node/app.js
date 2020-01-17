const Koa = require('koa');
const router = require('./router/index');
const static = require('koa-static');
const app = new Koa();

var server = app.listen(4000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('http://%s:%s', host, port);
});

const main = static(__dirname + '/public');
app.use(main);
app.use(router.routes(), router.allowedMethods())

process.on('uncaughtException', function (err) {
    console.log(err);
})


app.listen(3000);