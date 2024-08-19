const testMiddleware = (req, res, next) => {
  // TODO some logic
  console.log('middleware test');

  next();
}

module.exports = testMiddleware;