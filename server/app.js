import express from 'express';
import morgan from 'morgan';
import api from './routes/api';


const app = new express();

//set request log middleware
app.use(morgan("dev"));


//set view engine
app.set('view engine', 'ejs');

app.use('/api', api);

export default app;