const express = require('express');
const router = express.Router();
const { getItem } = require('../controller/itemcontroller');

router.get("/items", getItem);

module.exports = router;
