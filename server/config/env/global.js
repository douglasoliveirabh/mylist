import prodconfig from './production';
import devconfig from './development';

const env = process.env.NODE_ENV || 'development';

const config = function(){
    switch(env){
        case 'development':
            return devconfig;
        case 'production':
            return prodconfig;            
        case 'test':
            break;
    }
};

export default config();