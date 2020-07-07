const express = require('express');

const router = express.Router();

const { addSubscriber } = require('../../database/Controller/Subscriber.js');

router.post('/', addSubscriber);

module.exports = router;