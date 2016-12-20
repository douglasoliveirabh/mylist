import express from 'express';
import morgan from 'morgan';
import api from './routes/api';
import config from './config/env/global';


const app = new express();

//set request log middleware
app.use(morgan(config.logging.format, 
               config.logging.options));




//set view engine
app.set('view engine', 'ejs');

app.use('/api', api);

export default app;