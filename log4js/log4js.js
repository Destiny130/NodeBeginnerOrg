var log4js = require('log4js');
log4js.configure({
    appenders: {
        everything: {
            type: 'file',
            filename: 'QuoteCleanup.log'
        }
    },
    categories: {
        default: {
            appenders: ['everything'],
            level: 'debug'
        }
    }
});

var loggerNormal1 = log4js.getLogger('normal1'),
    loggerNormal2 = log4js.getLogger('normal2');
loggerNormal1.debug('Time: ', new Date());
loggerNormal2.debug('Time: ', new Date());