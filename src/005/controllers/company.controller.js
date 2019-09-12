module.exports = {
    async create(ctx){
        try{
            // get db instance from context & post body from request.
          ctx.body = await ctx.db.Company.create({
                name:ctx.request.body.name,
                city:ctx.request.body.city,
                address: ctx.request.body.address
            })
        }catch (err) {
            ctx.throw(500,err);
        }
    },
    // find all companies
    async find(ctx){
        try{
            ctx.body = await ctx.db.Company.findAll({});
        }catch (err){
            ctx.throw(500,err);
        }
    },

    // find company by id

    async findOne(ctx){
        try{
            ctx.body = await ctx.db.Company.findOne({
                id: ctx.params.id
            })
        }catch (err){
            ctx.throw(err);
        }
    }
};