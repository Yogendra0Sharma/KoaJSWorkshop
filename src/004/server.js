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
        "id" : 1,
        "name" : "Thor"
    },
    {
        "id" : 2,
        "name" : "Iron Man"
    },
    {
        "id" : 3,
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

// GET hero by id => /superheros/:id
router.get('/superheros/:id', ctx => {
    // get id request param (request param always as string)
    let id = parseInt(ctx.params.id);  // if id in heros array is int than we have to convert req param to int.
    // find hero by id
    let hero = heros.find( heros => heros.id === id)
    // send response
    ctx.body = hero;
})

// register routes middleware to app
app.use(router.routes());

app.listen(PORT,function(){
    console.log(`Server is running on ${PORT}`);
});
