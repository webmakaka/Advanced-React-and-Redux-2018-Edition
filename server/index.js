const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://user1:password1@ds155243.mlab.com:55243/advanced-react-and-redux-2018-edition', { useNewUrlParser: true });

const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

const port = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);