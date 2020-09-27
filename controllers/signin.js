// sign in:

const {signin,register} = require("../mysql");
var index=0;

module.exports = {
    'GET /signin': async(ctx,next)=>{
        ctx.render('signin.html',{title:"登录"});
},
    'GET /register': async(ctx,next)=>{
        ctx.render('register.html',{title:"注册"});
},
    'GET /user': async(ctx,next)=>{
        ctx.render('user.html',{title:"个人中心"});
},
    'POST /signin': async(ctx,next)=>{
    
        let phone= ctx.request.body.phone;
        let password=ctx.request.body.password;
        await signin(phone).then(result=>{
            if(result[0].password===password){
                console.log('登录成功');
                index++;
                let user={
                    id:index,
                    name:phone.substring(7),
                    image:index%10
                }
            let value = Buffer.from(JSON.stringify(user)).toString('base64');
            console.log(`Set cookie value: ${value}`);

            ctx.cookies.set('name', value);
            ctx.response.redirect('/');
            }
            else{
                console.log('密码错误');
                ctx.response.redirect('/signin');
            }
        }).catch(err=>{
            console.log('请先注册');
            ctx.response.redirect('/register');
        });
            

},
    'POST /register': async(ctx,next)=>{
        let phone=ctx.request.body.phone;
        let password=ctx.request.body.password;
        await register(phone,password).then(result=>{
            console.log(result);
            ctx.response.redirect('/signin');
        }).catch(err=>{
            console.log(err);
        });
},
    'GET /signout': async (ctx, next) => {
        ctx.cookies.set('name', '');
        ctx.response.redirect('/signin');
    }
};
