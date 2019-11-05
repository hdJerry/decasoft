const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
app = express();
// console.log(path.join(__dirname, '/dist'));
app.use(function(req, res, next) {
    res.setHeader("Content-Security-Policy", "img-src 'self' ");
    return next();
});
app.use(express.static(path.join(__dirname, 'dist')));
const port = process.env.PORT || 5000;
app.listen(port);

console.log("running here :" + port);
