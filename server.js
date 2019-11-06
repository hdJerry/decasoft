const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
app = express();
// console.log(path.join(__dirname, '/dist'));
// app.use(function(req, res, next) {
//     res.setHeader("Content-Security-Policy", "img-src '*' https://manage-employees.herokuapp.com");
//     return next();
// });
app.use(express.static(path.join(__dirname, 'dist')));
const port = process.env.PORT || 8080;
app.listen(port);

console.log("running here :" + port);


app
  .get('*', (request, response, next) => {
      response.sendFile( path.join(__dirname, 'dist/index.html' ))
  })
