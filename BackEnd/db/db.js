const mysql=require('mysql');
const { userInfo } = require('os');
const mysqlConnection=mysql.createConnection({
host:'b5ogsdkqvxcahytv3m6y-mysql.services.clever-cloud.com',
user:'urpedxriamfnmfbg',
password:'NUpJ1ttXdZf1OmcMlW4g',
database:'b5ogsdkqvxcahytv3m6y',
multipleStamentes:true //permite establecer espacios para varios clientes
}
); //fin conexion
mysqlConnection.connect(function(err){
if(err){
     console.error(err);
    return;
}else{}
    console.log('Base de datos conectada')


})


module.exports = mysqlConnection;