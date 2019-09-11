const Koa = require('koa');
// import koa-router
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const PORT = 4000;

// Create a root ('/') router with GET request & send 'Welcome to Koa' message to client.
router.get('/',ctx => {
    ctx.body = "Welcome to Koa";
})

// Create a GET request for '/superheors' endpoint and return all super heros name
const heros = [
    {
        "id" : 01,
        "name" : "Thor"
    },
    {
        "id" : 02,
        "name" : "Iron Man"
    },
    {
        "id" : 03,
        "name" : "Hulk"
    }
];

router.get('/superheros', ctx => {
    ctx.body = heros;
})
// register routes middleware to app
app.use(router.routes());

app.listen(PORT,function(){
    console.log(`Server is running on ${PORT}`);
});
