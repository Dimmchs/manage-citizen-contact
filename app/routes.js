const express = require('express')

// Add your routes here - above the module.exports line

module.exports =()=> {
  const app = express.Router();
  app.post('/agent/v2/redirect', (req, res) => {

res.redirect(req.body.redirectUrl);
});
return app;
}
