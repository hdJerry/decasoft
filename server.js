const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
app = express();
// console.log(__dirname);
app.use(serveStatic(path.join(__dirname, '/dist')));
const port = process.env.PORT || 5009;
app.listen(port);
