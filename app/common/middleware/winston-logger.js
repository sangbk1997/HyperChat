var appRoot = require('app-root-path');
var winston = require('winston');

// define the custom settings for each transport (file, console)

// instantiate a new Winston Logger with the settings defined above
const alignedWithColorsAndTime = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf((info) => {
        const {
            timestamp, level, message, ...args
        } = info;

        const ts = timestamp.slice(0, 19).replace('T', ' ');
        return `${ts} [${level}]: ${message} ${Object.keys(args).length ? JSON.stringify(args, null, 2) : ''}`;
    }),
);


var options = {
    file: {
        level: 'info',
        format: alignedWithColorsAndTime,
        filename: `${appRoot}/logs/app.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: true,
    },
    console: {
        level: 'debug',
        format: alignedWithColorsAndTime,
        handleExceptions: true,
        json: false,
        colorize: true,
    },
};

var logger = new winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    colorize: true,
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console)
    ],
    exitOnError: false, // do not exit on handled exceptions
});

winston.info('This is a info statement');
winston.debug('This is a debug statement');
winston.debug('This is a warning statement');
winston.error('This is a error statement');

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
    write: function (message, encoding) {
        // use the 'info' log level so the output will be picked up by both transports (file and console)
        logger.info(message);
    },
};

module.exports = logger;
