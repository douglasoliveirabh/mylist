export default {
    database: {
        options : {
            user: 'mylist',
            pass: 'mylist'
        },
        connectionstring : 'mongodb://ds139198.mlab.com:39198/mylist'
    },
    logging: {
        format: 'dev',
        options: {}
    },   
    mailer: {
        from : 'SENDER EMAIL ADDRESS',
        service: 'SERVICE_PROVIDER', // Gmail, SMTP
        auth: {
            user: 'EMAIL_ID',
            pass: 'PASSWORD'
        }
    },
    port: 3000,
    secret: '2388930a-8580-446f-bddd-770ee181e69c',
    jwt: {
        signin: {
            expiresIn: 1440 // expires in 24 hours
        }
    }
};