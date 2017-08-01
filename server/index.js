const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(parser.json());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../static')));

const port = 3000;

app.listen(port, () => {
  console.log('node listening on port', port);
});
