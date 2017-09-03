module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(404).send({ error: 'you must log in' });
  }
  next();
};
