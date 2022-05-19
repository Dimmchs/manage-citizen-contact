const express = require('express')

// Add your routes here - above the module.exports line

module.exports =()=> {
  const app = express.Router();
  app.post('/agent/v1/redirect', (req, res) => {

res.redirect(req.body.redirectUrl);
});
return app;
}
