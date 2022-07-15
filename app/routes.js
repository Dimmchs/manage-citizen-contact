const express = require('express');

const redirect = (req, res) => {
  res.redirect(req.body.redirectUrl);
};
// Add your routes here - above the module.exports line
module.exports = () => {
  const app = express.Router();
  app.post('/agent/v1/redirect', redirect);
  app.post('/agent/v1-2/redirect', redirect);
  app.post('/agent/v2/redirect', redirect);
  return app;
};
