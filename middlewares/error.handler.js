const logErrors = (err, req, res, next) => {
  console.log('logErrors');
  console.error(err);
  next(err);
};

const errorHandler = (err, req, res, next) => {
  console.log('errorHandler');
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
};

module.exports = { logErrors, errorHandler };
