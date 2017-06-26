const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(parser.json());
app.use(morgan('dev'));

app.use('/', express.static('static'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('node listening on port', port);
});
