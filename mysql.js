var mysql = require("mysql");

function signin(phone){
    var connection=mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'1234',
            port:'3306',
            database:'site'
        });
        
        connection.connect();
        let sql = `select * from users where phone = ${phone}`;
        return new Promise((resolve,reject)=>{
            connection.query(sql,function(err,result){
                if(err){
                    reject (err);
                }
                else{
                    resolve (result);
                }
                
            });
        }); 
        
}
function register(phone,password){
    var connection=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'1234',
        port:'3306',
        database:'site'
    });
    
    connection.connect();
    let sql = `insert into users (phone,password) values ('${phone}','${password}')`;
    return new Promise((resolve,reject)=>{
        connection.query(sql,function(err,result){
            if (err){
                reject (err);
            }
            else {
                resolve ('注册成功');
            }
            
        });
    }); 
}
module.exports={
    signin,
    register
};