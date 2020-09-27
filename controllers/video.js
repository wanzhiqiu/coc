module.exports={
    'GET /video/0': async(ctx,next)=>{
        ctx.render('play.html',{address:"/videos/0.mp4"}
        );
    },
    'GET /video/1': async(ctx,next)=>{
        ctx.render('play.html',{address:"/videos/1.mp4"}
        );
    }
};
