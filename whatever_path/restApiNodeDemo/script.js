const express =require('express');
const mysql = require('mysql');
const app =express();

var connection =mysql.createConnection({
    //properties...
    host: 'localhost',
    user:'root',
    password:'',
    database:'shoppingMart'
});
connection.connect,(error)=>{
//callback
if(!!error){
    console.log('Error');
} else {
    console.log('connected');
}
};
//to route
app.get('/', (req,res)=>{
    //about mysql
    connection,query('select * from sampleDb',(error,rows,field)=>{
        if(!!error){
            console.log('Error in the query');
        } else {
            console.log('Successful query');
        }
    });
})
app.listen(3000);