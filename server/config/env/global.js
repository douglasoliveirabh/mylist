import prodconfig from './production';
import devconfig from './development';
import testconfig from './test';

const env = process.env.NODE_ENV || 'development';

const config = function(){    
    switch(env){
        case 'development':
            return devconfig;
        case 'production':
            return prodconfig;            
        case 'test':
            return testconfig;
    }
};

export default config();