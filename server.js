import app from './server/app';
import config from './server/config/env/global';

global.app = app;

app.listen(config.port, function(){
    console.log(`Application listening on port: ${config.port}`);
});