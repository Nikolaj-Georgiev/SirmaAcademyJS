const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method} request: ${req.url}`);
  next();
}

module.exports = loggerMiddleware;