// Stub for error processing
module.exports = (err, req, res, next) => {
  const error = {
    message: err.message,
    status: err.status || 500,
    error: req.app.get('env') === 'development' ? err : {}
  };

  res.status(err.status || 500);
  res.json(error);
};