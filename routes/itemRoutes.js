const express = require('express');
const router = express.Router();
const { getItem } = require('../controller/itemcontroller');

router.get("/", getItem);

module.exports = router;
