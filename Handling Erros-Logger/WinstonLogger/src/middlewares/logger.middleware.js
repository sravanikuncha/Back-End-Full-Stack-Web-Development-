// Please don't change the pre-written code
// Import the necessary modules here
import winston from "winston";
// Write your code here

export const loggerMiddleware = async (req, res, next) => {
  // Write your code here
  const logger =winston.createLogger({
    level:'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      new winston.transports.File({ filename: 'combined.log', level: 'info' })
    ]
  });

  const logData=`${new Date().toUTCString()} \n req Url:${req.url} \n reqBody ${JSON.stringify(req.body)}`;

  logger.log({
    level: 'info',
    message: logData
  });

  next();
};
export default loggerMiddleware;
