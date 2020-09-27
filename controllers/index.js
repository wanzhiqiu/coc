// index:

module.exports = {
    'GET /': async (ctx, next) => {
        let user = ctx.state.user;
        if (user) {
            ctx.render('video.html', {
                title: "视频"
            });
        } else {
            ctx.response.redirect('/signin');
        }
    }
};
