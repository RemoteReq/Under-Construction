const express = require('express');
const cors = require('cors');

// middleware
const history = require('connect-history-api-fallback');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3030;

// import route handlers
const subscriber = require('./api/subscriber.js');

// use CORs
app.use(cors());

// User history to intecept client requests and forward to React Router history
app.use(history());

// express middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'));

app.use('/api/subscribers', subscriber);

app.get('/', (req, res) => {
  res.status(200).send();
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});