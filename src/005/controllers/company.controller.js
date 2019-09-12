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
    }
};