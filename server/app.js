import express from 'express';
import morgan from 'morgan';
import api from './routes/api';
import config from './config/env/global';
import datasource from './config/datasource';

const app = new express();
app.config = config;
app.datasource = datasource(app);

//set request log middleware
app.use(morgan(config.logging.format, 
               config.logging.options));
               

/*
var user = new app.datasource.models.User({
    username : 'douglas',
    password : 'douglas',
    admin: true,
    created_date : Date.now()
})             

user.save(function(err, user){
    if(err)
        console.log("rolou um erro: " + err);
    
    console.log(user);
})
*/


//set view engine
app.set('view engine', 'ejs');
app.use('/api', api(app));


export default app;