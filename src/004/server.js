const Koa = require('koa');
// import koa-router
const Router = require('koa-router');
// import koa-parser
const bodyParser = require('koa-parser');
const app = new Koa();
const router = new Router();

// register bodyParser to application for POST request
app.use(bodyParser());
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
// Create POST request to add new heros to heros Array
router.post('/superheros', ctx => {
    console.log(ctx.request.body);
    let {id,name} = ctx.request.body;
    if(!id){
        ctx.throw('400','id is required field');
    }
    if(!name){
        ctx.throw('400','name is required field');
    }
    heros.push({id,name});
    ctx.body = heros;
})

// register routes middleware to app
app.use(router.routes());

app.listen(PORT,function(){
    console.log(`Server is running on ${PORT}`);
});
