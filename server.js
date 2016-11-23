import app from './server/app'

const port = 3000;

app.listen(port, function(){
    console.log(`Application listening on port: ${port}`);
});