export default {
    database: {
        connection_string : 'mongodb://douglas:isabelle@ds057816.mlab.com:57816/controle-financeiro'
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
};