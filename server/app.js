import express from 'express';
import morgan from 'morgan';
import users from './routes/users';

const app = new express();

//set request log middleware
app.use(morgan("dev"));

//set view engine
app.set('view engine', 'ejs');

app.use('/users', users);

app.get("/", function(req, res){
    res.json({teste:'teste'});
});

export default app;