import express from 'express';
import cors from 'cors';
import {clientErrorHandler, customErrorHandler, errorHandler, joiError} from './middleware/error';
import expressWinston from 'express-winston';
import * as winston from 'winston';
import routers from './routers';
import {initPassport} from './utils/passport';

initPassport();

const app = express();
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

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: alignedWithColorsAndTime,
}));

routers.forEach(r => app.use(`${r.prefix}`, r.router));

app.use(joiError);
app.use(expressWinston.errorLogger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json(),
    ),
}));

export {
    app,
};
